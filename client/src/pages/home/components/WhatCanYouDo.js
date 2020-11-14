import React from 'react';
import MainContainer from '../../../components/mainContainer';
import {
  WhatYouCanDoContainer, WhatYouCanDoTitle, WhatYouCanDoWrapper, WhatYouCanDoCard,
} from '../style';

export default function WhatCanYouDo() {
  return (
    <WhatYouCanDoContainer>
      <MainContainer>
        <WhatYouCanDoTitle> What you can do with Trusti </WhatYouCanDoTitle>
        <WhatYouCanDoWrapper>
          <WhatYouCanDoCard>
            <div className="col-head">
              <img src="/images/icons/whatyoucando1.png" alt="" />
              <span> Get products that are not available </span>
            </div>
            <p>
              Trusti is a platform that helps you get goods from around the
              world or even locally, just post what you want to buy from anywhere
              and a traveler will get it for you.
            </p>
          </WhatYouCanDoCard>
          <WhatYouCanDoCard>
            <div className="col-head">
              <img src="/images/icons/whatyoucando2.png" alt="" />
              <span> Save on shopping and shipping </span>
            </div>
            <p>
              With Trusti you can enjoy discounts and special offers all over the
              world! use discount coupons as if you lived in the store’s country,
              You will save a lot of money.
            </p>
          </WhatYouCanDoCard>
          <WhatYouCanDoCard>
            <div className="col-head">
              <img src="/images/icons/whatyoucando3.png" alt="" />
              <span> Be the first to get newly released products </span>
            </div>
            <p>
              With Trusti you will be able to get the newest products
              even before they are released in Tunisia.
            </p>
          </WhatYouCanDoCard>
          <WhatYouCanDoCard>
            <div className="col-head">
              <img src="/images/icons/whatyoucando4.png" alt="" />
              <span> Earn money while traveling the world or locally. </span>
            </div>
            <p>
              With Trusti you will be able to earn money while you are traveling from any where,
              or locally from city to another. just as simple as that.
            </p>
          </WhatYouCanDoCard>
        </WhatYouCanDoWrapper>
      </MainContainer>
    </WhatYouCanDoContainer>
  );
}
