import React from 'react';
import { Link } from 'react-router-dom';
// import Icon from 'spectrum-icons';
import Logo from '../logo';
import MainContainer from '../mainContainer';
import {
  NavWrapper, LoginLink, StyledLink, Divider, Nav,
} from './style';

export default function NavBar() {
  return (
    <>
      <NavWrapper>
        <MainContainer>
          <Nav>
            <Link to="/"><Logo width="70pt" height="35pt" /></Link>
            <div>
              <StyledLink to="/login">
                <LoginLink glyph="explore" size={40} />
              </StyledLink>
              <StyledLink to="/login">
                <LoginLink glyph="door-enter" size={40} />
              </StyledLink>
            </div>
          </Nav>
        </MainContainer>
      </NavWrapper>
      {/* divider */}
      <Divider />
    </>
  );
}
