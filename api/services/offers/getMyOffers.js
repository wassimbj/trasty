import db from '../../database/init';

export default async function getMyOffers(userid){
  try{    
    const { rows: offersFound } = await db.query(`
      SELECT offers.*, requests.product_title, requests.slug, requests.deliver_to
      FROM offers
        LEFT JOIN requests ON requests.id = offers.offer_to
      WHERE offer_by = $1
    `, [userid]);

    return offersFound;
  }catch(err){
    throw new Error(err);
  }
}
