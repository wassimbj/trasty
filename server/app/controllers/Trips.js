import createTrip from '../../services/trips/createTrip';
import logger from '../../utils/logger';
import {nanoid} from 'nanoid';
import getUserTrips from '../../services/trips/getUserTrips';
import deleteTrip from '../../services/trips/deleteTrip';

class Trips {

  async create(req, res){
    try{
      const userId = req.session.userid;
      const {from, to, travelDate, backDate, tripType} = req.body;
      // console.log(req.body);
      await createTrip(userId, nanoid(20), from, to, tripType, travelDate, backDate);

      return res.status(200).json('success')
    }catch(err){
      logger.error(`Create trip ERROR: ${err}`)
      return res.status(500).json("ooops")
    }
  }

  async userTrips(req, res){
    try{
      const {userid} = req.params;
      const {limit, offset} = req.query;
      const data = await getUserTrips(userid, limit, offset);

      return res.status(200).json(data);
    }catch(err){
      logger.error(`get user trips ERROR: ${err}`)
      return res.status(500).json("ooops")
    }
  }

  async delete(req, res){
    try{
      const {tripid} = req.params;
      const {userid} = req.session;
      await deleteTrip(userid, tripid);

      return res.status(200).json('success');
    }catch(err){
      logger.error(`delete trip ERROR: ${err}`)
      return res.status(500).json("ooops")
    }
  }

}

export default new Trips();
