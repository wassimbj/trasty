import React, { useContext } from 'react';
import Icon from '@hackclub/icons';
import {
  DropDown, DropdownItem,
  ItemIcon, SilentDropdownItem,
} from '../../dropdown/style';
// import UserAuthContext from '../../contexts/UserAuthContext';

export default function RequestCardDropdown({
  isOpen, onClickDelete, onClickOffers, customStyle,
}) {
  // const { isLoggedIn } = useContext(UserAuthContext);
  return (
    <DropDown isOpen={isOpen} customStyle={customStyle}>
      <SilentDropdownItem customStyle="color: #E91E63">
        <Icon glyph="delete" size={25} style={{ marginRight: '0.5rem' }} />
        <span> Delete </span>
      </SilentDropdownItem>
      <SilentDropdownItem>
        <Icon glyph="message-simple" size={25} style={{ marginRight: '0.5rem' }} />
        <span> Offers </span>
      </SilentDropdownItem>
    </DropDown>
  );
}
