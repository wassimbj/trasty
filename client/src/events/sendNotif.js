import initSocketIo from '../utils/socketIo';

//                                  int  ,  string
export default function sendNotif(notifTo, notifType){
  const notifSocketIo = initSocketIo('notifs');
  notifSocketIo.emit('send_notif', {
    notifTo, notifType
  });
}
