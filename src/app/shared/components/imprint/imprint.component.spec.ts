import {
    ComponentFixture,
    TestBed,
} from '@angular/core/testing';

import { ImprintComponent } from './imprint.component';

describe('ImprintComponent', () => {
    let cut: ImprintComponent;
    let fixture: ComponentFixture<ImprintComponent>;
    let element: any;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [
                ImprintComponent,
            ],
        }).compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(ImprintComponent);
        cut = fixture.componentInstance;
        element = fixture.nativeElement;
        fixture.detectChanges();
    });

    it('should create', () => {

        expect(cut).toBeTruthy();
    });

    it('should display imprint data', () => {

        expect(element.innerText).toContain('Benjamin Trosien');
        expect(element.innerText).toContain('Carl-Herz-Ufer 25');
        expect(element.innerText).toContain('10961 Berlin');
        expect(element.innerText).toContain('benjamin.trosien@gmail.com');
    });
});
