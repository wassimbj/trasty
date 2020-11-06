import React from 'react';
import Icon from 'spectrum-icons';
import Logo from '../logo';
import {
  LeftSideLink, LeftSideLinks, LinksTitle, LinksWrapper, SocialLink, Wrapper,
} from './style';

export default function Footer() {
  return (
    <Wrapper>
      {/* <MainContainer> */}
      <div>
        <Logo color="#555555" />
        <SocialLink href="https://www.facebook.com/"><Icon glyph="facebook" /></SocialLink>
        <SocialLink href="https://www.twitter.com/"><Icon glyph="twitter" /></SocialLink>
      </div>
      <LeftSideLinks>
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
      {/* </MainContainer> */}
    </Wrapper>
  );
}
