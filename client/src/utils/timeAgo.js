import relativeTime from 'dayjs/plugin/relativeTime';
import dayjs from 'dayjs';

dayjs.extend(relativeTime);

export default function timeAgo(date) {
  return dayjs(date).fromNow();
}
