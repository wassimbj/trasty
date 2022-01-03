
# Server
up: 
	docker-compose -p trasty -f ./server/docker/dev/compose.yml up $(args)

test_api: 
	cd server && npm run test

# Client
client_up: 
	@cd client && npm start 

deploy_server:
	@cd server && git add . && git commit -m "$(msg)" && git push heroku master
