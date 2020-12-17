import React from 'react';
import Icon from '@hackclub/icons';
import BigDot from '../bigDot';
import {
  Wrapper, Content, Links,
  PreferenceWrapper, PreferenceSelect, SelectCurrency,
} from './style';

export default function Footer({ marinTop }) {
  return (
    <Wrapper marinTop={marinTop}>
      <Content>
        <Links>
          <a href="/start">Login</a>
          <a href="/shops">Shops</a>
          <a href="/request">Requests</a>
          <BigDot customStyles="margin-left: 1rem; color: #ccc" />
          <a href="/privacy">Privacy</a>
          <a href="/terms">Terms</a>
          <a href="/terms">Support</a>
          <BigDot customStyles="margin-left: 1rem; color: #ccc" />
          <a href="https://www.facebook.com/" rel="noreferrer" target="_blank">Facebook</a>
          {/* <div> */}
          {/* <SocialLink href="https://www.facebook.com/"><Icon glyph="facebook" size={25} /></SocialLink>
          <SocialLink href="https://www.twitter.com/"><Icon glyph="twitter" size={25} /></SocialLink> */}
          {/* </div> */}
        </Links>
        <PreferenceWrapper>
          <div>
            <Icon glyph="payment" size={25} />
            {/* <SelectCurrency>D</SelectCurrency> */}
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
