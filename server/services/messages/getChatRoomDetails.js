import db from '../../database/init';

export default async function getChatRoomDetails(roomId){
  try{
    const { rows } = await db.query(`
      SELECT
         chat_rooms.is_locked, chat_rooms.is_success, offers.delivery_date as deadline
      FROM chat_rooms
        LEFT JOIN offers ON offers.id = chat_rooms.offer_id
      WHERE chat_rooms.slug = $1
    `, [roomId]);

     return rows[0];
  
  }catch(err){
    throw new Error(err);
  }

}
