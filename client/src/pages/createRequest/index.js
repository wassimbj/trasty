/* eslint-disable indent */
/* eslint-disable no-nested-ternary */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState } from 'react';
import { useFormik } from 'formik';
import * as yup from 'yup';
import SmContainer from '../../components/smContainer';
import ProductDetails from './components/ProductDetails';
import DeliveryDetails from './components/DeliveryDetails';
import {
  CreateRequestWrapper, ProductSummaryContainer,
  ProductDetailsContainer, ProductSummaryItem,
  ProductSummaryItemPrice,
} from './style';
import RequestSummary from './components/RequestSummary';
import { Button } from '../../components/button';
import Footer from '../../components/footer';

export default function CreateRequest() {
  const [activeTab, setActiveTab] = useState(2);

  const formik = useFormik({
    initialValues: {
      productLink: '',
      productImage: '',
      productTitle: '',
      productDesc: '',
      productUnitPrice: 0,
      productQuantity: 1,
      deliverFrom: '',
      deliverTo: '',
      deliverBefore: '',
    },
    validationSchema: yup.object().shape({
      productLink: yup.string()
                      .max(500, 'the link you provided is too long'),
      productTitle: yup.string()
                      .max(150, 'the title is too long')
                      .required('please write the product title'),
      productUnitPrice: yup.number()
                      .max(100000000, 'price is too hight, are you gonna buy a plane ?')
                      .min(1, "price can't be 0TND")
                      .required('please enter the product unit price'),
    }),
    validateOnChange: false,
    validateOnBlur: false,
    onSubmit: (values) => {
      console.log(values);
      if (activeTab < 3) {
        setActiveTab(activeTab + 1);
      }
    },
  });

  return (
    <>
      <SmContainer>
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
                      formikInstance={formik}
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
            </div>
          </ProductDetailsContainer>
          <ProductSummaryContainer>
            <div>
              <span className="productTitle"> Handmade Metal Table </span>
              <p>
                <span> Deliver from </span>
                France
              </p>
              <p>
                <span> Deliver to </span>
                Sousse, TN
              </p>
              <p>
                <span> Deliver before </span>
                11 Nov, 2020
              </p>
              <ProductSummaryItem>
                <span> Product price </span>
                <ProductSummaryItemPrice> 100TND </ProductSummaryItemPrice>
              </ProductSummaryItem>
              <Button
                type="submit"
                formId="productDetails"
              >
                { activeTab < 3 ? 'Next' : 'Create Request' }
              </Button>
            </div>
          </ProductSummaryContainer>
        </CreateRequestWrapper>
      </SmContainer>
      <Footer />
    </>
  );
}
