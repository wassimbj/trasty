/* eslint-disable space-before-blocks */
/* eslint-disable nonblock-statement-body-position */
import React from 'react';
import styled, { css } from 'styled-components';

const Badge = styled.span`
  padding: 0.3rem 1rem;
  border-radius: 30px;
  font-weight: 500;
  ${(props) => props.small && css` padding: 0.25rem 0.65rem; font-size: 12px; `}
`;

const ExcellentBadge = styled(Badge)`
  color: #28df99;
  background: rgba(40, 223, 153, 0.14);
`;

const GoodBadge = styled(Badge)`
  color: #81b214;
  background: rgba(129, 178, 20, 0.18);
`;

const AverageBadge = styled(Badge)`
  color: #ffb600;
  background: rgb(255, 182, 0, 0.2);
`;

const BelowAverageBadge = styled(Badge)`
  color: #ff8500;
  background: rgb(255, 133, 0, 0.15);
`;

const BadBadge = styled(Badge)`
  color: #f94144;
  background: rgba(249, 65, 68, 0.2);
`;

const NothingBadge = styled(Badge)`
  color: #9e9e9e;
  background: rgb(96 125 139 / 17%);
`;

export default function ReviewBadge({ rating, small }) {
  if (rating >= 4.5){
    return <ExcellentBadge small={small}> Excellent </ExcellentBadge>;
  }
  if (rating >= 4 && rating <= 4.4){
    return <GoodBadge small={small}> Good </GoodBadge>;
  }
  if (rating >= 3.5 && rating < 4){
    return <AverageBadge small={small}> Average </AverageBadge>;
  }
  if (rating >= 3 && rating < 3.5){
    return <BelowAverageBadge small={small}> Below average </BelowAverageBadge>;
  }
  if (rating > 0 && rating < 3){
    return <BadBadge small={small}> Bad </BadBadge>;
  }
  return <NothingBadge small={small}> Nothing yet </NothingBadge>;
}
