import { TestBed } from '@angular/core/testing';

import { PersonDispatcher } from '../person.dispatcher';
import { PersonListResolver } from './person-list.resolver';

describe('PersonListResolver', () => {
    let cut: PersonListResolver;
    let dispatcher: jasmine.SpyObj<PersonDispatcher>;

    beforeEach(() => {
        TestBed.configureTestingModule({
            providers: [
                PersonListResolver,
                {
                    provide: PersonDispatcher,
                    useValue: jasmine.createSpyObj('PersonDispatcher', [ 'loadPersonList' ]),
                },
            ],
        });
    });

    beforeEach(() => {
        dispatcher = TestBed.inject(PersonDispatcher) as jasmine.SpyObj<PersonDispatcher>;
        cut = TestBed.inject(PersonListResolver);
    });

    afterEach(() => {
        dispatcher.loadPersonList.calls.reset();
    });

    it('should create', () => {

        expect(cut).toBeTruthy();
    });

    describe('#resolve', () => {

        it('should call "collection" on fireStore', () => {

            cut.resolve();

            expect(dispatcher.loadPersonList).toHaveBeenCalledOnceWith();
        });
    });
});
