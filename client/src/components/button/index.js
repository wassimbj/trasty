import React from 'react';
import { StyledButton, StyledWhiteButton } from './style';

export function Button({
  children, onClick, customStyles, type, formId,
}) {
  return (
    <StyledButton
      customStyles={customStyles}
      onClick={onClick}
      type={type}
      form={formId}
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
