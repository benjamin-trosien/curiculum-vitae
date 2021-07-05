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
    loadPersonEndedAction,
    loadPersonFailedAction,
    loadPersonStartedAction,
} from '../app.actions';
import { PersonService } from '../services/person.service';

@Injectable()
export class LoadPersonEffects {

    loadPerson$ = createEffect(() => this.actions$.pipe(
        ofType(loadPersonStartedAction),
        switchMap(({ id }) => this.service.getPerson(id).pipe(
            map((person) => loadPersonEndedAction({ person })),
            catchError(() => of(loadPersonFailedAction())),
        )),
    ));

    constructor(
        private actions$: Actions,
        private service: PersonService,
    ) { }
}
