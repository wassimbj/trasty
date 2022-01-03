const IS_PROD = process.env.NODE_ENV === 'production';
const IS_LOCAL = false; // to test it on local network, for the mobile phones.
const constants = {
  IS_PROD,
  SERVER_URL: IS_LOCAL ? 'http://192.168.1.12:5000' : (IS_PROD ? 'https://trasty.herokuapp.com' : 'http://localhost:5000'),
  USDINTND: 2.66,
  EURINTND: 3.27,
  APP_NAME: 'trasty',
};

export default constants;
