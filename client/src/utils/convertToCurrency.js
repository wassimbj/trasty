import constants from '../constants';

export default function convertToCurrency(price, currency) {
  // eslint-disable-next-line no-nested-ternary
  let crnc = currency;
  if (!crnc) {
    crnc = window.localStorage.getItem('currency');
  }
  let currencyEquals = parseFloat(price).toFixed(2);
  // const selectedCurrency = window.localStorage.getItem('currency');
  if (String(crnc).toLowerCase() === 'usd') {
    currencyEquals = price * constants.USDINTND; // tnd to usd
  } else if (String(crnc).toLowerCase() === 'eur') {
    currencyEquals = price * constants.EURINTND; // tnd to eur
  }

  return parseFloat(currencyEquals).toFixed(2);
}
