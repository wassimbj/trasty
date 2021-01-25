import db from '../../database/init';

async function deleteTrip(userId, tripId){
  try{
    await db.query(`
      DELETE FROM trips WHERE travel_by = $1 AND id = $2
    `, [userId, tripId]);
  }catch(err){
    throw new Error(err);
  }

}

export default deleteTrip;
