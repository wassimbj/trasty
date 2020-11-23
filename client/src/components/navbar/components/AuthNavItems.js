import React, { useState } from 'react';
import Icon from '@hackclub/icons';
import Tip from '../../tip';
import { StyledLink } from '../style';
import ProfileDropdown from '../../dropdown/ProfileDropdown';
import AddDropdown from '../../dropdown/AddDropdown';

export default function AuthNavItems() {
  const [isDropdownOpen, setIsDropdownOpen] = useState({
    profileDropdown: false,
    addDropdown: false,
  });

  document.onclick = (e) => {
    if ((e.path[0].ariaLabel !== 'navElem') && (e.path[0].nodeName !== 'path')) {
      setIsDropdownOpen({ profileDropdown: false, addDropdown: false });
    }
  };
  return (
    <>
    <Tip content="Add">
      <StyledLink
        aria-label="navElem"
        to="#"
        onClick={() => setIsDropdownOpen({
          profileDropdown: false,
          addDropdown: !isDropdownOpen.addDropdown,
        })}
      >
        <Icon glyph="plus" size={35} aria-label="navElem" />
      </StyledLink>
    </Tip>
    <Tip content="Notifications">
      <StyledLink to="#">
        <Icon glyph="notification" size={35} />
      </StyledLink>
    </Tip>
    <Tip content="Messages">
      <StyledLink to="/messages">
        <Icon glyph="message" size={35} />
      </StyledLink>
    </Tip>
    <Tip content="Profile">
      <StyledLink
        aria-label="navElem"
        to="#"
        onClick={() => setIsDropdownOpen({
          profileDropdown: !isDropdownOpen.profileDropdown,
          addDropdown: false,
        })}
      >
        <Icon glyph="profile" size={35} aria-label="navElem" />
      </StyledLink>
    </Tip>
    <ProfileDropdown isOpen={isDropdownOpen.profileDropdown} />
    <AddDropdown isOpen={isDropdownOpen.addDropdown} />
    </>
  );
}
