/* eslint-disable no-nested-ternary */
import React from 'react';
import { Link } from 'react-router-dom';
import Icon from '@hackclub/icons';
import { Logo, SymbolLogo } from '../logo';
import MainContainer from '../mainContainer';
import Tip from '../tip';
import {
  NavWrapper, CenteredStyledLink, StyledLink, Divider, Nav,
} from './style';
import AuthNavItems from './components/AuthNavItems';

export default function NavBar() {
  const isAuth = true;
  return (
    <>
      <NavWrapper>
        <MainContainer>
          <Nav>
            <Link to="/">
              {
              window.innerWidth > 600
                ? (
                  <Logo width="75pt" height="35pt" />
                )
                : <SymbolLogo width="67pt" height="26pt" />
              }
            </Link>
            {
              window.innerWidth > 600 ? (
                <div className="centeredItems">
                  {/* <Tip content="Trips">
                    <CenteredStyledLink to="/trips">
                      <Icon glyph="briefcase" size={35} />
                    </CenteredStyledLink>
                  </Tip> */}
                  <Tip content="Requests">
                    <CenteredStyledLink to="/requests">
                      <Icon glyph="explore" size={35} />
                    </CenteredStyledLink>
                  </Tip>
                </div>
              ) : null
            }
            <div className="leftSideItems">
              {
                !isAuth ? (
                  window.innerWidth > 600
                    ? (
                      <Tip content="Login or Signup">
                        <StyledLink to="/login">
                          <Icon glyph="door-enter" size={35} />
                        </StyledLink>
                      </Tip>
                    )
                    : null
                ) : (
                  window.innerWidth > 600
                    ? <AuthNavItems />
                    : null
                )
              }
            </div>
          </Nav>
        </MainContainer>
      </NavWrapper>
      {/* divider */}
      <Divider />
    </>
  );
}
