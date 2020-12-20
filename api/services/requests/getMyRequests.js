import db from '../../database/init';
import logger from '../../utils/logger';

export default async function getMyRequests(userid, limit, offset){
  try{
    const { rows: requestsFound } = await db.query(`
     SELECT
      id, product_img, product_title, deliver_before,
      deliver_to->'nice_display' as deliver_to,
      deliver_from->'nice_display' as deliver_from
      FROM requests
      WHERE request_by = $1
      ORDER BY created_at DESC
      LIMIT $2 OFFSET $3
    `, [userid, limit, offset]);
    // console.log(rowCount);
    // console.log('All Requests: ', requestsFound);
    return requestsFound;
  }catch(err){
    logger.error(`Get My Requests (service) Error: ${err}`);
  }

}
