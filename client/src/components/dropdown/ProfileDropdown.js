import React from 'react';
import Icon from '@hackclub/icons';
import { DropDown, DropdownItem, ItemIcon } from './style';

export default function ProfileDropdown({ isOpen }) {
  return (
    <DropDown isOpen={isOpen}>
      <DropdownItem>
        <ItemIcon><Icon glyph="person" size={26} /></ItemIcon>
        <span> Profile </span>
      </DropdownItem>
      <DropdownItem>
        <ItemIcon><Icon glyph="explore" size={26} /></ItemIcon>
        <span> Requests </span>
      </DropdownItem>
      <DropdownItem>
        <ItemIcon><Icon glyph="briefcase" size={26} /></ItemIcon>
        <span> Trips </span>
      </DropdownItem>
      <DropdownItem>
        <ItemIcon><Icon glyph="settings" size={26} /></ItemIcon>
        <span> Settings </span>
      </DropdownItem>
      <DropdownItem>
        <ItemIcon><Icon glyph="door-leave" size={26} /></ItemIcon>
        <span> Logout </span>
      </DropdownItem>
    </DropDown>
  );
}
