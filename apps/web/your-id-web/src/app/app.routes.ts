import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        // leaving this open for lazy loading for possible implamentation of other components in the future
        path: 'id-card',
        loadChildren: () => 
            import('./components/id-card/id-card.routes').then((x) => x.ID_CARD_ROUTES),
    }
];
