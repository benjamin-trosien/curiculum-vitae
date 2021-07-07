import {
    ChangeDetectionStrategy,
    Component,
    Input,
} from '@angular/core';

@Component({
    selector: 'app-rating-bar',
    templateUrl: './rating-bar.component.html',
    styleUrls: [ './rating-bar.component.scss' ],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RatingBarComponent {
    rating: number = 0;

    @Input('rating')
    set setRating(rating: number) {
        this.rating = rating % 6;
    }
}
