// import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import Icon from '../icons';

export const StyledLink = styled(Link)`
  display: inline-block;
`;

export const NavWrapper = styled.div`
   background: white;
   border-bottom: 1px solid #dfe3ed;
   position: fixed;
   top: 0;
   width: 100%;
   padding: 3px 0;
   z-index: 9999;
`;

export const Nav = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const LoginLink = styled(Icon)`
  padding: 5px;
  // border: 1px solid #e8e8e8;
  background: rgb(38,80,255, 0.11);
  border-radius: 50px;
  color: #2650ff;
  font-weight: bold;
  display: inline-block;
  margin: 0 10px;
  transition: 250ms;

  &:hover {
    background: rgb(38,80,255, 0.18);
  }
`;

export const SignupLink = styled.span`
  padding: 5px 15px;
  border-radius: 50px;
  background: #2650ff;
  box-shadow: 0 0 8px rgba(0,0,0,0.25);
  font-weight: bold;
  display: inline-block;
  margin: 0 5px;
  color: white;
  transition: 250ms;

  &:hover {
    box-shadow: 0 0 15px rgb(38,80,255,0.5)
  }
`;

export const Divider = styled.div`
  margin-top: 4rem;
  display: flex;
`;
