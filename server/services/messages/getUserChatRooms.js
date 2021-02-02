import db from '../../database/init';

export default async function getUserChatRooms(userId){
  try{
    const {rows} = await db.query(`
      SELECT chat_rooms.slug, chat_rooms.is_locked, chat_rooms.is_success,
      chat_rooms.traveler_id, chat_rooms.requester_id,
      traveler.fullname as traveler_name, traveler.image as traveler_img,
      requester.fullname as requester_name, requester.image as requester_img
      FROM chat_rooms
        LEFT JOIN users traveler ON traveler.id = chat_rooms.traveler_id
        LEFT JOIN users requester ON requester.id = chat_rooms.requester_id
      WHERE chat_rooms.traveler_id = $1 OR chat_rooms.requester_id = $1
    `, [userId]);

     return rows;
  
  }catch(err){
    throw new Error('get chat rooms Error: '+err);
  }

}
