import db from '../../database/init';

async function getUserTrips(userId){
  try{
    const {rows} = await db.query(`
      SELECT * FROM trips where travel_by = $1
    `, [userId]);

    return rows;
  }catch(err){
    throw new Error(err);
  }

}

export default getUserTrips;
