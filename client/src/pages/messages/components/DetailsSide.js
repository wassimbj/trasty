import React from 'react';
import Icon from '@hackclub/icons';
import { CloseDetailsBtn, OfferDetailsSide, OfferSideTitle } from '../style';

export default function DetailsSide({ roomId, onClose, isDetailsClosed }) {
  return (
    <OfferDetailsSide isDetailsClosed={isDetailsClosed}>
      <OfferSideTitle>
        Details
      <CloseDetailsBtn onClick={onClose}>
        <Icon glyph="view-close" size={26} />
      </CloseDetailsBtn>
      </OfferSideTitle>
    </OfferDetailsSide>
  );
}
