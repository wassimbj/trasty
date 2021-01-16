import db from '../../database/init';
import {nanoid} from "nanoid"

async function createMessageRoom(offerId, requestId, travelerId, requesterId){
  try{
    await db.query(`
      INSERT INTO
        chat_rooms(slug, is_locked, is_success, request_id, offer_id, traveler_id, requester_id)
        VALUES($1,$2,$3,$4,$5,$6,$7)
    `, [nanoid(30), false, false, offerId, requestId, travelerId, requesterId]);
  }catch(err){
    throw new Error('create room error');
  }

}

export default createMessageRoom;
