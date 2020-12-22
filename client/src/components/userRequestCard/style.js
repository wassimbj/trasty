import { Link } from 'react-router-dom';
import styled, { css } from 'styled-components';

export const UserRequestCardWrapper = styled.div`
  padding: 0.75rem;
  border-radius: 5px;
  position: relative;
  margin-bottom: 1.5rem;
  border: 1px solid rgba(0,0,0,0.12);
  display: block;
  transition: 300ms;
  &:hover{
    border: 1px solid #2650ff;
  }
`;

export const UserRequestCardLink = styled(Link)`
  display: block;
  &:hover{ color: #2650ff }
`;

export const RequesterInfo = styled.div`
   display: flex;
   align-items: center;
    margin-bottom: 1rem;
   & img { border-radius: 30px; max-width: 45px; }

   & > div { 
      margin-left: 0.5rem;
      & span { display: block; font-size: 15px; }
      & span:nth-child(2) { color: #999; font-size: 13px; }
   }
`;

export const DetailsWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  @media(max-width: 600px){
    flex-wrap: wrap;
  }
`;

export const ProductDetails = styled.div`
   display: flex;
   align-items: end;
   white-space: nowrap;
   overflow: hidden;

   & img { 
      border-radius: 5px;
      max-width: 190px;
      width: 190px;
      height: 190px;
      border: 1px solid rgba(0,0,0,0.065);
      display: block;
      object-fit: cover;
   }
   

  @media(max-width: 420px){
    & img{ width: 140px; height: 140px; }
  }
  @media(max-width: 380px){
    & img{ width: 110px; height: 110px; }
  }
`;

export const ProductRequestDetails = styled.div`
  white-space: nowrap;
  overflow: hidden;
  width: 100%;
  margin-left: 0.75rem;
  & > p {
    @media(max-width: 350px){ font-size: 13px; }
    margin-bottom: 0.25rem;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  & > p span { color: #8f8f95; }

  & h2 {
    font-weight: 600;
    font-size: 17px;
    margin-bottom: 0.5rem;
    overflow: hidden;
    text-overflow: ellipsis;
    @media(max-width: 350px){ font-size: 14px; }
  }
`;

export const ProductPrice = styled.div`
  align-self: center;
  color: #2650ff;
  font-size: 15px;
  font-weight: 500;
  border-radius: 5px;
  align-self: center;
  text-align: center;
  & > span {
    margin-bottom: 0.35rem;
    display: block;
  }
  @media(min-width: 600px){
    margin-right: 4rem;
  }
  @media(max-width: 560px){
    width: 100%;
    margin-top: 1rem;
    & > span { display: inline-block; font-size: 14px; }
  }
`;

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
  ${(props) => props.customStyle && css`
    ${props.customStyle}
  `}
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
