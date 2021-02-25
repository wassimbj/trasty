import db from '../../database/init';

export default async function isRoomExist(myUserId, chatWithUserId, roomId){
  try{
    const {rowCount, rows} = await db.query(`
      SELECT traveler_id, requester_id FROM chat_rooms WHERE  slug = $1
    `, [roomId]);
    
    // console.log('ROWS: ', rowCount, rows)
    if(rowCount === 0){
      return false;
    }
    const room = rows[0];
    if(
      (room.traveler_id === myUserId || room.requester_id === chatWithUserId)
      ||
      (room.traveler_id === chatWithUserId || room.requester_id === myUserId)
    ) {
      return true;
    } 
    // else
    return false;
  
  }catch(err){
    throw new Error(err);
  }

}
