import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';

import { PersonDispatcher } from '../person.dispatcher';

@Injectable({
    providedIn: 'root',
})
export class PersonListResolver implements Resolve<void> {

    constructor(
        private dispatcher: PersonDispatcher,
    ) { }

    resolve(): void {
        this.dispatcher.loadPersonList();
    }
}
