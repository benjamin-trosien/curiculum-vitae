import {
    Observable,
    of,
} from 'rxjs';

import { TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Action } from '@ngrx/store';
import {
    MockStore,
    provideMockStore,
} from '@ngrx/store/testing';

import {
    loadPersonListEndedAction,
    loadPersonListStartedAction,
} from '../person.actions';
import { PersonService } from '../services/person.service';
import { LoadPersonListEffects } from './load-person-list';

fdescribe('LoadPersonListEffects', () => {
    let actions$: Observable<Action>;
    let cut: LoadPersonListEffects;
    let resultList: Action[];
    let service: jasmine.SpyObj<PersonService>;
    let store: MockStore;

    beforeEach(() => {
        TestBed.configureTestingModule({
            providers: [
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
        actions$ = new Observable<Action>();
        cut = TestBed.inject(LoadPersonListEffects);
        service = TestBed.inject(PersonService) as jasmine.SpyObj<PersonService>;
        store = TestBed.inject(MockStore);

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

        store.dispatch(loadPersonListStartedAction());

        expect(service.getPersonList).toHaveBeenCalledOnceWith();
    });

    describe('with service returns value', () => {
        beforeEach(() => {
            service.getPersonList.and.returnValue(of('fake-person-list' as any));
        });

        it('should return  "loadPersonListEndedAction"', () => {

            store.dispatch(loadPersonListStartedAction());

            expect(resultList).toEqual([
                {
                    type: loadPersonListEndedAction.type,
                    personList: 'fake-person-list',
                } as any,
            ]);
        });
    });
});
