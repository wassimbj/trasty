/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import Icon from '../../../components/icons';
import {
  Input, InputBlock, TextArea, Quantity, WebsiteLink,
} from '../style';

export default function ProductDetails() {
  return (
    <>
      <div>
        <span className="title"> 1. Product Details </span>
        <InputBlock>
          <label> Product Link </label>
          <Input type="text" placeholder="Enter product link" />
          <WebsiteLink>
            <span><Icon glyph="link" size={27} /></span>
            <span> www.amazon.ca </span>
          </WebsiteLink>
        </InputBlock>
        <InputBlock>
          <label> Product image </label>
          <Input type="file" placeholder="Enter product link" />
        </InputBlock>
        <InputBlock>
          <label> Product title </label>
          <Input type="text" placeholder="Enter product title" />
        </InputBlock>
        <InputBlock>
          <label> Product description </label>
          <TextArea rows="3" type="text" placeholder="Enter product description" />
        </InputBlock>
        <InputBlock>
          <label> Price on www.site.com </label>
          <Input type="text" placeholder="Enter product link" />
        </InputBlock>
        <Quantity>
          <label> Quantity </label>
          <input type="number" defaultValue="1" />
        </Quantity>
      </div>
    </>
  );
}
