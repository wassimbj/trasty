import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const ProfileContainer = styled.div`
  padding: 0 1rem;
  max-width: 800px;
  margin: 0 auto;
  margin-bottom: 7rem;
`;

export const UserInfo = styled.div`
  padding: 1rem 0;
  padding-bottom: 0.5rem;
  display: flex;
  align-items: center;
  // justify-content: center;
  // border-bottom: 1px solid rgba(0,0,0,0.065);
  border-radius: 5px;
  & img {
    width: 100px; height: 100px;
    border-radius: 50px;
    box-shadow: 0 0 3px rgba(0,0,0,0.35);
    object-fit: cover;
  }

  & > div{
    margin-left: 1rem;
  }
`;

export const UserName = styled.div`
  display: flex; align-items: center; flex-wrap: wrap;
  & h3 {
    font-weight: bold;
    font-size: 30px;
    @media(max-width: 500px){ font-size: 22px; }
    margin-right: 0.5rem;
  }

  // & svg {
  //   display: inline-block;
  //   margin-left: 0.5rem;
  //   color: #d0d0d0;
  // }
`;

export const UserVerifiedDetailsCard = styled.div`
  padding: 0.5rem 0;
  border-radius: 5px;
  display: flex;
  align-items: center;
  margin-bottom: 0.5rem;
  // flex-wrap: wrap;
  & p { display: flex; }

  & p:not(:last-child) { margin-right: 1.5rem; }
  
  & svg{ margin-left: 0.25rem; }

  & .verified{ color: #48d271; }
  & .unverified{ color: #9E9E9E; }
`;

export const JoinedDate = styled.span`
  color: gray;
  display: block;
  @media(max-width: 500px){
    font-size: 14px;
  }
`;

export const UserInfoSummarySpan = styled.span`
  color: #b6b6b6;
  font-size: 15px;
  margin-right: 1.5rem;
  @media(max-width: 450px){
    // width: 100%;
    // margin-bottom: 0.5rem;
  }
`;

export const ProfileTabs = styled.div`
  margin-top: 2rem;
  display: flex;
  border-top: 1px solid #e9edff;
  border-bottom: 1px solid #e9edff;
  @media(min-width: 700px){
    justify-content: center;
  }
  overflow-x: auto;
`;

export const Tab = styled(Link)`
  padding: 1rem 2rem;
  display: inline-block;
  transition: 100ms;
  white-space: nowrap;
  &:not(.active):hover{
    background: rgba(0,0,0,0.045);
  }
  &.active {
    border-bottom: 2px solid #2650ff;
    color: #2650ff;
    font-weight: 500;
    background: rgba(38,80,255,0.1);
  }
`;

export const TabContent = styled.div`
  margin-top: 1.5rem;
`;

export const ReviewSummary = styled.div`
  display: flex;
  align-items: center;
`;
