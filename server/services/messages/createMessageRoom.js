import db from '../../database/init';

async function createMessageRoom(chatRoomId, offerId, requestId, travelerId, requesterId){
  try{
    // let chatRoomId = nanoid(30);
    await db.query(`
      INSERT INTO
        chat_rooms(slug, is_locked, is_success, request_id, offer_id, traveler_id, requester_id)
        VALUES($1,$2,$3,$4,$5,$6,$7)
    `, [`${chatRoomId}`, false, false, requestId, offerId, travelerId, requesterId]);
  
  }catch(err){
    throw new Error('create room error'+err);
  }

}

export default createMessageRoom;
