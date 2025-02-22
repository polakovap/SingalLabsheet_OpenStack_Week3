import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SignalsService } from './signals.service';
import { Child1Component } from "./child1/child1.component";
import { Child2Component } from './child2/child2.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Child1Component, Child2Component],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Signals Labsheet W3';
  constructor (private signalsService:SignalsService) {}

  increment() {
    this.signalsService.increment();
  }

  decrement() {
    this.signalsService.decrement();
  }
}
