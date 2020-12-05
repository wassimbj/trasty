/* eslint-disable no-nested-ternary */
import React, { useEffect, useState } from 'react';
import Spinner from '../spinner';
import searchLocation from '../../api/requests/searchLocation';
import { LocationItem, Msg, SearchLocationCard } from './style';

export default function SearchLocation({ searchQuery, onSelect, name }) {
  const [locations, setLocations] = useState({
    data: [],
    success: true,
    loading: true,
  });

  useEffect(() => {
    if (searchQuery) {
      (async function () {
        const res = await searchLocation(searchQuery);
        // console.log('Locations Found: ', res);
        setLocations({
          ...res,
          loading: false,
        });
      }());
    }
  }, [searchQuery]);

  const isState = (location) => location.state_id;

  return (
    <SearchLocationCard>
      {
        locations.success ? (
          locations.loading ? <Spinner customStyle="margin: 1rem auto; display: block;" /> : (
            locations.data.length === 0
              ? <Msg> Nothing found... </Msg>
              : (
                locations.data.map((data, i) => (
                  // eslint-disable-next-line react/no-array-index-key
                  <LocationItem key={i}>
                    {
                      isState(data) ? `${data.country}, ${data.state_name}` : `${data.name}, ${data.sortname}`
                    }
                    <input type="radio" value={data} name={name || 'deliver'} onChange={onSelect} />
                  </LocationItem>
                ))
              )
          )
        ) : <Msg> Something went wrong... </Msg>
      }
    </SearchLocationCard>
  );
}
