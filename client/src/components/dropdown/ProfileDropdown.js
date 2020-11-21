import React from 'react';
import Icon from '@hackclub/icons';
import { DropDown, DropdownItem, ItemIcon } from './style';

export default function ProfileDropdown({ isOpen }) {
  return (
    <DropDown isOpen={isOpen}>
      <DropdownItem to="/user/588">
        <ItemIcon><Icon glyph="person" size={26} /></ItemIcon>
        <span> My Profile </span>
      </DropdownItem>
      <DropdownItem to="/my/requests">
        <ItemIcon><Icon glyph="explore" size={26} /></ItemIcon>
        <span> My Requests </span>
      </DropdownItem>
      {/* <DropdownItem to="/my/trips">
        <ItemIcon><Icon glyph="briefcase" size={26} /></ItemIcon>
        <span> My Trips </span>
      </DropdownItem> */}
      <DropdownItem to="/my/settings">
        <ItemIcon><Icon glyph="settings" size={26} /></ItemIcon>
        <span> My Settings </span>
      </DropdownItem>
      <DropdownItem to="/logout">
        <ItemIcon><Icon glyph="door-leave" size={26} /></ItemIcon>
        <span> Logout </span>
      </DropdownItem>
    </DropDown>
  );
}
