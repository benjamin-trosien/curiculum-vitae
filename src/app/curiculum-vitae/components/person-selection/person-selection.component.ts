import { Observable } from 'rxjs';

import {
    ChangeDetectionStrategy,
    Component,
} from '@angular/core';
import { Router } from '@angular/router';
import {
    select,
    Store,
} from '@ngrx/store';

import { getPersonList } from '../../curiculum-vitae.reducer';
import { Person } from '../../models/person';

@Component({
    selector: 'app-person-selection',
    templateUrl: './person-selection.component.html',
    styleUrls: [ './person-selection.component.scss' ],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PersonSelectionComponent {
    personList$!: Observable<Person[]>;

    constructor(
        private store: Store,
        private router: Router,
    ) {
        this.personList$ = this.store.pipe(select(getPersonList));
    }

    resolvePerson(event: any) {
        this.router.navigate([ 'person', event.index ]);
    }
}
