import React from 'react';
import { Button } from '../../../components/button';
import {
  OffersNumber, ProductPrice, RequestAmountsDetailsWrapper, TravelerReward,
} from '../style';

export default function RequestAmountsDetails() {
  return (
    <RequestAmountsDetailsWrapper>
      <TravelerReward>
        <span> Traveler reward </span>
        <b> 25DT </b>
      </TravelerReward>
      <ProductPrice>
        <span> Product price: </span>
        <span> 800.00DT </span>
      </ProductPrice>
      <OffersNumber>
        3 offers from 50.00DT
      </OffersNumber>
      <Button customStyles="margin: 2rem 0;"> Make your offer </Button>
    </RequestAmountsDetailsWrapper>
  );
}
