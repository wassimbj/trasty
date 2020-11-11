import React from 'react';
import styled from 'styled-components';

const StyledDot = styled.span`
  margin: 0 0.3rem;
  color: gray;
  ${(props) => props.customStyles}
`;

export default function BigDot({ customStyles }) {
  return (
    <StyledDot customStyles={customStyles}>•</StyledDot>
  );
}
