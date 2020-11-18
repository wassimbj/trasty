import React from 'react';
import Icon from '@hackclub/icons';
import styled from 'styled-components';

const RatingWrapper = styled.div`
  // background: #ffd6d6;
  border-radius: 50px;
  // font-size: 14px;
  display: flex;
  align-items: center;
  max-width: 100px;
  // margin-top: 0.5rem;
  // padding: 0.25rem 0.5rem;
  // color: #ff3030;
  & svg{ display: inline-block; }
`;

export default function RatingStars({ rating }) {
  const pureRate = parseInt(rating || 0, 10);
  const rateColors = [
    '#ffba08', // yellow
    '#faa307', // light orange
    '#f48c06', // orange
    '#ef476f', // pink
    '#e63946', // red
  ];
  return (
    <RatingWrapper>
      {
        [...Array(5)].map((_, i) => (
          <Icon
            glyph="like-fill"
            size={18}
            color={`${(pureRate === 0 || pureRate < i + 1) ? '#dee2e6' : rateColors[i]}`}
          />
        ))
      }
    </RatingWrapper>
  );
}
