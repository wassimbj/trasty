// ? connect to notifications namespace
function connectToNotifsNameSpace(io){
  io.of('/notifs').on('connection', (socket) => {
    // const newNamespace = socket.nsp; // newNamespace.name === '/dynamic-101'
      // console.log('Notifs NSP: ', socket.request.session)
    // broadcast to all clients in the given sub-namespace
    // newNamespace.emit('hello');
  });
} 

export default connectToNotifsNameSpace;
