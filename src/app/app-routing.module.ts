import { NgModule } from '@angular/core';
import {
    RouterModule,
    Routes,
} from '@angular/router';

const routes: Routes = [
    {
        path: '',
        loadChildren: () => import('./curiculum-vitae/curiculum-vitae.module').then(m => m.CuriculumVitaeModule),
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
