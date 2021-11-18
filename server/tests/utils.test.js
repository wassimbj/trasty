import genCode from '../utils/genCode';

test('genetate a code', async () => {
  let code = genCode(7)
  console.log("CODE: ", code)
  expect(() => code).not.toHaveLength(7);
});
