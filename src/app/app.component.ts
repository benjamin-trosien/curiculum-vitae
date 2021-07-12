import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import {
    ChangeDetectionStrategy,
    Component,
} from '@angular/core';
import {
    select,
    Store,
} from '@ngrx/store';

import {
    getPersonList,
    getPersonListLoadingState,
    getSelectedIndex,
} from './person/person.reducer';
import { LoadingState } from './shared/models/loading-state';
import { Person } from './shared/models/person';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: [ './app.component.scss' ],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent {
    loading$: Observable<boolean>;
    personList$: Observable<Person[]>;
    selected$: Observable<number>;


    constructor(
        private store: Store,
    ) {
        this.personList$ = this.store.pipe(select(getPersonList));
        this.selected$ = this.store.pipe(select(getSelectedIndex));

        this.loading$ = this.store.select(getPersonListLoadingState).pipe(
            map((loadingState) => loadingState !== LoadingState.LOADED),
        );

    }
}
