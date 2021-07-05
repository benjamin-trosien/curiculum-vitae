import { Observable } from 'rxjs';

import { Component } from '@angular/core';
import {
    select,
    Store,
} from '@ngrx/store';

import { selectPerson } from '../../curiculum-vitae.reducer';
import { Career } from '../../models/career';
import { Person } from '../../models/person';
import { Skill } from '../../models/skill';
import { PersonService } from '../../services/person.service';

@Component({
    selector: 'app-layout',
    templateUrl: './layout.component.html',
    styleUrls: [ './layout.component.scss' ]
})
export class LayoutComponent {
    career$: Observable<Career[]>;
    degrees$: Observable<Career[]>;
    education$: Observable<Career[]>;
    interests$: Observable<Career[]>;
    person$: Observable<Person>;
    skills$: Observable<Skill[]>;

    constructor(
        private service: PersonService,
        private store: Store<any>,
    ) {
        this.career$ = this.service.getCareer();
        this.degrees$ = this.service.getDegrees();
        this.education$ = this.service.getEducation();
        this.interests$ = this.service.getInterests();
        this.person$ = this.store.pipe(select(selectPerson));
        this.skills$ = this.service.getSkills();
    }
}
