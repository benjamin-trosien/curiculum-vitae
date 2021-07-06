import {
    ChangeDetectionStrategy,
    Component,
    Input,
} from '@angular/core';

import { Skill } from '../../curiculum-vitae/models/skill';

@Component({
    selector: 'app-outline',
    templateUrl: './outline.component.html',
    styleUrls: [ './outline.component.scss' ],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class OutlineComponent {

    @Input()
    name: string = '';

    @Input()
    title: string = '';

    @Input()
    personal: { [ key: string ]: string }[] = [];

    @Input()
    skills: Skill[] = [];
}
