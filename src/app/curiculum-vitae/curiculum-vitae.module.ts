import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatTabsModule } from '@angular/material/tabs';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';

import { UiComponentsModule } from '../ui-components/ui-components.module';
import { PersonSelectionComponent } from './components/person-selection/person-selection.component';
import { PersonComponent } from './components/person/person.component';
import { CuriculumVitaeRoutingModule } from './curiculum-vitae-routing.module';
import {
    CURICULUM_VITAE_FEATURE_KEY,
    reducer,
} from './curiculum-vitae.reducer';
import { LoadPersonsEffects } from './effects/load-persons';
import { LoadSkillsEffects } from './effects/load-skills';

@NgModule({
    declarations: [
        PersonComponent,
        PersonSelectionComponent,
    ],
    imports: [
        CommonModule,
        CuriculumVitaeRoutingModule,
        EffectsModule.forFeature([
            LoadPersonsEffects,
            LoadSkillsEffects,
        ]),
        MatButtonModule,
        MatTabsModule,
        StoreModule.forFeature(CURICULUM_VITAE_FEATURE_KEY, reducer),
        UiComponentsModule,
    ]
})
export class CuriculumVitaeModule { }
