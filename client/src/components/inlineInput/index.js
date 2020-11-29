import React, { useState } from 'react';
import { Wrapper, Input } from './style';

export default function InlineInput({
  text, placeholder,
  type, width, inputWidth,
  initStyles, focusStyles,
}) {
  const [isFocus, setIsFocus] = useState(false);
  return (
    <Wrapper
      initStyles={initStyles}
      width={width}
      style={isFocus ? focusStyles : { }}
    >
      <span>
        {text}
      </span>
      <Input
        type={type || 'text'}
        onFocus={() => setIsFocus(true)}
        onBlur={() => setIsFocus(false)}
        placeholder={placeholder}
        width={inputWidth}
      />
    </Wrapper>
  );
}
