
import { Component, inject, signal, WritableSignal } from '@angular/core';
import { NewStore } from '../../services/new/new.service';
import { OldComponent } from '../old/old.component';
import { UserService } from '../../services/user/user.service';
import { User } from '../../types/user';
import { firstValueFrom } from 'rxjs';

@Component({
  selector: 'app-new',
  imports: [OldComponent],
  templateUrl: './new.component.html',
  styleUrl: './new.component.scss'
})
export class NewComponent {
  private _newStore = inject(NewStore);
  private _userService = inject(UserService);
  isLoading = this._newStore.isLoading;
  user: WritableSignal<User | undefined> = signal(undefined);

  constructor() {
  }

  async getUser() {
    this._newStore.load(true);
    this.user.set(await firstValueFrom(this._userService.getUserById('68dda3712051268b85d4a0e6')));
    this._newStore.load(false);
  }
}
