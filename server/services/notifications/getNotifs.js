import db from '../../database/init';
// "--" is a comment in DBs
export default async function getNotifs(userId){
  try{
    const {rows} = await db.query(`
      SELECT notifs.created_at, notifs.notif_type, users.fullname, requests.product_title FROM notifs
        LEFT JOIN users ON users.id = COALESCE(
          CAST(notifs.new_offer->>'traveler_id' AS INTEGER),
          CAST(notifs.accepted_offer->>'requester_id' AS INTEGER)
        )
        LEFT JOIN requests ON requests.id = COALESCE(
          CAST(notifs.new_offer->>'request_id' AS INTEGER),
          CAST(notifs.accepted_offer->>'request_id' AS INTEGER)
        )
      WHERE user_id = $1
      ORDER BY notifs.created_at DESC
    `, [userId]);

     return rows;
  
  }catch(err){
    throw new Error(err);
  }

}
