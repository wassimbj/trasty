import React from 'react';
import styled from 'styled-components';
import Icon from 'spectrum-icons';
import Tip from '../../../components/tip';
import { ProductDetails } from '../../requestsList/style';

const PriceSummaryTitle = styled.span`
   font-weight: bold;
   font-size: 20px;
   display: block;
   margin: 1.5rem 0;
`;

const PriceSummaryInfo = styled.div`
   color: #8f8f95;
   display: flex;
   align-items: center;
   justify-content: space-between;
   margin-bottom: 1rem;
   padding: 0 0.75rem;
`;

const EstimatedTotal = styled.div`
   display: flex;
   align-items: center;
   border-top: 1px solid rgba(0,0,0,0.1);
   justify-content: space-between;
   margin-top: 1.5rem;
   padding: 1.5rem 0 0.75rem;
   & p { display: flex; align-items: center; }
   & strong { font-size: 22px; }
`;

const InfoIcon = styled.span`
   color: #555;
   background: rgba(0,0,0,0.15);
   padding: 0.25rem;
   border-radius: 30px;
   margin-left: 0.75rem;
   display: inline-block;
`;

const Notice = styled.div`
   background: rgb(38,80,255,0.15);
   // color: rgb(38,80,255,0.75);
   color: rgb(0,0,0,0.65);
   padding: 1rem;
   border-radius: 5px;
   margin: 1rem 0.5rem;
`;

export default function RequestSummary() {
  return (
    <>
      <div>
        <span className="title"> 3. Your Request summary </span>
        <p className="optinalHeading">Review your order summary below.</p>
        <ProductDetails>
          <img src="https://media.direct.playstation.com/is/image/sierialto/DS4_ElectricPurple_Product%20hero1_900x900?$Background_Large$" alt="" />
          <div>
            <h2> Fantastic Steel Sausages </h2>
            <p>
              <span>Deliver to </span>
              Sousse, TN
            </p>
            <p>
              <span>From </span>
              Germany
            </p>
            <p>
              <span>Before </span>
              11 Nov, 2020
            </p>
          </div>
        </ProductDetails>
        <PriceSummaryTitle> Price summary </PriceSummaryTitle>
        <PriceSummaryInfo>
          <span> Product price </span>
          <span> 20DT </span>
        </PriceSummaryInfo>
        <PriceSummaryInfo>
          <span> US Sales tax </span>
          <span> 30DT </span>
        </PriceSummaryInfo>
        <PriceSummaryInfo>
          <span> Traveler reward </span>
          <span> 5DT </span>
        </PriceSummaryInfo>
        <PriceSummaryInfo>
          <span> Trusti fee </span>
          <span> 2DT </span>
        </PriceSummaryInfo>
        <EstimatedTotal>
          <p>
            <span> Estimated Total </span>
            <Tip content="This is just an estimated price, the real price depends on the offer you get from travelers">
              <InfoIcon><Icon glyph="idea" size={22} /></InfoIcon>
            </Tip>
          </p>
          <strong> 300DT </strong>
        </EstimatedTotal>
        <Notice>
          You pay Trusti fees when you accept a Traveler offer.
          the rest of the price you will pay it directly to the Traveler when you get your item.
        </Notice>
      </div>
    </>
  );
}
