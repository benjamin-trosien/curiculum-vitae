import { NgModule } from '@angular/core';
import {
    RouterModule,
    Routes,
} from '@angular/router';

import { PersonComponent } from './components/person/person.component';
import { SelectionComponent } from './components/selection/selection.component';
import { PersonListResolver } from './resolver/person-list.resolver';
import { SelectedPersonResolver } from './resolver/selected-person.resolver';

const routes: Routes = [
    {
        path: '',
        component: SelectionComponent,
        resolve: { person: PersonListResolver },
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
