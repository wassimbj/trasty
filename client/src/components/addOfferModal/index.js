import React, { useState } from 'react';
import { useFormik } from 'formik';
import DatePicker, { registerLocale } from 'react-datepicker';
// import fr from 'date-fns/locale/fr';
import dayjs from 'dayjs';
import 'react-datepicker/dist/react-datepicker.css';
import Modal from '../modal';
import '../../assets/styles/custom-date-picker.css';
import Hint from '../hint';
import {
  Title, ModalBodyWrapper, ModalBody,
  InputWrapper, Label, Input, NotesTextarea,
  ModalFooter, CreateOfferButton, CancelButton, PriceCurrency,
} from './style';
import getEstimatedReward from '../../utils/getEstimatedReward';
import SearchLocation from '../searchLocation';
import displayNiceLocation from '../../utils/displayNiceLocation';

export default function AddOfferModal({ onClose, productUnitPrice, quantity }) {
  // registerLocale('fr', fr);
  // console.log();
  const [fromRouteSearch, setFromRouteSearch] = useState({
    from: '', hasSelected: false,
  });

  const formik = useFormik({
    initialValues: {
      deliveryDate: new Date(dayjs().add(7, 'd')),
      deliverFrom: '',
      deliveryReward: getEstimatedReward(productUnitPrice, quantity),
      notes: '',
    },
  });

  return (
    <Modal onClose={onClose}>
      <Title> Add your offer </Title>
      <ModalBodyWrapper>
        <ModalBody>
          <DatePicker
            showPopperArrow={false}
            closeOnScroll={false}
            minDate={new Date()}
            // value={formik.values.deliveryDate}
            // locale="fr"
            selected={formik.values.deliveryDate}
            onChange={(date) => formik.setFieldValue('deliveryDate', date)}
            customInput={(
              <InputWrapper>
                <Label> Delivery date </Label>
                <Input type="text" placeholder="choose a date" value={dayjs(formik.values.deliveryDate).format('MMMM DD, YYYY')} />
              </InputWrapper>
            )}
          />
          <InputWrapper>
            <Label> Delivery from </Label>
            <Input
              type="text"
              placeholder="type a location"
              value={fromRouteSearch.from}
              onChange={(e) => setFromRouteSearch({ from: e.target.value, hasSelected: false })}
            />
            { fromRouteSearch.from && !fromRouteSearch.hasSelected
              ? (
                <SearchLocation
                  searchQuery={fromRouteSearch.from}
                  name="deliverFrom"
                  onSelect={(data) => {
                    formik.setFieldValue('deliverFrom', JSON.stringify(data));
                    setFromRouteSearch({
                      from: displayNiceLocation(data),
                      hasSelected: true,
                    });
                  }}
                />
              ) : null}
          </InputWrapper>
          <InputWrapper>
            <Label> Your reward </Label>
            <Input
              type="number"
              placeholder="50"
              min="0"
              value={formik.values.deliveryReward}
              name="deliveryReward"
              onChange={formik.handleChange}
            />
            <PriceCurrency>TND</PriceCurrency>
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
