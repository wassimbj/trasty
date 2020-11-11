import React from 'react';
import {
  ProductDetails, ProductPrice, RequesterInfo, UserRequestCardWrapper,
} from '../style';

export default function UserRequestCard() {
  return (
    <UserRequestCardWrapper to="/request/ID">
      <RequesterInfo>
        <img src="https://s3.amazonaws.com/uifaces/faces/twitter/carlosgavina/128.jpg" alt="" />
        <div>
          <span> Hortense McClure </span>
          <span> 6 min ago </span>
        </div>
      </RequesterInfo>
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
      <ProductPrice>
        <p className="price">
          <span>Product price </span>
          <span> 25DT </span>
        </p>
        <p className="reward">
          <span>Traveler Reward </span>
          <span> 0DT </span>
        </p>
        <p className="buyLocation">
          <span>Buy it from </span>
          <span>www.amazon.com</span>
        </p>
      </ProductPrice>
    </UserRequestCardWrapper>
  );
}
