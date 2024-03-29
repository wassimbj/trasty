import db from '../../database/init';

async function createOffer(
  offer_by,
  request_id,
  delivery_date,
  delivery_from,
  offer_reward,
  notes,
){
  try{
    
    await db.query(`
      INSERT INTO offers(
        offer_by,
        offer_to,
        delivery_date,
        delivery_from,
        offer_reward,
        notes
      ) 
      VALUES($1,$2,$3,$4,$5,$6)
    `, [
      offer_by,
      request_id,
      delivery_date,
      delivery_from,
      offer_reward,
      notes,
    ]);
  }catch(err){
    throw new Error(err);
  }

}

export default createOffer;
