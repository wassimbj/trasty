import db from '../../database/init';
import logger from '../../utils/logger';

async function getProfileDetails(userid){
  try{
    const { rows: userDetails } = await db.query(`
     SELECT
      id, fullname, image, joined_at,
      is_email_verified, is_phone_verified
      FROM users
      WHERE id = $1
    `, [userid]);
    // console.log('requestDetails: ', requestDetails);
    return userDetails;
  }catch(err){
    logger.error(`User Profile Details Error: ${err}`);
  }
}

export default getProfileDetails;
