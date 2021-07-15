import {
    Component,
    Input,
} from '@angular/core';
import {
    ComponentFixture,
    TestBed,
} from '@angular/core/testing';
import {
    MockStore,
    provideMockStore,
} from '@ngrx/store/testing';

import {
    getCareer,
    getDegreeList,
    getEducation,
    getInterestList,
    getPerson,
} from '../../person.reducer';
import { PersonComponent } from './person.component';

@Component({
    selector: 'app-career',
    template: `
        CAREER TITLE {{ title | json }} CAREER_LIST {{ careerList | json }}
    `
})
class MockCareerComponent {
    @Input() careerList: any;
    @Input() title: any;
}

@Component({
    selector: 'app-outline',
    template: `
        OUTLINE PERSON {{ person | json }}
    `
})
class MockOutlineComponent {
    @Input() person: any;
}

describe('PersonComponent', () => {
    let cut: PersonComponent;
    let element: any;
    let fixture: ComponentFixture<PersonComponent>;
    let store: MockStore;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [
                PersonComponent,

                MockCareerComponent,
                MockOutlineComponent,
            ],
            providers: [
                provideMockStore(),
            ],
        }).compileComponents();
    });

    beforeEach(() => {
        store = TestBed.inject(MockStore);
        fixture = TestBed.createComponent(PersonComponent);
        cut = fixture.componentInstance;
        element = fixture.nativeElement;
        fixture.detectChanges();
    });

    it('should create', () => {

        expect(cut).toBeTruthy();
    });

    describe('experience page', () => {
        let paper: any;

        beforeEach(() => {
            store.overrideSelector(getPerson, 'fake-person');
            store.overrideSelector(getCareer, 'fake-career');
            store.refreshState();
            fixture.detectChanges();
            paper = element.querySelector('.paper:nth-child(1)');
        });

        it('should show outline', () => {
            const outline = paper.querySelector('app-outline');

            expect(outline.innerText).toBe('OUTLINE PERSON "fake-person"');
        });

        it('should show career', () => {
            const career = paper.querySelector('app-career');

            expect(career.innerText).toBe('CAREER TITLE "Berufserfahrung" CAREER_LIST "fake-career"');
        });
    });

    describe('education page', () => {
        let paper: any;

        beforeEach(() => {
            store.overrideSelector(getPerson, 'fake-person');
            store.overrideSelector(getEducation, 'fake-education');
            store.refreshState();
            fixture.detectChanges();
            paper = element.querySelector('.paper:nth-child(2)');
        });

        it('should show outline', () => {
            const outline = paper.querySelector('app-outline');

            expect(outline.innerText).toBe('OUTLINE PERSON "fake-person"');
        });

        it('should show career', () => {
            const career = paper.querySelector('app-career');

            expect(career.innerText).toBe('CAREER TITLE "Ausbildung" CAREER_LIST "fake-education"');
        });
    });

    describe('degrees and interests page', () => {
        let paper: any;

        beforeEach(() => {
            store.overrideSelector(getPerson, 'fake-person');
            store.overrideSelector(getDegreeList, 'fake-degrees');
            store.overrideSelector(getInterestList, 'fake-interests');
            store.refreshState();
            fixture.detectChanges();
            paper = element.querySelector('.paper:nth-child(3)');
        });

        it('should show outline', () => {
            const outline = paper.querySelector('app-outline');

            expect(outline.innerText).toBe('OUTLINE PERSON "fake-person"');
        });

        it('should show career', () => {
            const careerDegree = paper.querySelector('app-career:nth-child(1)');
            const careerInterest = paper.querySelector('app-career:nth-child(2)');

            expect(careerDegree.innerText).toBe('CAREER TITLE "Abschlüsse und Zertifikate" CAREER_LIST "fake-degrees"');
            expect(careerInterest.innerText).toBe('CAREER TITLE "Persönliche Interessen" CAREER_LIST "fake-interests"');
        });
    });
});
