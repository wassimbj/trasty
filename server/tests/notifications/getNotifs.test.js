var getNotifs = require('../../services/notifications/getNotifs');

test('get user notifs', () => {
  expect(getNotifs(8)).toEqual([]);
});
