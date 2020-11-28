import React from 'react';
import Icon from '@hackclub/icons';
import { StyledFacebookButton, StyledGoogleButton } from './style';

export function FacebookButton({ href, text }) {
  return (
    <StyledFacebookButton href={href}>
      <Icon glyph="facebook" />
      <span>{ text }</span>
    </StyledFacebookButton>
  );
}

export function GoogleButton({ href, text }) {
  return (
    <StyledGoogleButton href={href}>
      <Icon glyph="google" />
      <span>{ text }</span>
    </StyledGoogleButton>
  );
}
