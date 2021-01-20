import db from '../../database/init';

async function createTrip(travelBy, slug, from, to, type, travelDate, backDate){
  try{
    await db.query(`
      INSERT INTO trips(
        slug, travel_from, travel_to, type, travel_date, back_date, travel_by
      ) VALUES($1,$2,$3,$4,$5,$6,$7)
    `, [slug, from, to, type, travelDate, backDate || null, travelBy]);
  }catch(err){
    throw new Error(err);
  }

}

export default createTrip;
