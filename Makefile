
# Server
up: 
	docker-compose -p trasty -f ./server/docker/dev/compose.yml up

test_api: 
	cd server && npm run test

# Client
client_up: 
	@cd client && npm start 
