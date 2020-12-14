import db from '../../database/init';
import logger from '../../utils/logger';

async function getRequests(offset, limit, filterFrom, filterTo){

  // const {from_country_id, from_state_id, from_city_id} = filterFrom;
  // const {to_country_id, to_state_id, to_city_id} = filterTo;

  try{

    // get countries
    const { rows: requestsFound } = await db.query(`
     SELECT
      slug, product_img, 
      quantity, product_title,
      deliver_to->>niceDisplay as deliver_to,
      deliver_from->>niceDisplay as deliver_from
     LIMIT $1, $2
    `, [`${offset}`, `${limit}`]);

    return requestsFound;
  }catch(err){
    logger.error(`Search Location Error: ${err}`);
  }

}

export default getRequests;
