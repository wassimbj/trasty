import React from 'react';
import LazyLoad from 'react-lazyload';
import {
  ProductDetails, ProductPrice, UserRequestCardLink, DetailsWrapper,
} from './style';

export default function UserRequestCard() {
  return (
    <UserRequestCardLink to="/request/view/558" target="_blank">
        <DetailsWrapper>
          <ProductDetails>
            <LazyLoad once>
              <img
                src="https://media.direct.playstation.com/is/image/sierialto/DemonsSouls_ProductHero1_900X900?$Background_Large$"
                alt=""
              />
            </LazyLoad>
            <div className="requestDetails">
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
              <p>
                <span>Product price </span>
                25 TND
              </p>
            </div>
          </ProductDetails>
          <ProductPrice>
              <span>Estimated reward </span>
              <strong> 50 TND </strong>
          </ProductPrice>
        </DetailsWrapper>
    </UserRequestCardLink>
  );
}
