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

export default function UserProfile({ match }) {
  const activeTab = match.params.tab;
  const userid = match.params.id;
  const [userDetails, setUserDetails] = useState({
    loading: true,
    data: null,
  });
  // const [userRequests, setUserRequests] = useState({
  //   loadng: true,
  //   data: [],
  // });

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

  // useEffect(() => {
  //   (async function () {
  //     try {
  //       const requests = await getUserRequests(userid);
  //       console.log(requests);
  //       setUserRequests({
  //         loading: false,
  //         data: requests,
  //       });
  //     } catch (err) {
  //       throw new Error('Something went wrong...');
  //     }
  //   }());
  // }, []);

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
              <Tab to={`/user/${userid}/requests`} className={`${activeTab !== 'reviews' ? 'active' : ''}`}> 0 Requests </Tab>
              {/* <Tab to="/user/888/trips" className={`${activeTab === 'trips' ? 'active' : ''}`}> 2 Upcoming trips </Tab> */}
              <Tab to={`/user/${userid}/reviews`} className={`${activeTab === 'reviews' ? 'active' : ''}`}> 3 Reviews </Tab>
            </ProfileTabs>
            <TabContent>
              <UserRequests userid={userid} />
              {/* {
                activeTab === 'reviews'
                  ? [...Array(3)].map(() => <ReviewCard />)
                  : activeTab === 'trips' ? [...Array(3)].map(() => <TravelerTripCard />)
                    : [...Array(3)].map(() => <UserRequestCard />)
              } */}
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
