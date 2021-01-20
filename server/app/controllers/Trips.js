import createTrip from '../../services/trips/createTrip';
import logger from '../../utils/logger';
import {nanoid} from 'nanoid';

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

}

export default new Trips();
