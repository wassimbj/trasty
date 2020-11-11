import React from 'react';
import MdContainer from '../../components/mdContainer';
import DeliveryDetails from './components/DeliveryDetails';
import RequestAmountsDetails from './components/RequestAmountsDetails';
import AdditionalProductDetails from './components/AdditionalProductDetails';
import RequesterInfo from './components/RequesterInfo';
import {
  OffersWrapper,
  ProductDescription, ProductDetailsContainer,
  ProductImg, ProductTitle, RequestDetailsContainer, RequestSummaryContainer,
} from './style';
import UserOfferCard from './components/UserOfferCard';

export default function RequestDetails() {
  return (
    <MdContainer>
      <RequestDetailsContainer>
        <ProductDetailsContainer>
          <div className="wrapper">
            <ProductImg src="https://d18uuxc84juryi.cloudfront.net/attachments/c0122f42cf897784f10fc092e72cb1b8c44af274/store/limit/600/600/dfb028e37133a18c1548d1e33bb7bad3d6afd904c9b30db194479342ad44/file.jpeg" alt="" />
            <ProductTitle>
              Apple Watch Series 6 GPS, 44mm Space Gray Aluminum Case with Black
            </ProductTitle>
            <ProductDescription>
              <span>Item description</span>
              Lorem ipsum adbf us is a niola pmaa babel klein joko lpmiu thaju
            </ProductDescription>
          </div>
        </ProductDetailsContainer>
        <OffersWrapper>
          <span> Delivery Offers </span>
          {/* <NoOffersMsg> No offers yet... </NoOffersMsg> */}
          {
            [...Array(3)].map(() => <UserOfferCard />)
          }
        </OffersWrapper>
        <RequestSummaryContainer>
          <div className="wrapper">
            <RequesterInfo />
            <RequestAmountsDetails />
            <DeliveryDetails />
            <AdditionalProductDetails />
          </div>
        </RequestSummaryContainer>
      </RequestDetailsContainer>
    </MdContainer>
  );
}
