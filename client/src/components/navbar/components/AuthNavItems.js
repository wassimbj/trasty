import React, { useState } from 'react';
import Icon from '@hackclub/icons';
import Tip from '../../tip';
import { StyledLink } from '../style';
import ProfileDropdown from '../../dropdown/ProfileDropdown';
import NotifsDropdown from '../../dropdown/NotifsDropdown';
import AddDropdown from '../../dropdown/AddDropdown';

export default function AuthNavItems({ onClickLogout }) {
  const [isDropdownOpen, setIsDropdownOpen] = useState({
    profileDropdown: false,
    notifsDropdown: false,
    addDropdown: false,
  });

  document.onclick = (e) => {
    if ((e.path[0].ariaLabel !== 'navElem') && (e.path[0].nodeName !== 'path')) {
      setIsDropdownOpen({
        profileDropdown: false,
        notifsDropdown: false,
        addDropdown: false,
      });
    }
  };

  const isSmallDevice = window.innerWidth < 450;
  return (
    <>
    <Tip content="Add Request">
      <StyledLink
        aria-label="navElem"
        to="#"
        onClick={() => setIsDropdownOpen({
          profileDropdown: false,
          addDropdown: !isDropdownOpen.addDropdown,
          notifsDropdown: false,
        })}
      >
        <Icon glyph="plus" size={35} aria-label="navElem" />
      </StyledLink>
    </Tip>
    <Tip content="Notifications">
      <StyledLink
        aria-label="navElem"
        to={isSmallDevice ? '/notifs' : '#'}
        onClick={() => (!isSmallDevice ? setIsDropdownOpen({
          notifsDropdown: !isDropdownOpen.notifsDropdown,
          profileDropdown: false,
        }) : false)}
      >
        <Icon glyph="notification" size={35} aria-label="navElem" />
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
          notifsDropdown: false,
        })}
      >
        <Icon glyph="profile" size={35} aria-label="navElem" />
      </StyledLink>
    </Tip>
    {
      isDropdownOpen.profileDropdown
        ? (
          <ProfileDropdown
            isOpen={isDropdownOpen.profileDropdown}
            onClickLogout={onClickLogout}
          />
        )
        : null
    }
    {
      isDropdownOpen.addDropdown
        ? (
          <AddDropdown isOpen={isDropdownOpen.addDropdown} />
        )
        : null
    }
    {
      !isSmallDevice && <NotifsDropdown isOpen={isDropdownOpen.notifsDropdown} />
    }
    </>
  );
}
