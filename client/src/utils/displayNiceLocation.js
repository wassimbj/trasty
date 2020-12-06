export default function displayNiceLocation(data, isJson) {
  // expect the data to have
  /*
  in case of a state, data = {state_id: ..., state_name: ..., country_id: ..., country: ...}
  in case of a country, data = {id: ..., country: 'Tunisia', sortname: 'TN'}
  */
  // console.log('JSON: ', data);
  if ((isJson && data) || (!isJson && Object.keys(data).length > 0)) {
    const parsedData = isJson ? JSON.parse(data) : data;
    // is state or country
    const isState = !!parsedData.state_id;
    // console.log('PARSED: ', parsedData);
    const toDisplay = `${isState
      ? `${parsedData.country}, ${parsedData.state_name}`.trim()
      : `${parsedData.name}, ${parsedData.sortname}`.trim()}`;

    return toDisplay;
  }

  return '';
}
