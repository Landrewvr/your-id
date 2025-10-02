import { computed, Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NewStore {
  private state = signal({ isLoading: false});
  isLoading = computed(() => this.state().isLoading );

  load(value: boolean) {
    this.state.update(st => ({...st, isLoading: value}));
  }
}
