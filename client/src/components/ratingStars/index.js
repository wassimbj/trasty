import React from 'react';
import Icon from '@hackclub/icons';
import styled from 'styled-components';

const RatingWrapper = styled.div`
  // background: #ffd6d6;
  border-radius: 50px;
  font-size: 14px;
  display: flex;
  align-items: center;
  max-width: 100px;
  // margin-top: 0.5rem;
  // padding: 0.25rem 0.5rem;
  color: #ff3030;
  & svg{ display: inline-block; }
`;

export default function RatingStars() {
  return (
    <RatingWrapper>
      <Icon glyph="like-fill" size={18} />
      <Icon glyph="like-fill" size={18} />
      <Icon glyph="like-fill" size={18} />
      <Icon glyph="like-fill" size={18} />
      <Icon glyph="like-fill" size={18} />
    </RatingWrapper>
  );
}
