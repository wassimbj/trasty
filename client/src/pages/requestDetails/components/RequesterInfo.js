import React from 'react';
import { RequesterInfoWrapper } from '../style';

export default function RequesterInfo() {
  return (
    <RequesterInfoWrapper>
        <img src="https://s3.amazonaws.com/uifaces/faces/twitter/salimianoff/128.jpg" alt="" />
        <div>
          <b> Jaquelin Kuhn </b>
          <small> requested 2 min ago </small>
        </div>
    </RequesterInfoWrapper>
  );
}
