import React from 'react';
import styled from 'styled-components';
import Icon from '@hackclub/icons';

const Wrapper = styled.div`
  max-width: 400px;
  padding: 0.25rem;
  margin: 4rem auto 1rem;
`;

const ErrorIcon = styled(Icon)`
  margin: 0 auto;
`;

const ErrorMsg = styled.span`
  display: block;
  text-align: center;
  font-size: 19px;
  color: #333;
`;

export default function ErrorFallback() {
  return (
    <Wrapper>
      <ErrorIcon size={45} color="#333" glyph="sad" />
      <ErrorMsg> Something went wrong, please come back later... </ErrorMsg>
    </Wrapper>
  );
}
