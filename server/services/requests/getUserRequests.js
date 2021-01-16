import db from '../../database/init';
import logger from '../../utils/logger';

async function getUserRequests(userid, limit, offset){
  try{
    const { rows: requestsFound } = await db.query(`
     SELECT
      id, slug, product_img, product_unit_price, request_by,
      quantity, product_title, deliver_before,
      deliver_to->'nice_display' as deliver_to,
      deliver_from->'nice_display' as deliver_from
      FROM requests
      WHERE request_by = $1
      LIMIT $2 OFFSET $3
    `, [userid, limit, offset]);
    // console.log(rowCount);
    // console.log('All Requests: ', requestsFound);
    return requestsFound;
  }catch(err){
    logger.error(`Get User Requests Error: ${err}`);
  }

}

export default getUserRequests;
