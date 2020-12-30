import React, { useState } from 'react';
import toast from 'react-hot-toast';
// import { useFormik } from 'formik';
import Modal from '../modal';
import {
  Title, ModalBodyWrapper, ModalBody,
  ModalFooter, CancelButton,
} from './style';
import Spinner from '../spinner';
import OfferCard from '../offerCard';

export default function RequestOffersModal({ onClose, requestId, requestBy }) {
  return (
    <Modal onClose={onClose} size="md">
      <Title> Offers you got </Title>
      <ModalBodyWrapper>
        <ModalBody>
          {[...Array(5)].map(() => (
            <OfferCard />
          ))}
        </ModalBody>
      </ModalBodyWrapper>
      <ModalFooter>
        <CancelButton onClick={onClose}>Close</CancelButton>
      </ModalFooter>
    </Modal>
  );
}
