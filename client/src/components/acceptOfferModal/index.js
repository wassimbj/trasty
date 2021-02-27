import React, { useState } from 'react';
import toast from 'react-hot-toast';
// import { useFormik } from 'formik';
import { Redirect } from 'react-router-dom';
import {Modal} from '../modal';
import {
  Title, ModalBodyWrapper, ModalBody,
  ModalFooter, DeleteOfferButton, CancelButton,
} from './style';
import Spinner from '../spinner';
import acceptOffer from '../../api/offers/acceptOffer';

export default function AcceptOfferModal({
  onClose,
  offerId,
  offerBy,
  requestId,
  requestBy,
}) {
  const [isAccepting, setIsAccepting] = useState(false);
  const [success, setSuccess] = useState({
    status: false,
    chatRoomId: null,
  });

  const handleSubmit = async () => {
    setIsAccepting(true);
    try {
      const resp = await acceptOffer(offerId, offerBy, requestId, requestBy);
      if (resp.success) {
        toast.success('Offer has been accepted, chat more with the traveler...', { duration: 9000 });
        setSuccess({
          status: true,
          chatRoomId: resp.data,
        });
      }
    } catch (err) {
      toast.error('Something went wrong, please try again later.');
    }
    setIsAccepting(false);
  };

  if (success.status) {
    return (
      <Redirect
        to={{
          pathname: `/messages/${success.chatRoomId}/${offerBy}`,
          state: {
            sendNotif: true,
            data: {
              notifTo: offerBy,
              notifType: 'notif'
            }
          }
        }}
      />
    );
  }

  return (
    <Modal onClose={onClose}>
      <Title>
        Accept offer
        <span role="img" aria-label="emoji"> 😄 </span>
      </Title>
      <ModalBodyWrapper>
        <ModalBody>
          <p style={{ textAlign: 'center' }}> Accept the offer ? </p>
        </ModalBody>
      </ModalBodyWrapper>
      <ModalFooter>
        {
          isAccepting ? (
            <DeleteOfferButton type="button" isDisabled>
              <Spinner center width="22px" />
            </DeleteOfferButton>
          ) : (
            <DeleteOfferButton onClick={handleSubmit}>
              Accept
            </DeleteOfferButton>
          )
        }
        <CancelButton onClick={onClose}>Cancel</CancelButton>
      </ModalFooter>
    </Modal>
  );
}
