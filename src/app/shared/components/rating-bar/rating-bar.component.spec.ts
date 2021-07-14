import { ChangeDetectionStrategy } from '@angular/core';
import {
    ComponentFixture,
    TestBed,
} from '@angular/core/testing';

import { RatingBarComponent } from './rating-bar.component';

describe('RatingBarComponent', () => {
    let cut: RatingBarComponent;
    let element: HTMLElement;
    let fixture: ComponentFixture<RatingBarComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [
                RatingBarComponent,
            ],
        }).overrideComponent(RatingBarComponent, {
            set: { changeDetection: ChangeDetectionStrategy.Default },
        }).compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(RatingBarComponent);
        cut = fixture.componentInstance;
        element = fixture.nativeElement;
        fixture.detectChanges();
    });

    it('should create', () => {

        expect(cut).toBeTruthy();
    });

    it('should not show any bars filled', () => {

        expect(element.querySelectorAll('.level__bar--filled').length).toBe(0);
    });

    describe('with rating set to smaller than 0', () => {
        beforeEach(() => {
            cut.setRating = -1;
            fixture.detectChanges();
        });

        it('should not show any bars filled', () => {

            expect(element.querySelectorAll('.level__bar--filled').length).toBe(0);
        });
    });

    describe('with rating set to "0"', () => {
        beforeEach(() => {
            cut.setRating = 0;
            fixture.detectChanges();
        });

        it('should not show any bars filled', () => {

            expect(element.querySelectorAll('.level__bar--filled').length).toBe(0);
        });
    });

    describe('with rating set to "1"', () => {
        beforeEach(() => {
            cut.setRating = 1;
            fixture.detectChanges();
        });

        it('should show the first bar filled', () => {

            expect(element.querySelector('.level__bar--filled:nth-child(1)')).toBeTruthy();
            expect(element.querySelectorAll('.level__bar--filled').length).toBe(1);
        });
    });

    describe('with rating set to "2"', () => {
        beforeEach(() => {
            cut.setRating = 2;
            fixture.detectChanges();
        });

        it('should show the first two bars filled', () => {

            expect(element.querySelector('.level__bar--filled:nth-child(1)')).toBeTruthy();
            expect(element.querySelector('.level__bar--filled:nth-child(2)')).toBeTruthy();
            expect(element.querySelectorAll('.level__bar--filled').length).toBe(2);
        });
    });

    describe('with rating set to "3"', () => {
        beforeEach(() => {
            cut.setRating = 3;
            fixture.detectChanges();
        });

        it('should show the first three bars filled', () => {

            expect(element.querySelector('.level__bar--filled:nth-child(1)')).toBeTruthy();
            expect(element.querySelector('.level__bar--filled:nth-child(2)')).toBeTruthy();
            expect(element.querySelector('.level__bar--filled:nth-child(3)')).toBeTruthy();
            expect(element.querySelectorAll('.level__bar--filled').length).toBe(3);
        });
    });

    describe('with rating set to "4"', () => {
        beforeEach(() => {
            cut.setRating = 4;
            fixture.detectChanges();
        });

        it('should show the first four bars filled', () => {

            expect(element.querySelector('.level__bar--filled:nth-child(1)')).toBeTruthy();
            expect(element.querySelector('.level__bar--filled:nth-child(2)')).toBeTruthy();
            expect(element.querySelector('.level__bar--filled:nth-child(3)')).toBeTruthy();
            expect(element.querySelector('.level__bar--filled:nth-child(4)')).toBeTruthy();
            expect(element.querySelectorAll('.level__bar--filled').length).toBe(4);
        });
    });

    describe('with rating set to "5"', () => {
        beforeEach(() => {
            cut.setRating = 5;
            fixture.detectChanges();
        });

        it('should show all bars filled', () => {

            expect(element.querySelectorAll('.level__bar--filled').length).toBe(5);
        });
    });

    describe('with rating set to value higher than 5', () => {
        beforeEach(() => {
            cut.setRating = 6;
            fixture.detectChanges();
        });

        it('should show all bars filled', () => {

            expect(element.querySelectorAll('.level__bar--filled').length).toBe(5);
        });
    });
});
