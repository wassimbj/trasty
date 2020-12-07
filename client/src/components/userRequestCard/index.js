import React from 'react';
import LazyLoad from 'react-lazyload';
import {
  ProductDetails, ProductPrice, UserRequestCardLink,
  DetailsWrapper, ProductRequestDetails,
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
            <ProductRequestDetails>
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
                Anytime
              </p>
            </ProductRequestDetails>
          </ProductDetails>
          <ProductPrice>
              <span>Estimated reward </span>
              <strong> 50 TND </strong>
          </ProductPrice>
        </DetailsWrapper>
    </UserRequestCardLink>
  );
}
