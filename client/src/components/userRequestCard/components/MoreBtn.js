import React, { useState } from 'react';
import Icon from '@hackclub/icons';
import styled from 'styled-components';
import RequestCardDropdown from './RequestCardDropdown';
import DeleteRequestModal from '../../deleteRequestModal';
import RequestOffersModal from '../../requestOffersModal';

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
  const [isOffersModalOpen, setIsOffersModalOpen] = useState(false);
  document.onclick = (e) => {
    console.dir(e);
    console.dir(e.path);
    if ((e.path[0].ariaLabel !== 'more')) {
      setIsDropdownOpen(false);
    }
  };

  return (
    <>
      <StyledMoreBtn
        className="requestCardMoreBtn"
        onClick={() => setIsDropdownOpen(!isDropdownOpen)}
      >
        <Icon glyph="more" size={29} />
      </StyledMoreBtn>
      <RequestCardDropdown
        isOpen={isDropdownOpen}
        onClickDelete={() => setIsDeleteModalOpen(true)}
        onClickOffers={() => setIsOffersModalOpen(true)}
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
      {
        isOffersModalOpen ? (
          <RequestOffersModal
            onClose={() => setIsOffersModalOpen(false)}
            requestBy={requestBy}
            requestId={requestId}
          />
        ) : null
      }
    </>
  );
}
