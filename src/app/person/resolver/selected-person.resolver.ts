import { Injectable } from '@angular/core';
import {
    ActivatedRouteSnapshot,
    Resolve,
} from '@angular/router';

import { PersonDispatcher } from '../person.dispatcher';

@Injectable({
    providedIn: 'root',
})
export class SelectedPersonResolver implements Resolve<void> {

    constructor(
        private dispatcher: PersonDispatcher,
    ) { }

    resolve(route: ActivatedRouteSnapshot): void {
        const { index } = route.params;

        this.dispatcher.selectPerson(Number(index));
    }
}
