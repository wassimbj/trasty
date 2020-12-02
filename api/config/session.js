import session from 'express-session';
import constants from '../constants';
const RedisStore = require("connect-redis")(session);
import redis from './redis';

function init() {
  const sessionStore = new RedisStore({ client: redis });

  return session({
    name: "sid",
    // secret: `${constants.SESSION_SECRET_KEY}`, // Put whatever here
    secret: 'dssq*/fv*dfv*/df7v*//d7fv*q7/dfv*/d7f/v7d/f7*vd7q*fv7q*a*a',
    store: sessionStore,
    resave: false,
    saveUninitialized: true,
    unset: "destroy",
    cookie: {
      secure: constants.IS_PROD,
      httpOnly: constants.IS_PROD,
      maxAge: 63072000000, // 2 years in ms
      // domain: process.env.WEBSITE_URL,
    },
  });
}

export default init;
