import React, { useState } from 'react';
import Icon from '@hackclub/icons';
import { StyledLink, StyledSilentLink } from '../style';
import AddDropdown from '../../dropdown/AddDropdown';

export default function AuthNavItems() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  return (
    <>
      <StyledLink to="/trips">
        <Icon glyph="briefcase" size={26} />
        <span> Trips </span>
      </StyledLink>
      <StyledSilentLink onClick={() => setIsDropdownOpen(!isDropdownOpen)}>
        <Icon glyph="plus" size={26} />
        <span> Add </span>
      </StyledSilentLink>
      <StyledLink to="/requests">
        <Icon glyph="explore" size={26} />
        <span> Requests </span>
      </StyledLink>

      <AddDropdown isOpen={isDropdownOpen} />
    </>
  );
}
