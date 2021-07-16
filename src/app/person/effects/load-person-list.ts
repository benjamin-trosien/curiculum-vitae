import { of } from 'rxjs';
import {
    catchError,
    map,
    switchMap,
} from 'rxjs/operators';

import { Injectable } from '@angular/core';
import {
    Actions,
    createEffect,
    ofType,
} from '@ngrx/effects';

import {
    loadPersonListEndedAction,
    loadPersonListFailedAction,
    loadPersonListStartedAction,
} from '../person.actions';
import { PersonService } from '../services/person.service';

@Injectable()
export class LoadPersonListEffects {

    loadPerson$ = createEffect(() => this.actions$.pipe(
        ofType(loadPersonListStartedAction),
        switchMap(() => this.service.getPersonList().pipe(
            map((personList) => loadPersonListEndedAction({ personList })),
            catchError((error) => of(loadPersonListFailedAction({ error }))),
        )),
    ));

    constructor(
        private actions$: Actions,
        private service: PersonService,
    ) { }
}
