import db from '../../database/init';

export default async function isRoomDatePassed(roomId){
  try{
   const {rows, rowCount} = await db.query(`
      SELECT offers.delivery_date FROM chat_rooms
         LEFT JOIN offers ON offers.id = chat_rooms.offer_id
      WHERE chat_rooms.slug = $1
   `, [roomId]);

   if(rowCount === 0){
      throw new Error('Not Found')
   }
   // offers.delivery_date format = YYYY/MM/DD
   const todayDate = `${new Date().getFullYear()}/${new Date().getMonth() + 1}/${new Date().getDate()}`
   if(rows[0].delivery_date >= todayDate){
      return true;
   }

   return false;

  }catch(err){
   throw new Error(err);
  }

}
