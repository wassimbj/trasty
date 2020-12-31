import db from '../../database/init';

export default async function getRequestOffers(requestId){
  try{    
    const { rows: offersFound } = await db.query(`
      SELECT
      offers.*, users.id as user_id, users.fullname as user_name, users.image as user_image
      FROM offers
      LEFT JOIN users ON users.id = offers.offer_by
      WHERE offers.offer_to = $1
    `, [requestId]);

    return offersFound;
  }catch(err){
    throw new Error(err);
  }

}
