import React from 'react';
import MdContainer from '../../components/mdContainer';
import DeliveryDetails from './components/DeliveryDetails';
import RequestAmountsDetails from './components/RequestAmountsDetails';
import AdditionalProductDetails from './components/AdditionalProductDetails';
import RequesterInfo from './components/RequesterInfo';
import {
  ProductDescription, ProductDetailsContainer,
  ProductImg, ProductTitle, RequestDetailsContainer, RequestSummaryContainer,
} from './style';
import Footer from '../../components/footer';

export default function RequestDetails() {
  return (
    <>
    <MdContainer>
      <RequestDetailsContainer>
        <ProductDetailsContainer>
          <div className="wrapper">
            <ProductImg
              src="https://media.direct.playstation.com/is/image/sierialto/DemonsSouls_ProductHero1_900X900?$Background_Large$"
              alt=""
            />
            <ProductTitle>
              Apple Watch Series 6 GPS, 44mm Space Gray Aluminum Case with Black
            </ProductTitle>
            <ProductDescription>
              <span>Item description</span>
              Lorem ipsum adbf us is a niola pmaa babel klein joko lpmiu thaju
            </ProductDescription>
            <AdditionalProductDetails />
          </div>
        </ProductDetailsContainer>
        <RequestSummaryContainer>
          <div className="wrapper">
            <RequesterInfo />
            <RequestAmountsDetails />
            <DeliveryDetails />
          </div>
        </RequestSummaryContainer>
      </RequestDetailsContainer>
    </MdContainer>
    <Footer />
    </>
  );
}
