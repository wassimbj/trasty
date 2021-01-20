// import socketIo from 'socket.io';
import socketSess from 'socket.io-express-session';
import constants from '../constants';
import initIoEvents from '../events';
import session from './session';

function initSocketIo(server){
  const io = require('socket.io')(server, {
    cors: {
      origin: constants.ACCEPTED_ORIGINS,
      withCredentials: true
    },
    transports: ['websocket']
  });
  
  io.on("connection", (socket) => {
    console.log(`connect ${socket.id}`);

    socket.on("disconnect", () => {
      console.log(`disconnect ${socket.id}`);
    });
  });
  // io.use('transports', ['websocket']);

  // initIoEvents(io)

  // use the socket session
  io.use(socketSess(session))
}

export default initSocketIo
