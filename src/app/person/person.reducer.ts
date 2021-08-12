import {
    createReducer,
    createSelector,
    on,
} from '@ngrx/store';

import { LoadingState } from '../shared/models/loading-state';
import { Person } from '../shared/models/person';
import {
    loadPersonListEndedAction,
    loadPersonListFailedAction,
    loadPersonListStartedAction,
    selectPersonAction,
} from './person.actions';

export const CURICULUM_VITAE_FEATURE_KEY = 'curiculumVitae';

export interface CuriculumVitaeState {
    error: any,
    personList: Person[];
    personListLoadingState: LoadingState;
    selectedIndex: number;
}

const initialState: CuriculumVitaeState = {
    error: undefined,
    personList: [],
    personListLoadingState: LoadingState.PENDING,
    selectedIndex: undefined!,
};

export const reducer = createReducer(
    initialState,

    on(loadPersonListEndedAction, (state, { personList }) => ({
        ...state,
        personList,
        personListLoadingState: LoadingState.LOADED,
    })),

    on(loadPersonListFailedAction, (state, { error }) => ({
        ...state,
        error,
        personListLoadingState: LoadingState.FAILED,
    })),

    on(loadPersonListStartedAction, (state) => ({
        ...state,
        personListLoadingState: LoadingState.PENDING,
    })),

    on(selectPersonAction, (state, { index }) => ({
        ...state,
        selectedIndex: index,
    })),
);

/* eslint-disable max-len */
const getFeature = createSelector((state: any) => state[ CURICULUM_VITAE_FEATURE_KEY ], value => value);

export const getPersonList = createSelector(getFeature, (state) => state?.personList);
export const getPersonListLoadingState = createSelector(getFeature, (state) => state?.personListLoadingState);
export const getIndex = createSelector(getFeature, (state) => state?.selectedIndex);
export const getPerson = createSelector(getIndex, getPersonList, (index, list = []) => list[ index ]);
export const getCareer = createSelector(getPerson, (person) => person?.careerList);
export const getDegreeList = createSelector(getPerson, (person) => person?.degreeList);
export const getEducation = createSelector(getPerson, (person) => person?.educationList);
export const getInterestList = createSelector(getPerson, (person) => person?.interestList);
