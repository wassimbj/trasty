/* eslint-disable max-len */
/* eslint-disable no-nested-ternary */
import React from 'react';
import Icon from '@hackclub/icons';
import Footer from '../../components/footer';
import {
  JoinedDate, ProfileContainer, UserInfo, UserName,
  UserVerifiedDetailsCard, UserInfoSummarySpan, ReviewSummary,
  ProfileTabs, TabContent, Tab,
} from './style';
import UserRequestCard from '../../components/userRequestCard';
import ReviewCard from './components/ReviewCard';
import ReviewBadge from '../../components/reviewBadge';
import TravelerTripCard from '../../components/travelerTripCard';

export default function UserProfile({ match }) {
  const activeTab = match.params.tab;
  return (
    <>
    <ProfileContainer>
      <UserInfo>
        <img src="https://s3.amazonaws.com/uifaces/faces/twitter/toddrew/128.jpg" alt="" />
        <div>
          <UserName>
            <h3>Allison Hackett</h3>
          </UserName>
          <JoinedDate>Joined in November 2015</JoinedDate>
        </div>
      </UserInfo>
      <UserVerifiedDetailsCard>
        <UserInfoSummarySpan> Verifications </UserInfoSummarySpan>
        <p>
          Email
          <Icon glyph="checkmark" size={23} className="verified" />
        </p>
        <p>
          Phone
          <Icon glyph="minus" size={21} className="unverified" />
        </p>
      </UserVerifiedDetailsCard>
      <ReviewSummary>
        <UserInfoSummarySpan> Reviews Summary </UserInfoSummarySpan>
        <ReviewBadge rating={5} />
      </ReviewSummary>
      <ProfileTabs>
        <Tab to="/user/888/requests" className={`${activeTab !== 'reviews' ? 'active' : ''}`}> 0 Requests </Tab>
        {/* <Tab to="/user/888/trips" className={`${activeTab === 'trips' ? 'active' : ''}`}> 2 Upcoming trips </Tab> */}
        <Tab to="/user/888/reviews" className={`${activeTab === 'reviews' ? 'active' : ''}`}> 3 Reviews </Tab>
      </ProfileTabs>
      <TabContent>
        {
          activeTab === 'reviews'
            ? [...Array(3)].map(() => <ReviewCard />)
            : activeTab === 'trips' ? [...Array(3)].map(() => <TravelerTripCard />)
              : [...Array(3)].map(() => <UserRequestCard />)
        }
      </TabContent>
    </ProfileContainer>
    <Footer />
    </>
  );
}
