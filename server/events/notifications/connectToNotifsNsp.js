// ? connect to notifications namespace

function connectToNotifsNameSpace(io){
  const nsp = io.of('/notifs');
  nsp.on('connection', (socket) => {
    //* on connection, join the user to his room, 
    //* user room is his id
    const loggedInUserId = socket.request.session.userid;
    socket.join(loggedInUserId);
    //  when we got a new notif send it to the right user.
    socket.on("send_notif", (data) => {
      //* notifType = notif | msg 
      const {notifTo, notifType} = data;
      nsp.to(notifTo).emit('new_notif', notifType);
    });

  });
} 

export default connectToNotifsNameSpace;
