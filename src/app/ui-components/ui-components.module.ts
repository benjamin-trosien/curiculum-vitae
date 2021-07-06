import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatTableModule } from '@angular/material/table';

import { CareerComponent } from './career/career.component';
import { RatingBarComponent } from './rating-bar/rating-bar.component';
import { OutlineComponent } from './skills/outline.component';

@NgModule({
    declarations: [
        CareerComponent,
        RatingBarComponent,
        OutlineComponent,
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
        RatingBarComponent,
        OutlineComponent,
    ],
})
export class UiComponentsModule { }
