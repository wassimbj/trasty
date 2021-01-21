import db from '../../database/init';

async function getUserTrips(userId, limit, offset){
  try{
    const {rows} = await db.query(`
      SELECT * FROM trips WHERE travel_by = $1
      LIMIT $2 OFFSET $3
    `, [userId, limit, offset]);

    return rows;
  }catch(err){
    throw new Error(err);
  }

}

export default getUserTrips;
