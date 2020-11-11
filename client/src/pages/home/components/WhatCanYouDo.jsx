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
              <img src="/images/icons/whatyoucando1.png" width="60" alt="" />
              <span> Get products that are not available or expensive </span>
            </div>
            <p>
              Trusti is a platform that helps you get goods from around the
              world, just post what you want to buy from anywhere
              and a traveler will get it for you. Access the world shops.
            </p>
          </WhatYouCanDoCard>
          <WhatYouCanDoCard>
            <div className="col-head">
              <img src="/images/icons/whatyoucando2.png" width="60" alt="" />
              <span> Save on shopping and shipping </span>
            </div>
            <p>
              With Trusti you can enjoy discounts and special offers all over the
              world! use discount coupons as if you lived in the store’s country.
            </p>
          </WhatYouCanDoCard>
          <WhatYouCanDoCard>
            <div className="col-head">
              <img src="/images/icons/whatyoucando3.png" width="60" alt="" />
              <span> Be the first to get newly released products </span>
            </div>
            <p>
              With Trusti you will be able to get the newest products
              even before they are released in Tunisia.
            </p>
          </WhatYouCanDoCard>
        </WhatYouCanDoWrapper>
      </MainContainer>
    </WhatYouCanDoContainer>
  );
}
