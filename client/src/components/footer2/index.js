import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  background: rgba(0,0,0,0.065);
  padding: 0.5rem;
`;

const Content = styled.div`
  display: flex;
  align-items: center;
`;

const Links = styled.div`
  & a {
    color: rgba(0,0,0,0.5);
    &:hover{ color: #000 }
  }
`;

export default function Footer2() {
  return (
    <Wrapper>
      <Content>
        <Links>
          <a href="/login">Login</a>
          <a href="/shops">Shops</a>
          <a href="/request">Requests</a>
          <a href="/privacy">Privacy</a>
          <a href="/terms">Terms</a>
          <a href="/terms">Support</a>
        </Links>
      </Content>
    </Wrapper>
  );
}
