import { Route } from "@angular/router";
import { IdCardComponent } from "./id-card.component";

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
