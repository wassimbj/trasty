import db from '../../database/init';

export default async function deleteChatRoom(roomId){
  try{
   await db.query(`
      DELETE FROM chat_rooms WHERE slug = $1
   `, [roomId]);
  }catch(err){
   throw new Error(err);
  }

}
