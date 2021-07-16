import { TestBed } from '@angular/core/testing';

import { PersonDispatcher } from '../person.dispatcher';
import { SelectedPersonResolver } from './selected-person.resolver';

describe('SelectedPersonResolver', () => {
    let cut: SelectedPersonResolver;
    let dispatcher: jasmine.SpyObj<PersonDispatcher>;

    beforeEach(() => {
        TestBed.configureTestingModule({
            providers: [
                SelectedPersonResolver,
                {
                    provide: PersonDispatcher,
                    useValue: jasmine.createSpyObj('PersonDispatcher', [ 'selectPerson' ]),
                },
            ],
        });
    });

    beforeEach(() => {
        dispatcher = TestBed.inject(PersonDispatcher) as jasmine.SpyObj<PersonDispatcher>;
        cut = TestBed.inject(SelectedPersonResolver);
    });

    afterEach(() => {
        dispatcher.selectPerson.calls.reset();
    });

    it('should create', () => {

        expect(cut).toBeTruthy();
    });

    describe('#resolve', () => {

        it('should call "collection" on fireStore', () => {
            const route = { params: { index: '123' } };

            cut.resolve(route as any);

            expect(dispatcher.selectPerson).toHaveBeenCalledOnceWith(123);
        });
    });
});
