import { io } from 'socket.io-client';
import constants from '../constants';

const socketIo = io('http://localhost:5000', { transports: ['websocket'] });

export default socketIo;
