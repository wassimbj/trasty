import React from 'react'
import styled from 'styled-components'
import Icon from '@hackclub/icons';

const StyledMsg = styled.p`
  font-weight: 500;
  text-align: center;
  padding: 0.25rem;
  margin: 1rem 0;
  color: #FF5722;
  & svg { margin: 0 auto; }
`;

export default function SomethingWrongMsg() {
  return (
    <StyledMsg>
      <Icon glyph="important" />
      Something went wrong...
    </StyledMsg>
  )
}
