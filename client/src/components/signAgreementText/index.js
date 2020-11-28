import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.p`
  display: inline-block;
  font-size: 14px;
  font-weight: 500;
  color: rgb(103, 113, 122);
  border-radius: 8px;
  margin-top: 64px;
  margin-left: 32px;
  margin-right: 32px;
  text-align: center;
  position: relative;
  z-index: 3;
`;

const ReadLink = styled.a`
  color: rgb(38, 80, 255);
  font-weight: 600;
  display: inline-block;
`;

export default function SignAgreementText() {
  return (
    <Wrapper>
      By using Trusti, you agree to our
      {' '}
      <ReadLink href="https://github.com/withspectrum/code-of-conduct" target="_blank" rel="noopener noreferrer">
        Privacy Statement
      </ReadLink>
      {' '}
      and
      {' '}
      <ReadLink href="https://github.com/withspectrum/code-of-conduct" target="_blank" rel="noopener noreferrer">
        Terms of Service
      </ReadLink>
      .
    </Wrapper>
  );
}
