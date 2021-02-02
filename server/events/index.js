import logger from "../utils/logger";

function initIoEvents(io){
  // when user open the site (connect)
  io.on("connection", (socket) => { 
    logger.info("user connected");

    // socket.emit('msgg', 'HELLO FROM THE SERVER !!!!')
    // socket.join('CHAT_ROOM_ID'); // for chat
    // socket.join('USER_SPACE_ID')  // for notifications
    // io.to('some room').emit('some event'); // send to a room
    socket.on('disconnect', () => {
      logger.info('user disconnected')
    })
  });
}


export default initIoEvents
