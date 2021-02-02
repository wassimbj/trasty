import { io } from 'socket.io-client';
import constants from '../constants';

function initSocketIo(nsp, opts){
  const options = !opts ? {} : opts;
  
  const socketIo = io(`${constants.SERVER_URL}/${nsp}`, {
    transports: ['websocket'],
    withCredentials: true,
    ...options
  });

  return socketIo;
}


export default initSocketIo;
