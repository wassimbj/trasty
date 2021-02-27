import React, { useState } from 'react';
import toast from 'react-hot-toast';
// import { useFormik } from 'formik';
import {Modal} from '../modal';
import {
  Title, ModalBodyWrapper, ModalBody,
  ModalFooter, DeleteOfferButton, CancelButton,
} from './style';
import Spinner from '../spinner';
import deleteTrip from '../../api/trips/deleteTrip';

export default function DeleteTripModal({ onClose, tripId }) {
  const [isDeleting, setIsDeleting] = useState(false);

  const handleSubmit = async () => {
    setIsDeleting(true);
    try {
      await deleteTrip(tripId);
      toast.success('Trip has been deleted.');
      window.location.reload();
    } catch (err) {
      toast.error('Something went wrong, please try again later.');
    }
    setIsDeleting(false);
  };

  return (
    <Modal onClose={onClose}>
      <Title> Are you sure ? </Title>
      <ModalBodyWrapper>
        <ModalBody>
          <p style={{ textAlign: 'center' }}> Are you sure you want to delete this trip ? </p>
        </ModalBody>
      </ModalBodyWrapper>
      <ModalFooter>
        {
          isDeleting ? (
            <DeleteOfferButton type="button" isDisabled>
              <Spinner center width="22px" />
            </DeleteOfferButton>
          ) : (
            <DeleteOfferButton onClick={handleSubmit}>
              Yes, delete
            </DeleteOfferButton>
          )
        }
        <CancelButton onClick={onClose}>Cancel</CancelButton>
      </ModalFooter>
    </Modal>
  );
}
