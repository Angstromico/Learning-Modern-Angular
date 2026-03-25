import { Component, signal } from "@angular/core";

@Component({
  templateUrl: './counter.component.html',
  styleUrl: './counter.component.css'
})
export class CounterComponent {
  counter = 0
  counterSignals = signal(0)
  changeNumber = (change: '+' | '-') => {
    if(change === '+') {
      this.counter++
      this.counterSignals.update(value => value + 1)
    }
    if(change === '-') {
      this.counter--
      this.counterSignals.update(value => value - 1)
    }
  }
  resetCounter = () => {this.counter = 0
    this.counterSignals.set(0)
  }
}
