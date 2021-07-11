import { TestBed } from '@angular/core/testing';
import {
    MockStore,
    provideMockStore,
} from '@ngrx/store/testing';

import {
    loadPersonListStartedAction,
    selectPersonAction,
} from './person.actions';
import { PersonDispatcher } from './person.dispatcher';

describe('PersonDispatcher', () => {
    let cut: PersonDispatcher;
    let store: MockStore;
    let dispatch: jasmine.Spy;

    beforeEach(() => {
        TestBed.configureTestingModule({
            providers: [
                provideMockStore({}),
            ],
        });
    });

    beforeEach(() => {
        store = TestBed.inject(MockStore);
        cut = TestBed.inject(PersonDispatcher);

        dispatch = spyOn(store, 'dispatch');
    });

    afterEach(() => {
        dispatch.calls.reset();
    });

    describe('#loadPersonList', () => {

        it('should dispatch "loadPersonListStartedAction"', () => {

            cut.loadPersonList();

            expect(dispatch).toHaveBeenCalledOnceWith({
                type: loadPersonListStartedAction.type,
            });
        });
    });

    describe('#selectPerson', () => {

        it('should dispatch "selectPersonStartedAction"', () => {

            cut.selectPerson(123);

            expect(dispatch).toHaveBeenCalledOnceWith({
                type: selectPersonAction.type,
                index: 123,
            });
        });
    });
});
