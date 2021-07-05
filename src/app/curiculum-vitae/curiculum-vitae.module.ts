import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatTableModule } from '@angular/material/table';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';

import { CareerComponent } from './components/career/career.component';
import { DegreesComponent } from './components/degrees/degrees.component';
import { LayoutComponent } from './components/layout/layout.component';
import { SkillsComponent } from './components/skills/skills.component';
import { CuriculumVitaeRoutingModule } from './curiculum-vitae-routing.module';
import {
    CURICULUM_VITAE_FEATURE_KEY,
    reducer,
} from './curiculum-vitae.reducer';
import { LoadPersonEffects } from './effects/load-person';

@NgModule({
    declarations: [
        CareerComponent,
        LayoutComponent,
        DegreesComponent,
        SkillsComponent,
    ],
    imports: [
        CommonModule,
        CuriculumVitaeRoutingModule,
        EffectsModule.forFeature([
            LoadPersonEffects,
        ]),
        MatDividerModule,
        MatIconModule,
        MatListModule,
        MatProgressBarModule,
        MatTableModule,
        StoreModule.forFeature(CURICULUM_VITAE_FEATURE_KEY, reducer),
    ]
})
export class CuriculumVitaeModule { }
