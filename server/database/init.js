import { Pool } from 'pg';
import constants from '../constants';
import logger from '../utils/logger';
const db = new Pool({
  connectionString: `${constants.PGDB_CONNECTION}`,
  max: 5,
  ssl: constants.IS_PROD
});

db.on('error', (err, client) => {
  logger.error(`Database Error: ${err}`);
  process.exit(-1);
});

db.on('connect', () => {
  logger.info('Database is connected');
});

export default db;
