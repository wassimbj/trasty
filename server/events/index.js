import logger from "../utils/logger";

function initIoEvents(io){
  // when user open the site (connect)
  io.on("connection", (socket) => { 
    logger.info("NEW user connected \n\n");
  });
}


export default initIoEvents
