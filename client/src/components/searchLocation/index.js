/* eslint-disable no-nested-ternary */
import React, { useEffect, useState } from 'react';
import { useDebounce } from 'use-debounce';
import Spinner from '../spinner';
import searchLocation from '../../api/requests/searchLocation';
import { LocationItem, Msg, SearchLocationCard } from './style';
import displayNiceLocation from '../../utils/displayNiceLocation';

export default function SearchLocation({ searchQuery, onSelect, name }) {
  const [locations, setLocations] = useState({
    data: [],
    success: true,
    loading: true,
  });
  const [searchQueryValue] = useDebounce(searchQuery, 500);

  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (searchQueryValue) {
      setIsOpen(true);
      (async function () {
        const res = await searchLocation(searchQueryValue);
        // console.log('Locations Found: ', res);
        setLocations({
          ...res,
          loading: false,
        });
      }());
    } else {
      setIsOpen(false);
    }
  }, [searchQueryValue]);

  // helper (see if its a state or country)
  const handleLocationSelection = (data) => {
    onSelect(data);
    setIsOpen(false);
  };

  if (!isOpen) {
    return null;
  }

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
                    {displayNiceLocation(data)}
                    <input type="radio" value={data} name={name || 'deliver'} onChange={() => handleLocationSelection(data)} />
                  </LocationItem>
                ))
              )
          )
        ) : <Msg> Something went wrong... </Msg>
      }
    </SearchLocationCard>
  );
}
