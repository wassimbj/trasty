import React from 'react';
import Icon from '@hackclub/icons';
import { DropDown, DropdownItem, ItemIcon } from './style';

export default function AddDropdown({ isOpen }) {
  return (
    <DropDown isOpen={isOpen} isAddDropdown>
      <DropdownItem to="/request/new">
        <ItemIcon><Icon glyph="explore" size={26} /></ItemIcon>
        <span> Add Request </span>
      </DropdownItem>
      <DropdownItem to="/trip/new">
        <ItemIcon><Icon glyph="briefcase" size={26} /></ItemIcon>
        <span> Add Trip </span>
      </DropdownItem>
    </DropDown>
  );
}
