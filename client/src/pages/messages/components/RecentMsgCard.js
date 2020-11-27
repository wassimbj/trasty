import React from 'react';
import {
  CardLink, FlexBetween, RecentMsg, RecentMsgDate,
  RecentMsgUserInfo, UserImg, UserName,
} from '../style';

export default function RecentMsgCard() {
  return (
    <CardLink to="/messages/885">
      <FlexBetween>
        <RecentMsgUserInfo>
          <UserImg src="https://preview.keenthemes.com/metronic-v4/theme/assets/pages/media/profile/profile_user.jpg" alt="" />
          <div>
            <UserName>
              Ali batata
            </UserName>
            <RecentMsgDate> 5 min ago </RecentMsgDate>
          </div>
        </RecentMsgUserInfo>
        {/* <NewOfferBadge>New Offer</NewOfferBadge> */}
      </FlexBetween>
      <RecentMsg> hello this is a new offer frm me, new offer frm me  </RecentMsg>
    </CardLink>
  );
}
