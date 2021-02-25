import React from 'react';
import {
  CardLink, FlexBetween,
  RecentMsgUserInfo, UserImg,
  UserName, IsRequesterBadge, IsTravelerBadge, NewMsgBadge,
} from '../style';

export default function RecentMsgCard({
  userImg,
  userId,
  userName,
  roomId,
  isTraveler,
  isActive,
}) {
  return (
    <CardLink isActive={isActive} to={`/messages/${roomId}/${userId}`}>
      <FlexBetween>
        <RecentMsgUserInfo>
          <UserImg src={userImg} alt="" />
          <div>
            <UserName>{userName}</UserName>
            {
              isTraveler
                ? <IsTravelerBadge>Traveler</IsTravelerBadge>
                : <IsRequesterBadge>Requester</IsRequesterBadge>
            }
          </div>
        </RecentMsgUserInfo>
        {/* <NewMsgBadge>1</NewMsgBadge> */}
      </FlexBetween>
    </CardLink>
  );
}
