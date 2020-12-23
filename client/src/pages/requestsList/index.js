import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
// import { Link } from 'react-router-dom';
import InfiniteScroll from 'react-infinite-scroll-component';
import Spinner from '../../components/spinner';
import FindTravelerCard from '../../components/findTravelerCard';
import Footer from '../../components/footer';
import MainContainer from '../../components/mainContainer';
import UserRequestCard from '../../components/userRequestCard';
import getRequests from '../../api/requests/getRequests';

const RequestCardsContainer = styled.div`
  max-width: 850px;
  margin: 0 auto 15rem;
`;

const AddYourRequestLink = styled.a`
  display: inline-block;
  padding: 0.35rem 1rem;
  margin: 1rem 0;
  text-align: center;
  border: 1px solid rgba(0,0,0,0.25);
  border-radius: 50px;
  color: #333;
  transition: 250ms;
  &:hover{ color: #000; border-color: #000; }
`;

const NoRequestsFoundMsg = styled.p`
  font-weight: 500;
  text-align: center;
  margin: 2rem 0;
`;

export default function RequestsList() {
  const [requests, setRequests] = useState([]);
  const [offset, setOffset] = useState(0);
  const [hasMoreData, setHasMoreData] = useState(true);
  const [isLoading, setIsLoading] = useState(true);

  const LIMIT = 7;
  useEffect(() => {
    (async function () {
      // console.log(offset);
      const respData = await getRequests({
        offset, limit: LIMIT, filterTo: {}, filterFrom: {},
      });
      // console.log(respData.length);
      setRequests((prevState) => [...new Set([...prevState, ...respData])]);
      if (respData.length === 0 || respData.length < LIMIT) {
        setHasMoreData(false);
      }
      setIsLoading(false);
    }());
  }, [offset]);

  const fetchMoreData = () => setOffset((prevOffset) => prevOffset + LIMIT);
  return (
    <>
      <MainContainer>
        <FindTravelerCard customStyle="margin: 3rem auto 5rem;" btnText="Find Requests" />
        <RequestCardsContainer>
        <InfiniteScroll
          dataLength={requests.length}
          next={fetchMoreData}
          hasMore={hasMoreData}
          loader={<Spinner color="#888" spinnerColor="#000" center customStyle="margin: 5rem 0; padding: 2rem 0;" />}
          endMessage={(
            requests.length === 0 ? null : (
              <p style={{ textAlign: 'center' }}>
                <p><b>¯\_(ツ)_/¯</b></p>
                <p><b>Thats it, no more requests we can show.</b></p>
                {/* <br /> */}
                <AddYourRequestLink href="/request/new"> Add your request </AddYourRequestLink>
              </p>
            )
          )}
        >
          { !isLoading && requests.length === 0 ? (
              <NoRequestsFoundMsg> Nothing found </NoRequestsFoundMsg>
          ) : requests.map((request) => (
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
          ))}
        </InfiniteScroll>
        </RequestCardsContainer>
      </MainContainer>
      <Footer />
    </>
  );
}
