require('dotenv').config();
const http = require('http');
const app = require('../app.js'); // The app.js
const colors = require('colors/safe');
const constants = require('../config/constants.js');

app.set('port', parseInt(constants.PORT, 10));

const server = http.createServer(app);

server.listen(constants.PORT, () => {
   console.log(colors.green('Server is running'), `on port ${port}, In ${constants.NODE_ENV} Mode`)
});

