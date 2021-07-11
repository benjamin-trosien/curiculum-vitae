import {
    ComponentFixture,
    TestBed,
} from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { provideMockStore } from '@ngrx/store/testing';

import { SelectionComponent } from './selection.component';

describe('SelectionComponent', () => {
    let component: SelectionComponent;
    let fixture: ComponentFixture<SelectionComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [
                SelectionComponent,
            ],
            imports: [
                RouterTestingModule,
            ],
            providers: [
                provideMockStore({}),
            ],
        }).compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(SelectionComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {

        expect(component).toBeTruthy();
    });
});
