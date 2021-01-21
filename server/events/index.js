import logger from "../utils/logger";

function initIoEvents(io){
  // when user open the site (connect)
  io.on("connection", (socket) => { 
    logger.info("user connected");

    socket.on('disconnect', () => {
      logger.info('user disconnected')
    })
  });
}


export default initIoEvents
