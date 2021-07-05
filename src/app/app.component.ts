import { Observable } from 'rxjs';

import {
    ChangeDetectionStrategy,
    Component,
} from '@angular/core';
import {
    select,
    Store,
} from '@ngrx/store';

import { AppDispatcher } from './app.dispatcher';
import { selectPerson } from './app.reducer';
import { Career } from './models/career';
import { Person } from './models/person';
import { Skill } from './models/skill';
import { PersonService } from './services/person.service';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: [ './app.component.scss' ],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent {
    career$: Observable<Career[]>;
    degrees$: Observable<Career[]>;
    education$: Observable<Career[]>;
    interests$: Observable<Career[]>;
    person$: Observable<Person>;
    skills$: Observable<Skill[]>;

    constructor(
        private dispatcher: AppDispatcher,
        private service: PersonService,
        private store: Store<any>,
    ) {
        this.career$ = this.service.getCareer();
        this.degrees$ = this.service.getDegrees();
        this.education$ = this.service.getEducation();
        this.interests$ = this.service.getInterests();
        this.person$ = this.store.pipe(select(selectPerson));
        this.skills$ = this.service.getSkills();

        this.dispatcher.loadPerson('wR8ze1TAmvEfp2DrNQeL');
    }
}
