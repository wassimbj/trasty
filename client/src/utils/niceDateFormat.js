import dayjs from 'dayjs';

export default function niceDateFormat(date) {
  return dayjs(new Date(date)).format('MMM D, YYYY');
}
