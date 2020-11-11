import React from 'react';
// import { Link } from 'react-router-dom';
import Icon from 'spectrum-icons';
import Logo from '../logo';
import MainContainer from '../mainContainer';
import {
  NavWrapper, LoginLink, StyledLink,
} from './style';

export default function MobileNavBar() {
  return (
    <>
      <NavWrapper>
        <MainContainer>
          <div className="flex items-center justify-between">
            <Logo />
            <div>
              <StyledLink to="/login">
                <LoginLink>
                  <Icon glyph="door-enter" />
                </LoginLink>
              </StyledLink>
            </div>
          </div>
        </MainContainer>
      </NavWrapper>
      {/* divider */}
      <div className="mt-24" />
    </>
  );
}
