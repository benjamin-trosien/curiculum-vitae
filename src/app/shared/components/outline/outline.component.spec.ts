import {
    ChangeDetectionStrategy,
    Component,
    Input,
} from '@angular/core';
import {
    ComponentFixture,
    TestBed,
} from '@angular/core/testing';

import { OutlineComponent } from './outline.component';

@Component({
    selector: 'app-rating-bar',
    template: `
        RATING_BAR RATING {{ rating | json }}
    `
})
class MockRatingBarComponent {
    @Input() rating: any;
}

describe('SkillsComponent', () => {
    let cut: OutlineComponent;
    let element: HTMLElement;
    let fixture: ComponentFixture<OutlineComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [
                OutlineComponent,

                MockRatingBarComponent,
            ],
        }).overrideComponent(OutlineComponent, {
            set: { changeDetection: ChangeDetectionStrategy.Default },
        }).compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(OutlineComponent);
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

    describe('with input "person" set', () => {
        beforeEach(() => {
            cut.person = {
                name: 'Nick Fury',
                title: 'S.H.I.E.L.D Director',
                photo: 'nick/fury.png',
                personal: [ { superPower: 'coolness' } ],
                skillList: [ {
                    title: 'leading skills',
                    items: [ { label: 'motivation', level: 'expert' } ],
                } ],
            } as any;
            fixture.detectChanges();
        });

        it('should show name', () => {

            expect(element.innerText).toContain('Nick Fury');
        });

        it('should show title', () => {

            expect(element.innerText).toContain('S.H.I.E.L.D Director');
        });

        it('should show image', () => {

            expect(element.querySelector('img')?.getAttribute('src')).toBe('nick/fury.png');
        });

        it('should show every entry of "personal" property', () => {

            expect(element.innerText).toContain('superPower');
            expect(element.innerText).toContain('coolness');
        });

        it('should show every entry of "skillList" property', () => {

            expect(element.innerText).toContain('leading skills');
            expect(element.innerText).toContain('motivation');
            expect(element.innerText).toContain('expert');
        });
    });
});
