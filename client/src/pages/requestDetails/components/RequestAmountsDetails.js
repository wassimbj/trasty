import React from 'react';
import Icon from '@hackclub/icons';
import { Button } from '../../../components/button';
import Tip from '../../../components/tip';
import {
  RequestAmounts, RequestAmountsDetailsWrapper, TotalAmount,
} from '../style';

export default function RequestAmountsDetails() {
  return (
    <RequestAmountsDetailsWrapper>
      <RequestAmounts>
        <p>
          Product(s) price
          <Tip content="Includes the products price in case of quantity is more then 1">
            <span><Icon glyph="info" size={22} color="#b7b7b7" /></span>
          </Tip>
        </p>
        <span> 800.00 TD </span>
      </RequestAmounts>
      <RequestAmounts>
        <p> Estimated taxes </p>
        <span> 0 TD </span>
      </RequestAmounts>
      <RequestAmounts>
        <p>
          Estimated reward
          <Tip content="Approximate earning you will get when you deliver this product">
            <span><Icon glyph="info" size={22} color="#b7b7b7" /></span>
          </Tip>
        </p>
        <span> 206 TD </span>
      </RequestAmounts>
      <hr />
      <TotalAmount>
        <p>
          Total to charge
          <Tip content="Total amount to be received when you deliver this order.">
            <span><Icon glyph="info" size={22} color="#b7b7b7" /></span>
          </Tip>
        </p>
        <span> 1200 TD </span>
      </TotalAmount>
      <Button customStyles="margin: 2rem 0 0.5rem;"> Make your offer </Button>
    </RequestAmountsDetailsWrapper>
  );
}
