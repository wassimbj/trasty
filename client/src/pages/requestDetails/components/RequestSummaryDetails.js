import React, { useState } from 'react';
import Icon from '@hackclub/icons';
import { Button } from '../../../components/button';
// import Tip from '../../../components/tip';
import {
  RequestAmounts, RequestAmountsDetailsWrapper, TotalAmount,
} from '../style';
import AddOfferModal from '../../../components/addOfferModal';
import ToolTip from '../../../components/toolTip';

export default function RequestAmountsDetails({ quantity, productPrice }) {
  const [isModalOpen, setModalOpen] = useState(false);

  const productTotalPrice = parseFloat(productPrice * quantity);
  const reward = parseFloat(productPrice * 0.15).toFixed(2);
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
          <span>{`${productTotalPrice} TND`}</span>
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
          <span>{`${reward} TND`}</span>
        </RequestAmounts>
        <hr />
        <TotalAmount>
          <p>
            Total to charge
            <ToolTip inline content="Total amount to be received when you deliver this order.">
              <span><Icon glyph="info" size={22} color="#b7b7b7" /></span>
            </ToolTip>
          </p>
          <span>
            {parseFloat(parseFloat(reward) + parseFloat(productTotalPrice)).toFixed(2)}
            {' '}
            TND
          </span>
        </TotalAmount>
        <Button customStyles="margin: 2rem 0 0.5rem;" onClick={() => setModalOpen(true)}>
          Offer Help
        </Button>
      </RequestAmountsDetailsWrapper>
      {
        isModalOpen && (
        <AddOfferModal
          onClose={() => setModalOpen(false)}
          productUnitPrice={productPrice}
          quantity={quantity}
        />
        )
      }
    </>
  );
}
