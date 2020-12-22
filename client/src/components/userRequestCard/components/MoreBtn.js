import React from 'react';
import Icon from '@hackclub/icons';
import styled from 'styled-components';
import RequestCardDropdown from './RequestCardDropdown';

const StyledMoreBtn = styled.span`
  position: absolute;
  top: 3px;
  right: 5px;
  background: rgba(0,0,0,0.1);
  border-radius: 50%;
  color: #494949;
  cursor: pointer;
  transition: 200ms;
  &:hover{ background: rgba(0,0,0,0.18); color: #000; }
  z-index: 2;
`;

export default function MoreBtn() {
  return (
    <>
      <StyledMoreBtn><Icon glyph="more" size={29} /></StyledMoreBtn>
      <RequestCardDropdown
        isOpen={true}
        customStyle="top: 35px; right: 15px; width: 150px;"
      />
    </>
  );
}
