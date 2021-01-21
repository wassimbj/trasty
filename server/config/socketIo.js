// import socketIo from 'socket.io';
import constants from '../constants';
import initIoEvents from '../events';
// import logger from '../utils/logger';
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
  // console.log("Hay hay 155 \n")

  io.use((socket, next) => {
    // session()(socket.handshake, {}, next);
    session()(socket.request, {}, next);
  });

  // events
  initIoEvents(io);

  // io.use((socket, next) => {
  //   // session()(socket.handshake, {}, next);
  //   console.log('==> ', socket.handshake, '\n');
  //   session()(socket.handshake, {}, next);
  // });

  // io.on("connection", (socket) => { 
  //   logger.info("NEW user connected \n\n");
  //   // logger.info('Socket Session: ', socket.request.session.cookie.data)
  //   logger.info(`Socket Session: ${socket.handshake.session} \n`)
  //   // socket.emit('blabla', 'this is a test');
  //   // Only authenticated users can send and listen to events
  //   // if (socket.handshake.session.userid) {
  //   // }
  // });
}

export default initSocketIo
