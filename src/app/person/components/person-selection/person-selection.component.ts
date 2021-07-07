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
    selector: 'app-person-selection',
    templateUrl: './person-selection.component.html',
    styleUrls: [ './person-selection.component.scss' ],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PersonSelectionComponent {
    personList$: Observable<Person[]>;
    selected$: Observable<number>;

    constructor(
        private store: Store,
        // private router: Router,
    ) {
        this.personList$ = this.store.pipe(select(getPersonList));
        this.selected$ = this.store.pipe(select(getSelectedIndex));
    }

    resolvePerson(event: any) {
        // this.router.navigate([ 'person', event.index ]);
    }
}
