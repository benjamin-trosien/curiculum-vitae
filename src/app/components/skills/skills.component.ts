

import {
    ChangeDetectionStrategy,
    Component,
    Input,
} from '@angular/core';

import { Person } from '../../models/person';
import {
    Skill,
    SkillType,
} from '../../models/skill';

@Component({
    selector: 'app-skills',
    templateUrl: './skills.component.html',
    styleUrls: [ './skills.component.scss' ],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SkillsComponent {
    SkillType = SkillType;

    @Input()
    skills!: Skill[];

    @Input()
    person!: Person;
}
