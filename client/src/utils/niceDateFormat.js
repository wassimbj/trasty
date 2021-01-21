import dayjs from 'dayjs';

export default function niceDateFormat(date, complete) {
  return dayjs(new Date(date)).format(`${complete ? 'MMMM' : 'MMM'} D, YYYY`);
}
