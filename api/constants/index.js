require('dotenv').config();

const IS_PROD = process.env.NODE_ENV === 'production';
const constants = {
  IS_PROD,
  NODE_ENV: IS_PROD ? 'Production' : 'Development',
  PORT: process.env.PORT || 5000,
  REDIS_URL: process.env.REDIS_URL,
  SESSION_SECRET_KEY: process.env.SESSION_SECRET_KEY,
  GOOGLE_CLIENT_ID: process.env.GOOGLE_CLIENT_ID,
  GOOGLE_CLIENT_SECRET: process.env.GOOGLE_CLIENT_SECRET,
  FACEBOOK_APP_ID: process.env.FACEBOOK_APP_ID,
  FACEBOOK_APP_SECRET: process.env.FACEBOOK_APP_SECRET,
  PGDB_CONNECTION: IS_PROD ? process.env.PROD_PGDB_CN : process.env.DEV_PGDB_CN,
  API_URL: IS_PROD ? process.env.API_URL : 'http://localhost:5000',
  CLIENT_URL: IS_PROD ? 'https://www.trusty.tn' : 'http://localhost:3000',
}

module.exports = constants
