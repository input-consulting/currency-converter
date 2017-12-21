import { bindable, computedFrom, observable } from 'aurelia-framework';
import { EventAggregator } from 'aurelia-event-aggregator';
import { Currency } from 'currency';

export class DisplayField {
  static inject = [EventAggregator];

  @bindable currency;
  @observable active;

  constructor(ea) {
    this.ea = ea;

    this.rawValue = [];
    this.active = false;
  }

  activeChanged(newValue, oldValue) {
    if (newValue === true) {
      this.ea.publish('convert-value', this.rawValue);
    }
  }

  @computedFrom('rawValue.length')
  get value() {
    return this.rawValue.join('');
  }

  attached() {
    this.currencySubscription = this.ea.subscribe('currency-selected', (value) => {
      this.activeCurrency = value;
    });

    this.convertSubscription = this.ea.subscribe('convert-value', (value) => {
      if (this.active) return;

      let currencyValue = parseFloat(value.join(''));
      if (isNaN(currencyValue)) {
        this.rawValue = [];
        return;
      }

      currencyValue = Currency.convert(currencyValue, { from: this.activeCurrency, to: this.currency });
      const fixed = isFinite(currencyValue) && Math.floor(currencyValue) === currencyValue ? 0 : 2;
      const currencyString = Currency.round(currencyValue.toFixed(2), 2).toFixed(fixed);

      // to make pop work
      while (this.rawValue.pop());
      for (let index = 0; index < currencyString.length; index++) {
        this.rawValue.push(currencyString[index]);
      }
    });

    this.valueSubscription = this.ea.subscribe('value-pressed', (value) => {
      if (!this.active) return;

      if (this.rawValue.length === 0 && value === '0') return;
      if (this.rawValue.find( x => x === '.' ) && value === '.') return;
      
      this.rawValue.push(value);

      this.notifyConverters();
    });

    this.commandSubscription = this.ea.subscribe('command-pressed', (command) => {
      if (!this.active) return;

      switch (command) {
        case '⌫': {
          this.rawValue.pop();
          this.notifyConverters();
          break;
        }
        case 'C': {
          while (this.rawValue.pop());
          this.notifyConverters();
          break;
        }
        default: break;
      }
    });
  }

  detached() {
    this.valueSubscription.dispose();
    this.commandSubscription.dispose();
    this.convertSubscription.dispose();
    this.currencySubscription.dispose();
  }

  selectCurrency() {
    this.ea.publish('currency-selected', this.currency);
  }

  notifyConverters() {
    this.ea.publish('convert-value', this.rawValue);
  }

}
