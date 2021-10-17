import React from 'react';
import Icon from '@hackclub/icons';
import { DropDown, ItemIcon, SilentDropdownItem } from './style';

export default function ChatMoreDropdown({isOpen, onClickCloseChat}) {
  return (
    <DropDown isOpen={isOpen}>
      <SilentDropdownItem onClick={onClickCloseChat}>
        <ItemIcon>
          <Icon glyph="forbidden" size={23} />
        </ItemIcon>
        <span> Close chat </span>
      </SilentDropdownItem>
      {/* <DropdownItem to="/trip/new">
        <ItemIcon>
          <Icon glyph="briefcase" size={26} />
        </ItemIcon>
        <span> Add Trip </span>
      </DropdownItem> */}
    </DropDown>
  );
}
