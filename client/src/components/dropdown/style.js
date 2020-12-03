import styled, { css } from 'styled-components';
import { Link } from 'react-router-dom';

export const DropDown = styled.div`
  position: absolute;
  z-index: 999;
  border-radius: 5px;
  padding: 0.25rem;
  border: 1px solid rgba(0,0,0,0.05);
  background: white;
  box-shadow: 0 12px 28px 0 rgba(0, 0, 0, 0.2), 
              0 2px 4px 0 rgba(0, 0, 0, 0.1),
              inset 0 0 0 1px rgba(255, 255, 255, 0.5);

  display: none;
  ${(props) => props.isOpen && css`
    display: block;
  `}
  right: 0;
  top: 100%;
  width: 200px;
`;

export const DropdownItem = styled(Link)`
  display: flex;
  align-items: center;
  padding: 0.5rem;
  border-radius: 5px;
  &:not(:last-child) { margin-bottom: 0.25rem; }
  &:hover{ background: rgba(0,0,0,0.05); }

  & span { font-weight: 500; }
`;

export const SilentDropdownItem = styled.span`
  display: flex;
  align-items: center;
  padding: 0.5rem;
  border-radius: 5px;
  &:not(:last-child) { margin-bottom: 0.25rem; }
  &:hover{ background: rgba(0,0,0,0.05); }
  cursor: pointer;
  & span { font-weight: 500; }
`;

export const ItemIcon = styled.span`
  border-radius: 30px;
  padding: 3px;
  background: #e4e6eb;
  color: rgba(0,0,0,0.75);
  margin-right: 0.5rem;
`;

export const NotifsDropDownCard = styled.div`
  position: absolute;
  z-index: 999;
  border-radius: 5px;
  border: 1px solid rgba(0,0,0,0.05);
  background: white;
  box-shadow: 0 12px 28px 0 rgba(0, 0, 0, 0.2), 
              0 2px 4px 0 rgba(0, 0, 0, 0.1),
              inset 0 0 0 1px rgba(255, 255, 255, 0.5);

  display: none;
  ${(props) => props.isOpen && css`
    display: block;
  `}
  right: 0;
  top: 100%;
  width: 400px;

  @media(max-width: 450px){
    display: none;
  }
`;

export const NotifsContainer = styled.div`
  padding: 1rem 0;
  padding-bottom: 0;
  height: 500px;
`;

export const NotifsTitle = styled.span`
  display: block;
  text-align: center;
  font-weight: 500;
  padding-bottom: 1rem;
  border-bottom: 1px solid rgba(0,0,0,0.1);
`;

export const NotifItem = styled(Link)`
  padding: 1rem 0.5rem;
  border-bottom: 1px solid rgba(0,0,0,0.1);
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
  display: flex;
  align-items: center;
  justify-content: center;
  height: 70%;
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
