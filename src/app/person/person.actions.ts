import {
    createAction,
    props,
} from '@ngrx/store';

import {
    Person,
    Skill,
} from '../shared/models/person';

/* eslint-disable max-len */
export const loadPersonListEndedAction = createAction('[Person] Load Person List Ended', props<{ personList: Person[] }>());
export const loadPersonListFailedAction = createAction('[Person] Load Person List Failed', props<{ error: any }>());
export const loadPersonListStartedAction = createAction('[Person] Load Person List Started');

export const loadSkillListEndedAction = createAction('[Person] Load SkillLList Ended', props<{ skillList: Skill[] }>());
export const loadSkillListFailedAction = createAction('[Person] Load SkillLList Failed');
export const loadSkillListStartedAction = createAction('[Person] Load SkillLList Started');

export const selectPersonAction = createAction('[Person] Select Person', props<{ index: number }>());
