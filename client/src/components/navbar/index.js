/* eslint-disable no-nested-ternary */
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import Icon from '@hackclub/icons';
import { Logo } from '../logo';
import Tip from '../tip';
import {
  NavWrapper, StyledLink, Divider, Nav,
} from './style';
import AuthNavItems from './components/AuthNavItems';
import SmContainer from '../smContainer';
import UserAuthContext from '../../contexts/UserAuthContext';
import Spinner from '../spinner';

export default function NavBar({ onClickLogout }) {
  const { isLoggedIn } = useContext(UserAuthContext);
  return (
    <>
      <NavWrapper>
        <SmContainer>
          <Nav>
            <Link to="/">
              <Logo
                color="#2650ff"
                width={`${window.innerWidth > 400 ? '75pt' : '55pt'}`}
                height={`${window.innerWidth > 400 ? '35pt' : '30pt'}`}
              />
            </Link>
            <div className="leftSideItems">
            {
              isLoggedIn.loading ? (
                <Spinner width="22px" />
              ) : (
                !isLoggedIn.status ? (
                  <Tip content="Login or Signup">
                    <StyledLink to="/start">
                      <Icon glyph="door-enter" size={35} />
                    </StyledLink>
                  </Tip>
                ) : (
                  <AuthNavItems onClickLogout={onClickLogout} />
                )
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
