import React from 'react';
import LazyLoad from 'react-lazyload';
import dayjs from 'dayjs';
import {
  ProductDetails, ProductPrice, UserRequestCardLink,
  DetailsWrapper, ProductRequestDetails,
} from './style';

export default function UserRequestCard({
  slug, img, title, deliver, price, before,
}) {
  // console.log();
  console.log('before: ', before);
  return (
    <UserRequestCardLink to={`/request/view/${slug}`} target="_blank">
        <DetailsWrapper>
          <ProductDetails>
            <LazyLoad once>
              <img
                src={img}
                alt=""
              />
            </LazyLoad>
            <ProductRequestDetails>
              <h2>{title}</h2>
              <p>
                <span>Deliver to </span>
                {deliver.to}
              </p>
              <p>
                <span>From </span>
                {deliver.from}
              </p>
              <p>
                <span>Before </span>
                {before === 0 ? 'Anytime' : dayjs().add(before, 'd').format('MMM D, YYYY')}
              </p>
            </ProductRequestDetails>
          </ProductDetails>
          <ProductPrice>
              <span>Estimated reward </span>
              <strong>
                {' '}
                {Number(price * (price > 100 ? 0.09 : 0.2)).toFixed(2)}
                {' '}
                TND
              </strong>
          </ProductPrice>
        </DetailsWrapper>
    </UserRequestCardLink>
  );
}
