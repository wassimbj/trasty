/* eslint-disable indent */
/* eslint-disable no-nested-ternary */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState } from 'react';
import { useFormik } from 'formik';
import * as yup from 'yup';
import Icon from '@hackclub/icons';
import SmContainer from '../../components/smContainer';
import ProductDetails from './components/ProductDetails';
import DeliveryDetails from './components/DeliveryDetails';
import {
  CreateRequestWrapper, PrevBtn, ProductDetailsContainer,
  ControlButtonsWrapper,
} from './style';
import RequestSummary from './components/RequestSummary';
import { Button } from '../../components/button';
import Footer from '../../components/footer';
import StepsHeader from './components/StepsHeader';
// import displayNiceLocation from '../../utils/displayNiceLocation';

export default function CreateRequest() {
  const [activeTab, setActiveTab] = useState(1);

  const validationSchemaArray = [
    {
      productLink: yup.string()
                      .max(500, 'the link you provided is too long')
                      .url('Invalid link')
                      .nullable(true),
      productImage: yup.mixed()
                      .required('please upload the product image'),
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
      productUnitPrice: 0,
      productQuantity: 1,
      deliverFrom: '',
      deliverTo: '',
      deliverBefore: '',
    },
    validationSchema: yup.object().shape(validationSchemaArray[activeTab - 1]),
    validateOnChange: activeTab === 1,
    validateOnBlur: false,
    onSubmit: (values) => {
      if (activeTab < 3) {
        setActiveTab(Math.min(activeTab + 1, 3));
      } else if (activeTab === 3) {
        console.log(vvalues);
      }
    },
  });

  const handleStepClicking = async (step) => {
    const validate = await formik.validateForm();
    // console.log(Object.keys(validate));
    if (step === 1 && activeTab === 2) {
      setActiveTab(step);
    } else if (activeTab === 3) {
      setActiveTab(step);
    } else if (Object.keys(validate).length === 0) {
      setActiveTab(step);
    }
  };

  return (
    <>
      <SmContainer>
        <StepsHeader activeStep={activeTab} onClickStep={handleStepClicking} />
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
                    <DeliveryDetails
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
                <Button
                  type="submit"
                  formId="productDetails"
                >
                  { activeTab < 3 ? 'Next' : 'Create Request' }
                </Button>
              </ControlButtonsWrapper>
            </div>
          </ProductDetailsContainer>
        </CreateRequestWrapper>
      </SmContainer>
      <Footer />
    </>
  );
}
