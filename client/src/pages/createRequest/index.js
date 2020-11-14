/* eslint-disable no-nested-ternary */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState } from 'react';
import SmContainer from '../../components/smContainer';
import ProductDetails from './components/ProductDetails';
import DeliveryDetails from './components/DeliveryDetails';
import {
  CreateRequestWrapper, ProductSummaryContainer, ProductDetailsContainer,
} from './style';
import RequestSummary from './components/RequestSummary';
import { Button } from '../../components/button';

export default function CreateRequest() {
  const [activeTab, setActiveTab] = useState(1);

  return (
    <>
      <SmContainer>
        <CreateRequestWrapper>
          <ProductDetailsContainer>
            {
              activeTab === 1 ? <ProductDetails />
                : activeTab === 2 ? <DeliveryDetails />
                  : activeTab === 3 ? <RequestSummary /> : null
            }
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
              <div className="productPrice">
                <span> Product price </span>
                <span> 100DT </span>
              </div>
              <Button onClick={() => (activeTab < 3 ? setActiveTab(activeTab + 1) : false)}>
                { activeTab < 3 ? 'Next' : 'Create Request' }
              </Button>
            </div>
          </ProductSummaryContainer>
        </CreateRequestWrapper>
      </SmContainer>
    </>
  );
}