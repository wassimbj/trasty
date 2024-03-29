/* eslint-disable no-nested-ternary */
import React, { useContext, useEffect, useState } from 'react';
import getMyOffers from '../../api/offers/getMyOffers';
import OfferCard from './components/OfferCard';
import Spinner from '../../components/spinner';
import {
  ContentContainer, HeaderWrapper, NoOffersMsg, OffersWrapper,
  RequestsLink, Title, Wrapper,
} from './style';
import sendNotif from '../../events/sendNotif';

export default function MyOffers({ props }) {
  const [myOffers, setMyOffers] = useState({
    loading: true,
    data: [],
  });

  // const {notifSocketIo} = useContext(UserAuthContext);
  const [error, setError] = useState(false);
  useEffect(() => {
    const state = props.location.state;
    if(!!state){
      if(state.sendNotif){
        sendNotif(state.data.notifTo, state.data.notifType)
        // notifSocketIo.emit('send_notif', state.data);
      }
    }
  }, []);
  useEffect(() => {
    (async function () {
      try {
        const respData = await getMyOffers();
        setMyOffers({
          loading: false,
          data: respData.resp,
        });
      } catch (err) {
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
                      isAccepted={offer.is_accepted}
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
