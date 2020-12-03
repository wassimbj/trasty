import React from 'react';
import styled from 'styled-components';
import Icon from '@hackclub/icons';

const Wrapper = styled.div`
  display: flex;
  font-size: 12px;
  color: #898989;
  & span { margin-left: 0.25rem; display: block;}
`;

export default function Hint({ content }) {
  return (
    <Wrapper>
      <Icon glyph="info" size={18} color="#2ba1ff" />
      <span>{ content }</span>
    </Wrapper>
  );
}
