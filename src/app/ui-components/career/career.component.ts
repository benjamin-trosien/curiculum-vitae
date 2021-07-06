import {
    ChangeDetectionStrategy,
    Component,
    Input,
} from '@angular/core';

import { Career } from '../../curiculum-vitae/models/career';

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
}
