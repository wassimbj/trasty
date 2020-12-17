import React from 'react';
import relativeTime from 'dayjs/plugin/relativeTime';
import dayjs from 'dayjs';
// import 'dayjs/locale/fr';
import { RequesterInfoWrapper } from '../style';

dayjs.extend(relativeTime);

export default function RequesterInfo({ userImage, userName, requestTime }) {
  return (
    <RequesterInfoWrapper>
        <img src={userImage} alt="" />
        <div>
          <span>{userName}</span>
          <small>{`requested ${dayjs(requestTime).fromNow()}`}</small>
        </div>
    </RequesterInfoWrapper>
  );
}
