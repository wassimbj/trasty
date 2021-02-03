/* eslint-disable no-nested-ternary */
import React from 'react';
import Layer from '../layer';
import {
  Wrapper, ModalGlobalStyle,
  ModalContainer, ModalContentWrapper
} from './style'

export default function Modal({ onClose, children, size }) {
  // size = md | lg
  return (
    <Wrapper>
      <ModalGlobalStyle />
      <Layer zIndex="10" onClick={onClose} />
      <ModalContainer size={size}>
        <ModalContentWrapper>
          { children }
        </ModalContentWrapper>
      </ModalContainer>
    </Wrapper>
  );
}
