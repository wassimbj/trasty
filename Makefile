# --------------- server cmds ---------------
watch_server: 
	@cd api/docker && docker-compose -f docker-compose-dev.yml build trusti_node_server && docker-compose -f docker-compose-dev.yml up

run_server: 
	@cd api/docker && docker-compose -f docker-compose-dev.yml up

rebuild_server: 
	@cd api/docker && docker-compose -f docker-compose-dev.yml up --build

stop_server: 
	docker stop trusti_db trusti_redis trusti_server

# --------------- ui cmds ---------------
run_client: 
	@cd client && npm start 


# ------------------- Deploy server -------------------
# deploy_server: 
# 	@cd server && docker build -t wassimbj/trusti:latest .
# 	docker push wassimbj/trusti:latest
# 	ssh root@94.237.101.14 "docker pull wassimbj/trusti:latest && docker tag wassimbj/trusti:latest dokku/trusti-api:latest && dokku tags:deploy trusti-api latest"


# ------------------ server database ------------------
# get_into_server: 
# 	ssh root@94.237.101.14 "dokku mysql:export trustidb > trusti_prod_db.sql"
# 	@exit

# backup_prod_db: get_into_server
# 	scp root@94.237.101.14:./trusti_prod_db.sql ./

# ------------------ apps (android & ios) ------------------
# run_android: 
# 	@cd trustiapp && npx react-native run-android
