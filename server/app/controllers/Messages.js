import logger from '../../utils/logger';
import createMessage from '../../services/messages/createMessage'
import getUserChatRooms from '../../services/messages/getUserChatRooms'
import getMessages from '../../services/messages/getMessages';
import getDetails from '../../services/messages/getDetails';
import isRoomExist from '../../services/messages/isRoomExist';


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

      const roomExist = await isRoomExist(userId, roomId);
      if(roomExist){
        await createMessage(roomId, userId, msg, isSeen || false)
        return res.status(200).json('success')
      } else {
        return res.status(401).json('unauthorized')
      }

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
      if(!roomId){
        return res.status(400).json('Invalid');
      }
      const data = await getMessages(roomId)

      return res.status(200).json(data)
    }catch(err){
      logger.error(`Chat rooms ERROR: ${err}`)
      return res.status(500).json("ooops")
    }
  }

  // get discussion details, offer and product
  async details(req, res){
    try{
      const {roomId} = req.params;
      if(!roomId){
        return res.status(400).json('Invalid');
      }
      const data = await getDetails(roomId)
      return res.status(200).json(data)
    }catch(err){
      logger.error(err)
      return res.status(500).json("ooops")
    }
  }

  async roomExists(req, res){
    try{
      const userId = req.session.userid;
      const {roomId} = req.params;
      if(!roomId){
        return res.status(400).json('Invalid');
      }
      const data = await isRoomExist(userId, roomId)

      return res.status(200).json(data)
    }catch(err){
      logger.error(err)
      return res.status(500).json("ooops")
    }
  }

}

export default new Messages();
