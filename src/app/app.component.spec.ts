import { HarnessLoader } from '@angular/cdk/testing';
import { TestbedHarnessEnvironment } from '@angular/cdk/testing/testbed';
import {
    ComponentFixture,
    TestBed,
} from '@angular/core/testing';
import { MatButtonModule } from '@angular/material/button';
import { MatButtonHarness } from '@angular/material/button/testing';
import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';
import { MatIconHarness } from '@angular/material/icon/testing';
import { MatListModule } from '@angular/material/list';
import { MatListHarness } from '@angular/material/list/testing';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatProgressBarHarness } from '@angular/material/progress-bar/testing';
import { MatSidenavModule } from '@angular/material/sidenav';
import {
    MatDrawerContainerHarness,
    MatDrawerHarness,
} from '@angular/material/sidenav/testing';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatToolbarHarness } from '@angular/material/toolbar/testing';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { RouterTestingModule } from '@angular/router/testing';
import {
    MockStore,
    provideMockStore,
} from '@ngrx/store/testing';

import { AppComponent } from './app.component';
import {
    getIndex,
    getPersonList,
    getPersonListLoadingState,
} from './person/person.reducer';
import { LoadingState } from './shared/models/loading-state';

describe('AppComponent', () => {
    let cut: AppComponent;
    let element: HTMLElement;
    let fixture: ComponentFixture<AppComponent>;
    let loader: HarnessLoader;
    let store: MockStore;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [
                MatButtonModule,
                MatDividerModule,
                MatIconModule,
                MatListModule,
                MatProgressBarModule,
                MatSidenavModule,
                MatToolbarModule,
                NoopAnimationsModule,
                RouterTestingModule,
            ],
            declarations: [
                AppComponent,
            ],
            providers: [
                provideMockStore(),
            ],
        }).compileComponents();
    });

    beforeEach(() => {
        store = TestBed.inject(MockStore);
        fixture = TestBed.createComponent(AppComponent);
        cut = fixture.componentInstance;
        element = fixture.nativeElement;
        loader = TestbedHarnessEnvironment.loader(fixture);

        fixture.detectChanges();
    });

    it('should create', () => {

        expect(cut).toBeTruthy();
    });

    describe('with loading state not "LOADED"', () => {
        let progressBar: MatProgressBarHarness;

        beforeEach(async () => {
            store.overrideSelector(getPersonListLoadingState, LoadingState.PENDING);
            store.refreshState();
            fixture.detectChanges();

            progressBar = await loader.getHarness(MatProgressBarHarness);
        });

        it('should show progress bar', async () => {

            expect(await progressBar.getMode()).toBe('indeterminate');
        });

        it('should not show main outlet', () => {

            expect(element.innerText).not.toContain('PRIMARY OUTLET');
        });
    });

    describe('with loading state is "LOADED"', () => {
        let drawerContainer: MatDrawerContainerHarness;
        let drawer: MatDrawerHarness;
        let toolbar: MatToolbarHarness;
        let menuButton: MatButtonHarness;
        let menuList: MatListHarness;

        beforeEach(async () => {
            const personList = [
                { name: 'Captain America' },
                { name: 'Thor' },
            ];

            store.overrideSelector(getPersonListLoadingState, LoadingState.LOADED);
            store.overrideSelector(getPersonList, personList as any);
            store.overrideSelector(getIndex, 0);
            store.refreshState();
            fixture.detectChanges();

            toolbar = await loader.getHarness(MatToolbarHarness);
            menuButton = await toolbar.getHarness(MatButtonHarness);

            drawerContainer = await loader.getHarness(MatDrawerContainerHarness);
            drawer = await drawerContainer.getHarness(MatDrawerHarness);
            menuList = await drawer.getHarness(MatListHarness);
        });

        it('should show menu button with icon', async () => {
            const icon = await menuButton.getHarness(MatIconHarness);

            expect(await icon.getName()).toBe('menu');
        });

        it('should show menu button with label', async () => {
            const rows = await toolbar.getRowsAsText();

            expect(rows).toEqual([ 'menuMenü' ]);
        });

        it('should show drawer closed', async () => {

            expect(await drawer.isOpen()).toBeFalse();
        });

        describe('with click on menu button', () => {
            let closeButton: MatButtonHarness;
            let capButton: MatButtonHarness;
            let thorButton: MatButtonHarness;
            let githubButton: MatButtonHarness;
            let imprintButton: MatButtonHarness;

            beforeEach(async () => {
                const [
                    [ close, cap, thor ],
                    [ github ],
                    [ imprint ],
                ] = await menuList.getItemsGroupedByDividers();

                closeButton = await close.getHarness(MatButtonHarness);
                capButton = await cap.getHarness(MatButtonHarness);
                thorButton = await thor.getHarness(MatButtonHarness);
                githubButton = await github.getHarness(MatButtonHarness);
                imprintButton = await imprint.getHarness(MatButtonHarness);

                await menuButton.click();
            });

            afterEach(async () => {
                await menuButton.click();
            });

            it('should show open drawer', async () => {

                expect(await drawer.isOpen()).toBeTrue();
                expect(await drawer.getMode()).toBe('over');
            });

            describe('with click on menu button again', () => {
                beforeEach(async () => {
                    await menuButton.click();
                });

                it('should close drawer', async () => {

                    expect(await drawer.isOpen()).toBeFalse();
                });
            });

            it('should show menu for close button', async () => {
                const icon = await closeButton.getHarness(MatIconHarness);

                expect(await closeButton.getText()).toBe('Schliessen close');
                expect(await icon.getName()).toBe('close');
            });

            it('should show menu for cap button', async () => {
                const icon = await capButton.getHarness(MatIconHarness);
                const host = await capButton.host();

                expect(await capButton.getText()).toBe('Captain America checked');
                expect(await host.getAttribute('href')).toBe('/person/0');
                expect(await icon.getName()).toBe('checked');
            });

            it('should show menu for thor button', async () => {
                const icons = await thorButton.getAllHarnesses(MatIconHarness);
                const host = await thorButton.host();

                expect(await thorButton.getText()).toBe('Thor');
                expect(await host.getAttribute('href')).toBe('/person/1');
                expect(icons).toHaveSize(0);
            });

            it('should show menu for github button', async () => {
                const host = await githubButton.host();
                const githubLink = 'https://github.com/benjamin-trosien/curiculum-vitae';

                expect(await githubButton.getText()).toBe('github');
                expect(await host.getAttribute('href')).toBe(githubLink);
            });

            it('should show menu for imprint button', async () => {
                const host = await imprintButton.host();

                expect(await imprintButton.getText()).toBe('Impressum');
                expect(await host.getAttribute('href')).toBe('/imprint');
            });

            it('should show main outlet', () => {

                expect(element.querySelector('router-outlet')).toBeTruthy();
            });

            describe('with click on menu list item', () => {
                beforeEach(async () => {
                    const host = await menuList.host();
                    await host.click();
                });

                it('should close drawer', async () => {

                    expect(await drawer.isOpen()).toBeFalse();
                });
            });
        });
    });
});
