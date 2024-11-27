import { Injectable, signal, WritableSignal } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoaderService {
  loadingState: WritableSignal<boolean> = signal<boolean>(false);
}
