import db from '../../database/init';
import logger from '../../utils/logger';

async function getRequests(offset, limit, filterFrom, filterTo){
  try{
    // let fromConditon = '';
    // let toConditon = '';
    // if(Object.keys(filterFrom).length > 0){
    //   const {from_country_id, from_state_id, from_city_id} = filterFrom;
    //   fromConditon = toConditon ? ' AND ' : '';
    //   fromConditon += Number(from_country_id) ? `deliver_from->'country_id' = ${from_country_id}` : '';
    //   fromConditon += Number(from_state_id) ? `deliver_from->'state_id' = ${from_state_id}` : '';
    //   fromConditon += Number(from_city_id) ? `deliver_from->'city_id' = ${from_city_id}` : '';
    // }else if (Object.keys(filterTo).length > 0){
    //   const {to_country_id, to_state_id, to_city_id} = filterTo;
    //   toConditon = fromConditon ? ' AND ' : ' WHERE ';
    //   toConditon += Number(to_country_id) ? `deliver_to->'country_id' = ${to_country_id}` : '';
    //   toConditon += Number(to_state_id) ? `deliver_to->'state_id' = ${from_state_id}` : '';
    //   toConditon += Number(to_city_id) ? `deliver_to->'city_id' = ${to_city_id}` : '';
    // }else{
    //   fromConditon = '';
    //   toConditon = '';
    // }
    // ${fromConditon}${toConditon}

    // console.log('filterFrom: ', filterFrom, fromConditon, console.log(Object.keys(JSON.parse(filterFrom)).length > 0));
    // console.log('filterTo: ', filterTo, toConditon, console.log(Object.keys(JSON.parse(filterTo)).length > 0));
    // get countries
    const { rows: requestsFound } = await db.query(`
     SELECT
      slug, product_img, product_unit_price,
      quantity, product_title, deliver_before,
      deliver_to->'nice_display' as deliver_to,
      deliver_from->'nice_display' as deliver_from
      FROM requests
      LIMIT $1 OFFSET $2
    `, [limit, offset]);
    // console.log('All Requests: ', requestsFound);
    return requestsFound;
  }catch(err){
    logger.error(`Search Location Error: ${err}`);
  }

}

export default getRequests;
