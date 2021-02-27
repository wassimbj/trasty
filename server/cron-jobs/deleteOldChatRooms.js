import schedule from 'node-schedule';
import db from '../database/init';
import logger from '../utils/logger';

export default function deleteOldChatRooms(){
  // run each day at 2:30 AM
  schedule.scheduleJob({ hour: 2, minute: 30 }, async function(){
    const {rowCount} = await db.query(`
      DELETE FROM offers WHERE delivery_date <= now()::date
    `);
    logger.info(`Cron-Job: Deleted ${rowCount} Chat rooms`);
  });
}
