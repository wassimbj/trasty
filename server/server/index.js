require('dotenv').config();
import http from 'http';
import app from '../app.js'; // The app.js
import constants from '../constants';
import logger from '../utils/logger.js';

app.set('port', parseInt(constants.PORT, 10));

const server = http.createServer(app);

server.listen(constants.PORT, () => {
   logger.info(`Server is running on port ${constants.PORT}, In ${constants.NODE_ENV} Mode`)
});

