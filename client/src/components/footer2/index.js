import React from 'react';
import styled, { css } from 'styled-components';
import Icon from '@hackclub/icons';
import BigDot from '../bigDot';

const Wrapper = styled.div`
  background: rgba(0,0,0,0.065);
  padding: 0.5rem 1rem;
`;

const Content = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  flex-wrap: wrap;
`;

const Links = styled.div`
  & a {
    color: rgba(0,0,0,0.5);
    &:hover{ color: #000 }
    display: inline-block;
    &:not(:first-child){ margin-left: 0.65rem; }
    font-size: 14px;
  }
`;

export const SocialLink = styled.a`
   display: inline-block;
   margin-left: 0.75rem;
   color: #555555;
   transition: 250ms;
   &:hover{ color: #333; }
`;

const PreferenceWrapper = styled.div`
  border-top: 1px solid rgba(255,255,255,0.065);
  text-align: center;
  display: flex;
  justify-content: flex-end;
  align-items: flex-end;
  flex-wrap: wrap;
  color: #666;
  & div{
    display: flex;
    align-items: center;
    &:not(:last-child){ margin-right: 1rem; }
  }
  @media(max-width: 720px){ justify-content: end; }
  @media(max-width: 666px){ margin-top: 1rem; }
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

export default function Footer2() {
  return (
    <Wrapper>
      <Content>
        <Links>
          <a href="/login">Login</a>
          <a href="/shops">Shops</a>
          <a href="/request">Requests</a>
          <BigDot customStyles="margin-left: 1rem" />
          <a href="/privacy">Privacy</a>
          <a href="/terms">Terms</a>
          <a href="/terms">Support</a>
          <BigDot customStyles="margin-left: 1rem" />
          <a href="https://www.facebook.com/" rel="noreferrer" target="_blank">Facebook</a>
          {/* <div> */}
          {/* <SocialLink href="https://www.facebook.com/"><Icon glyph="facebook" size={25} /></SocialLink>
          <SocialLink href="https://www.twitter.com/"><Icon glyph="twitter" size={25} /></SocialLink> */}
          {/* </div> */}
        </Links>
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
      </Content>
    </Wrapper>
  );
}
