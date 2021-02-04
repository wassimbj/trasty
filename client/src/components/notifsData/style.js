import styled, { css } from 'styled-components';
import { Link } from 'react-router-dom';

export const NotifItem = styled(Link)`
  padding: 1rem 0.5rem;
  &:not(:last-child){ border-bottom: 1px solid rgba(0,0,0,0.1); }
  display: block;
  // align-items: center;
  &:hover{ background: rgba(0,0,0,0.05); }
  position: relative;
`;

export const NotifItemContent = styled.div`
  display: flex;
  align-items: flex-start;
`;

export const EmptyNotifs = styled.div`
  // display: flex;
  // align-items: center;
  // justify-content: center;
  // height: 70%;
  text-align: center;
  margin-top: 2rem;
  & p {
    color: #bdbdbd;
    font-size: 17px;
  }
  & svg { display: block; margin: 0 auto; color: #bdbdbd; }
`;

export const HightLight = styled.span`
  font-weight: 500;
`;

export const NotifTypeIcon = styled.span`
  padding: 0.3rem;
  border-radius: 50px;
  margin-right: 0.5rem;
  margin-left: 0.5rem;
`;

export const AcceptedOfferIcon = styled(NotifTypeIcon)`
  // background: rgb(76, 175, 80, 0.15);
  // color: #4CAF50;
  background: linear-gradient(45deg, #009688, #5ecf59);
  color: #fff;
`;

export const GotNewOfferIcon = styled(NotifTypeIcon)`
  // background: rgba(38, 80, 255, 0.15);
  // color: #2650ff;
  background: linear-gradient(45deg, #2650ff, #2196F3);
  color: #fff;
`;

export const NotifDate = styled.span`
  display: block;
  font-size: 12px;
  color: #a9a9a9;
`;

export const NewNotifDot = styled.span`
  border-radius: 30px;
  background: #3ea6ff;
  border-radius: 50px;
  width: 5px;
  height: 5px;
  display: inline-block;
  position: absolute;
  top: 35%;
  left: 1%;
`;

export const NotifsContent = styled.div`
  overflow-y: auto;
`;
