import createOffer from '../../services/offers/createOffer';
import deleteOffer from '../../services/offers/deleteOffer';
import getRequestOffers from '../../services/offers/getRequestOffers';
import logger from '../../utils/logger';

class Offers {

  async create(req, res){
    try{
      const {
        requestId, deliveryDate, deliverFrom, deliveryReward, notes
      } = req.body;
      const user_id = req.session.userid;

      await createOffer(
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

  async delete(req, res){
    try{
      const { offerId, requestBy, offerBy } = req.body;
      const user_id = req.session.userid;
      // if i get no requestId or no offerId or i get them both
      // if i get requestBy only, i know its the user who got the offer wants to delete the offer
      // if i get offerBy only, i knw its the user who offered want to delete his offer
      if((!requestBy && !offerBy) || (requestBy && offerBy)){
        return res.status(401).json('Not Allowed');
      }
      // if requestBy (the user who got the offer) is !== to the logged in user
      if(requestBy && (requestBy !== user_id)){
        return res.status(401).json('Not Allowed');
      }
      // if offerId (the offerer) is !== to the logged in user
      if(offerBy && (offerBy !== user_id)){
        return res.status(401).json('Not Allowed');
      }

      // else perform the deletion
      await deleteOffer(offerId);
      
      return res.status(200).json('success');
    }catch(err){
      logger.error(`Delete Offer Error: ${err}`);
      return res.status(500).json('Oops');
    }
  }

  async requestOffers(req, res){
    try{
      const {request_id} = req.params;
      const userId = req.session.userid;

      const data = await getRequestOffers(userId, request_id);

      return res.status(200).json(data);
    }catch(err){
      logger.error(`Request Offers ERROR: ${err}`);
      return res.status(500).json('Error');
    }
  }
}

export default new Offers();
