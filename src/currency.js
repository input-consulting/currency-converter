import {rates} from 'currency-rates';

export class Currency {

  constructor() {
    this.base = 'USD';
  }

  static convert(val, opts) {
    // Convert arrays recursively
    if (typeof val === 'object' && val.length) {
      for (let i = 0; i < val.length; i++) {
        val[i] = convert(val[i], opts);
      }
      return val;
    }

    opts = opts || {};

    // multiple the value by the exchange rate
    return val * Currency.getRate(opts.to, opts.from);
  }

  static getRate(to, from) {
    // make sure the base rate is in the rates object:
    rates.rates[this.base] = 1;

    // throw an error if either rate isn't in the rates array
    if (!rates.rates[to] || !rates.rates[from]) throw new Error('currency not found');

    // if `from` currency === fx.base, return the basic exchange rate for the `to` currency
    if (from === this.base) {
      return rates.rates[to];
    }

    // if `to` currency === base, return the basic inverse rate of the `from` currency
    if (to === this.base) {
      return 1 / rates.rates[from];
    }

    // otherwise, return the `to` rate multipled by the inverse of the `from` rate to get the
    // relative exchange rate between the two currencies
    return rates.rates[to] * (1 / rates.rates[from]);
  }

  static round(value, exp) {
    if (typeof exp === 'undefined' || +exp === 0) return Math.round(value);

    value = +value;
    exp = +exp;

    if (isNaN(value) || !(typeof exp === 'number' && exp % 1 === 0)) return NaN;

    // shift
    value = value.toString().split('e');
    value = Math.round(+(value[0] + 'e' + (value[1] ? (+value[1] + exp) : exp)));

    // shift back
    value = value.toString().split('e');
    return +(value[0] + 'e' + (value[1] ? (+value[1] - exp) : -exp));
  }
  

}
