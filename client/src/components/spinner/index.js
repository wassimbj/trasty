import React from 'react';
import styled, { css } from 'styled-components';

const Wrapper = styled.div`
  ${(props) => props.center && css` text-align: center; `}
  ${(props) => css` ${props.customStyle} `}
`;

const StyledSpinner = styled.span`
  box-sizing: border-box;
  border-color:
          ${(props) => props.color || '#999'}
          ${(props) => props.color || '#999'}
          ${(props) => props.color || '#999'}
          ${(props) => props.spinnerColor || '#333'};
  display: inline-block;
  border-width: 2px;
  border-style: solid;
  border-radius: 50%;
  animation: 0.8s ease 0s infinite normal none running spin;
  width: ${(props) => props.width || '24px'};
  height: ${(props) => props.width || '24px'};

  @keyframes spin{
    from { transform: rotate(0deg) }
    to { transform: rotate(360deg) }
  }
`;

export default function Spinner({
  spinnerColor, color,
  width, center, customStyle,
}) {
  return (
    <Wrapper center={center} customStyle={customStyle}>
      <StyledSpinner
        spinnerColor={spinnerColor}
        color={color}
        width={width}
      />
    </Wrapper>
  );
}
