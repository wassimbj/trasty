import React from 'react';
import { AdditionalProductDetailsWrapper } from '../style';

export default function AdditionalProductDetails() {
  return (
    <AdditionalProductDetailsWrapper>
        <p>
          <span> Unit Price </span>
          <span> 200 TD </span>
        </p>
        <p>
          <span> Quantity </span>
          <span> 1 </span>
        </p>
        <p>
          <span> Packaging </span>
          <span> With box </span>
        </p>
        <p>
          <span> Where to buy </span>
          <a href="https://amazon.com" rel="noreferrer" target="_blank">www.amazon.com</a>
        </p>
    </AdditionalProductDetailsWrapper>
  );
}
