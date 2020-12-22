import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  padding: 5rem 0.5rem;
  text-align: center;
  & p {
    font-size: 19px;
    font-weight: 500;
  }
`;

const GoBack = styled.a`
  display: inline-block;
  text-align: center;
  margin-top: 1rem;
  border-radius: 30px;
  padding: 0.5rem 1rem;
  border: 1px solid rgba(0,0,0,0.15);
  color: #333;
  &:hover{ border-color: rgba(0,0,0,0.2) }
`;

export default function Error404() {
  return (
    <Wrapper>
      <p>Looks like this page doesn't exist.</p>
      <GoBack href="/requests"> Go back </GoBack>
    </Wrapper>
  );
}
