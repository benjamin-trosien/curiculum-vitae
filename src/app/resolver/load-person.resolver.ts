import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';

import { AppDispatcher } from '../app.dispatcher';

@Injectable({
    providedIn: 'root',
})
export class LoadPersonResolver implements Resolve<void> {

    constructor(
        private dispatcher: AppDispatcher,
    ) { }

    resolve(): void {
        this.dispatcher.loadPerson('wR8ze1TAmvEfp2DrNQeL');
    }
}
