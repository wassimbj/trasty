import Queue from "bull";
import redis from '../config/redis'

const client = redis
const subs = redis

export default function createQueue(name) {
  const queue = new Queue(name, {
    createClient: function (type, redisOpts) {
      switch (type) {
        case "client":
          return client;
        case "subscriber":
          return subs;
        case "bclient":
          return redis;
        default:
          throw new Error("Unexpected connection type: ", type);
      }
    },
  });

  queue.on("error", (err) => {
   console.log(`Queue (${name}) Error: `, err)
  })

  return queue
}
