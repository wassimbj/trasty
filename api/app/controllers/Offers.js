import createRequest from '../../services/offers/createOffer';
import logger from '../../utils/logger';

class Offers {

  async create(req, res){
    try{
      const {
        requestId, deliveryDate, deliverFrom, deliveryReward, notes
      } = req.body;
      const user_id = req.session.userid;

      await createRequest(
        user_id,
        requestId,
        deliveryDate,
        deliverFrom,
        deliveryReward,
        notes
      );
      
      return res.status(200).json('success');
    }catch(err){
      logger.error(`Create Offer Error: ${err}`);
      return res.status(500).json('Oops');
    }
  }

}

export default new Offers();
