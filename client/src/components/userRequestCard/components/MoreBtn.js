import React, { useState } from 'react';
import Icon from '@hackclub/icons';
import styled from 'styled-components';
import RequestCardDropdown from './RequestCardDropdown';
import DeleteRequestModal from '../../deleteRequestModal';

const StyledMoreBtn = styled.span`
  position: absolute;
  top: 3px;
  right: 5px;
  background: rgba(0,0,0,0.075);
  border-radius: 50%;
  color: #333;
  cursor: pointer;
  transition: 200ms;
  &:hover{ background: rgba(0,0,0,0.15); color: #000; }
  z-index: 2;
`;

export default function MoreBtn({ requestId, requestBy }) {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  return (
    <>
      <StyledMoreBtn onClick={() => setIsDropdownOpen(!isDropdownOpen)}><Icon glyph="more" size={29} /></StyledMoreBtn>
      <RequestCardDropdown
        isOpen={isDropdownOpen}
        onClickDelete={() => setIsDeleteModalOpen(true)}
        customStyle="top: 35px; right: 15px; width: 150px;"
      />
      {
        isDeleteModalOpen ? (
          <DeleteRequestModal
            onClose={() => setIsDeleteModalOpen(false)}
            requestBy={requestBy}
            requestId={requestId}
          />
        ) : null
      }
    </>
  );
}
