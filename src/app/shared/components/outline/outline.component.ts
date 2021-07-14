import {
    ChangeDetectionStrategy,
    Component,
    Input,
} from '@angular/core';

import { Person } from '../../models/person';

@Component({
    selector: 'app-outline',
    templateUrl: './outline.component.html',
    styleUrls: [ './outline.component.scss' ],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class OutlineComponent {

    @Input()
    person!: Person;
}
