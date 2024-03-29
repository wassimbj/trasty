/* eslint-disable max-len */
/* eslint-disable indent */
/* eslint-disable no-nested-ternary */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState } from 'react';
import { useFormik } from 'formik';
import * as yup from 'yup';
import Icon from '@hackclub/icons';
import toast from 'react-hot-toast';
import { Redirect } from 'react-router-dom';
import SmContainer from '../../components/smContainer';
import ProductDetails from './components/ProductDetails';
import RequestDetails from './components/RequestDetails';
import {
  CreateRequestWrapper, PrevBtn, ProductDetailsContainer,
  ControlButtonsWrapper,
} from './style';
import RequestSummary from './components/RequestSummary';
import { Button } from '../../components/button';
import Footer from '../../components/footer';
import StepsHeader from './components/StepsHeader';
import createRequest from '../../api/requests/create';
import Spinner from '../../components/spinner';
import displayNiceLocation from '../../utils/displayNiceLocation';
// import displayNiceLocation from '../../utils/displayNiceLocation';

export default function CreateRequest() {
  const [activeTab, setActiveTab] = useState(1);
  const [isCreatingRequest, setIsCreatingRequest] = useState(false);
  const [createdRequest, setCreatedRequest] = useState({
    success: false,
    slug: '',
  });
  const validationSchemaArray = [
    {
      productLink: yup.string()
                      .max(500, 'the link you provided is too long')
                      .url('Invalid link')
                      .nullable(true),
      productImageUrl: yup.mixed()
                      .required('the product image is required'),
      productTitle: yup.string()
                      .max(200, 'the title is too long')
                      .required('enter the product title'),
      productUnitPrice: yup.number()
                      .max(100000000, 'price is too hight, are you gonna buy a plane ?')
                      .min(0.1, "price can't be 0")
                      .required('please enter the product unit price'),
      productDesc: yup.string()
                      .max(250, 'the description is too long'),
      productQuantity: yup.number()
                      .min(1, 'minimum is 1')
                      .max(5000, 'maximum is 5000')
                      .required('please enter how many you want'),
    },
    {
      deliverFrom: yup.string()
                      .required('please choose the country or city of the product'),
      deliverTo: yup.string()
                      .required('choose the delivery location, where do you live ?'),
    },
    {},
  ];

  const formik = useFormik({
    initialValues: {
      productLink: '',
      productImageUrl: '',
      productImage: '',
      productTitle: '',
      productDesc: '',
      productSize: 'small',
      productUnitPrice: 0,
      productQuantity: 1,
      productCategory: '',
      deliverFrom: '',
      deliverTo: '',
      deliverBefore: '0',
    },
    validationSchema: yup.object().shape(validationSchemaArray[activeTab - 1]),
    validateOnChange: activeTab === 1,
    validateOnBlur: false,
    onSubmit: async (values, { setFieldValue }) => {
      try {
        if (activeTab < 3) {
          setActiveTab(Math.min(activeTab + 1, 3));
          if (activeTab === 2) {
            // console.log();
            // values.deliverTo, values.deliverFrom
            if (values.deliverFrom && values.deliverTo) {
              const parseDeliverFrom = JSON.parse(values.deliverFrom);
              const parseDeliverTo = JSON.parse(values.deliverTo);
              setFieldValue('deliverFrom', JSON.stringify({
                ...parseDeliverFrom,
                country_id: parseDeliverFrom.country_id,
                state_id: parseDeliverFrom.state_id || 0,
                city_id: parseDeliverFrom.city_id || 0,
                nice_display: displayNiceLocation(parseDeliverFrom),
              }));
              setFieldValue('deliverTo', JSON.stringify({
                ...parseDeliverTo,
                country_id: parseDeliverTo.country_id,
                state_id: parseDeliverTo.state_id || 0,
                city_id: parseDeliverTo.city_id || 0,
                nice_display: displayNiceLocation(parseDeliverTo),
              }));
            }
          }
        } else if (activeTab === 3) {
          setIsCreatingRequest(true);
          // submit the request
          await createRequest(values, (data) => {
            setIsCreatingRequest(false);
            if (data.success) {
              toast.success('Successfully created !.');
              setCreatedRequest({
                success: true,
                slug: data.resp.slug,
              });
            }
          });
        }
      } catch (err) {
        toast.error('Something went wrong, please come back later.');
        setIsCreatingRequest(false);
      }
    },
  });

  const handleStepClicking = async (step) => {
    const validate = await formik.validateForm();
    if (step === 1 && activeTab === 2) {
      setActiveTab(step);
    } else if (activeTab === 3) {
      setActiveTab(step);
    } else if (Object.keys(validate).length === 0) {
      setActiveTab(step);
    }
  };

  if (createdRequest.success) {
    return <Redirect to={`/request/view/${createdRequest.slug}`} />;
  }

  return (
    <>
      <SmContainer>
        <StepsHeader activeStep={activeTab} />
        <CreateRequestWrapper>
          <ProductDetailsContainer>
            <div>
              <form id="productDetails" onSubmit={formik.handleSubmit}>
                {
                  activeTab === 1 ? (
                    <ProductDetails
                      values={formik.values}
                      handleChange={formik.handleChange}
                      setFieldValue={formik.setFieldValue}
                      errors={formik.errors}
                    />
                  )
                  : activeTab === 2 ? (
                    <RequestDetails
                      values={formik.values}
                      handleChange={formik.handleChange}
                      setFieldValue={formik.setFieldValue}
                      errors={formik.errors}
                    />
                  )
                  : activeTab === 3 ? (
                    <RequestSummary
                      values={formik.values}
                    />
                  )
                  : null
                }
              </form>
              <ControlButtonsWrapper>
                <PrevBtn onClick={() => handleStepClicking(Math.max(activeTab - 1, 1))}>
                  <Icon glyph="view-back" />
                  Previous
                </PrevBtn>
                {
                  isCreatingRequest ? (
                    <Button type="button" customStyles="opacity: 0.75">
                      <Spinner center />
                    </Button>
                  ) : (
                    <Button
                      type="submit"
                      formId="productDetails"
                    >
                      { activeTab < 3
                        ? 'Next'
                        : (
                          'Create Request'
                        )}
                    </Button>
                  )
                }
              </ControlButtonsWrapper>
            </div>
          </ProductDetailsContainer>
        </CreateRequestWrapper>
      </SmContainer>
      <Footer />
    </>
  );
}
