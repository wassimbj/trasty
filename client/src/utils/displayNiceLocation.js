/* eslint-disable indent */
/* eslint-disable no-nested-ternary */
export default function displayNiceLocation(data, isJson) {
  // expect the data to have
  /*
    Data format:
    country data = {country_id, name, sortname}
    state data = {state_id, state_name, country_id, country}
    city data = {city_id, city_state_id, city_name, state_name, country_id, country}
  */

  // console.log('JSON: ', data);
  if ((isJson && data) || (!isJson && Object.keys(data).length > 0)) {
    const parsedData = isJson ? JSON.parse(data) : data;
    // is state or country
    const isState = !!parsedData.state_id;
    const isCity = !!parsedData.city_id;

    if (isState) {
      return `${parsedData.country}, ${parsedData.state_name}`;
    } if (isCity) {
      return `${parsedData.country}, ${parsedData.city_name}`;
    }
      return `${parsedData.name}, ${parsedData.sortname}`;
  }
  return '';
}
