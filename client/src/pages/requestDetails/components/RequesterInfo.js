import React from 'react';
import { WhiteButton } from '../../../components/button';
import { RequesterInfoWrapper } from '../style';

export default function RequesterInfo() {
  return (
    <RequesterInfoWrapper>
        <img src="https://s3.amazonaws.com/uifaces/faces/twitter/salimianoff/128.jpg" alt="" />
        <div>
          <b> Jaquelin Kuhn </b>
          <small> requested 2 min ago </small>
        </div>
        <WhiteButton customStyles="margin-top: 1rem; padding: 0.5rem; max-width: 165px; border-radius: 50px; border-width: 1px;">
          Send Message
        </WhiteButton>
    </RequesterInfoWrapper>
  );
}
