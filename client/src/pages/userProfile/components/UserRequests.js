import React, { useEffect, useState } from 'react';
import InfiniteScroll from 'react-infinite-scroll-component';
import Icon from '@hackclub/icons';
import getUserRequests from '../../../api/requests/getUserRequests';
import Spinner from '../../../components/spinner';
import UserRequestCard from '../../../components/userRequestCard';

export default function UserRequests({ userid }) {
  const [somethingWrong, setSomethingWrong] = useState(false);
  const [userRequests, setUserRequests] = useState({
    loadng: true,
    data: [],
  });
  const [hasMore, setHasMore] = useState(true);
  const [offset, setOffset] = useState(0);
  const LIMIT = 10;

  useEffect(() => {
    (async function () {
      try {
        const requests = await getUserRequests(userid, LIMIT, offset);
        setUserRequests({
          loading: false,
          data: [...new Set([...userRequests.data, ...requests])],
        });
        if (requests.length < LIMIT) {
          setHasMore(false);
        }
      } catch (err) {
        setSomethingWrong(true);
      }
    }());
  }, [offset]);

  const fetchMoreRequests = () => {
    setOffset((prevOffset) => prevOffset + LIMIT);
  };

  if (userRequests.loadng) {
    return (
      <Spinner center customStyle="margin: 5rem 0;" />
    );
  }
  return (
    <>
      { !somethingWrong ? (

        <InfiniteScroll
          dataLength={userRequests.data.length}
          next={fetchMoreRequests}
          hasMore={hasMore}
          loader={<Spinner center customStyle="margin: 5rem 0;" />}
          endMessage={(
            userRequests.data.length === 0 ? (
              <p style={{ textAlign: 'center', padding: '2rem 0', color: '#333' }}>
                <Icon glyph="explore" style={{ margin: '0 auto' }} size={50} />
                No requests yet...
              </p>
            ) : (
              <p style={{ textAlign: 'center' }}>
                <b>Thats all...</b>
              </p>
            )
          )}
        >
          {
          userRequests.data.map((request) => (
            <UserRequestCard
              id={request.id}
              slug={request.slug}
              title={request.product_title}
              deliver={{ from: request.deliver_from, to: request.deliver_to }}
              img={request.product_img}
              before={request.deliver_before}
              price={request.product_unit_price}
              requestBy={request.request_by}
            />
          ))
          }
        </InfiniteScroll>
      ) : (
        <p style={{ textAlign: 'center', padding: '1rem 0' }}> Something went wrong... </p>
      )}
    </>
  );
}
