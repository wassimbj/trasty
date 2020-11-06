import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const Wrapper = styled.div`
  max-width: 550px;
  margin: 0 auto;
`;

export const LocationsSeachCard = styled.div`
  background: white;
  box-shadow: 0 5px 25px 0 rgba(0, 0, 0, 0.2);
  border-radius: 5px 5px 0 0;
  display: flex;
  align-items: center;
  justify-content: space-around;
  padding: 5px;
  border-left: 4px solid rgb(38, 80, 255);
  border-right: 4px solid rgb(38, 80, 255);
`;

export const SearchBtn = styled(Link)`
  display: inline-block;
  width: 100%;
  background: linear-gradient(rgb(38,80,255),rgb(0,49,255)) rgb(38,80,255);
  color: white;
  text-align: center;
  padding: 10px 5px;
  border-radius: 0 0 5px 5px;
  font-weight: bold;
  box-shadow: 0 4px 20px rgba(0,0,0,0.25);
  transition: 500ms;
  &:hover{
    background: rgb(38,80,255);
  }
`;

export const SwitchIcon = styled.span`
   background: #efefef;
   color: #555555;
   display: inline-block;
   margin: 0 auto;
   border-radius: 50px;
   padding: 6px;
   cursor: pointer;
   transition: 250ms ease-in-out;

   &:hover {
      background: #e3e3e3;
   }
`;

export const SelectLocation = styled.div`
   padding: 0.75rem 1.5rem;
   cursor: pointer;
   border-radius: 5px;
   transition: 300ms ease-in-out;

   &:hover {
      background: #ededed;
   }
`;

export const Span = styled.span`
   font-size: 10px;
   color: #a2a2a2;
   font-weight: bold;
   display: block;
`;

export const Location = styled.span`
   font-size: 13px;
   display: block;
   font-weight: bold;
   color: #464646;
`;
