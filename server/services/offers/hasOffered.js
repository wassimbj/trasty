import db from '../../database/init';
import logger from '../../utils/logger';

async function hasOffered(user_id, request_id){
  try{
    const { rowCount } = await db.query(`SELECT id FROM offers WHERE offer_by = $1 AND offer_to = $2`, [user_id, request_id]);

    return rowCount > 0;
  }catch(err){
    logger.error(`Create Offer (service) Error: ${err}`);
    throw new Error('Create Offer Error');
  }

}

export default hasOffered;
