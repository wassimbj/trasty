import db from '../../database/init';

export default async function getRequestOffers(userId, requestId){
  try{    
    const { rows: offersFound } = await db.query(`
      SELECT
      offers.*,
      users.id as user_id, users.fullname as user_name, users.image as user_image
      FROM users
        LEFT JOIN users ON users.id = requests.request_by
      WHERE offers.offer_to = $1 AND users.id = $2
    `, [requestId, userId]);

    return offersFound;
  }catch(err){
    throw new Error(err);
  }

}
