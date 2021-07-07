import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatTabsModule } from '@angular/material/tabs';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';

import { SharedModule } from '../shared/shared.module';
import { PersonSelectionComponent } from './components/person-selection/person-selection.component';
import { PersonComponent } from './components/person/person.component';
import { LoadPersonsEffects } from './effects/load-persons';
import { PersonRoutingModule } from './person-routing.module';
import {
    CURICULUM_VITAE_FEATURE_KEY,
    reducer,
} from './person.reducer';

@NgModule({
    declarations: [
        PersonComponent,
        PersonSelectionComponent,
    ],
    imports: [
        CommonModule,
        PersonRoutingModule,
        EffectsModule.forFeature([
            LoadPersonsEffects,
        ]),
        MatButtonModule,
        MatTabsModule,
        StoreModule.forFeature(CURICULUM_VITAE_FEATURE_KEY, reducer),
        SharedModule,
    ],
})
export class PersonModule { }
