import { registerLocaleData } from '@angular/common';
import localeDe from '@angular/common/locales/de';
import {
    LOCALE_ID,
    NgModule,
} from '@angular/core';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestore } from '@angular/fire/firestore';
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
