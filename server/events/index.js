function initIoEvents(io){

  // when user open the site (connect)
  io.on('connection', (socket) => {
    socket.emit('greet', 'hello world');
    console.log("user connected \n", socket, socket.handshake.session)

    // Only authenticated users can send and listen to events
    // if (socket.handshake.session.userid) {
    // }
  })

}


export default initIoEvents
