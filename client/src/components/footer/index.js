import React from 'react';
import Icon from '@hackclub/icons';
import styled from 'styled-components';
import { SymbolLogo } from '../logo';
import {
  LeftSideLink, LeftSideLinks, LinksTitle, LinksWrapper, SocialLink, Wrapper,
} from './style';

const LanguageCurrency = styled.div`
  margin-top: 1rem;
  padding-top: 1rem;
  border-top: 1px solid rgba(255,255,255,0.065);
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: flex-end;
  & span {
    color: gray;
    display: block;
    font-size: 14px;
    margin-bottom: 0.5rem;
  }
`;

const LanguageSelect = styled.select`
  border-radius: 5px;
  padding: 0.1rem 0.5rem;
  background: #161616;
  color: #5f5f5f;
  margin-right: 1rem;
`;

const SaveLanguageButton = styled.button`
  // color: #fff;
  // background: #2650ff;
  // border-radius: 30px;
  background: rgba(255,255,255,0.15);
  border-radius: 30px;
  color: rgba(255,255,255,0.65);
  padding: 0.25rem 1rem;
  transition: 250ms;

  &:hover{ background: #2650ff; color: white; }
`;

export default function Footer() {
  return (
    <Wrapper>
      <div className="flexit">
        <div>
          <SymbolLogo color="#555555" />
          <SocialLink href="https://www.facebook.com/"><Icon glyph="facebook" /></SocialLink>
          <SocialLink href="https://www.twitter.com/"><Icon glyph="twitter" /></SocialLink>
        </div>
        <LeftSideLinks>
          <LinksWrapper>
            <LinksTitle> Links </LinksTitle>
            <ul>
              <li>
                <LeftSideLink to="/signup">Sign up</LeftSideLink>
              </li>
              <li>
                <LeftSideLink to="/login">Login</LeftSideLink>
              </li>
              <li>
                <LeftSideLink to="/shops">Shops</LeftSideLink>
              </li>
              <li>
                <LeftSideLink to="/requests">Requests</LeftSideLink>
              </li>
              <li>
                <LeftSideLink to="/trips">Trips</LeftSideLink>
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
          {/* <LinksWrapper>
            <LinksTitle> Language </LinksTitle>
            <ul>
              <li>
                <LanguageSelect>
                  <option> TND </option>
                  <option> USD </option>
                  <option> EUR </option>
                </LanguageSelect>
              </li>
              <li>
                <LanguageSelect>
                  <option> English </option>
                  <option> Francais </option>
                </LanguageSelect>
              </li>
            </ul>
          </LinksWrapper> */}
        </LeftSideLinks>
      </div>
      <LanguageCurrency>
        <div>
          <span> Currency </span>
          <LanguageSelect>
            <option> TND </option>
            <option> USD </option>
            <option> EUR </option>
          </LanguageSelect>
        </div>
        <div>
          <span> Language </span>
          <LanguageSelect>
            <option> English </option>
            <option> Francais </option>
          </LanguageSelect>
        </div>
        <SaveLanguageButton type="button"> Save </SaveLanguageButton>
      </LanguageCurrency>
    </Wrapper>
  );
}
