import { NgModule } from '@angular/core';
import {
    RouterModule,
    Routes,
} from '@angular/router';

import { PersonSelectionComponent } from './components/person-selection/person-selection.component';
import { PersonComponent } from './components/person/person.component';
import { PersonListResolver } from './resolver/person-list.resolver';
import { SelectedPersonResolver } from './resolver/selected-person.resolver';

const routes: Routes = [
    {
        path: '',
        component: PersonSelectionComponent,
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
export class CuriculumVitaeRoutingModule { }
