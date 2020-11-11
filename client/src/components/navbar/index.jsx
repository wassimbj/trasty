import React from 'react';
import { Link } from 'react-router-dom';
// import Icon from 'spectrum-icons';
import Logo from '../logo';
import MainContainer from '../mainContainer';
import {
  NavWrapper, LoginLink, StyledLink, Divider,
} from './style';

export default function NavBar() {
  return (
    <>
      <NavWrapper>
        <MainContainer>
          <div className="flex items-center justify-between">
            <Link to="/"><Logo width="80pt" height="40pt" /></Link>
            <div>
              <StyledLink to="/login">
                <LoginLink glyph="explore" size={40} />
              </StyledLink>
              <StyledLink to="/login">
                <LoginLink glyph="door-enter" size={40} />
              </StyledLink>
            </div>
          </div>
        </MainContainer>
      </NavWrapper>
      {/* divider */}
      <Divider />
    </>
  );
}
