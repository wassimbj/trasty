import React, { useEffect, useState } from 'react';
import InfiniteScroll from 'react-infinite-scroll-component';
import getUserRequests from '../../../api/requests/getUserRequests';
import Spinner from '../../../components/spinner';
import UserRequestCard from '../../../components/userRequestCard';

export default function UserRequests({ userid }) {
  const [somethingWrong, setSomethingWrong] = useState(false);
  const [userRequests, setUserRequests] = useState({
    loadng: true,
    data: [],
    // hasMore: true,
  });
  const [hasMore, setHasMore] = useState(true);
  const [offset, setOffset] = useState(0);
  const LIMIT = 2;

  useEffect(() => {
    (async function () {
      try {
        const requests = await getUserRequests(userid, LIMIT, offset);
        // console.log(requests);
        setUserRequests({
          loading: false,
          data: [...new Set([...userRequests.data, ...requests])],
          // hasMore: requests.length <= LIMIT,
        });
        if (requests.length < LIMIT) {
          setHasMore(false);
        }
      } catch (err) {
        // console.log(err);
        setSomethingWrong(true);
      }
    }());
  }, [offset]);

  const fetchMoreRequests = () => {
    setOffset((prevOffset) => prevOffset + LIMIT);
  };

  return (
    <>
      { !somethingWrong ? (

        <InfiniteScroll
          dataLength={userRequests.data.length}
          next={fetchMoreRequests}
          hasMore={hasMore}
          loader={<Spinner center customStyle="margin: 5rem 0;" />}
          endMessage={(
            <p style={{ textAlign: 'center' }}>
              <b>Thats all...</b>
            </p>
          )}
        >
          { !userRequests.loadng && userRequests.data.length === 0 ? (
              <p> Nothing found </p>
          ) : userRequests.data.map((request) => (
            <UserRequestCard
              slug={request.slug}
              title={request.product_title}
              deliver={{ from: request.deliver_from, to: request.deliver_to }}
              img={request.product_img}
              before={request.deliver_before}
              price={request.product_unit_price}
            />
          ))}
        </InfiniteScroll>
      ) : (
        <p style={{ textAlign: 'center', padding: '1rem 0' }}> Something went wrong... </p>
      )}
    </>
  );
}
