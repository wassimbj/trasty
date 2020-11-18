// import React from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
// import Icon from '@hackclub/icons';

export const StyledLink = styled(NavLink)`
  // display: flex;
  // align-items: center;
  padding: 3px;
  // border: 1px solid #e8e8e8;
  background: rgb(38,80,255, 0.11);
  border-radius: 50px;
  color: #2650ff;
  transition: 250ms;
  position: relative;

  & svg { padding: 3px; }
  &:not(:last-child){
    margin-right: 7px;
  }

  &:hover {
    background: rgb(38,80,255, 0.18);
  }
`;

export const CenteredStyledLink = styled(NavLink)`
  display: flex;
  align-items: center;
  margin: 0 0.5rem;
  padding: 0 1.5rem;
  // color: #2650ff;
  // background: rgba(0,0,0,0.05);
  color: rgba(0,0,0,0.65);
  transition: 200ms;

  &.active {
    border-bottom: 3px solid #000;
    color: #000;
    background: rgba(0,0,0,0.05);
  }

  &:hover{
    background: rgba(0,0,0,0.05);
    color: #000000;
  }
`;

export const NavWrapper = styled.div`
   background: white;
   border-bottom: 1px solid #dfe3ed;
   position: fixed;
   top: 0;
   width: 100%;
  //  padding: 3px 0;
   z-index: 9999;
`;

export const Nav = styled.nav`
  display: flex;
  // align-items: center;
  justify-content: space-between;

  @media (max-width: 700px){
    & a:not(.dontHide) { display: none; }
  }
  
  & > .centeredItems { display: flex; }
  & > .leftSideItems { display: flex; align-items: center; position: relative; }
`;

// export const StyledIcon = styled(Icon)`
//   padding: 5px;
//   // border: 1px solid #e8e8e8;
//   background: rgb(38,80,255, 0.11);
//   border-radius: 50px;
//   color: #2650ff;
//   font-weight: bold;
//   margin-right: 10px;
//   transition: 250ms;

//   &:hover {
//     background: rgb(38,80,255, 0.18);
//   }
// `;

export const Divider = styled.div`
  margin-top: 4rem;
  display: flex;
`;
