import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Icon from '@hackclub/icons';

const Card = styled.div`
  border: 1px solid rgba(0,0,0,0.1);
  padding: 1rem 0.5rem;
  border-radius: 5px;
  max-width: 100%;
  display: block;
  transition: 250ms;
  &:hover{ border-color: #2650ff; }
`;

const CardLink = styled(Link)` display: block; `;

const ProductImg = styled.img`
  border-radius: 5px;
  max-width: 150px;
  width: 200px;
  height: 200px;
  display: block;
  object-fit: cover;
  margin: 0 auto;
`;

const ProductTitle = styled.span`
  display: block;
  font-weight: 500;
  font-size: 16px;
  text-align: center;
`;

const ProductPrice = styled.p`
  color: gray;
  text-align: center;
  margin-top: 1rem;
  & span { color: black; font-weight: 500; margin-left: 0.25rem; }
`;

const DeleteButton = styled.span`
  padding: 0.5rem 1rem;
  border-radius: 5px;
  cursor: pointer;
  background: rgba(0,0,0,0.15);
  transition: 250ms;
  &:hover{ background: rgba(0,0,0,0.18) }
  color: #000;
  text-align: center;
  display: block;
  margin-top: 1rem;
  display: flex; align-items: center; justify-content: center;
  color: #ff3939;
`;

export default function RequestCard() {
  return (
    <Card>
      <CardLink to="/request/view/588">
        <ProductImg src="https://media.direct.playstation.com/is/image/sierialto/DemonsSouls_ProductHero1_900X900?$Background_Large$" />
        <ProductTitle> District Functionality Director </ProductTitle>
        <ProductPrice>
          Product price
          <span> 25 TND </span>
        </ProductPrice>
      </CardLink>
      <DeleteButton>
        <Icon glyph="delete" size={23} />
        Delete
      </DeleteButton>
    </Card>
  );
}
