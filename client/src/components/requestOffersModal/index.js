/* eslint-disable no-nested-ternary */
import React, { useEffect, useState } from 'react';
import toast from 'react-hot-toast';
// import { useFormik } from 'formik';
import Modal from '../modal';
import {
  Title, ModalBodyWrapper, ModalBody,
  ModalFooter, CancelButton, NoOffersMsg,
} from './style';
import Spinner from '../spinner';
import OfferCard from '../offerCard';
import getRequestOffers from '../../api/offers/getRequestOffers';

export default function RequestOffersModal({ onClose, requestId, requestBy }) {
  const [offers, setOffers] = useState({
    loading: true,
    data: [],
  });

  useEffect(() => {
    (async function () {
      const data = await getRequestOffers(requestId, requestBy);
      console.log(data);
      setOffers({
        loading: false,
        data: data.resp,
      });
    }());
  }, []);

  return (
    <Modal onClose={onClose} size="md">
      <Title> Offers you got </Title>
      <ModalBodyWrapper>
        <ModalBody>
          {
            offers.loading ? (
              <Spinner center customStyle="padding: 5rem 0.5rem" />
            ) : (
              offers.data.length === 0 ? (
                <NoOffersMsg> No offers yet... </NoOffersMsg>
              ) : (
                offers.data.map((offer) => (
                  <OfferCard
                    userId={offer.user_id}
                    createdAt={offer.created_at}
                    deliverFrom={offer.delivery_from}
                    deliverOn={offer.delivery_date}
                    reward={offer.offer_reward}
                    userImg={offer.user_image}
                    userName={offer.user_name}
                    key={offer.id}
                  />
                ))
              )
            )
          }
          {/* {[...Array(5)].map(() => (
            <OfferCard />
          ))} */}
        </ModalBody>
      </ModalBodyWrapper>
      <ModalFooter>
        <CancelButton onClick={onClose}>Close</CancelButton>
      </ModalFooter>
    </Modal>
  );
}
