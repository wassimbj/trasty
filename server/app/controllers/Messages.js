import logger from '../../utils/logger';
import createMessage from '../../services/messages/createMessage'
import getUserChatRooms from '../../services/messages/getUserChatRooms'
import getMessages from '../../services/messages/getMessages';
import isRoomExist from '../../services/messages/isRoomExist';
import deleteChatRoom from '../../services/messages/deleteChatRoom';
import isRoomDatePassed from '../../services/messages/isRoomDatePassed';
import getOfferFromRoom from '../../services/messages/getOfferFromRoom';
import deleteOffer from '../../services/offers/deleteOffer';
import getRequestDetails from '../../services/messages/getRequestDetails';
import getChatRoomDetails from '../../services/messages/getChatRoomDetails';


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
      const {roomId, msg, isSeen, userChattingWithId} = req.body;
      const userId = req.session.userid; // msgFrom
      if(!roomId || !msg){
        return res.status(400).json('Invalid params');
      }

      const roomExist = await isRoomExist(userId, userChattingWithId, roomId);
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
      const data = await getRequestDetails(roomId)
      return res.status(200).json(data)
    }catch(err){
      logger.error(err)
      return res.status(500).json("ooops")
    }
  }

  async roomExists(req, res){
    try{
      const myUserId = req.session.userid;
      const {roomId} = req.params;
      const {chatWithUserId} = req.query;
      if(!roomId || !chatWithUserId){
        return res.status(400).json('Invalid');
      }
      
      if(chatWithUserId === myUserId){
        return res.status(200).json(false);
      }
      
      const data = await isRoomExist(myUserId, chatWithUserId, roomId)
      
      return res.status(200).json(data)
    }catch(err){
      logger.error(err)
      return res.status(500).json("ooops")
    }
  }

  async roomDetails(req, res){
    try{
      const {roomId} = req.params;
      if(!roomId){
        return res.status(400).json('Invalid params');
      }
      
      const data = await getChatRoomDetails(roomId)
      
      return res.status(200).json(data)
    }catch(err){
      logger.error(err)
      return res.status(500).json("ooops")
    }
  }

  // delete chat room
  async delete(req, res){
    try{
      const {roomId, chatWithUserId} = req.body;
      const myId = req.session.userid;
      if(!roomId){
        return res.status(400).json('Invalid');
      }
      const roomExist = await isRoomExist(myId, chatWithUserId, roomId);
      const roomDatePassed = await isRoomDatePassed(roomId);
      if(roomExist && !roomDatePassed){
        const offerId = await getOfferFromRoom(roomId);
        await deleteOffer(offerId);
        await deleteChatRoom(roomId);
        return res.status(200).json('OK')
      } else {
        return res.status(404).json('Room Not Found');
      }
    }catch(err){
      logger.error(err)
      return res.status(500).json("ooops")
    }
  }
}

export default new Messages();
