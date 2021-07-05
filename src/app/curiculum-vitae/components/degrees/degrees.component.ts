import {
    ChangeDetectionStrategy,
    Component,
    Input,
} from '@angular/core';

import { Degree } from '../../models/degree';

@Component({
    selector: 'app-degrees',
    templateUrl: './degrees.component.html',
    styleUrls: [ './degrees.component.scss' ],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DegreesComponent {
    @Input()
    title!: string;

    @Input()
    degress!: Degree[];
}
