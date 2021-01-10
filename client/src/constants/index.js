const IS_PROD = process.env.NODE_ENV === 'production';
const constants = {
  IS_PROD,
  SERVER_URL: IS_PROD ? 'https://api.trusty.tn' : 'http://localhost:5000',
  USDINTND: 2.66,
  EURINTND: 3.27,
  APP_NAME: 'trasy',
};

export default constants;
