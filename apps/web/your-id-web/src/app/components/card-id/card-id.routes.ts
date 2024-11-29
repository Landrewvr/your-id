import { CardIdComponent } from './card-id';
import { Route } from '@angular/router';

export const CARD_ID_ROUTES: Route[] = [
  {
    path: ':id',
    component: CardIdComponent
  },
  {
    path: '',
    redirectTo: '0',
    pathMatch: 'full'
  }
];
