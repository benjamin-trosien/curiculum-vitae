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
    getIndex,
    getPersonList,
    getPersonListLoadingState,
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
    loaded$: Observable<boolean>;
    personList$: Observable<Person[]>;
    selected$: Observable<number>;

    constructor(
        private store: Store,
    ) {
        this.personList$ = this.store.pipe(select(getPersonList));
        this.selected$ = this.store.pipe(select(getIndex));

        this.loaded$ = this.store.pipe(
            select(getPersonListLoadingState),
            map((loadingState) => loadingState === LoadingState.LOADED),
        );
    }
}
