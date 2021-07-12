import { NgModule } from '@angular/core';
import {
    RouterModule,
    Routes,
} from '@angular/router';

import { PersonComponent } from './components/person/person.component';
import { SelectedPersonResolver } from './resolver/selected-person.resolver';

const routes: Routes = [
    {
        path: '',
        children: [
            {
                path: 'person/:index',
                component: PersonComponent,
                resolve: { selectedPerson: SelectedPersonResolver },
            },
        ],
    },
];

@NgModule({
    imports: [
        RouterModule.forChild(routes),
    ],
    exports: [
        RouterModule,
    ],
})
export class PersonRoutingModule { }
