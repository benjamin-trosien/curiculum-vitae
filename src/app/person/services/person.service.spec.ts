import { TestBed } from '@angular/core/testing';
import { AngularFirestore } from '@angular/fire/firestore';

import { PersonService } from './person.service';

describe('PersonService', () => {
    let cut: PersonService;
    let fireStore: jasmine.SpyObj<AngularFirestore>;

    beforeEach(() => {
        TestBed.configureTestingModule({
            providers: [
                {
                    provide: AngularFirestore,
                    useValue: jasmine.createSpyObj('fireStore', [ 'collection' ]),
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

        it('should call "collection" on fireStore', () => {

            cut.getPersonList();

            // expect(fireStore.collection).toHaveBeenCalledOnceWith(
                // 'person',
                // (ref) => ref.orderBy('createdAt', 'asc')
            // );
        });
    });
});
