import socketIo from 'socket.io';
import constants from '../constants';
import authSocketConnection from '../middlewares/authSocketConnection';
import connectToMessagesNameSpace from './messages/connectToMsgsNsp';
import connectToNotifsNameSpace from './notifications/connectToNotifsNsp';
import session from '../config/session';

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
}

export default initSocketIo
