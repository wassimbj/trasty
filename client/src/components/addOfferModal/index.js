import React, { useState } from 'react';
import { useFormik } from 'formik';
import * as yup from 'yup';
import DatePicker, { registerLocale } from 'react-datepicker';
// import fr from 'date-fns/locale/fr';
import toast from 'react-hot-toast';
import dayjs from 'dayjs';
import 'react-datepicker/dist/react-datepicker.css';
import Modal from '../modal';
import '../../assets/styles/custom-date-picker.css';
import {
  Title, ModalBodyWrapper, ModalBody,
  InputWrapper, Label, Input, NotesTextarea,
  ModalFooter, CreateOfferButton, CancelButton, PriceCurrency, ErrorMsg,
} from './style';
import getEstimatedReward from '../../utils/getEstimatedReward';
import SearchLocation from '../searchLocation';
import displayNiceLocation from '../../utils/displayNiceLocation';
import Spinner from '../spinner';
import createOffer from '../../api/offers/createOffer';

export default function AddOfferModal({
  onClose, requestId, productUnitPrice, quantity,
}) {
  // registerLocale('fr', fr);
  const [fromRouteSearch, setFromRouteSearch] = useState({
    from: '', hasSelected: false,
  });

  const [isCreatingOffer, setIsCreatingOffer] = useState(false);

  const formik = useFormik({
    initialValues: {
      deliveryDate: new Date(dayjs().add(7, 'd')),
      deliverFrom: '',
      deliveryReward: getEstimatedReward(productUnitPrice, quantity),
      notes: '',
    },
    validateOnChange: true,
    validationSchema: yup.object().shape({
      deliveryDate: yup.date().required('Please choose the delivery date').nullable(),
      deliverFrom: yup.object().required('please choose from where you will deliver this request.'),
      deliveryReward: yup.number()
        .min(0, 'you cant enter negative number')
        .max(productUnitPrice * quantity, 'this is more then the product price'),
      notes: yup.string().max(200, 'you wrote a too long note, try to make it short please.').notRequired(),
    }),
    onSubmit: async ({
      deliveryDate, deliverFrom,
      deliveryReward, notes,
    }) => {
      setIsCreatingOffer(true);
      try {
        const parsedObj = JSON.parse(deliverFrom);
        const newDeliverFromObj = {
          country_id: parsedObj.country_id,
          state_id: parsedObj.state_id || 0,
          city_id: parsedObj.city_id || 0,
          nice_display: displayNiceLocation(parsedObj),
        };

        const resp = await createOffer({
          requestId,
          deliveryDate,
          deliveryReward,
          notes,
          deliverFrom: newDeliverFromObj,
        });
        if (resp.success) {
          toast.success('Your offer has been successfully added.');
          window.location.reload();
        }
      } catch (err) {
        toast.error('Something went wrong, try again later...');
      }
      setIsCreatingOffer(false);
    },
  });

  return (
    <Modal onClose={onClose}>
      <Title> Offer Help </Title>
      <ModalBodyWrapper>
        <form onSubmit={formik.handleSubmit} id="addOfferForm">
        <ModalBody>
            <DatePicker
              showPopperArrow={false}
              closeOnScroll={false}
              minDate={new Date()}
              // locale="fr"
              selected={formik.values.deliveryDate}
              onChange={(selectedDate) => formik.setFieldValue('deliveryDate', selectedDate)}
              customInput={(
                <InputWrapper>
                  <Label> Delivery date </Label>
                  <Input
                    type="text"
                    placeholder="choose a date"
                    value={
                      formik.values.deliveryDate ? dayjs(formik.values.deliveryDate).format('MMMM DD, YYYY') : ''
                    }
                  />
                  <ErrorMsg>{formik.errors.deliveryDate}</ErrorMsg>
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
                <ErrorMsg>{formik.errors.deliverFrom}</ErrorMsg>
            </InputWrapper>
            <InputWrapper>
              <Label> Your reward </Label>
              <Input
                type="number"
                placeholder="50"
                value={formik.values.deliveryReward}
                name="deliveryReward"
                onChange={formik.handleChange}
              />
              <PriceCurrency>TND</PriceCurrency>
              {formik.values.deliveryReward === 0 ? (
              <small style={{ color: '#737373' }}>
                You are so generous to have no reward, we are so proud to have you on trusty.
              </small>
              ) : ''}
              <ErrorMsg>{formik.errors.deliveryReward}</ErrorMsg>
            </InputWrapper>
            <InputWrapper>
              <Label> Some notes </Label>
              <NotesTextarea rows="3" placeholder="write something" name="notes" onChange={formik.handleChange} />
              <ErrorMsg>{formik.errors.notes}</ErrorMsg>
            </InputWrapper>
        </ModalBody>
        </form>
      </ModalBodyWrapper>
      <ModalFooter>
        {
          // eslint-disable-next-line no-nested-ternary
          !formik.values.deliveryDate
          || !formik.values.deliverFrom
          || Object.keys(formik.errors).length > 0
            ? (
              <CreateOfferButton type="button" isDisabled>Add Offer</CreateOfferButton>
            ) : (
              isCreatingOffer ? (
                <CreateOfferButton type="button" isDisabled>
                  <Spinner center width="22px" />
                </CreateOfferButton>
              ) : (
                <CreateOfferButton type="submit" form="addOfferForm">
                  Add Offer
                </CreateOfferButton>
              )
            )
        }
        <CancelButton onClick={onClose}>Cancel</CancelButton>
      </ModalFooter>
    </Modal>
  );
}
