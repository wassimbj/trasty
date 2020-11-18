import React from 'react';
import { Link } from 'react-router-dom';
import Icon from '@hackclub/icons';
import Logo from '../logo';
import MainContainer from '../mainContainer';
import Tip from '../tip';
import {
  NavWrapper, CenteredStyledLink, StyledLink, Divider, Nav,
} from './style';
import ProfileDropdown from './components/ProfileDropdown';

export default function NavBar() {
  const isAuth = true;
  return (
    <>
      <NavWrapper>
        <MainContainer>
          <Nav>
            <Link to="/" className="dontHide"><Logo width="70pt" height="35pt" /></Link>
            <div className="centeredItems">
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
            </div>
            <div className="leftSideItems">
              {
                !isAuth ? (
                  <>
                    <Tip content="Login or Signup">
                      <StyledLink to="/login">
                        <Icon glyph="door-enter" size={35} />
                      </StyledLink>
                    </Tip>
                  </>
                ) : (
                  <>
                    <Tip content="Add">
                      <StyledLink to="#">
                        <Icon glyph="plus" size={35} />
                      </StyledLink>
                    </Tip>
                    <Tip content="Notifications">
                      <StyledLink to="#" className="dontHide">
                        <Icon glyph="notification" size={35} />
                      </StyledLink>
                    </Tip>
                    <Tip content="Messages">
                      <StyledLink to="#" className="dontHide">
                        <Icon glyph="message" size={35} />
                      </StyledLink>
                    </Tip>
                    <Tip content="Profile">
                      <StyledLink to="#" className="dontHide">
                        <Icon glyph="profile" size={35} />
                      </StyledLink>
                    </Tip>
                    <ProfileDropdown />
                  </>
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
