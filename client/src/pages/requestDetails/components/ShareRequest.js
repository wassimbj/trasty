/* eslint-disable max-len */
import React, { useRef, useState } from 'react';
import Icon from '@hackclub/icons';
import {
  ShareBtnsWrapper, ShareCard,
  ShareBtn, ShareBtnLink, SuccessCopyHint, TextCopyElem,
} from '../style';

export default function ShareRequest() {
  const [successCopy, setSuccessCopy] = useState(false);
  const copyTextElem = useRef(null);
  const textToShare = window.location.href;

  let timer;
  const handleLinkCopy = () => {
    if (copyTextElem) {
      if ('clipboard' in navigator) {
        navigator.clipboard.writeText(textToShare);
      } else {
        copyTextElem.current.select();
        document.execCommand('copy');
      }
      setSuccessCopy(true);
      clearTimeout(timer);
      timer = setTimeout(() => {
        setSuccessCopy(false);
      }, 500);
    }
  };

  return (
    <ShareCard>
      <span className="shareHint"> Share </span>
      <ShareBtnsWrapper>
        <ShareBtnLink href={`https://www.facebook.com/sharer/sharer.php?u=${textToShare}`} target="_blank" rel="noreferrer">
          <Icon glyph="facebook" size={25} />
          Facebook
        </ShareBtnLink>
        <ShareBtn onClick={handleLinkCopy}>
          {successCopy ? <SuccessCopyHint>Copied</SuccessCopyHint> : null}
          <TextCopyElem ref={copyTextElem}>{textToShare}</TextCopyElem>
          <Icon glyph={successCopy ? 'copy-check' : 'copy'} size={25} />
          Copy
        </ShareBtn>
      </ShareBtnsWrapper>
    </ShareCard>
  );
}
