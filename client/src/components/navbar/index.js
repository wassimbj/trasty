/* eslint-disable no-nested-ternary */
import React from 'react';
import { Link } from 'react-router-dom';
import Icon from '@hackclub/icons';
import { Logo, SymbolLogo } from '../logo';
import Tip from '../tip';
import {
  NavWrapper, StyledLink, Divider, Nav,
} from './style';
import AuthNavItems from './components/AuthNavItems';
import SmContainer from '../smContainer';

export default function NavBar() {
  const isAuth = true;
  return (
    <>
      <NavWrapper>
        <SmContainer>
          <Nav>
            <Link to="/">
              <Logo
                width={`${window.innerWidth > 600 ? '60pt' : '50pt'}`}
                height={`${window.innerWidth > 600 ? '35pt' : '30pt'}`}
              />
            </Link>
            {/* <div className="centeredItems">
              <Tip content="Trips">
                <CenteredStyledLink to="/trips">
                  <Icon glyph="briefcase" size={35} />
                </CenteredStyledLink>
              </Tip>
              <Tip content="Requests">
                <CenteredStyledLink to="/requests">
                  <Icon glyph="explore" size={35} />
                </CenteredStyledLink>
              </Tip>
            </div> */}
            <div className="leftSideItems">
              {
                !isAuth ? (
                  <Tip content="Login or Signup">
                    <StyledLink to="/login">
                      <Icon glyph="door-enter" size={35} />
                    </StyledLink>
                  </Tip>
                ) : (
                  <AuthNavItems />
                )
              }
            </div>
          </Nav>
        </SmContainer>
      </NavWrapper>
      {/* divider */}
      <Divider />
    </>
  );
}
