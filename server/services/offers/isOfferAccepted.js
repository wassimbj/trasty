import db from '../../database/init';

async function isOfferAccepted(offerId){
  try{
    const {rows} = await db.query(`SELECT is_accepted FROM offers WHERE id = $1`, [offerId]);
    console.log(rows)
    return rows[0].is_accepted === true
  
  }catch(err){
    throw new Error('accept offer error');
  }

}

export default isOfferAccepted;
