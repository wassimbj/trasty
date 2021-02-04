import React from 'react'
import Icon from '@hackclub/icons';
import styled from 'styled-components';

const StyledMsg = styled.div`
  text-align: center;
  padding: 0.25rem;
  margin: 1rem 0;
  font-weight: 500;
  color: #999;
  & svg{ margin: 0 auto; }
`;

export default function EmptyMessagesMsg() {
  return (
    <StyledMsg>
      <Icon glyph="message-new" size={45} />
      You have a question ?
      <br />
      send a message, and start discussing more...
    </StyledMsg>
  )
}
