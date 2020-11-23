import React from 'react';
import Icon from '@hackclub/icons';
import {
  DeleteButton, OffersTotal, ProductImg, ProductInfo, ProductPrice,
  ProductTitle, RequestCardContainer, RequestCardLink,
} from '../style';

export default function RequestCard() {
  return (
    <RequestCardContainer>
      <RequestCardLink to="/my/requests/852">
        <ProductImg src="https://media.direct.playstation.com/is/image/sierialto/DemonsSouls_ProductHero1_900X900?$Background_Large$" />
        <ProductInfo>
          <ProductTitle> District Functionality Director </ProductTitle>
          <ProductPrice>
            Product price
            <span> 25 TND </span>
          </ProductPrice>
          <OffersTotal> 5 Offers </OffersTotal>
        </ProductInfo>
      </RequestCardLink>
      <DeleteButton>
        <Icon glyph="delete" size={23} />
        Delete
      </DeleteButton>
    </RequestCardContainer>
  );
}
