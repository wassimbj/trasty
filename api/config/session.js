const session = require("express-session");
const constants = require("./constants");
const RedisStore = require("connect-redis")(session);
const redis = require("./redis");

function init() {
  const sessionStore = new RedisStore({ client: redis });

  return session({
    name: "sid",
    secret: constants.SESSION_SECRET_KEY, // Put whatever here
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

module.exports = init;
