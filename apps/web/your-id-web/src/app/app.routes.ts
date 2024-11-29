import { Routes } from '@angular/router';

import { MockAuthGuardService } from './services/mock-auth-guard/mock-auth-guard.service';

export const routes: Routes = [
  {
    path: 'card-id',
    loadChildren: () => 
      import('./components/card-id/card-id.routes').then((x) => x.CARD_ID_ROUTES),
    canActivate: [MockAuthGuardService]
  },
  {
    path: '',
    redirectTo: 'card-id/0',
    pathMatch: 'full'
  },
  {
    path: '**',
    redirectTo: 'card-id/0',
  }
];
