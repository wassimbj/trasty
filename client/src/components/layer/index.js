import React from 'react';
import styled from 'styled-components';

const StyledLayer = styled.div`
  background: rgba(0,0,0,0.4);
  position: fixed;
  top: 0; bottom 0;
  left: 0; right: 0;
  width: 100%;
  height: 100%;
  opacity: 0.9;
  cursor: zoom-out;
  z-index: ${(props) => props.zIndex || '99999999'};
`;

export default function Layer({ zIndex, onClick }) {
  return (
    <StyledLayer zIndex={zIndex} onClick={onClick} />
  );
}
