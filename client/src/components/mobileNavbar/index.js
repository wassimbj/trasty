import React from 'react';
import Icon from '@hackclub/icons';
import { NavItems, NavWrapper, StyledLink } from './style';
import AuthNavItems from './components/AuthNavItems';

export default function MobileNavBar() {
  const isAuth = true;
  return (
    <>
      <NavWrapper>
        <NavItems>
          {
            !isAuth ? (
              <>
                {/* <StyledLink to="/trips">
                  <Icon glyph="briefcase" size={26} />
                  <span> Trips </span>
                </StyledLink> */}
                <StyledLink to="/requests">
                  <Icon glyph="explore" size={26} />
                  <span> Requests </span>
                </StyledLink>
                <StyledLink to="/login">
                  <Icon glyph="door-enter" size={26} />
                  <span> Login/Signup</span>
                </StyledLink>
              </>
            ) : (
              <AuthNavItems />
            )
          }
        </NavItems>
      </NavWrapper>
    </>
  );
}
