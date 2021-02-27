/* eslint-disable no-nested-ternary */
import React from 'react';
import Layer from '../layer';
import {
  Wrapper, ModalGlobalStyle,
  ModalContainer, ModalContentWrapper,
  BodyWrapper, Body, Footer, Title
} from './style'

export function Modal({ onClose, children, size }) {
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

export function ModalTitle({children}){
  return (
    <Title>
      {children}
    </Title>
  )
}

export function ModalFooter({children}){
  return (
    <Footer>
      {children}
    </Footer>
  )
}

export function ModalBody({children}){
  return (
    <Body>
      {children}
    </Body>
  )
}

export function ModalBodyWrapper({children}){
  return (
    <BodyWrapper>
      {children}
    </BodyWrapper>
  )
}
