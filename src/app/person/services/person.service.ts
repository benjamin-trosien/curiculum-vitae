import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

import {
    Career,
    Item,
    Person,
    Skill,
} from '../../shared/models/person';

@Injectable({
    providedIn: 'root',
})
export class PersonService {

    constructor(
        private firestore: AngularFirestore,
    ) { }

    private parseSkillItem = (rawItem: any = {}): Item => {
        return {
            label: rawItem.label,
            level: Math.max(1, Math.min(rawItem.level, 5)),
        };
    }

    private parseSkill = (rawSkill: any = {}): Skill => {
        return {
            items: rawSkill?.items?.map(this.parseSkillItem),
            title: rawSkill.title,
        };
    }

    private parseCareer = (rawCareer: any = {}): Career => {
        return {
            employer: rawCareer.employer,
            end: rawCareer.end,
            start: rawCareer.start,
            tasks: rawCareer.tasks,
            title: rawCareer.title,
        };
    }

    private parsePerson = (rawPerson: any = {}): Person => {
        return {
            careerList: rawPerson.career?.map(this.parseCareer).reverse(),
            degreeList: rawPerson.degrees?.map(this.parseCareer),
            educationList: rawPerson.education?.map(this.parseCareer),
            interestList: rawPerson.interests?.map(this.parseCareer),
            name: rawPerson.name,
            personal: rawPerson.personal,
            photo: rawPerson.photo,
            title: rawPerson.title,
            skillList: rawPerson.skills?.map(this.parseSkill),
        };
    }

    getPersonList = (): Observable<Person[]> => {
        return this.firestore
            .collection<any>('person', (ref) => ref.orderBy('createdAt', 'asc'))
            .valueChanges()
            .pipe(
                map((docs = []) => {
                    return docs.map(this.parsePerson);
                }),
            );
    }
}
