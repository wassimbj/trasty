import React from 'react';
import LazyLoad from 'react-lazyload';
import dayjs from 'dayjs';
import {
  ProductDetails,
  ProductPrice,
  UserRequestCardLink,
  DetailsWrapper,
  ProductRequestDetails,
  UserRequestCardWrapper,
} from './style';

export default function UserRequestCard({
  slug,
  img,
  title,
  deliver,
  price,
  before,
  isMine,
}) {
  // console.log();
  // eslint-disable-next-line no-param-reassign
  isMine = true;
  return (
    <UserRequestCardWrapper>
      <DetailsWrapper>
        <ProductDetails>
          <LazyLoad once>
            <UserRequestCardLink to={`/request/view/${slug}`} target="_blank">
              <img src={img} alt="" />
            </UserRequestCardLink>
          </LazyLoad>
          <ProductRequestDetails>
            <UserRequestCardLink to={`/request/view/${slug}`} target="_blank">
              <h2>{title}</h2>
            </UserRequestCardLink>
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
              {before === 0
                ? 'Anytime'
                : dayjs().add(before, 'd').format('MMM D, YYYY')}
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
    </UserRequestCardWrapper>
  );
}
