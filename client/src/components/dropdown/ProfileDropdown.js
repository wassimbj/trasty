import React, { useContext } from 'react';
import Icon from '@hackclub/icons';
import {
  DropDown, DropdownItem,
  ItemIcon, SilentDropdownItem,
} from './style';
import UserAuthContext from '../../contexts/UserAuthContext';

export default function ProfileDropdown({ isOpen, onClickLogout }) {
  const { isLoggedIn } = useContext(UserAuthContext);
  return (
    <DropDown isOpen={isOpen}>
      <DropdownItem to={`/user/${isLoggedIn.userid}`}>
        <ItemIcon><Icon glyph="person" size={26} /></ItemIcon>
        <span> My Profile </span>
      </DropdownItem>
      <DropdownItem to="/my/offers">
        <ItemIcon><Icon glyph="message-simple" size={26} /></ItemIcon>
        <span> My Offers </span>
      </DropdownItem>
      <DropdownItem to="/my/settings">
        <ItemIcon><Icon glyph="settings" size={26} /></ItemIcon>
        <span> My Settings </span>
      </DropdownItem>
      <SilentDropdownItem onClick={onClickLogout}>
        <ItemIcon><Icon glyph="door-leave" size={26} /></ItemIcon>
        <span> Logout </span>
      </SilentDropdownItem>
    </DropDown>
  );
}
