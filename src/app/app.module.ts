import { registerLocaleData } from '@angular/common';
import localeDe from '@angular/common/locales/de';
import {
    LOCALE_ID,
    NgModule,
} from '@angular/core';
import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatTableModule } from '@angular/material/table';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CareerComponent } from './components/career/career.component';
import { DegreesComponent } from './components/degrees/degrees.component';
import { SkillsComponent } from './components/skills/skills.component';

registerLocaleData(localeDe);

@NgModule({
    declarations: [
        AppComponent,
        CareerComponent,
        SkillsComponent,
        DegreesComponent,
    ],
    imports: [
        AppRoutingModule,
        BrowserAnimationsModule,
        BrowserModule,
        MatDividerModule,
        MatIconModule,
        MatListModule,
        MatProgressBarModule,
        MatTableModule,
    ],
    providers: [
        { provide: LOCALE_ID, useValue: 'de' },
    ],
    bootstrap: [ AppComponent ],
})
export class AppModule { }
