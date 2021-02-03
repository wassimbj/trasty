require('dotenv').config();
import http from 'http';
import app from '../app';
import constants from '../constants';
import logger from '../utils/logger.js';
import initSocketIo from '../events/socketIo';
// app.set('socketio', io);

const server = http.Server(app);

initSocketIo(server)

server.listen(constants.PORT, () => {
  logger.info(`Server is running on port ${constants.PORT}, In ${constants.NODE_ENV} Mode`)
});

