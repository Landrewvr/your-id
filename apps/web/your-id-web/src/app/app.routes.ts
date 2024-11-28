import { Routes } from '@angular/router';

import { MockAuthGuardService } from './services/mock-auth-guard/mock-auth-guard.service';

export const routes: Routes = [
  {
    path: 'id-card',
    loadChildren: () => 
      import('./components/id-card/id-card.routes').then((x) => x.ID_CARD_ROUTES),
    canActivate: [MockAuthGuardService]
  },
  {
    path: '',
    redirectTo: 'id-card/0',
    pathMatch: 'full'
  },
  {
    path: '**',
    redirectTo: '',
  }
];
