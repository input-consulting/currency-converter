import { EventAggregator } from 'aurelia-event-aggregator';

export class TipDisplay {

  static inject = [EventAggregator];

  constructor(ea) {
    this.ea = ea;

    this.visible = false;

    this.tip = 0;
    this.tipAmount = 0.0;
    this.amount = 0.0;

    this.split = 1;
    this.splitTip = 0.0;
    this.splitAmount = 0.0;
  }

  attached() {
    this.event = this.ea.subscribe('command-pressed', (event) => {
      if ( !/tip/i.test(event) ) return;
      this.visible = !this.visible;
    });

    this.event = this.ea.subscribe('convert-value', (event) => {
      this.tipAmount = 0.0;
      this.amount = parseFloat(event.join(''));
      if (isNaN(this.amount)) {
        this.reset();
        return;
      }

      this.tipPressed(this.tip);
      this.splitPressed(this.split);
    });
  }

  detached() {
    this.event.displose();
  }

  reset() {
    this.tip = 0;
    this.amount = 0.0;
    this.split = 1;
    this.splitAmount = 0.0;
    this.splitTip = 0.0;
  }

  tipPressed(tip) {
    this.tip = tip;
    this.tipAmount = this.amount * ( tip / 100 );

    this.splitPressed( this.split );
  }

  splitPressed(split) {
    this.split = split;
    this.splitTip = this.tipAmount / split;
    this.splitAmount = this.amount / split;
  }

}
