import db from '../../database/init';

export default async function getMessages(roomId){
  try{
    const {rows} = await db.query(`
      SELECT messages.*, users.image FROM messages
        LEFT JOIN users ON users.id = messages.msg_from
      WHERE room_id = $1
    `, [roomId]);

     return rows;
  
  }catch(err){
    throw new Error('get chat rooms Error: '+err);
  }

}
