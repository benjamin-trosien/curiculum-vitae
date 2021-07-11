import { TestBed } from '@angular/core/testing';
import {
    MockStore,
    provideMockStore,
} from '@ngrx/store/testing';

import { LoadingState } from '../shared/models/loading-state';
import {
    loadPersonListEndedAction,
    loadPersonListFailedAction,
} from './person.actions';
import { reducer } from './person.reducer';

describe('PersonReducer', () => {
    let store: MockStore;

    beforeEach(() => {
        TestBed.configureTestingModule({
            providers: [
                provideMockStore({}),
            ],
        });

        store = TestBed.inject(MockStore);
    });

    describe('#loadPersonListEndedAction', () => {

        it('should set "personList" and "personListLoadingState" property', () => {

            const state = reducer(undefined, loadPersonListEndedAction({ personList: 'fake-person-list' as any }));

            expect(state.personList).toBe('fake-person-list' as any);
            expect(state.personListLoadingState).toBe(LoadingState.LOADED);
        });
    });

    describe('#loadPersonListFailedAction', () => {

        it('should set "error" and "personListLoadingState" property', () => {

            const state = reducer(undefined, loadPersonListFailedAction({ error: 'fake-error' as any }));

            expect(state.error).toBe('fake-error');
            expect(state.personListLoadingState).toBe(LoadingState.FAILED);
        });
    });
});
