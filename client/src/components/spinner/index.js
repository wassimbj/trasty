import React from 'react';
import styled, { css } from 'styled-components';

const StyledSpinner = styled.span`
  box-sizing: border-box;
  border-color:
          ${(props) => props.color || 'rgb(225, 231, 236)'}
          ${(props) => props.color || 'rgb(225, 231, 236)'}
          ${(props) => props.color || 'rgb(225, 231, 236)'}
          ${(props) => props.spinnerColor || 'rgb(146, 159, 177)'};
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
  
  ${(props) => props.center && css` margin: 0 auto; `}
`;

export default function Spinner({
  spinnerColor, color,
  width, center,
}) {
  return (
    <StyledSpinner spinnerColor={spinnerColor} color={color} width={width} center={center} />
  );
}
