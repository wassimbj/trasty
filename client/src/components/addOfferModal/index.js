import React from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import Modal from '../modal';
import '../../assets/styles/custom-date-picker.css';
import Hint from '../hint';
import {
  Title, ModalBodyWrapper, ModalBody,
  InputWrapper, Label, Input, NotesTextarea,
  ModalFooter, CreateOfferButton, CancelButton,
} from './style';

export default function AddOfferModal({ onClose }) {
  return (
    <Modal onClose={onClose}>
      <Title> Add your offer </Title>
      <ModalBodyWrapper>
        <ModalBody>
          <DatePicker
            showPopperArrow={false}
            closeOnScroll={false}
            minDate={new Date()}
            placeholderText="choose a date"
            customInput={(
              <InputWrapper>
                <Label> Delivery date </Label>
                <Input type="text" placeholder="choose a date" />
              </InputWrapper>
            )}
          />
          <InputWrapper>
            <Label> Delivery from </Label>
            <Input type="text" placeholder="type a location" />
          </InputWrapper>
          <InputWrapper>
            <Label> Your reward </Label>
            <Input type="number" placeholder="50 TND" min="0" />
            <Hint content="please enter your reward in Tunisian Dinars" />
          </InputWrapper>
          <InputWrapper>
            <Label> Some notes </Label>
            <NotesTextarea rows="3" placeholder="write something" />
          </InputWrapper>
        </ModalBody>
      </ModalBodyWrapper>
      <ModalFooter>
        <CreateOfferButton type="button">Add Offer</CreateOfferButton>
        <CancelButton onClick={onClose}>Cancel</CancelButton>
      </ModalFooter>
    </Modal>
  );
}
