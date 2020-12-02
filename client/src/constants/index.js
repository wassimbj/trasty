import React from 'react';

const IS_PROD = process.env.NODE_ENV === 'production';
const constants = {
  IS_PROD,
  SERVER_URL: IS_PROD ? 'https://api.trusty.tn' : 'http://localhost:5000',
};

export default constants;
