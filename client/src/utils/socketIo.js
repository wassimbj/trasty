import io from 'socket.io-client';

const socketIo = io('ws://127.0.0.1:5000', {
  transports: ['websocket'],
  withCredentials: true,
});

export default socketIo;
