import {
    of,
    ReplaySubject,
    throwError,
} from 'rxjs';

import { TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { provideMockStore } from '@ngrx/store/testing';

import {
    loadPersonListEndedAction,
    loadPersonListFailedAction,
    loadPersonListStartedAction,
} from '../person.actions';
import { PersonService } from '../services/person.service';
import { LoadPersonListEffects } from './load-person-list';

describe('LoadPersonListEffects', () => {
    let actions$: ReplaySubject<any>;
    let cut: LoadPersonListEffects;
    let resultList: any[];
    let service: jasmine.SpyObj<PersonService>;

    beforeEach(() => {
        TestBed.configureTestingModule({
            providers: [
                LoadPersonListEffects,

                provideMockActions(() => actions$),
                provideMockStore(),
                {
                    provide: PersonService,
                    useValue: jasmine.createSpyObj('PersonService', [ 'getPersonList' ]),
                },
            ],
        });
    });

    beforeEach(() => {
        resultList = [];
        actions$ = new ReplaySubject(1);

        service = TestBed.inject(PersonService) as jasmine.SpyObj<PersonService>;
        cut = TestBed.inject(LoadPersonListEffects);

        service.getPersonList.and.returnValue(of());
        cut.loadPerson$.subscribe((event) => resultList.push(event));
    });

    afterEach(() => {
        service.getPersonList.calls.reset();
    });

    it('should create', () => {

        expect(cut).toBeTruthy();
    });

    it('should call "getPersonList" on service', () => {

        actions$.next(loadPersonListStartedAction());

        expect(service.getPersonList).toHaveBeenCalledOnceWith();
    });

    describe('with service returns value', () => {
        beforeEach(() => {
            service.getPersonList.and.returnValue(of('fake-person-list' as any));
        });

        it('should return  "loadPersonListEndedAction"', () => {

            actions$.next(loadPersonListStartedAction());

            expect(resultList).toEqual([
                {
                    type: loadPersonListEndedAction.type,
                    personList: 'fake-person-list',
                },
            ]);
        });
    });

    describe('with service returns error', () => {
        beforeEach(() => {
            service.getPersonList.and.returnValue(throwError('fake-error'));
        });

        it('should return  "loadPersonListFailedAction"', () => {

            actions$.next(loadPersonListStartedAction());

            expect(resultList).toEqual([
                {
                    type: loadPersonListFailedAction.type,
                    error: 'fake-error',
                },
            ]);
        });
    });
});
