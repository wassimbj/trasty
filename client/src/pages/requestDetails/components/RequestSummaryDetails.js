/* eslint-disable no-nested-ternary */
import React, { useContext, useState } from 'react';
import Icon from '@hackclub/icons';
import { Button } from '../../../components/button';
// import Tip from '../../../components/tip';
import UserAuthContext from '../../../contexts/UserAuthContext';

import {
  AlreadyOfferedMsg,
  DeleteOfferBtn,
  RequestAmounts, RequestAmountsDetailsWrapper, TotalAmount,
} from '../style';
import AddOfferModal from '../../../components/addOfferModal';
import ToolTip from '../../../components/toolTip';
import getEstimatedReward from '../../../utils/getEstimatedReward';
import DeleteOfferModal from '../../../components/deleteOfferModal';
import Spinner from '../../../components/spinner';

export default function RequestAmountsDetails({
  quantity, productPrice, requestId,
  isMyRequest, iAlreadyOffered, requestBy
}) {
  const { isLoggedIn } = useContext(UserAuthContext);
  const [isAddOfferModalOpen, setIsAddOfferModalOpen] = useState(false);
  const [isDeleteOfferModalOpen, setIsDeleteOfferModalOpen] = useState(false);

  const productTotalPrice = parseFloat(productPrice * quantity).toFixed(2);
  const reward = getEstimatedReward(productPrice, quantity);
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
        {
          isLoggedIn.loading ? (
            <Button customStyles="margin: 2rem 0 0.5rem;">
              <Spinner center />
            </Button>
          ) : (
            !isMyRequest && !iAlreadyOffered ? (
              <Button
                customStyles="margin: 2rem 0 0.5rem;"
                onClick={() => (isLoggedIn.status ? setIsAddOfferModalOpen(true) : false)}
              >
                Offer Help
              </Button>
            ) : null
          )
        }
        {iAlreadyOffered ? (
          <AlreadyOfferedMsg>
            <p>Your offer is sent</p>
            <DeleteOfferBtn onClick={() => setIsDeleteOfferModalOpen(true)}>
              Delete Offer
            </DeleteOfferBtn>
          </AlreadyOfferedMsg>
        ) : null}
      </RequestAmountsDetailsWrapper>
      {
        !isMyRequest ? (
          isAddOfferModalOpen ? (
            <AddOfferModal
              onClose={() => setIsAddOfferModalOpen(false)}
              requestId={requestId}
              productUnitPrice={productPrice}
              quantity={quantity}
              requestBy={requestBy}
            />
          ) : null
        ) : null
      }
      {
        iAlreadyOffered && (
          isDeleteOfferModalOpen && (
            <DeleteOfferModal
              onClose={() => setIsDeleteOfferModalOpen(false)}
              requestId={requestId}
            />
          )
        )
      }
    </>
  );
}
