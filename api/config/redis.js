const Redis = require("ioredis");
const constants = require("../constants");

const redis = process.env.NODE_ENV === "production"
? new Redis(constants.REDIS_URL)
: new Redis({host: 'redis'});

module.exports = redis;
