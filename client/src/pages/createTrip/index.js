import { useFormik } from 'formik';
import React, { useState } from 'react';
import toast from 'react-hot-toast';
import * as yup from 'yup';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import '../../assets/styles/custom-date-picker.css';
import { Button } from '../../components/button';
import InlineInput from '../../components/inlineInput';
import SearchLocation from '../../components/searchLocation';
import displayNiceLocation from '../../utils/displayNiceLocation';
import niceLocationData from '../../utils/niceLocationData';
import niceDateFormat from '../../utils/niceDateFormat';
import {
  CreateCard,
  ErrorMsg,
  InputBlock,
  Title,
  TripImg,
} from './style';
import createTrip from '../../api/trips/create';
import Spinner from '../../components/spinner';

export default function CreateTrip() {
  const [isCreating, setIsCreating] = useState(false);
  // location search
  const [fromRouteSearch, setFromRouteSearch] = useState({ from: '', hasSelected: '' });
  const [toRouteSearch, setToRouteSearch] = useState({ to: '', hasSelected: '' });

  const [isDatePickerOpened, setIsDatePickerOpened] = useState(false);
  const [isRoundTrip, setIsRoudTrip] = useState(true);

  const formik = useFormik({
    initialValues: {
      tripType: 1,
      fromRoute: '',
      toRoute: '',
      travelDate: new Date(),
      backDate: null,
    },
    validateOnChange: false,
    validationSchema: yup.object().shape({
      fromRoute: yup.mixed().required('choose city or country'),
      toRoute: yup.mixed().required('choose city or country'),
      travelDate: yup.mixed().required('choose date'),
    }),
    onSubmit: async ({
      fromRoute, toRoute, travelDate, tripType, backDate,
    }, { resetForm }) => {
      setIsCreating(true);
      try {
        await createTrip(
          niceLocationData(fromRoute),
          niceLocationData(toRoute),
          travelDate, backDate, tripType,
          () => {
            toast.success('Your trip has been created', {
              duration: 8000,
              style: {
                borderRadius: '50px', background: '#222', color: '#fff',
              },
            });
            resetForm({});
            // eslint-disable-next-line no-use-before-define
            handleSetRoute('', 'from');
            // eslint-disable-next-line no-use-before-define
            handleSetRoute('', 'to');
          },
        );
      } catch (err) {
        console.error(err);
        toast.error('Something went wrong, please try again later.', {
          duration: 8000,
          style: {
            borderRadius: '50px', background: '#222', color: '#fff',
          },
        });
      }
      setIsCreating(false);
    },
  });

  const handleSetRoute = (val, route) => {
    if (route === 'from') {
      setFromRouteSearch({ from: val, hasSelected: false });
      formik.setFieldValue('fromRoute', '');
    } else {
      setToRouteSearch({ to: val, hasSelected: false });
      formik.setFieldValue('toRoute', '');
    }
  };

  const handleTripType = (type) => (e) => {
    if (type === 'roundtrip') {
      setIsRoudTrip(e.target.checked);
    } else {
      setIsRoudTrip(!e.target.checked);
    }

    formik.setFieldValue('travelDate', new Date());
    formik.setFieldValue('backDate', '');
  };

  const datePickerNiceValue = () => {
    if (isRoundTrip && (formik.values.travelDate && formik.values.backDate)) {
      return `${niceDateFormat(formik.values.travelDate)} - ${niceDateFormat(formik.values.backDate)}`;
    } if (!isRoundTrip && formik.values.travelDate) {
      return `${niceDateFormat(formik.values.travelDate)}`;
    }
    return '';
  };

  return (
    <CreateCard>
      <TripImg src="/images/trip.png" alt="" />
      <Title> Add new trip </Title>

      <form onSubmit={formik.handleSubmit}>
        <InputBlock>
          <span style={{ marginRight: '1rem' }}>
            <input
              type="radio"
              name="tripType"
              value="1"
              onChange={handleTripType('roundtrip')}
              style={{ marginRight: '0.4rem' }}
              checked={isRoundTrip}
            />
            Round trip
          </span>
          <span>
            <input
              type="radio"
              name="tripType"
              value="2"
              onChange={handleTripType('oneway')}
              style={{ marginRight: '0.4rem' }}
              checked={!isRoundTrip}
            />
            One way
          </span>
        </InputBlock>

        <InputBlock customStyles="margin-bottom: 1rem">
          <InlineInput
            text="From"
            placeholder="City or Country"
            inputWidth="100%"
            initStyles={`
              border: 1px solid rgba(0,0,0,0.15);
              &:hover{ border: 1px solid rgba(0,0,0,0.25); }
              ${formik.errors.fromRoute ? 'border-color: #ff5858;' : ''}
            `}
            focusStyles={{ border: '1px solid rgba(0,0,0,0.5)' }}
            name="fromRoute"
            onChange={(e) => handleSetRoute(e.target.value, 'from')}
            value={fromRouteSearch.from}
          />
          <ErrorMsg>{formik.errors.fromRoute}</ErrorMsg>
          {fromRouteSearch.from && !fromRouteSearch.hasSelected ? (
            <SearchLocation
              searchQuery={fromRouteSearch.from}
              name="fromRoute"
              onSelect={(data) => {
                formik.setFieldValue('fromRoute', JSON.stringify(data));
                setFromRouteSearch({
                  from: displayNiceLocation(data),
                  hasSelected: true,
                });
              }}
            />
          ) : null}
        </InputBlock>
        <InputBlock customStyles="margin-bottom: 1rem">
          <InlineInput
            text="To"
            placeholder="City or Country"
            inputWidth="100%"
            initStyles={`
              border: 1px solid rgba(0,0,0,0.15);
              &:hover{ border: 1px solid rgba(0,0,0,0.25); }
              ${formik.errors.toRoute ? 'border-color: #ff5858;' : ''}
            `}
            focusStyles={{ border: '1px solid rgba(0,0,0,0.5)' }}
            name="toRoute"
            onChange={(e) => handleSetRoute(e.target.value, 'to')}
            value={toRouteSearch.to}
          />
          <ErrorMsg>{formik.errors.toRoute}</ErrorMsg>
          {toRouteSearch.to && !toRouteSearch.hasSelected ? (
            <SearchLocation
              searchQuery={toRouteSearch.to}
              name="toRoute"
              onSelect={(data) => {
                formik.setFieldValue('toRoute', JSON.stringify(data));
                setToRouteSearch({
                  to: displayNiceLocation(data),
                  hasSelected: true,
                });
              }}
            />
          ) : null}
        </InputBlock>

        <InputBlock>
          <DatePicker
            selected={formik.values.travelDate}
            onChange={(date) => {
              if (isRoundTrip) {
                const [start, end] = date;
                formik.setFieldValue('travelDate', start);
                formik.setFieldValue('backDate', end);
              } else {
                formik.setFieldValue('travelDate', date);
              }
            }}
            open={isDatePickerOpened}
            onInputClick={() => setIsDatePickerOpened(true)}
            onClickOutside={() => setIsDatePickerOpened(false)}
            startDate={formik.values.travelDate}
            endDate={formik.values.backDate}
            selectsRange={isRoundTrip}
            wrapperClassName="addTripDatePickerWrapper"
            // inline
            showPopperArrow={false}
            minDate={new Date()}
            customInput={(
              <div style={{ position: 'relative', width: '100%' }}>
                <InlineInput
                  text={`Date${isRoundTrip ? 's' : ''}`}
                  placeholder="Select date"
                  inputWidth="100%"
                  initStyles={`
                    border: 1px solid rgba(0,0,0,0.15);
                    &:hover{ border: 1px solid rgba(0,0,0,0.25); }
                    cursor: pointer;
                    ${formik.errors.travelDate ? 'border-color: #ff5858;' : ''}
                  `}
                  focusStyles={{ border: '1px solid rgba(0,0,0,0.5)' }}
                  value={datePickerNiceValue()}
                />
              </div>
            )}
          />
          <ErrorMsg>{formik.errors.travelDate}</ErrorMsg>
        </InputBlock>

        {
          // eslint-disable-next-line no-nested-ternary
          !formik.isValid
          || !formik.values.travelDate
          || !formik.values.fromRoute
          || !formik.values.toRoute
            ? (
              <Button type="button" customStyles="opacity: 0.7;"> Add trip </Button>
            ) : isCreating ? (
              <Button type="button" customStyles="opacity: 0.7;"><Spinner center width="22px" /></Button>
            ) : (
              <Button type="submit"> Add trip </Button>
            )
        }
      </form>
    </CreateCard>
  );
}
