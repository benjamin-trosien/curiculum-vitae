import { registerLocaleData } from '@angular/common';
import localeDe from '@angular/common/locales/de';
import {
    LOCALE_ID,
    NgModule,
} from '@angular/core';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestore } from '@angular/fire/firestore';
import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatTableModule } from '@angular/material/table';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { EffectsModule } from '@ngrx/effects';
import {
    ActionReducer,
    MetaReducer,
    StoreModule,
} from '@ngrx/store';

import { environment } from '../environments/environment';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { appReducer } from './app.reducer';
import { CareerComponent } from './components/career/career.component';
import { DegreesComponent } from './components/degrees/degrees.component';
import { SkillsComponent } from './components/skills/skills.component';
import { LoadPersonEffects } from './effects/load-person';

registerLocaleData(localeDe);

export function debug(reducer: ActionReducer<any>): ActionReducer<any> {
    return function (state, action) {
        const newState = reducer(state, action);

        console.group();
        console.log('before', state);
        console.log('action', action);
        console.log('after', newState);
        console.groupEnd();

        return newState;
    };
}

export const metaReducers: MetaReducer<any>[] = environment.production ? [] : [ debug ];

@NgModule({
    declarations: [
        AppComponent,
        CareerComponent,
        SkillsComponent,
        DegreesComponent,
    ],
    imports: [
        AngularFireModule.initializeApp(environment.firebase),
        AppRoutingModule,
        BrowserAnimationsModule,
        BrowserModule,
        EffectsModule.forRoot([
            LoadPersonEffects,
        ]),
        MatDividerModule,
        MatIconModule,
        MatListModule,
        MatProgressBarModule,
        MatTableModule,
        StoreModule.forRoot({ app: appReducer }, { metaReducers }),
    ],
    providers: [
        AngularFirestore,
        { provide: LOCALE_ID, useValue: 'de' },
    ],
    bootstrap: [ AppComponent ],
})
export class AppModule { }
