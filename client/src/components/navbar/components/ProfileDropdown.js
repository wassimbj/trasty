import React from 'react';
import styled from 'styled-components';
import Icon from '@hackclub/icons';
import { Link } from 'react-router-dom';

const DropDown = styled.div`
  position: absolute;
  max-width: 200px;
  border-radius: 5px;
  padding: 0.5rem;
  border: 1px solid rgba(0,0,0,0.05);
  right: 0;
  top: 100%;
  width: 200px;
  background: white;
  box-shadow: 0 12px 28px 0 rgba(0, 0, 0, 0.2), 
              0 2px 4px 0 rgba(0, 0, 0, 0.1),
              inset 0 0 0 1px rgba(255, 255, 255, 0.5);
`;

const DropdownItem = styled(Link)`
  display: flex;
  align-items: center;
  padding: 0.5rem;
  border-radius: 5px;
  &:not(:last-child) { margin-bottom: 0.5rem; }
  &:hover{ background: rgba(0,0,0,0.05); }

  & span {
    margin-left: 0.5rem;
    font-weight: 500;
  }

  & svg {
    border-radius: 30px;
    padding: 2px;
    background: rgba(0,0,0,0.075);
  }
`;

export default function ProfileDropdown() {
  return (
    <DropDown>
      <DropdownItem>
        <Icon glyph="person" />
        <span> Profile </span>
      </DropdownItem>
      <DropdownItem>
        <Icon glyph="explore" />
        <span> Orders </span>
      </DropdownItem>
      <DropdownItem>
        <Icon glyph="briefcase" />
        <span> Trips </span>
      </DropdownItem>
      <DropdownItem>
        <Icon glyph="door-leave" />
        <span> Logout </span>
      </DropdownItem>
    </DropDown>
  );
}
