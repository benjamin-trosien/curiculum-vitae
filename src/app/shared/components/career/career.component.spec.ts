import { ChangeDetectionStrategy } from '@angular/core';
import {
    ComponentFixture,
    TestBed,
} from '@angular/core/testing';
import { MatDividerModule } from '@angular/material/divider';
import { MatListModule } from '@angular/material/list';

import { CareerComponent } from './career.component';

describe('CareerComponent', () => {
    let cut: CareerComponent;
    let fixture: ComponentFixture<CareerComponent>;
    let element: HTMLElement;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [
                MatDividerModule,
                MatListModule,
            ],
            declarations: [
                CareerComponent,
            ],
        }).overrideComponent(CareerComponent, {
            set: { changeDetection: ChangeDetectionStrategy.Default },
        }).compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(CareerComponent);
        cut = fixture.componentInstance;
        element = fixture.nativeElement;
        fixture.detectChanges();
    });

    it('should create', () => {

        expect(cut).toBeTruthy();
    });

    it('should show nothing', () => {

        expect(element.innerText).toBe('');
    });

    describe('with "title"', () => {
        beforeEach(() => {
            cut.title = 'some title';
            fixture.detectChanges();
        });

        it('should show title', () => {

            expect(element.innerText).toContain('some title');
        });
    });

    describe('with "careerList"', () => {
        beforeEach(() => {
            cut.careerList = [
                {
                    title: 'item-title',
                    employer: 'employer',
                }
            ];
            fixture.detectChanges();
        });

        it('should show "title"', () => {

            expect(element.innerText).toContain('item-title');
        });

        it('should show "employer"', () => {

            expect(element.innerText).toContain('employer');
        });
    });
});
