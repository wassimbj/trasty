import db from '../../database/init';
import logger from '../../utils/logger';

async function getSingleDetails(slug){
  try{
    /*
      id, slug, product_img, product_unit_price,
      quantity, product_title, deliver_before,
      product_size, created_at, product_link, product_desc,
      deliver_to->'nice_display' as deliver_to,
      deliver_from->'nice_display' as deliver_from
    */
    const { rows: requestDetails } = await db.query(`
     SELECT
      requests.*, users.fullname as user_name, users.image as user_image
      FROM requests
      LEFT JOIN users ON users.id = requests.request_by 
      WHERE requests.slug = $1
    `, [slug]);
    // console.log('requestDetails: ', requestDetails);
    return requestDetails;
  }catch(err){
    logger.error(`Search Location Error: ${err}`);
  }

}

export default getSingleDetails;
