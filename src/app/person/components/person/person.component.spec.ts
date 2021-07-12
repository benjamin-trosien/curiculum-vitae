import {
    ComponentFixture,
    TestBed,
} from '@angular/core/testing';
import { provideMockStore } from '@ngrx/store/testing';

import { PersonComponent } from './person.component';

describe('PersonComponent', () => {
    let cut: PersonComponent;
    let fixture: ComponentFixture<PersonComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [
                PersonComponent,
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
