import db from '../../database/init';

/*
  newOffer = {
    traveler_id,
    request_id
  }

  acceptedOffer = {
    requester_id,
    request_id
  }
*/
export default async function createNotif( notifTo, newOffer, acceptedOffer ){
  try{
    const notifType = !newOffer ? 'accepted_offer' : 'new_offer';
    await db.query(`
      INSERT INTO
        notifs(new_offer, accepted_offer, user_id, notif_type)
      VALUES($1,$2,$3,$4)
    `, [newOffer, acceptedOffer, notifTo, notifType]);
  
  }catch(err){
    throw new Error(err);
  }
}
