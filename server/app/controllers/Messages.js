import logger from '../../utils/logger';
import getUserChatRooms from '../../services/messages/getUserChatRooms'

class Messages {

  async chatRooms(req, res){
    try{
      const userId = req.session.userid;
      const data = await getUserChatRooms(userId)

      return res.status(200).json(data)
    }catch(err){
      logger.error(`Chat rooms ERROR: ${err}`)
      return res.status(500).json("ooops")
    }
  }

}

export default new Messages();
