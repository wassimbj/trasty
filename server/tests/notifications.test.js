import getNotifs from '../services/notifications/getNotifs';

test('get user notifs', async () => {
  const res = await getNotifs(1);
  console.log(res)
  expect(() => res).not.toThrow(Error);
});
