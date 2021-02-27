import React, { useState } from 'react';
import toast from 'react-hot-toast';
// import { useFormik } from 'formik';
import {Modal} from '../modal';
import {
  Title, ModalBodyWrapper, ModalBody,
  ModalFooter, CancelButton, DeleteRequestButton,
} from './style';
import Spinner from '../spinner';
import deleteRequest from '../../api/requests/deleteRequest';

export default function DeleteRequestModal({ onClose, requestId, requestBy }) {
  const [isDeleting, setIsDeleting] = useState(false);

  const handleSubmit = async () => {
    setIsDeleting(true);
    try {
      const resp = await deleteRequest(requestId, requestBy);
      if (resp.success) {
        toast.success('Your request has been deleted.');
        window.location.reload();
      }
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
          <p style={{ textAlign: 'center' }}>
            Are you sure you want to
            <b> delete your request </b>
            ?
          </p>
        </ModalBody>
      </ModalBodyWrapper>
      <ModalFooter>
        {
          isDeleting ? (
            <DeleteRequestButton type="button" isDisabled>
              <Spinner center width="22px" />
            </DeleteRequestButton>
          ) : (
            <DeleteRequestButton onClick={handleSubmit}>
              Yes, delete
            </DeleteRequestButton>
          )
        }
        <CancelButton onClick={onClose}>Cancel</CancelButton>
      </ModalFooter>
    </Modal>
  );
}
