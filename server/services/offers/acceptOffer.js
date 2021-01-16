import db from '../../database/init';

async function acceptOffer(offerId){
  try{
    await db.query(`UPDATE offers SET is_accepted = 1 WHERE id = $1`, [offerId]);
  }catch(err){
    throw new Error('accept offer error');
  }

}

export default acceptOffer;
