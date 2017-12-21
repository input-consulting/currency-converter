import { children, TaskQueue } from 'aurelia-framework';
import { EventAggregator } from 'aurelia-event-aggregator';

export class DisplayPanel {
  static inject = [EventAggregator, TaskQueue];

  @children('display-field') items = [];

  constructor(ea, taskQueue) {
    this.ea = ea;
    this.taskQueue = taskQueue;

    this.activeCurrency = 'EUR';
  }

  attached() {
    this.taskQueue.queueTask( () => {
      this.updateCurrencyList();
    });

    this.convertSubscription = this.ea.subscribe('currency-selected', (value) => {
      this.activeCurrency = value;
      this.updateCurrencyList();
    });
  }

  detached() {
    this.convertSubscription.dispose();
  }

  updateCurrencyList() {
    this.items.forEach(x => {
      x.active = x.currency === this.activeCurrency;
    });
  }
}
