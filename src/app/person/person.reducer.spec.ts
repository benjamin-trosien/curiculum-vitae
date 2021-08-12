import { TestBed } from '@angular/core/testing';
import { provideMockStore } from '@ngrx/store/testing';

import { LoadingState } from '../shared/models/loading-state';
import {
    loadPersonListEndedAction,
    loadPersonListFailedAction,
    loadPersonListStartedAction,
    selectPersonAction,
} from './person.actions';
import { reducer } from './person.reducer';

describe('person reducer', () => {
    beforeEach(() => {
        TestBed.configureTestingModule({
            providers: [
                provideMockStore({}),
            ],
        });
    });

    describe('#loadPersonListEndedAction', () => {

        it('should set "personList" and "personListLoadingState" property', () => {
            const personList = 'fake-person-list' as any;

            const state = reducer(undefined, loadPersonListEndedAction({ personList }));

            expect(state.personList).toBe('fake-person-list' as any);
            expect(state.personListLoadingState).toBe(LoadingState.LOADED);
        });
    });

    describe('#loadPersonListFailedAction', () => {

        it('should set "error" and "personListLoadingState" property', () => {
            const error = 'fake-error' as any;

            const state = reducer(undefined, loadPersonListFailedAction({ error }));

            expect(state.error).toBe('fake-error');
            expect(state.personListLoadingState).toBe(LoadingState.FAILED);
        });
    });

    describe('#loadPersonListStartedAction', () => {

        it('should set "personListLoadingState" property', () => {

            const state = reducer(undefined, loadPersonListStartedAction());

            expect(state.personListLoadingState).toBe(LoadingState.PENDING);
        });
    });

    describe('#selectPersonAction', () => {

        it('should set "selectedIndex" property', () => {

            const state = reducer(undefined, selectPersonAction({ index: 123 }));

            expect(state.selectedIndex).toBe(123);
        });
    });
});
