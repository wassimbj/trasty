import React from 'react';
import Icon from '../../../components/icons';
import { DeliveryDetailsWrapper } from '../style';

export default function DeliveryDetails() {
  return (
    <DeliveryDetailsWrapper>
        <p>
          <Icon glyph="view-forward" color="gray" size={22} />
          <span> Deliver to </span>
          Sousse, TN
        </p>
        <p>
          <Icon glyph="view-forward" color="gray" size={22} />
          <span> From </span>
          Germany
        </p>
        <p>
          <Icon glyph="calendar" color="gray" size={22} />
          <span> Before </span>
          March 21, 2021
        </p>
    </DeliveryDetailsWrapper>
  );
}
