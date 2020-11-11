import React, { useState } from 'react';
import { Wrapper, Input } from './style';

export default function InlineInput({
  text, placeholder, type, width, inputWidth,
}) {
  const [isFocus, setIsFocus] = useState(false);
  return (
    <Wrapper width={width} style={{ background: `${isFocus ? '#ededee' : 'transparent'}` }}>
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
