// import React from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const StyledLink = styled(NavLink)`
  display: inline-block;
  padding: 5px 15px;
  // border: 1px solid #e8e8e8;
  // background: rgb(38,80,255, 0.11);
  // border-radius: 50px;
  color: #2650ff;
  display: inline-block;
  // margin: 0 5px;
  transition: 250ms;
  & span { font-size: 11px; display: block; text-align: center; }
  & svg { margin: 0 auto; }
  &:hover {
    background: rgb(38,80,255, 0.18);
  }

  &.active{
    border-bottom: 2px solid #2650ff;
    background: rgb(38,80,255, 0.11);
  }
`;

export const StyledSilentLink = styled.span`
  display: inline-block;
  padding: 5px 15px;
  // border: 1px solid #e8e8e8;
  // background: rgb(38,80,255, 0.11);
  // border-radius: 50px;
  color: #2650ff;
  display: inline-block;
  // margin: 0 5px;
  transition: 250ms;
  & span { font-size: 11px; display: block; text-align: center; }
  & svg { margin: 0 auto; }
  &:hover {
    background: rgb(38,80,255, 0.18);
  }

  &.active{
    border-bottom: 2px solid #2650ff;
    background: rgb(38,80,255, 0.11);
  }
`;

export const NavWrapper = styled.div`
   background: white;
   border-top: 1px solid #dfe3ed;
   position: fixed;
   bottom: 0;
   width: 100%;
   z-index: 99999;
  //  padding: 5px 0;

  @media(min-width: 600px){
    display: none;
  }
`;

export const NavItems = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
