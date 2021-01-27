import db from '../../database/init';

export default async function createMessageRoom(roomId, msgFrom, msg, isSeen){
  try{
    await db.query(`
      INSERT INTO
        messages(room_id, msg_from, msg, is_seen)
      VALUES($1,$2,$3,$4)
    `, [`${roomId}`, msgFrom, msg, isSeen]);
  
  }catch(err){
    throw new Error(err);
  }

}
