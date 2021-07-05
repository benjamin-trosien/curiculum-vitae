import { Observable } from 'rxjs';

import {
    ChangeDetectionStrategy,
    Component,
} from '@angular/core';

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
        private service: PersonService,
    ) {
        this.career$ = this.service.getCareer();
        this.degrees$ = this.service.getDegrees();
        this.education$ = this.service.getEducation();
        this.interests$ = this.service.getInterests();
        this.person$ = this.service.getPerson();
        this.skills$ = this.service.getSkills();
    }
}
