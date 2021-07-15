import { HarnessLoader } from '@angular/cdk/testing';
import { TestbedHarnessEnvironment } from '@angular/cdk/testing/testbed';
import { ChangeDetectionStrategy } from '@angular/core';
import {
    ComponentFixture,
    TestBed,
} from '@angular/core/testing';
import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';
import { MatIconHarness } from '@angular/material/icon/testing';
import { MatListModule } from '@angular/material/list';
import {
    MatListHarness,
    MatListItemHarness,
} from '@angular/material/list/testing';

import { CareerComponent } from './career.component';

describe('CareerComponent', () => {
    let cut: CareerComponent;
    let element: HTMLElement;
    let fixture: ComponentFixture<CareerComponent>;
    let loader: HarnessLoader;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [
                MatDividerModule,
                MatIconModule,
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
        loader = TestbedHarnessEnvironment.loader(fixture);
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
        let taskList: MatListHarness;
        let dateList: MatListHarness;
        let itemList: MatListItemHarness[];

        describe('with entry without "start" and "end"', () => {
            beforeEach(async () => {
                cut.careerList = [
                    {
                        title: 'facility manager',
                        employer: 'wife',
                        tasks: [ 'toilet cleaning' ],
                    },
                ];
                taskList = await loader.getHarness(MatListHarness.with({ selector: '.job__tasks' }));
                itemList = await taskList.getItems();
                fixture.detectChanges();
            });

            it('should show "title"', () => {

                expect(element.innerText).toContain('facility manager');
            });

            it('should show "employer"', () => {

                expect(element.innerText).toContain('wife');
            });

            it('should not show date list', () => {

                expect(element.querySelector('.job__time')).toBeFalsy();
            });

            it('should show tasks', async () => {
                const [ task ] = itemList;
                const icon = await task.getHarness(MatIconHarness);

                expect(itemList).toHaveSize(1);
                expect(await icon.getName()).toBe('code');
                expect(await task.getLinesText()).toEqual([ 'toilet cleaning' ]);
            });
        });

        describe('with entry with "start" without "end"', () => {
            beforeEach(async () => {
                cut.careerList = [
                    {
                        title: 'deposit bottle collector',
                        employer: 'germany',
                        start: 'age 100',
                        tasks: [ 'humiliating pension improvement' ],
                    },
                ];
                taskList = await loader.getHarness(MatListHarness.with({ selector: '.job__tasks' }));
                dateList = await loader.getHarness(MatListHarness.with({ selector: '.job__time' }));
                itemList = await taskList.getItems();
                fixture.detectChanges();
            });

            it('should show "title"', () => {

                expect(element.innerText).toContain('deposit bottle collector');
            });

            it('should show "employer"', () => {

                expect(element.innerText).toContain('germany');
            });

            it('should show date list', async () => {
                const [ start, hyphen, end ] = await dateList.getItems();

                expect(await start.getLinesText()).toEqual([ 'age 100' ]);
                expect(await hyphen.getLinesText()).toEqual([ '-' ]);
                expect(await end.getLinesText()).toEqual([ 'Heute' ]);
            });

            it('should show tasks', async () => {
                const [ task ] = itemList;
                const icon = await task.getHarness(MatIconHarness);

                expect(itemList).toHaveSize(1);
                expect(await icon.getName()).toBe('code');
                expect(await task.getLinesText()).toEqual([ 'humiliating pension improvement' ]);
            });
        });

        describe('with entry with "start" and "end"', () => {
            beforeEach(async () => {
                cut.careerList = [
                    {
                        title: 'music lover',
                        employer: 'hobby',
                        start: 'birth',
                        end: 'never',
                        tasks: [ 'annoy neighbours' ],
                    },
                ];
                taskList = await loader.getHarness(MatListHarness.with({ selector: '.job__tasks' }));
                dateList = await loader.getHarness(MatListHarness.with({ selector: '.job__time' }));
                itemList = await taskList.getItems();
                fixture.detectChanges();
            });

            it('should show "title"', () => {

                expect(element.innerText).toContain('music lover');
            });

            it('should show "employer"', () => {

                expect(element.innerText).toContain('hobby');
            });

            it('should show date list', async () => {
                const [ start, hyphen, end ] = await dateList.getItems();

                expect(await start.getLinesText()).toEqual([ 'birth' ]);
                expect(await hyphen.getLinesText()).toEqual([ '-' ]);
                expect(await end.getLinesText()).toEqual([ 'never' ]);
            });

            it('should show tasks', async () => {
                const [ task ] = itemList;
                const icon = await task.getHarness(MatIconHarness);

                expect(itemList).toHaveSize(1);
                expect(await icon.getName()).toBe('code');
                expect(await task.getLinesText()).toEqual([ 'annoy neighbours' ]);
            });
        });
    });
});
