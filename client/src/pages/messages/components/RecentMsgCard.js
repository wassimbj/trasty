import React from 'react';
import styled, { css } from 'styled-components';
import { Link } from 'react-router-dom';

const CardLink = styled(Link)`
  padding: 0.5rem;
  border-bottom: 1px solid rgba(0,0,0,0.1);
  display: block;
  transition: 250ms;
  &:hover{ background: rgba(0,0,0,0.05); }
`;

const RecentMsgUserInfo = styled.div`
  display: flex; align-items: center;

  & div { margin-left: 0.5rem; }
`;

const UserImg = styled.img`
  width: 50px; height: 50px;
  border-radius: 15px;
  box-shadow: 0 0 2px rgba(0,0,0,0.15);
  object-fit: cover;
`;

const UserName = styled.span`
  display: block;
  font-weight: 500;
`;

const MsgDate = styled.span`
  display: block;
  font-size: 13px;
  color: #b1b1b1;
`;

const RecentMsg = styled.p`
  display: block;
  font-size: 14px;
  color: gray;
  margin-left: 3.5rem;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  ${(props) => props.isNew && css` font-weight: 500; color: #333; `}
`;

// const ChatBadge = styled.span`
//   padding: 0.25rem 0.5rem;
//   border-radius: 30px;
//   font-size: 13px;
//   font-weight: 500;
// `;

// const NewOfferBadge = styled(ChatBadge)`
//   background: #e91e631a;
//   color: #E91E63;
// `;

// const PendingOfferBadge = styled(ChatBadge)`
//   background: #03a9f41c;
//   color: #03A9F4;
// `;

// const AcceptedOfferBadge = styled(ChatBadge)`
//   background: #4caf502e;
//   color: #4CAF50;
// `;

const FlexBetween = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

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
            <MsgDate> 5 min ago </MsgDate>
          </div>
        </RecentMsgUserInfo>
        {/* <NewOfferBadge>New Offer</NewOfferBadge> */}
      </FlexBetween>
      <RecentMsg> hello this is a new offer frm me, new offer frm me  </RecentMsg>
    </CardLink>
  );
}
