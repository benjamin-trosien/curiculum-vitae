import {
    Component,
    Input,
} from '@angular/core';
import {
    ComponentFixture,
    TestBed,
} from '@angular/core/testing';
import { provideMockStore } from '@ngrx/store/testing';

import { PersonComponent } from './person.component';

@Component({
    selector: 'app-career',
    template: `
        CAREER CAREER_LIST {{ careerList | json }}
        CAREER TITLE {{ title | json }}
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
    let fixture: ComponentFixture<PersonComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [
                PersonComponent,

                MockCareerComponent,
                MockOutlineComponent,
            ],
            providers: [
                provideMockStore({}),
            ],
        }).compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(PersonComponent);
        cut = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {

        expect(cut).toBeTruthy();
    });
});
