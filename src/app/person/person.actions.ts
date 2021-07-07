import {
    createAction,
    props,
} from '@ngrx/store';

import {
    Person,
    Skill,
} from '../shared/models/person';

export const loadPersonListEndedAction = createAction('[App] Load Person List Ended', props<{ personList: Person[] }>());
export const loadPersonListFailedAction = createAction('[App] Load Person List Failed', props<{ error: any }>());
export const loadPersonListStartedAction = createAction('[App] Load Person List Started');

export const loadSkillListEndedAction = createAction('[App] Load SkillLList Ended', props<{ skillList: Skill[] }>());
export const loadSkillListFailedAction = createAction('[App] Load SkillLList Failed');
export const loadSkillListStartedAction = createAction('[App] Load SkillLList Started');

export const selectPersonAction = createAction('[App] Select Person', props<{ index: number }>());
