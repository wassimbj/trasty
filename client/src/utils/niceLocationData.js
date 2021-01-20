import displayNiceLocation from './displayNiceLocation';

export default function niceLocationData(location) {
  // console.log('LOCAATION: ', location, typeof location);
  const isJson = typeof location === 'string'; // bool
  const loc = isJson ? JSON.parse(location) : location;
  const data = {
    country_id: loc.country_id,
    state_id: loc.state_id || 0,
    city_id: loc.city_id || 0,
    nice_display: displayNiceLocation(loc),
  };

  return data;
}
