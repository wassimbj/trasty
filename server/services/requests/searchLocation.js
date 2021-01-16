import db from '../../database/init';
import logger from '../../utils/logger';

async function searchLocation(text){

  try{

    // get countries
    const { rows: countries } = await db.query(`
      SELECT distinct id as country_id, name, sortname FROM countries WHERE name ILIKE $1 OR sortname ILIKE $1 LIMIT 6
    `, [`%${text}%`]);

    let states = [];
    if(!countries.length || countries.length <= 2){
      // get states 
      const { rows: statesFound } = await db.query(`
        SELECT distinct
          states.id as state_id, states.name as state_name, states.country_id, countries.name as country
        FROM states
          LEFT JOIN countries ON states.country_id = countries.id
        WHERE states.name ILIKE $1 OR countries.sortname ILIKE $1
        LIMIT 6
      `, [`%${text}%`]);
      states = statesFound;
    }

    let cities = [];
    if(!states.length || states.length <= 2){
        // get cities
      const { rows: citiesFound } = await db.query(`
        SELECT distinct
          cities.id as city_id, cities.state_id as city_state_id, cities.name as city_name,
          states.name as state_name, states.country_id,
          countries.name as country
        FROM cities
          LEFT JOIN states ON states.id = cities.state_id
          LEFT JOIN countries ON states.country_id = countries.id
        WHERE states.name ILIKE $1 OR countries.sortname ILIKE $1 OR cities.name ILIKE $1
        LIMIT 6
      `, [`%${text}%`]);

      cities = citiesFound;
    }

    return [...countries, ...states, ...cities];

  }catch(err){
    logger.error(`Search Location Error: ${err}`);
  }

}

export default searchLocation;
