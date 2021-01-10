/* eslint-disable no-nested-ternary */
import React, { useEffect, useState } from 'react';
import getMyOffers from '../../api/offers/getMyOffers';
import OfferCard from './components/OfferCard';
import Spinner from '../../components/spinner';
import {
  ContentContainer, HeaderWrapper, NoOffersMsg, OffersWrapper,
  RequestsLink, Title, Wrapper,
} from './style';

export default function MyOffers() {
  const [myOffers, setMyOffers] = useState({
    loading: true,
    data: [],
  });

  const [error, setError] = useState(false);

  useEffect(() => {
    (async function () {
      try {
        const respData = await getMyOffers();
        console.log(respData);
        setMyOffers({
          loading: false,
          data: respData.resp,
        });
      } catch (err) {
        console.error(err);
        setError(true);
      }
    }());
  }, []);

  return (
    <Wrapper>
      <ContentContainer>
        <HeaderWrapper>
          <Title> Your Help Offers </Title>
          <RequestsLink href="/requests"> All Requests </RequestsLink>
        </HeaderWrapper>
        <OffersWrapper>
          {
            error ? <p> Something went wrong... </p> : (
              myOffers.loading ? (
                <Spinner center customStyle="padding: 3rem 0" />
              ) : (
                myOffers.data.length === 0 ? (
                  <NoOffersMsg> You didn't make any help offer yet. </NoOffersMsg>
                ) : (
                  myOffers.data.map((offer, i) => (
                    <OfferCard
                      deliverDate={offer.delivery_date}
                      deliverFrom={offer.delivery_from}
                      deliverTo={offer.deliver_to}
                      deliverReward={offer.offer_reward}
                      productTitle={offer.product_title}
                      productSlug={offer.slug}
                      offerId={offer.id}
                      offerBy={offer.offer_by}
                      key={offer.id}
                    />
                  ))
                )
              )
            )
          }
        </OffersWrapper>
      </ContentContainer>
    </Wrapper>
  );
}
