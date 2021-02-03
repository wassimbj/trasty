import initSocketIo from '../utils/socketIo';

export default function getNewNotif(cb){
  const notifSocketIo = initSocketIo('notifs');
  notifSocketIo.on('new_notif', cb);
}
