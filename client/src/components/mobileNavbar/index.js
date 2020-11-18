import React from 'react';
// import { Link } from 'react-router-dom';
import Icon from '@hackclub/icons';
import { NavItems, NavWrapper, StyledLink } from './style';

export default function MobileNavBar() {
  const isAuth = true;
  return (
    <>
      <NavWrapper>
        <NavItems>
          {
            !isAuth ? (
              <>
                <StyledLink to="/request/new">
                  <Icon glyph="plus" size={26} />
                  <span> Add </span>
                </StyledLink>
                <StyledLink to="/trips">
                  <Icon glyph="briefcase" size={26} />
                  <span> Trips </span>
                </StyledLink>
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
              <>
                <StyledLink to="/login">
                  <Icon glyph="message" size={26} />
                  <span>Messages</span>
                </StyledLink>
                <StyledLink to="/request/new">
                  <Icon glyph="notification" size={26} />
                  <span> Notifs </span>
                </StyledLink>
                <StyledLink to="/request/new">
                  <Icon glyph="plus" size={26} />
                  <span> Add </span>
                </StyledLink>
                <StyledLink to="/trips">
                  <Icon glyph="briefcase" size={26} />
                  <span> Trips </span>
                </StyledLink>
                <StyledLink to="/requests">
                  <Icon glyph="explore" size={26} />
                  <span> Requests </span>
                </StyledLink>
              </>
            )
          }
        </NavItems>
      </NavWrapper>
      {/* divider */}
      <div className="mt-24" />
    </>
  );
}
