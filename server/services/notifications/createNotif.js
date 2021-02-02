import db from '../../database/init';

/*
  newOffer = {
    traveler_id,
    request_id
  }

  acceptedOffer = {
    requester_id,
    chat_room_id
  }
*/
export default async function createNotif( newOffer, acceptedOffer, userid ){
  try{
    await db.query(`
      INSERT INTO
        notifs(new_offer, accepted_offer, user_id, is_seen)
      VALUES($1,$2,$3,$4)
    `, [newOffer, acceptedOffer, userid, false]);
  
  }catch(err){
    throw new Error(err);
  }
}
