import { Component } from "@angular/core";

@Component({
  template: `
    <h1>Counter: {{ counter }}</h1>
    <button (click)="changeNUmber('+')" >+</button>
    <button (click)="changeNUmber('-')">-</button>
  `
})
export class CounterComponent {
  counter = 0
  changeNUmber = (change: '+' | '-') => {
    if(change === '+') {
      this.counter++
    }
    if(change === '-') {
      this.counter--
    }
  }
}
