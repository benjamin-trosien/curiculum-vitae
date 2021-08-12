import { of } from 'rxjs';

import { TestBed } from '@angular/core/testing';
import { AngularFirestore } from '@angular/fire/firestore';

import { PersonService } from './person.service';

describe('PersonService', () => {
    let cut: PersonService;
    let fireStore: jasmine.SpyObj<AngularFirestore>;

    beforeEach(() => {
        TestBed.configureTestingModule({
            providers: [
                PersonService,
                {
                    provide: AngularFirestore,
                    useValue: jasmine.createSpyObj('AngularFirestore', [ 'collection' ]),
                },
            ],
        });
    });

    beforeEach(() => {
        fireStore = TestBed.inject(AngularFirestore) as jasmine.SpyObj<AngularFirestore>;
        cut = TestBed.inject(PersonService);
    });

    afterEach(() => {
        fireStore.collection.calls.reset();
    });

    describe('#getPersonList', () => {
        beforeEach(() => {
            fireStore.collection.and.returnValue({
                valueChanges: () => of(undefined),
            } as any);
        });

        it('should call "collection" on fireStore', () => {

            cut.getPersonList().subscribe(() => { });

            expect(fireStore.collection).toHaveBeenCalledOnceWith(
                'person' as any,
                jasmine.any(Function),
            );
        });

        describe('without results', () => {
            beforeEach(() => {
                fireStore.collection.and.returnValue({
                    valueChanges: () => of(),
                } as any);
            });

            it('should return empty list', () => {
                const valueList: any = [];

                cut.getPersonList().subscribe((value) => valueList.push(value));

                expect(valueList).toEqual([]);
            });
        });

        describe('with results', () => {
            beforeEach(() => {
                const career1 = {
                    employer: 'employer-1',
                    end: 'end-1',
                    start: 'start-1',
                    tasks: 'tasks-1',
                    title: 'title-1',
                };
                const career2 = {
                    employer: 'employer-2',
                    end: 'end-2',
                    start: 'start-2',
                    tasks: 'tasks-2',
                    title: 'title-2',
                };
                const skillItem = {
                    label: 'label',
                    level: 1,
                };
                const skill = {
                    items: [ skillItem ],
                    title: 'title',
                };
                const rawPerson = {
                    career: [ career1, career2 ],
                    degrees: [ career1, career2 ],
                    education: [ career1, career2 ],
                    interests: [ career1, career2 ],
                    name: 'name',
                    personal: 'personal',
                    photo: 'photo',
                    title: 'title',
                    skills: [ skill ],
                };
                fireStore.collection.and.returnValue({
                    valueChanges: () => of([ rawPerson ]),
                } as any);
            });

            it('should call "parsePerson" for each document', () => {
                const valueList: any = [];
                const expected = [
                    {
                        careerList: [
                            {
                                employer: 'employer-2',
                                end: 'end-2',
                                start: 'start-2',
                                tasks: 'tasks-2',
                                title: 'title-2',
                            },
                            {
                                employer: 'employer-1',
                                end: 'end-1',
                                start: 'start-1',
                                tasks: 'tasks-1',
                                title: 'title-1',
                            },

                        ],
                        degreeList: [
                            {
                                employer: 'employer-1',
                                end: 'end-1',
                                start: 'start-1',
                                tasks: 'tasks-1',
                                title: 'title-1',
                            },
                            {
                                employer: 'employer-2',
                                end: 'end-2',
                                start: 'start-2',
                                tasks: 'tasks-2',
                                title: 'title-2',
                            },
                        ],
                        educationList: [
                            {
                                employer: 'employer-1',
                                end: 'end-1',
                                start: 'start-1',
                                tasks: 'tasks-1',
                                title: 'title-1',
                            },
                            {
                                employer: 'employer-2',
                                end: 'end-2',
                                start: 'start-2',
                                tasks: 'tasks-2',
                                title: 'title-2',
                            },
                        ],
                        interestList: [
                            {
                                employer: 'employer-1',
                                end: 'end-1',
                                start: 'start-1',
                                tasks: 'tasks-1',
                                title: 'title-1',
                            },
                            {
                                employer: 'employer-2',
                                end: 'end-2',
                                start: 'start-2',
                                tasks: 'tasks-2',
                                title: 'title-2',
                            },
                        ],
                        name: 'name',
                        personal: 'personal',
                        photo: 'photo',
                        title: 'title',
                        skillList: [
                            {
                                items: [ { label: 'label', level: 1 } ],
                                title: 'title',
                            }
                        ],
                    },
                ];

                cut.getPersonList().subscribe((value) => valueList.push(value));

                expect(valueList).toEqual([ expected ]);
            });
        });
    });
});
