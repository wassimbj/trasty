import db from "../../database/init";
/* 
  if chat room time is up => is_locked = true
  if 
*/

export default async function deleteChatRoom(roomId) {
  try {
    await db.query(
      `
      DELETE FROM chat_rooms WHERE slug = $1
      -- UPDATE chat_rooms SET 
   `,
      [roomId]
    );
  } catch (err) {
    throw new Error(err);
  }
}
