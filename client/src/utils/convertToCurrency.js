import constants from '../constants';

export default function convertToCurrency(price, currency) {
  // eslint-disable-next-line no-nested-ternary
  let currencyEquals = parseFloat(price).toFixed(2);
  // const selectedCurrency = window.localStorage.getItem('currency');
  if (String(currency).toLowerCase() === 'usd') {
    currencyEquals = price * constants.USDINTND; // tnd to usd
  } else if (String(currency).toLowerCase() === 'eur') {
    currencyEquals = price * constants.EURINTND; // tnd to eur
  }

  return parseFloat(currencyEquals).toFixed(2);
}
