import { NgModule } from '@angular/core';
import {
    RouterModule,
    Routes,
} from '@angular/router';

import { PersonListResolver } from './person/resolver/person-list.resolver';
import { ImprintComponent } from './shared/components/imprint/imprint.component';

const routes: Routes = [
    {
        path: '',
        loadChildren: () => import('./person/person.module').then(m => m.PersonModule),
        resolve: { person: PersonListResolver },
    },
    {
        path: 'imprint',
        component: ImprintComponent,
    }
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
