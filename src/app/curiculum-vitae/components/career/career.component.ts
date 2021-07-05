import {
    ChangeDetectionStrategy,
    Component,
    Input,
} from '@angular/core';

import { Career } from '../../models/career';
import { Degree } from '../../models/degree';

@Component({
    selector: 'app-career',
    templateUrl: './career.component.html',
    styleUrls: [ './career.component.scss' ],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CareerComponent {

    @Input()
    title!: string;

    @Input()
    career!: Career[];

    @Input()
    degrees!: Degree[];
}
