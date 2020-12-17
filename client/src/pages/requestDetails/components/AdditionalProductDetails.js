import React from 'react';
import Icon from '@hackclub/icons';
import { AdditionalProductDetailsWrapper } from '../style';

export default function AdditionalProductDetails({
  unitPrice, quantity, size, link,
}) {
  return (
    <AdditionalProductDetailsWrapper>
        <p>
          <span> Unit Price </span>
          <span>{`${unitPrice} TND`}</span>
        </p>
        <p>
          <span> Quantity </span>
          <span>{quantity}</span>
        </p>
        <p>
          <span> Size </span>
          <span>{size}</span>
        </p>
        <p>
          <span> Where to buy </span>
          {
            link ? (
              <a href={link} rel="noreferrer" target="_blank">
                {link}
              </a>
            ) : 'N/A'
          }
        </p>
    </AdditionalProductDetailsWrapper>
  );
}
