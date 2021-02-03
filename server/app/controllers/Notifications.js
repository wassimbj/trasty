import logger from '../../utils/logger';
import getNotifs from '../../services/notifications/getNotifs';
import getNewNotifsNum from '../../services/notifications/getNewNotifsNum';
import setNotifsAsSeen from '../../services/notifications/setNotifsAsSeen';

class Notifications {

  // get user notifications
  async getAll(req, res){
    try{
      const userId = req.session.userid;
      const data = await getNotifs(userId)
      await setNotifsAsSeen(userId);
      return res.status(200).json(data)
    }catch(err){
      logger.error(`Get notifs ERROR: ${err}`)
      return res.status(500).json("ooops")
    }
  }

  async newNotifsNum(req, res){
    try{
      const userId = req.session.userid;
      const data = await getNewNotifsNum(userId)

      return res.status(200).json(data)
    }catch(err){
      logger.error(err)
      return res.status(500).json("ooops")
    }
  }
}

export default new Notifications();
