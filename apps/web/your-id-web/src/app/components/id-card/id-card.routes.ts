import { IdCardComponent } from './id-card.component';
import { Route } from '@angular/router';

export const ID_CARD_ROUTES: Route[] = [
  {
    path: ':id',
    component: IdCardComponent
  },
  {
    path: '',
    redirectTo: '0',
    pathMatch: 'full'
  }
];
