import db from '../../database/init';

async function deleteOffer(offerId){
  try{
    await db.query(`DELETE FROM offers WHERE id = $1`, [offerId]);
  }catch(err){
    throw new Error('Delete Offer Error');
  }

}

export default deleteOffer;
