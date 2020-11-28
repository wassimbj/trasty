import React from 'react';
import styled from 'styled-components';
import { FacebookButton, GoogleButton } from '../../../components/authButtons';

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const ButtonsWrapper = styled.div`
  display: grid;
  gap: 16px;
  align-items: flex-end;
  padding: 16px 0px;
  // grid-template-columns: repeat(2, 1fr);
`;

export default function LoginButtons() {
  return (
    <Container>
      <ButtonsWrapper>
        <FacebookButton text="Start with Facebook" />
        <GoogleButton text="Start with Google" />
      </ButtonsWrapper>
    </Container>
  );
}
