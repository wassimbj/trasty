import React from 'react';
import { StyledButton, StyledWhiteButton } from './style';

export function Button({ children, onClick, customStyles }) {
  return (
    <StyledButton
      customStyles={customStyles}
      onClick={onClick}
    >
      {children}
    </StyledButton>
  );
}

export function WhiteButton({ children, onClick, customStyles }) {
  return (
    <StyledWhiteButton
      customStyles={customStyles}
      onClick={onClick}
    >
      {children}
    </StyledWhiteButton>
  );
}
