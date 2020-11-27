import React, { useState } from 'react';
import styled, { css } from 'styled-components';

const Wrapper = styled.div`
  position: relative;
  ${(props) => props.inline && css` display: inline-block; `}
`;
const StyledTip = styled.div`
  position: absolute;
  left: 50%;
  bottom: 100%;
  transform: translateX(-50%);
  will-change: transform;
  background: #000;
  color: #fff;
  transition: 250ms;
  visibility: hidden;
  opacity: 0;
  ${(props) => props.isOpen && css`
    visibility: visible;
    opacity: 1;
  `}
  font-size: 12px;
  font-weight: 400;
  padding: 0.5rem;
  border-radius: 5px;
  max-width: 300px;
  width: ${(props) => css`${props.width}`};
`;

export default function ToolTip({ children, content, inline }) {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <Wrapper
      inline={inline}
      onMouseOver={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
      onBlur={() => setIsOpen(false)}
      onClick={() => setIsOpen(true)}
    >
      <StyledTip isOpen={isOpen} width={String(content).length <= 30 ? '100px' : '250px'}>{content}</StyledTip>
      {children}
    </Wrapper>
  );
}
