import logger from '../../utils/logger';
import createMessage from '../../services/messages/createMessage'
import getUserChatRooms from '../../services/messages/getUserChatRooms'
import getMessages from '../../services/messages/getMessages';

class Messages {

  // Get chat rooms
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

  async create(req, res){
    try{
      const {roomId, msg, isSeen} = req.body;
      const userId = req.session.userid; // msgFrom
      if(!roomId || !msg){
        return res.status(400).json('Invalid params');
      }

      await createMessage(roomId, userId, msg, isSeen || false)

      return res.status(200).json('success')
    }catch(err){
      logger.error(`Chat rooms ERROR: ${err}`)
      return res.status(500).json("ooops")
    }
  }

  // get chat room messages
  async getAll(req, res){
    try{
      // const userId = req.session.userid;
      const {roomId} = req.params;
      const data = await getMessages(roomId)

      return res.status(200).json(data)
    }catch(err){
      logger.error(`Chat rooms ERROR: ${err}`)
      return res.status(500).json("ooops")
    }
  }


}

export default new Messages();
