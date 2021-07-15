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

        describe('with results', () => {
            beforeEach(() => {
                const career = {
                    employer: 'employer',
                    end: 'end',
                    start: 'start',
                    tasks: 'tasks',
                    title: 'title',
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
                    career: [ career ],
                    degrees: [ career ],
                    education: [ career ],
                    interests: [ career ],
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
                                employer: 'employer',
                                end: 'end',
                                start: 'start',
                                tasks: 'tasks',
                                title: 'title',
                            },
                        ],
                        degreeList: [
                            {
                                employer: 'employer',
                                end: 'end',
                                start: 'start',
                                tasks: 'tasks',
                                title: 'title',
                            },
                        ],
                        educationList: [
                            {
                                employer: 'employer',
                                end: 'end',
                                start: 'start',
                                tasks: 'tasks',
                                title: 'title',
                            },
                        ],
                        interestList: [
                            {
                                employer: 'employer',
                                end: 'end',
                                start: 'start',
                                tasks: 'tasks',
                                title: 'title',
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
                    }
                ];

                cut.getPersonList().subscribe((value) => valueList.push(value));

                expect(valueList).toEqual([ expected ]);
            });
        });
    });
});
