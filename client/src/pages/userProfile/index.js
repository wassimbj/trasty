/* eslint-disable indent */
/* eslint-disable max-len */
/* eslint-disable no-nested-ternary */
import React, { useEffect, useState } from 'react';
import Icon from '@hackclub/icons';
import dayjs from 'dayjs';
import Footer from '../../components/footer';
import {
  JoinedDate, ProfileContainer, UserInfo, UserName,
  UserVerifiedDetailsCard, UserInfoSummarySpan, ReviewSummary,
  ProfileTabs, TabContent, Tab, NoUserMsg,
} from './style';
import ReviewBadge from '../../components/reviewBadge';
// import TravelerTripCard from '../../components/travelerTripCard';
import getUserDetails from '../../api/userProfile/getUserDetails';
import Spinner from '../../components/spinner';
import UserRequests from './components/UserRequests';
import UpcomingTrips from './components/UpcomingTrips';

export default function UserProfile({ match }) {
  const activeTab = match.params.tab;
  const userid = match.params.id;
  const [userDetails, setUserDetails] = useState({
    loading: true,
    data: null,
  });

  useEffect(() => {
    (async function () {
      try {
        const user = await getUserDetails(userid);
        setUserDetails({
          loading: false,
          data: user,
        });
      } catch (err) {
        throw new Error('Something went wrong...');
      }
    }());
  }, []);

  return (
    <>
    <ProfileContainer>
      {
        userDetails.loading ? (
          <Spinner center customStyle="margin: 5rem 0;" />
        ) : (
          !userDetails.data ? (
            <NoUserMsg>
              <Icon glyph="meh" size={55} />
              <p>meeh, we couldn't find this user, looks like the account doesnt exist</p>
              <a href="/requests"> Go back </a>
            </NoUserMsg>
          ) : (
            <div>
            <UserInfo>
              <img src={userDetails.data.image} alt="" />
              <div>
                <UserName>
                  <h3>{userDetails.data.fullname}</h3>
                </UserName>
                <JoinedDate>
                {`Joined in ${dayjs(userDetails.data.joined_at).format('MMMM D, YYYY')}`}
                </JoinedDate>
              </div>
            </UserInfo>
            <UserVerifiedDetailsCard>
              <UserInfoSummarySpan> Verifications </UserInfoSummarySpan>
              <p>
                Email
                <Icon
                  glyph={userDetails.data.is_email_verified ? 'checkmark' : 'minus'}
                  size={23}
                  className={userDetails.data.is_email_verified ? 'verified' : 'unverified'}
                />
              </p>
              <p>
                Phone
                <Icon
                  glyph={userDetails.data.is_phone_verified ? 'checkmark' : 'minus'}
                  size={21}
                  className={userDetails.data.is_phone_verified ? 'verified' : 'unverified'}
                />
              </p>
            </UserVerifiedDetailsCard>
            <ReviewSummary>
              <UserInfoSummarySpan> Reviews Badge </UserInfoSummarySpan>
              <ReviewBadge rating={5} />
            </ReviewSummary>
            <ProfileTabs>
              <Tab to={`/user/${userid}/requests`} className={`${!activeTab || activeTab === 'requests' ? 'active' : ''}`}> Requests </Tab>
              <Tab to={`/user/${userid}/trips`} className={`${activeTab === 'trips' ? 'active' : ''}`}> Upcoming trips </Tab>
              <Tab to={`/user/${userid}/reviews`} className={`${activeTab === 'reviews' ? 'active' : ''}`}> Reviews </Tab>
            </ProfileTabs>
            <TabContent>
              {
                activeTab === 'reviews'
                  ? <p> Reviews </p>
                : activeTab === 'trips'
                  ? <UpcomingTrips userid={userid} />
                : <UserRequests userid={userid} />
              }
            </TabContent>
            </div>
          )
        )
      }
    </ProfileContainer>
    <Footer marinTop="23rem" />
    </>
  );
}
