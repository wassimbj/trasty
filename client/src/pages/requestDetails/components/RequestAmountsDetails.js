import React, { useState } from 'react';
import Icon from '@hackclub/icons';
import { Button } from '../../../components/button';
// import Tip from '../../../components/tip';
import {
  RequestAmounts, RequestAmountsDetailsWrapper, TotalAmount,
} from '../style';
import AddOfferModal from '../../../components/addOfferModal';
import ToolTip from '../../../components/toolTip';

export default function RequestAmountsDetails() {
  const [isModalOpen, setModalOpen] = useState(false);
  return (
    <>
      <RequestAmountsDetailsWrapper>
        <RequestAmounts>
          <p>
            Product(s) price
            <ToolTip inline content="Includes the products price in case of quantity is more then 1">
              <span><Icon glyph="info" size={22} color="#b7b7b7" /></span>
            </ToolTip>
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
            <ToolTip inline content="Approximate earning you will get when you deliver this product">
              <span><Icon glyph="info" size={22} color="#b7b7b7" /></span>
            </ToolTip>
          </p>
          <span> 206 TD </span>
        </RequestAmounts>
        <hr />
        <TotalAmount>
          <p>
            Total to charge
            <ToolTip inline content="Total amount to be received when you deliver this order.">
              <span><Icon glyph="info" size={22} color="#b7b7b7" /></span>
            </ToolTip>
          </p>
          <span> 1200 TD </span>
        </TotalAmount>
        <Button customStyles="margin: 2rem 0 0.5rem;" onClick={() => setModalOpen(true)}>
          Make your offer
        </Button>
      </RequestAmountsDetailsWrapper>
      { isModalOpen && <AddOfferModal onClose={() => setModalOpen(false)} /> }
    </>
  );
}
