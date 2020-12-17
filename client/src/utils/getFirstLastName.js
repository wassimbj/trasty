/* eslint-disable indent */
/* eslint-disable no-nested-ternary */
export default function getFirstLastName(fullname) {
  const fullNameArr = fullname.split(' ');
  console.log('fullNameArr: ', fullNameArr, fullNameArr[0]);
  const firstName = fullNameArr[0];
  fullNameArr.shift();
  const lastName = fullNameArr.join(' ');

  return { firstName, lastName };
}
