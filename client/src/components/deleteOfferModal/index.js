import React, { useState } from 'react';
import toast from 'react-hot-toast';
// import { useFormik } from 'formik';
import {Modal} from '../modal';
import {
  Title, ModalBodyWrapper, ModalBody,
  ModalFooter, DeleteOfferButton, CancelButton,
} from './style';
import Spinner from '../spinner';
import deleteOffer from '../../api/offers/deleteOffer';

export default function DeleteOfferModal({
  onClose, offerId, offerBy, requestBy, isAccepted,
}) {
  const [isDeleting, setIsDeleting] = useState(false);

  const handleSubmit = async () => {
    if(!isAccepted){
      setIsDeleting(true);
      try {
        const resp = await deleteOffer(offerId, offerBy, requestBy);
        if (resp.success) {
          toast.success('Offer has been deleted.');
          window.location.reload();
        }
      } catch (err) {
        toast.error('Something went wrong, please try again later.');
      }
      setIsDeleting(false);
    }
  };

  return (
    <Modal onClose={onClose}>
      <Title>Are you sure ?</Title>
      <ModalBodyWrapper>
        <ModalBody>
          <p style={{ textAlign: 'center' }}>
            {
              !isAccepted
                ? `Are you sure you want to delete this help offer ?`
                : `You can't delete this offer, cause its already accepted, if you really can't deliver the user request, please honestly tell him to close the chat room, so he can find another traveler.`
            }
          </p>
        </ModalBody>
      </ModalBodyWrapper>
      <ModalFooter>
        {
          isAccepted ? (
            <DeleteOfferButton type="button" isDisabled> delete </DeleteOfferButton>
          ) : (
            isDeleting ? (
              <DeleteOfferButton type="button" isDisabled>
                <Spinner center width="22px" />
              </DeleteOfferButton>
            ) : (
              <DeleteOfferButton onClick={handleSubmit}>
                Yes, delete
              </DeleteOfferButton>
            )
          )
        }
        <CancelButton onClick={onClose}>Cancel</CancelButton>
      </ModalFooter>
    </Modal>
  );
}
