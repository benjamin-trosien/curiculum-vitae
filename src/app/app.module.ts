import { registerLocaleData } from '@angular/common';
import localeDe from '@angular/common/locales/de';
import {
    LOCALE_ID,
    NgModule,
} from '@angular/core';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestore } from '@angular/fire/firestore';
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';

import { environment } from '../environments/environment';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { metaReducers } from './app.reducer';
import { SharedModule } from './shared/shared.module';

registerLocaleData(localeDe);

@NgModule({
    declarations: [
        AppComponent,
    ],
    imports: [
        AngularFireModule.initializeApp(environment.firebase),
        AppRoutingModule,
        BrowserAnimationsModule,
        BrowserModule,
        EffectsModule.forRoot([]),
        MatButtonModule,
        MatDividerModule,
        MatExpansionModule,
        MatIconModule,
        MatListModule,
        MatProgressBarModule,
        MatSidenavModule,
        MatToolbarModule,
        SharedModule,
        StoreModule.forRoot({}, { metaReducers }),
    ],
    providers: [
        AngularFirestore,
        { provide: LOCALE_ID, useValue: 'de' },
    ],
    bootstrap: [ AppComponent ],
})
export class AppModule { }
