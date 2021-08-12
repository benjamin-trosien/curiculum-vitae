import { Observable } from 'rxjs';

import {
    ChangeDetectionStrategy,
    Component,
} from '@angular/core';
import { Store } from '@ngrx/store';

import {
    Career,
    Person,
} from '../../../shared/models/person';
import {
    getCareerList,
    getDegreeList,
    getEducation,
    getInterestList,
    getPerson,
} from '../../person.reducer';

@Component({
    selector: 'app-person',
    templateUrl: './person.component.html',
    styleUrls: [ './person.component.scss' ],
    changeDetection: ChangeDetectionStrategy.Default,
})
export class PersonComponent {
    career$: Observable<Career[]>;
    degreeList$: Observable<Career[]>;
    education$: Observable<Career[]>;
    interestList$: Observable<Career[]>;
    person$: Observable<Person>;

    constructor(
        private store: Store,
    ) {
        this.career$ = this.store.select(getCareerList);
        this.degreeList$ = this.store.select(getDegreeList);
        this.education$ = this.store.select(getEducation);
        this.interestList$ = this.store.select(getInterestList);
        this.person$ = this.store.select(getPerson);
    }
}
