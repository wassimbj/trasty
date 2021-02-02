import socketIo from 'socket.io';
import constants from '../constants';
import authSocketConnection from '../middlewares/authSocketConnection';
import connectToMessagesNameSpace from '../events/messages/connectToMsgsNsp';
import connectToNotifsNameSpace from '../events/notifications/connectToNotifsNsp';
import logger from '../utils/logger';
import session from './session';

function initSocketIo(server){
  const io = socketIo(server, {
    cors: {
      origin: constants.ACCEPTED_ORIGINS,
      withCredentials: true,
    },
    transports: ["websocket"],
    serveClient: false,
  });

  // array of namespaces
  ['/', '/notifs', 'msgs'].map((nsp) => {
    io.of(`${nsp}`).use((socket, next) => {
      session()(socket.request, {}, next);
    });
    // stop unAuthenticated users from connecting
    io.of(`${nsp}`).use((socket, next) => authSocketConnection(socket.request.session.userid, next))
  });

  connectToMessagesNameSpace(io);

  connectToNotifsNameSpace(io);

  // io.on("connection", (socket) => {
  //   logger.info("user connected");
    //  ??????????????
    // socket.emit('msgg', 'HELLO FROM THE SERVER !!!!')
    // socket.join('CHAT_ROOM_ID'); // for chat
    // socket.join('USER_SPACE_ID')  // for notifications
    // io.to('some room').emit('some event'); // send to a room
    //  ??????????????
    // socket.on('disconnect', () => {
    //   logger.info('user disconnected')
    // })
  // });
}

export default initSocketIo
