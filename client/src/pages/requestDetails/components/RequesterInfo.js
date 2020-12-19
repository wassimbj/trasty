import React from 'react';
import relativeTime from 'dayjs/plugin/relativeTime';
import dayjs from 'dayjs';
// import 'dayjs/locale/fr';
import { RequesterInfoWrapper } from '../style';

dayjs.extend(relativeTime);

export default function RequesterInfo({
  userImage, userName, requestTime,
}) {
  return (
    <RequesterInfoWrapper>
        <img src={userImage} alt="" />
        <div>
          <div className="userName">{userName}</div>
          <small className="datePosted">{`requested ${dayjs(requestTime).fromNow()}`}</small>
        </div>
    </RequesterInfoWrapper>
  );
}
