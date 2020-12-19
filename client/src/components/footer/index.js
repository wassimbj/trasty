import React from 'react';
import Icon from '@hackclub/icons';
import { useHistory } from 'react-router-dom';
import dayjs from 'dayjs';
import {
  Wrapper, Content, Links,
  PreferenceWrapper, PreferenceSelect,
  SelectCurrency, SocialLink, RightsReservedP,
} from './style';

export default function Footer({ marinTop }) {
  const handlePreferencChange = (pref) => (e) => {
    window.localStorage.setItem(`${pref}`, e.target.value);
    window.location.reload();
  };

  const selectedCurrency = window.localStorage.getItem('currency') || null;
  const selectedLang = window.localStorage.getItem('lang') || null;

  return (
    <Wrapper marinTop={marinTop}>
      <Content>
        <Links>
          <a href="/">Home</a>
          <a href="/start">Login</a>
          <a href="/shops">Shops</a>
          <a href="/requests">Requests</a>
          <a href="/how-it-works">How it works</a>
          <a href="/privacy">Privacy</a>
          <a href="/terms">Terms</a>
          <a href="/contact">Contact</a>
          <a href="/about">About</a>
          <a href="/request/new">Add request</a>
        </Links>
          <div style={{ marginTop: '1rem' }}>
          <SocialLink href="https://www.facebook.com/"><Icon glyph="facebook" size={25} /></SocialLink>
          <SocialLink href="https://www.twitter.com/"><Icon glyph="twitter" size={25} /></SocialLink>
          </div>
        <PreferenceWrapper>
          <div>
            <Icon glyph="payment" size={25} />
            {/* <SelectCurrency>D</SelectCurrency> */}
            <PreferenceSelect width="83px" name="currency" onChange={handlePreferencChange('currency')}>
              <option value="tnd" selected={selectedCurrency === 'tnd' || !selectedCurrency}> TND </option>
              <option value="usd" selected={selectedCurrency === 'usd'}> USD </option>
              <option value="eur" selected={selectedCurrency === 'eur'}> EUR </option>
            </PreferenceSelect>
          </div>
          <div>
            <Icon glyph="web" size={23} />
            <PreferenceSelect width="100px" name="lang" onChange={handlePreferencChange('lang')}>
              <option value="en" selected={selectedLang === 'en' || !selectedLang}> English </option>
              <option value="fr" selected={selectedLang === 'fr'}> Francais </option>
            </PreferenceSelect>
          </div>
        </PreferenceWrapper>
        <RightsReservedP>
          ©
          {dayjs().year()}
          {' '}
          Trusty, Inc. All rights reserved
        </RightsReservedP>
      </Content>
    </Wrapper>
  );
}
