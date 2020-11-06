require('dotenv').config();

const constants = {
   NODE_ENV: process.env.NODE_ENV === 'production' ? 'Production' : 'Development',

   PORT: process.env.PORT || 7000,

   IS_PROD: process.env.NODE_ENV === 'production',

   REDIS_URL: process.env.REDIS_URL,
   
   SESSION_SECRET_KEY: process.env.SESSION_SECRET_KEY,
}

module.exports = constants
