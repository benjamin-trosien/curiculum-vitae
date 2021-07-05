import {
    createFeatureSelector,
    createReducer,
    createSelector,
    on,
} from '@ngrx/store';

import { loadPersonEndedAction } from './curiculum-vitae.actions';
import { Person } from './models/person';

export const CURICULUM_VITAE_FEATURE_KEY = 'curiculumVitae';

export interface CuriculumVitaeState {
    person: Person;
}

const initialState: CuriculumVitaeState = {
    person: undefined!,
};

export const reducer = createReducer(
    initialState,

    on(loadPersonEndedAction, (state, { person }) => ({
        ...state,
        person,
    })),
);


const getFeature = createFeatureSelector<any, CuriculumVitaeState>(CURICULUM_VITAE_FEATURE_KEY);

export const selectPerson = createSelector(getFeature, (state) => state.person);
