const { Pool } = require('pg');
const db = new Pool();

db.on('error', (err, client) => {
  console.error('Unexpected DB error', err);
  process.exit(-1);
});


module.exports = db;
