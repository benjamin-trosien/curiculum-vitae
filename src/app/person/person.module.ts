import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatTabsModule } from '@angular/material/tabs';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';

import { SharedModule } from '../shared/shared.module';
import { PersonComponent } from './components/person/person.component';
import { LoadPersonListEffects } from './effects/load-person-list';
import { PersonRoutingModule } from './person-routing.module';
import {
    CURICULUM_VITAE_FEATURE_KEY,
    reducer,
} from './person.reducer';

@NgModule({
    declarations: [
        PersonComponent,
    ],
    imports: [
        CommonModule,
        PersonRoutingModule,
        EffectsModule.forFeature([
            LoadPersonListEffects,
        ]),
        MatButtonModule,
        MatTabsModule,
        StoreModule.forFeature(CURICULUM_VITAE_FEATURE_KEY, reducer),
        SharedModule,
    ],
})
export class PersonModule { }
