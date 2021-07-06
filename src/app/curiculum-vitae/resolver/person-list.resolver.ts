import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';

import { CuriculumVitaeDispatcher } from '../curiculum-vitae.dispatcher';

@Injectable({
    providedIn: 'root',
})
export class PersonListResolver implements Resolve<void> {

    constructor(
        private dispatcher: CuriculumVitaeDispatcher,
    ) { }

    resolve(): void {
        this.dispatcher.loadPersonList();
    }
}
