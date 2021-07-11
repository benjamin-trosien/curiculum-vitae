import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';

import {
    loadPersonListStartedAction,
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

    selectPerson(index: number): void {
        this.store.dispatch(selectPersonAction({ index }));
    }
}
