import db from '../../database/init';
import logger from '../../utils/logger';

async function getBadge(userid){
  try{
    const { rows: reviewAvg } = await db.query(`
     SELECT
      avg(stars) as average
      FROM reviews
      WHERE review_to = $1
    `, [userid]);
    // console.log('requestDetails: ', requestDetails);
    console.log('getBadge: ', reviewAvg)
    return reviewAvg[0];
  }catch(err){
    logger.error(`Get Review Badge Error: ${err}`);
  }
}

export default getBadge;
