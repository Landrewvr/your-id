import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: 'id-card',
        loadChildren: () => 
            import('./components/id-card/id-card.routes').then((x) => x.ID_CARD_ROUTES),
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
