import db from '../../database/init';

export default async function setNotifsAsSeen(userId){
  try{
    await db.query(`
      UPDATE notifs SET is_seen = true WHERE user_id = $1
    `, [userId]);
  }catch(err){
    throw new Error(err);
  }
}
