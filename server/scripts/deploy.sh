#!/bin/bash

service_name=app_server
nginx_container_name=trasty_nginx
env=$1 # prod | dev
if [[ -z $env ]]; then
  env="dev"
fi
project_name="trasty"
docker_file_path="../docker/$env/compose.yml"



echo "running in $env mode"

reload_nginx() {
  docker exec $nginx_container_name /usr/sbin/nginx -s reload
}

# server health check
server_status() {
  # $1 = first func arg
  local port=$1
  local status=$(curl -is --connect-timeout 5 --show-error http://localhost:$port | head -n 1 | cut -d " " -f2)

  # if status is not a status code (123), means we got an error not an http header
  # this could be a timeout message, connection refused error msg, and so on...
  if [[ $(echo ${#status}) != 3 ]]; then
    echo "503"
  fi

  echo $status
}

deploy_server() {
  local old_container_id=$(docker ps -f name=$service_name -q | tail -n1)
  echo "old_container_id: $old_container_id"

  # if server doesn't exist start one
  if [[ -z $old_container_id ]]; then
    docker-compose -f $docker_file_path -p $project_name up --build --no-deps -d $service_name
    reload_nginx
    echo "DONE !"
    exit
  fi

  # create a new instance of the server
  docker-compose -f $docker_file_path -p $project_name up --no-deps -d --build --scale $service_name=2 --no-recreate $service_name

  # if something went wrong in one of the command above, exit
  if [ $? -ne 0 ]; then
    echo "Failed while creating a new instance ! (code: $?)"
    exit
  fi

  local new_container_id=$(docker ps -f name=$service_name -q | head -n1)

  if [[ -z $new_container_id ]]; then
    echo "ID NOT FOUND, QUIT !"
    exit
  fi
  local new_container_port=$(docker port $new_container_id | cut -d " " -f3 | cut -d ":" -f2)

  if [[ -z $new_container_port ]]; then
    echo "PORT NOT FOUND, QUIT !"
    exit
  fi

  # sleep until server is up
  while [[ $(server_status $new_container_port) > "499" ]]; do
    echo "New instance is getting ready..."
    sleep 10
  done

  # ---- server is up ---

  # reload nginx, so it can recognize the new instance
  reload_nginx

  # remove old instance 
  docker kill -s SIGTERM $old_container_id
  docker rm -f $old_container_id

  docker-compose -f $docker_file_path -p $project_name up -d --no-deps --scale $service_name=1 --no-recreate $service_name

  # reload ngnix, so it stops routing requests to the old instance
  reload_nginx

  echo "DONE !"
}

# call func
deploy_server
