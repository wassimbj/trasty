import React from 'react';
import Icon from '@hackclub/icons';
import styled, { css } from 'styled-components';
import { Logo } from '../logo';
import {
  LeftSideLink, LeftSideLinks, LinksTitle, LinksWrapper, SocialLink, Wrapper,
} from './style';

const PreferenceWrapper = styled.div`
  margin-top: 1rem;
  padding-top: 1rem;
  border-top: 1px solid rgba(255,255,255,0.065);
  text-align: center;
  display: flex;
  justify-content: flex-end;
  align-items: flex-end;
  flex-wrap: wrap;
  color: #666;
  @media(max-width: 720px){
    justify-content: end;
  }
  & div{
    display: flex;
    align-items: center;
    &:not(:last-child){ margin-right: 1rem; }
    margin-top: 1rem;
  }
`;

const PreferenceSelect = styled.select`
  background: transparent;
  ${(props) => css` width: ${props.width} `};
  appearance: none;
  border-radius: 50px;
  background: rgba(0,0,0,0.045);
  padding: 5px 30px;
  padding-right: 0;
  margin-left: -28px;
  cursor: pointer;
  &:focus{
    outline: none;
    background: rgba(0,0,0,0.075);
    color: #333;
  }
`;

export default function Footer() {
  return (
    <Wrapper>
      <div className="flexit">
        <div>
          <Logo color="#555555" width="60pt" height="32pt" />
          <SocialLink href="https://www.facebook.com/"><Icon glyph="facebook" /></SocialLink>
          <SocialLink href="https://www.twitter.com/"><Icon glyph="twitter" /></SocialLink>
        </div>
        <LeftSideLinks>
          <LinksWrapper>
            <LinksTitle> Trusti </LinksTitle>
            <ul>
              <li>
                <LeftSideLink to="/start">Login</LeftSideLink>
              </li>
              <li>
                <LeftSideLink to="/shops">Shops</LeftSideLink>
              </li>
              <li>
                <LeftSideLink to="/requests">Requests</LeftSideLink>
              </li>
            </ul>
          </LinksWrapper>
          <LinksWrapper>
            <LinksTitle> Support </LinksTitle>
            <ul>
              <li>
                <LeftSideLink to="/support/bug">Bug reports</LeftSideLink>
              </li>
              <li>
                <LeftSideLink to="/support/feature">Feature requests</LeftSideLink>
              </li>
              <li>
                <LeftSideLink to="/support/contact">Email support</LeftSideLink>
              </li>
            </ul>
          </LinksWrapper>
          <LinksWrapper>
            <LinksTitle> Safety </LinksTitle>
            <ul>
              <li>
                <LeftSideLink to="/privacy">Privacy Statement</LeftSideLink>
              </li>
              <li>
                <LeftSideLink to="/terms">Terms of Service</LeftSideLink>
              </li>
            </ul>
          </LinksWrapper>
        </LeftSideLinks>
      </div>
      <PreferenceWrapper>
        <div>
          <Icon glyph="payment" size={25} />
          <PreferenceSelect width="83px">
            <option> TND </option>
            <option> USD </option>
            <option> EUR </option>
          </PreferenceSelect>
        </div>
        <div>
          <Icon glyph="web" size={23} />
          <PreferenceSelect width="100px">
            <option> English </option>
            <option> Francais </option>
          </PreferenceSelect>
        </div>
      </PreferenceWrapper>
    </Wrapper>
  );
}
