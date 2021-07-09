import { DebugElement } from '@angular/core';
import {
    ComponentFixture,
    TestBed,
} from '@angular/core/testing';

import { RatingBarComponent } from './rating-bar.component';

describe('RatingBarComponent', () => {
    let cut: RatingBarComponent;
    let fixture: ComponentFixture<RatingBarComponent>;
    let query: (selector: string) => DebugElement;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [
                RatingBarComponent,
            ],
        }).compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(RatingBarComponent);
        cut = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {

        expect(cut).toBeTruthy();
    });
});
