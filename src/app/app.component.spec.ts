import {
    Component,
    DebugElement,
} from '@angular/core';
import {
    ComponentFixture,
    TestBed,
} from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { RouterTestingModule } from '@angular/router/testing';
import { provideMockStore } from '@ngrx/store/testing';

import { AppComponent } from './app.component';

@Component({
    selector: 'app-imprint',
    template: `IMPRINT`
})
class TestImprintComponent {
}

describe('AppComponent', () => {
    let fixture: ComponentFixture<AppComponent>;
    let cut: AppComponent;
    let compiled: any;
    let query: (selector: string) => DebugElement;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [
                RouterTestingModule,
            ],
            declarations: [
                AppComponent,

                TestImprintComponent,
            ],
            providers: [
                provideMockStore({}),
            ],
        }).compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(AppComponent);
        cut = fixture.componentInstance;
        compiled = fixture.nativeElement;
        query = (selector: string) => fixture.debugElement.query(By.css(selector));
    });

    it('should create the app', () => {

        expect(cut).toBeTruthy();
    });

    it('should render main outlet', () => {

        expect(query('router-outlet')).toBeTruthy();
    });
});
