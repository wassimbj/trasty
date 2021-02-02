// import React from 'react';
import styled, { css } from 'styled-components';
import { NavLink } from 'react-router-dom';
// import Icon from '@hackclub/icons';

export const StyledLink = styled(NavLink)`
  // display: flex;
  // align-items: center;
  padding: 3px;
  // border: 1px solid #e8e8e8;
  background: #edf2f7;
  border-radius: 50px;
  color: #4a5568;
  transition: 250ms;
  position: relative;

  & svg { padding: 3px; }
  
  &:not(:last-child){ margin-right: 7px; }
  &:focus{ outline: none; }
  &:hover { color: #000; }
  &:active{ transform: scale(0.95); }

  @media(max-width: 400px){
    padding: 1px;
    & svg {
      width: 32px;
      height: 32px;
    }
  }
  
  &.active{
    background: rgb(38, 80, 255, 0.15);
    color: #2650ff;
  }
`;

export const NewNotifDot = styled.span`
  position: absolute;
  top: 10%;
  right: 0%;
  background: #ff3e3e;
  border-radius: 50%;
  width: 10px;
  height: 10px;
  display: inline-block;
  border: 2px solid #f2a9c2;
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
   @media(max-width: 600px){ padding: 0.15rem 0; }
   top: 0;
   width: 100%;
   z-index: 9999;
`;

export const Nav = styled.nav`
  display: flex;
  // align-items: center;
  justify-content: space-between;
  // @media(max-width: 600px){ justify-content: center; }

  & > .centeredItems { display: flex; }
  & > .leftSideItems { display: flex; align-items: center; position: relative; }
`;

export const Divider = styled.div`
  margin-top: 4rem;
  // @media(max-width: 600px){ margin-top: 0; }
  display: flex;
`;
