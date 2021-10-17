up: 
	docker-compose -p trasty -f ./server/docker/dev/compose.yml up

# --------------- ui cmds ---------------
client_up: 
	@cd client && npm start 
