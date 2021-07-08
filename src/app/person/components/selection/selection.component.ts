import { Observable } from 'rxjs';

import {
    ChangeDetectionStrategy,
    Component,
} from '@angular/core';
import {
    select,
    Store,
} from '@ngrx/store';

import { Person } from '../../../shared/models/person';
import {
    getPersonList,
    getSelectedIndex,
} from '../../person.reducer';

@Component({
    selector: 'app-selection',
    templateUrl: './selection.component.html',
    styleUrls: [ './selection.component.scss' ],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SelectionComponent {
    personList$: Observable<Person[]>;
    selected$: Observable<number>;

    constructor(
        private store: Store,
    ) {
        this.personList$ = this.store.pipe(select(getPersonList));
        this.selected$ = this.store.pipe(select(getSelectedIndex));
    }
}
