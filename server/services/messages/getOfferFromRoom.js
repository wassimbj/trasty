import db from '../../database/init';

export default async function getOfferFromRoom(roomId){
  try{
   const {rows, rowCount} = await db.query(`
      SELECT offer_id FROM chat_rooms WHERE slug = $1
   `, [roomId]);

   if(rowCount === 0){
      return 0;
   }

   return rows[0].offer_id;

  }catch(err){
   throw new Error(err);
  }

}
