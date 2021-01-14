import React from 'react';

export default function ImgWithFallback({ src, alt, context }) {
  const defaultImgs = {
    user: '/images/default-user-img.png',
    product: '/images/default-product-img.png',
  };

  const handleImgError = (e) => {
    e.target.onerror = null;
    e.target.src = defaultImgs[context || 'user'];
  };

  return <img src={src} alt={alt || ''} onError={handleImgError} />;
}
