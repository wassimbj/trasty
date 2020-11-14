import React from 'react';
import Icon from '@hackclub/icons';
import Tip from '../../../components/tip';
import {
  EstimatedTotal, InfoIcon, Notice, PriceSummaryInfo, PriceSummaryTitle, ProductDetails,
} from '../style';

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
