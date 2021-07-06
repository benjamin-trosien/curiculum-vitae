import {
    createFeatureSelector,
    createReducer,
    createSelector,
    on,
} from '@ngrx/store';

import {
    loadPersonListEndedAction,
    loadPersonListFailedAction,
    loadSkillListEndedAction,
    selectPersonAction,
} from './curiculum-vitae.actions';
import { Person } from './models/person';
import { Skill } from './models/skill';

export const CURICULUM_VITAE_FEATURE_KEY = 'curiculumVitae';

export interface CuriculumVitaeState {
    error: any,
    personList: Person[];
    selectedIndex: number;
    skillList: Skill[];
}

const initialState: CuriculumVitaeState = {
    error: undefined,
    personList: [],
    selectedIndex: 0,
    skillList: [],
};

export const reducer = createReducer(
    initialState,

    on(loadPersonListEndedAction, (state, { personList }) => ({
        ...state,
        personList: [
            ...personList,
            {
                name: 'Max Mustermann',
                personal: [],
                title: 'Muster Job',
                skillList: [],
            },
        ],
    })),

    on(loadSkillListEndedAction, (state, { skillList }) => ({
        ...state,
        skillList,
    })),

    on(loadPersonListFailedAction, (state, { error }) => ({
        ...state,
        error,
    })),

    on(selectPersonAction, (state, { index }) => ({
        ...state,
        selectedIndex: index,
    })),
);


const getFeature = createFeatureSelector<any, CuriculumVitaeState>(CURICULUM_VITAE_FEATURE_KEY);

export const getPersonList = createSelector(getFeature, (state) => state?.personList);
export const getSelectedIndex = createSelector(getFeature, (state) => state?.selectedIndex);
export const getSelectedPerson = createSelector(getPersonList, getSelectedIndex, (list, index) => list[ index ]);
export const getName = createSelector(getSelectedPerson, (person) => person?.name);
export const getPersonal = createSelector(getSelectedPerson, (person) => person?.personal);
export const getSkillList = createSelector(getSelectedPerson, (person) => person?.skillList);
export const getTitle = createSelector(getSelectedPerson, (person) => person?.title);
