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
    loadSkillListEndedAction,
    loadSkillListFailedAction,
    loadSkillListStartedAction,
} from '../curiculum-vitae.actions';
import { PersonService } from '../services/person.service';

@Injectable()
export class LoadSkillsEffects {

    loadSkills$ = createEffect(() => this.actions$.pipe(
        ofType(loadSkillListStartedAction),
        switchMap(() => this.service.getSkills().pipe(
            map((skills) => loadSkillListEndedAction({ skillList: skills })),
            catchError(() => of(loadSkillListFailedAction())),
        )),
    ));

    constructor(
        private actions$: Actions,
        private service: PersonService,
    ) { }
}
