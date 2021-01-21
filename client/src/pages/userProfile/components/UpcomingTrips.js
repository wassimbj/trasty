import React, { useEffect, useState } from 'react';
import InfiniteScroll from 'react-infinite-scroll-component';
import Icon from '@hackclub/icons';
import getUserTrips from '../../../api/trips/getUserTrips';
import Spinner from '../../../components/spinner';
import niceDateFormat from '../../../utils/niceDateFormat';
import {
  TripCardWrapper, TripCardImg,
  TripCardInfo, TripLocation, TripDate,
} from '../style';

export default function UpcomingTrips({ userid }) {
  const [somethingWrong, setSomethingWrong] = useState(false);
  const [userTrips, setUserTrips] = useState({
    loadng: true,
    data: [],
  });
  const [hasMore, setHasMore] = useState(true);
  const [offset, setOffset] = useState(0);
  const LIMIT = 10;

  useEffect(() => {
    // eslint-disable-next-line func-names
    (async function () {
      try {
        const trips = await getUserTrips(userid, LIMIT, offset);
        setUserTrips({
          loading: false,
          data: [...new Set([...userTrips.data, ...trips])],
        });
        if (trips.length < LIMIT) {
          setHasMore(false);
        }
      } catch (err) {
        setSomethingWrong(true);
      }
    }());
  }, [offset]);

  const fetchMoreTrips = () => {
    setOffset((prevOffset) => prevOffset + LIMIT);
  };

  if (userTrips.loadng) {
    return (
      <Spinner center customStyle="margin: 5rem 0;" />
    );
  }
  return (
    <>
      { !somethingWrong ? (

        <InfiniteScroll
          dataLength={userTrips.data.length}
          next={fetchMoreTrips}
          hasMore={hasMore}
          loader={<Spinner center customStyle="margin: 5rem 0;" />}
          endMessage={(
            userTrips.data.length === 0 ? (
              <p style={{ textAlign: 'center', padding: '2rem 0', color: '#333' }}>
                <Icon glyph="briefcase" style={{ margin: '0 auto' }} size={50} />
                No trips yet...
              </p>
            ) : (
              <p style={{ textAlign: 'center' }}>
                <b>Thats all...</b>
              </p>
            )
          )}
        >
          {
          userTrips.data.map((trip) => (
            <TripCardWrapper>
              <TripCardImg />
              <TripCardInfo>
                <TripLocation>
                  <span style={{ fontWeight: '500' }}>{trip.travel_from.nice_display}</span>
                  <span style={{ color: 'rgb(175 175 175)', margin: '0 0.5rem' }}>to</span>
                  <span style={{ fontWeight: '500' }}>{trip.travel_to.nice_display}</span>
                </TripLocation>
                <TripDate>
                  <span style={{ color: 'rgb(175 175 175)', marginRight: '0.5rem' }}>Traveling on</span>
                  <span style={{ fontWeight: '500', color: '#555', marginRight: '0.5rem' }}>{niceDateFormat(trip.travel_date, true)}</span>
                </TripDate>
                {
                  trip.back_date && (
                    <TripDate>
                      <span style={{ color: 'rgb(175 175 175)', marginRight: '0.5rem' }}>Back on</span>
                      <span style={{ fontWeight: '500', color: '#555', marginRight: '0.5rem' }}>{niceDateFormat(trip.back_date, true)}</span>
                    </TripDate>
                  )
                }
              </TripCardInfo>
            </TripCardWrapper>
          ))
          }
        </InfiniteScroll>
      ) : (
        <p style={{ textAlign: 'center', padding: '1rem 0' }}> Something went wrong... </p>
      )}
    </>
  );
}
