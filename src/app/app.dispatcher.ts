import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';

import { loadPersonStartedAction } from './app.actions';

@Injectable({
    providedIn: 'root',
})
export class AppDispatcher {

    constructor(
        private store: Store<any>,
    ) { }

    loadPerson(id: string): void {
        this.store.dispatch(loadPersonStartedAction({ id }));
    }
}
