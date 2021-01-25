// import socketIo from 'socket.io';
import constants from '../constants';
import initIoEvents from '../events';
import session from './session';

function initSocketIo(server){
  const io = require("socket.io")(server, {
    cors: {
      origin: constants.ACCEPTED_ORIGINS,
      withCredentials: true,
    },
    transports: ["websocket"],
    serveClient: false,
  });

  io.use((socket, next) => {
    // session()(socket.handshake, {}, next);
    session()(socket.request, {}, next);
  });

  // events
  initIoEvents(io);
}

export default initSocketIo
