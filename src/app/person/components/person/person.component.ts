import { Observable } from 'rxjs';

import { Component } from '@angular/core';
import { Store } from '@ngrx/store';

import {
    Career,
    Skill,
} from '../../../shared/models/person';
import {
    getCareer,
    getDegreeList,
    getEducation,
    getInterestList,
    getName,
    getPersonal,
    getPhoto,
    getSkillList,
    getTitle,
} from '../../person.reducer';
import { PersonService } from '../../services/person.service';

@Component({
    selector: 'app-person',
    templateUrl: './person.component.html',
    styleUrls: [ './person.component.scss' ],
})
export class PersonComponent {
    career$: Observable<Career[]>;
    degreeList$: Observable<Career[]>;
    education$: Observable<Career[]>;
    interestList$: Observable<Career[]>;
    skillList$: Observable<Skill[]>;
    personal$: Observable<{ [ key: string ]: string }[]>;
    photo$: Observable<string>;
    name$: Observable<string>;
    title$: Observable<string>;

    constructor(
        private service: PersonService,
        private store: Store,
    ) {
        this.career$ = this.store.select(getCareer);
        this.degreeList$ = this.store.select(getDegreeList);
        this.education$ = this.store.select(getEducation);
        this.interestList$ = this.store.select(getInterestList);
        this.name$ = this.store.select(getName);
        this.personal$ = this.store.select(getPersonal);
        this.photo$ = this.store.select(getPhoto);
        this.skillList$ = this.store.select(getSkillList);
        this.title$ = this.store.select(getTitle);
    }
}
