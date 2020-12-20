import db from '../../database/init';
import logger from '../../utils/logger';

async function deleteOffer(user_id, request_id){
  try{
    await db.query(`DELETE FROM offers WHERE offer_by = $1 AND offer_to = $2`, [user_id, request_id]);
  }catch(err){
    logger.error(`Delete Offer (service) Error: ${err}`);
    throw new Error('Delete Offer Error');
  }

}

export default deleteOffer;
