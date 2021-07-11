import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatTableModule } from '@angular/material/table';

import { CareerComponent } from './components/career/career.component';
import { ImprintComponent } from './components/imprint/imprint.component';
import { OutlineComponent } from './components/outline/outline.component';
import { RatingBarComponent } from './components/rating-bar/rating-bar.component';

@NgModule({
    declarations: [
        CareerComponent,
        ImprintComponent,
        OutlineComponent,
        RatingBarComponent,
    ],
    imports: [
        CommonModule,
        MatDividerModule,
        MatIconModule,
        MatListModule,
        MatTableModule,
    ],
    exports: [
        CareerComponent,
        ImprintComponent,
        RatingBarComponent,
        OutlineComponent,
    ],
})
export class SharedModule { }
