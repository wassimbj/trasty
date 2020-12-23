import db from '../../database/init';
import logger from '../../utils/logger';
import hasOffered from '../offers/hasOffered';

async function getSingleDetails(slug, user_id){
  try{
    const { rows: requestDetails, rowCount } = await db.query(`
     SELECT
      requests.*, users.id as user_id, users.fullname as user_name, users.image as user_image
      FROM requests
      LEFT JOIN users ON users.id = requests.request_by
      WHERE requests.slug = $1
    `, [slug]);
    // console.log('requestDetails: ', requestDetails);
    if(rowCount === 0){
      return [];
    }

    const alreadyOffered = await hasOffered(user_id, requestDetails[0].id);
    // requestDetails is an array with the details object
    requestDetails[0]['isMyRequest'] = !user_id ? false : requestDetails[0].request_by == user_id;
    requestDetails[0]['alreadyOffered'] = alreadyOffered;
    return requestDetails;
  }catch(err){
    logger.error(`Get Single Request (service) Error: ${err}`);
  }

}

export default getSingleDetails;
