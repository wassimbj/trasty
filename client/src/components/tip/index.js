import React from 'react';
import Tippy from '@tippyjs/react';
// eslint-disable-next-line import/no-extraneous-dependencies
import 'tippy.js/dist/tippy.css'; // optional

function Tip({ content, placement, rest, children }) {
  return (
    <Tippy
      placement={!placement ? 'top' : placement}
      touch={false}
      arrow={false}
      arrowType="round"
      content={content}
      // eslint-disable-next-line react/jsx-props-no-spreading
      {...rest}
    >
      {children}
    </Tippy>
  );
}

export default Tip;
