import {
    createFeatureSelector,
    createReducer,
    createSelector,
    on,
} from '@ngrx/store';

import { LoadingState } from '../shared/models/loading-state';
import {
    Person,
    Skill,
} from '../shared/models/person';
import {
    loadPersonListEndedAction,
    loadPersonListFailedAction,
    loadSkillListEndedAction,
    selectPersonAction,
} from './person.actions';

export const CURICULUM_VITAE_FEATURE_KEY = 'curiculumVitae';

export interface CuriculumVitaeState {
    error: any,
    personList: Person[];
    personListLoadingState: LoadingState;
    selectedIndex: number;
    skillList: Skill[];
}

const initialState: CuriculumVitaeState = {
    error: undefined,
    personList: [],
    personListLoadingState: LoadingState.PENDING,
    selectedIndex: undefined!,
    skillList: [],
};

export const reducer = createReducer(
    initialState,

    on(loadPersonListEndedAction, (state, { personList }) => ({
        ...state,
        personList,
        personListLoadingState: LoadingState.LOADED,
    })),

    on(loadPersonListFailedAction, (state) => ({
        ...state,
        personListLoadingState: LoadingState.FAILED,
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
export const getPersonListLoadingState = createSelector(getFeature, (state) => state?.personListLoadingState);
export const getSelectedIndex = createSelector(getFeature, (state) => state?.selectedIndex);
export const getSelectedPerson = createSelector(getPersonList, getSelectedIndex, (list, index) => list[ index ]);
export const getCareer = createSelector(getSelectedPerson, (person) => person?.careerList);
export const getDegreeList = createSelector(getSelectedPerson, (person) => person?.degreeList);
export const getEducation = createSelector(getSelectedPerson, (person) => person?.educationList);
export const getInterestList = createSelector(getSelectedPerson, (person) => person?.interestList);
export const getName = createSelector(getSelectedPerson, (person) => person?.name);
export const getPersonal = createSelector(getSelectedPerson, (person) => person?.personal);
export const getPhoto = createSelector(getSelectedPerson, (person) => person?.photo);
export const getSkillList = createSelector(getSelectedPerson, (person) => person?.skillList);
export const getTitle = createSelector(getSelectedPerson, (person) => person?.title);
