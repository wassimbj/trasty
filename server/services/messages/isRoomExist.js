import db from '../../database/init';

export default async function isRoomExist(userId, roomId){
  try{
    const {rowCount} = await db.query(`
      SELECT id FROM chat_rooms WHERE slug = $1 AND (traveler_id = $2 OR requester_id = $2)
    `, [roomId, userId]);

     return rowCount > 0;
  
  }catch(err){
    throw new Error(err);
  }

}
