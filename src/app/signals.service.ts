import { Injectable } from '@angular/core';
import { computed, Signal, signal, WritableSignal } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SignalsService {

  constructor() { }

  count: WritableSignal<number> = signal(0);

  doubleCount: Signal<number> = computed(() => this.count() * 2);

  increment() {
    this.count.update((value) => value +1)
  }

  decrement() {
    if (this.count()>0) {
      this.count.update((value) => value -1)
    }
  }

  getCount() {
    return this.count();
  }

}
