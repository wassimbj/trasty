import db from '../../database/init';
import logger from '../../utils/logger';

async function searchLocation(text){

  try{

    // get countries
    const { rows: countries } = await db.query(`
      SELECT id, name, sortname FROM countries WHERE name ILIKE $1 OR sortname ILIKE $1 LIMIT 10
    `, [`%${text}%`]);

      // get states 
    const { rows: states } = await db.query(`
      SELECT 
        states.id as state_id, states.name as state_name, states.country_id, countries.name as country
      FROM states
        LEFT JOIN countries ON states.country_id = countries.id
      WHERE states.name ILIKE $1 OR countries.sortname ILIKE $1
      LIMIT 10
    `, [`%${text}%`]);

    console.log(
      ' countries:', countries,
      '\n states: ', states
    );

    return [...countries, ...states];

    /*
      ? some "bla" notes
      text = tun

      countries = [{ name: tunisia, id: 222 }, {...}, {...}]
      states = [{name: ...}, {...}]
      set = new Set([...countries, ...states]);
      then merge them :)
    */

  }catch(err){
    logger.error(`Search Location Error: ${err}`);
  }

}

export default searchLocation;