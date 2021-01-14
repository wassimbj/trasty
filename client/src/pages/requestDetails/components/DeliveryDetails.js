import React from 'react';
import Icon from '@hackclub/icons';
import dayjs from 'dayjs';
import { DeliveryDetailsWrapper } from '../style';

export default function DeliveryDetails({ deliverFrom, deliverTo, before }) {
  return (
    <DeliveryDetailsWrapper>
        <p>
          <Icon glyph="view-forward" color="gray" size={22} />
          <span> Deliver to </span>
          {deliverTo}
        </p>
        <p>
          <Icon glyph="view-forward" color="gray" size={22} />
          <span> From </span>
          {deliverFrom}
        </p>
        <p>
          <Icon glyph="clock" color="gray" size={22} />
          <span> Before </span>
          {before ? dayjs().add(before, 'd').format('MMM D, YYYY') : 'Anytime'}
        </p>
    </DeliveryDetailsWrapper>
  );
}
