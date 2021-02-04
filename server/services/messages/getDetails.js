import db from '../../database/init';

export default async function getDetails(roomId){
  try{
    const {rows} = await db.query(`
      SELECT
        requests.product_title, requests.slug, requests.deliver_to,
        offers.delivery_from, offers.delivery_date, offers.offer_reward, offers.notes,
        offers.offer_by
      FROM chat_rooms
        LEFT JOIN requests ON requests.id = chat_rooms.request_id
        LEFT JOIN offers ON offers.id = chat_rooms.offer_id
      WHERE chat_rooms.slug = $1
    `, [roomId]);

     return rows;
  
  }catch(err){
    throw new Error(err);
  }

}
