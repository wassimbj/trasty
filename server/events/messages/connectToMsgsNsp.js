// ? connect to messages namespace
function connectToMessagesNameSpace(io){
  const nsp = io.of('/msgs');
  nsp.on('connection', (socket) => {
    const loggedInUserId = socket.request.session.userid;
    const roomId = socket.handshake.query.roomId;
    // join user to the chat room 
    socket.join(roomId);

    // new message is sent to the room
    socket.on('new_msg_sent', (data) => {
      const {roomId} = data;
      nsp.to(roomId).emit('new_msg', true);
    });
  });
} 

export default connectToMessagesNameSpace;
