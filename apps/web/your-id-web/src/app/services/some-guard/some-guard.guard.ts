import { CanActivateFn } from '@angular/router';
import { UserService } from '../user/user.service';
import { inject } from '@angular/core';
import { firstValueFrom } from 'rxjs';

export const someGuardGuard: CanActivateFn = async (route, state) => {
  const userService = inject(UserService);
  const user = await firstValueFrom(userService.getUserById('68dda3712051268b85d4a0e6'));

  return !!user;
};
