import { Component } from "@angular/core";

@Component({
  templateUrl: './counter.component.html',
  styleUrl: './counter.component.css'
})
export class CounterComponent {
  counter = 0
  changeNumber = (change: '+' | '-') => {
    if(change === '+') {
      this.counter++
    }
    if(change === '-') {
      this.counter--
    }
  }
  resetCounter = () => this.counter = 0
}
