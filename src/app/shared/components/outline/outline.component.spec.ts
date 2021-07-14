import {
    ComponentFixture,
    TestBed,
} from '@angular/core/testing';

import { OutlineComponent } from './outline.component';

fdescribe('SkillsComponent', () => {
    let cut: OutlineComponent;
    let element: HTMLElement;
    let fixture: ComponentFixture<OutlineComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [
                OutlineComponent,
            ],
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
});
