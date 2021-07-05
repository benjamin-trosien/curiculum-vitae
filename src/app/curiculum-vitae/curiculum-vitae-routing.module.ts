import { NgModule } from '@angular/core';
import {
    RouterModule,
    Routes,
} from '@angular/router';

import { LayoutComponent } from './components/layout/layout.component';
import { PersonResolver } from './resolver/person.resolver';

const routes: Routes = [
    {
        path: '',
        component: LayoutComponent,
        resolve: { person: PersonResolver },
    },
];

@NgModule({
    imports: [
        RouterModule.forChild(routes),
    ],
})
export class CuriculumVitaeRoutingModule { }
