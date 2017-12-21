import {EventAggregator} from 'aurelia-event-aggregator';

export class Keypad {

  static inject = [EventAggregator];

  constructor(ea) {
    this.ea = ea;
  }

  keyPressed(e) {
    const value = e.target.innerText || null;

    if ( /\d|[\.]/.test(value) ) {
      this.ea.publish( 'value-pressed', value );
    } else {
      this.ea.publish( 'command-pressed', value );
    }
  }
}
