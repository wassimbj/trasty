/* eslint-disable indent */
/* eslint-disable no-nested-ternary */
export default function displayNiceLocation(data, isJson) {
  // expect the data to have
  /*
    in case of a country, data = {country_id, name, sortname}
    in case of a state, data = {state_id, state_name, country_id, country}
    in case of a city, data = {city_id, city_state_id, city_name, state_name, country_id, country}
  */
  // console.log('JSON: ', data);
  if ((isJson && data) || (!isJson && Object.keys(data).length > 0)) {
    const parsedData = isJson ? JSON.parse(data) : data;
    // is state or country
    const isState = !!parsedData.state_id;
    const isCity = !!parsedData.city_id;
    // console.log('PARSED: ', parsedData);
    const toDisplay = `${isState
      ? `${parsedData.country}, ${parsedData.state_name}`
      : isCity ? `${parsedData.country}, ${parsedData.state_name}, ${parsedData.city_name}`
      : `${parsedData.name}, ${parsedData.sortname}`}`;

    return toDisplay.trim();
  }
  return '';
}
