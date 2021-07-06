import { Observable } from 'rxjs';
import { share } from 'rxjs/operators';

import { Component } from '@angular/core';
import {
    select,
    Store,
} from '@ngrx/store';

import {
    getName,
    getPersonal,
    getSelectedPerson,
    getSkillList,
    getTitle,
} from '../../curiculum-vitae.reducer';
import { Career } from '../../models/career';
import { Person } from '../../models/person';
import { Skill } from '../../models/skill';
import { PersonService } from '../../services/person.service';

@Component({
    selector: 'app-person',
    templateUrl: './person.component.html',
    styleUrls: [ './person.component.scss' ]
})
export class PersonComponent {
    career$: Observable<Career[]>;
    degrees$: Observable<Career[]>;
    education$: Observable<Career[]>;
    interests$: Observable<Career[]>;
    person$: Observable<Person | undefined>;
    skillList$: Observable<Skill[]>;
    personal$: Observable<{ [ key: string ]: string }[]>;
    name$: Observable<string>;
    title$: Observable<string>;

    constructor(
        private service: PersonService,
        private store: Store,
    ) {
        this.career$ = this.service.getCareer();
        this.degrees$ = this.service.getDegrees();
        this.education$ = this.service.getEducation();
        this.interests$ = this.service.getInterests();
        this.person$ = this.store.pipe(
            select(getSelectedPerson),
            share(),
        );

        this.name$ = this.store.select(getName);
        this.personal$ = this.store.select(getPersonal);
        this.skillList$ = this.store.select(getSkillList);
        this.title$ = this.store.select(getTitle);
    }
}
