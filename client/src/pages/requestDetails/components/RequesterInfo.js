import React from 'react';
import relativeTime from 'dayjs/plugin/relativeTime';
import dayjs from 'dayjs';
import ImgWithFallback from '../../../components/imgWithFallback';
// import 'dayjs/locale/fr';
import { RequesterInfoWrapper } from '../style';

dayjs.extend(relativeTime);

export default function RequesterInfo({
  userImage, userName, userId, requestTime,
}) {
  return (
    <RequesterInfoWrapper>
        {/* <img src={userImage} alt="" /> */}
        <ImgWithFallback src={userImage} alt="" context="user" />
        <div>
          <a className="userName" href={`/user/${userId}`}>{userName}</a>
          <small className="datePosted">{`requested ${dayjs(requestTime).fromNow()}`}</small>
        </div>
    </RequesterInfoWrapper>
  );
}
