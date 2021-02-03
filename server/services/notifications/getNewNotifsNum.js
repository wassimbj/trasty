import db from '../../database/init';

export default async function getNewNotifsNum(userId){
  try{
    const {rowCount} = await db.query(`
      SELECT id FROM notifs WHERE is_seen = false AND user_id = $1
    `, [userId]);

     return rowCount;
  
  }catch(err){
    throw new Error(err);
  }

}
