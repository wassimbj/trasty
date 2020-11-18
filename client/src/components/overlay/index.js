import React from 'react';
import styled, { css } from 'styled-components';

const StyledOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%; height: 100%;
  background: rgba(0,0,0,0.35);
  display: none;
  // z-index: 9999;
  ${(props) => props.isOpen && css`
    display: block;
  `}
`;

export default function BodyOverlay({ isOpen }) {
  return <StyledOverlay isOpen={isOpen} />;
}
