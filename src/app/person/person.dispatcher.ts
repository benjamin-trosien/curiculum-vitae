import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';

import {
    loadPersonListStartedAction,
    loadSkillListStartedAction,
    selectPersonAction,
} from './person.actions';

@Injectable({
    providedIn: 'root',
})
export class PersonDispatcher {

    constructor(
        private store: Store<any>,
    ) { }

    loadPersonList(): void {
        this.store.dispatch(loadPersonListStartedAction());
    }

    loadSkillList(): void {
        this.store.dispatch(loadSkillListStartedAction());
    }

    selectPerson(index: number): void {
        this.store.dispatch(selectPersonAction({ index }));
    }
}
