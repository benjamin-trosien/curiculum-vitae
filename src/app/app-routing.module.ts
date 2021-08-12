import { NgModule } from '@angular/core';
import {
    RouterModule,
    Routes,
} from '@angular/router';

import { PersonListResolver } from './person/resolver/person-list.resolver';

const routes: Routes = [
    {
        path: '',
        loadChildren: () => import('./person/person.module').then(m => m.PersonModule),
        resolve: { person: PersonListResolver },
    },
];

@NgModule({
    imports: [
        RouterModule.forRoot(routes),
    ],
    exports: [
        RouterModule,
    ],
})
export class AppRoutingModule { }
