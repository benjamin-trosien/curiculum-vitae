import {
    createReducer,
    createSelector,
    on,
} from '@ngrx/store';

import { loadPersonEndedAction } from './app.actions';
import { Person } from './models/person';

export interface AppState {
    app: FeatureState;
}

export interface FeatureState {
    person: Person;
}

const initialState: AppState = {
    app: {
        person: undefined!,
    },
};

export const appReducer = createReducer(
    initialState,

    on(loadPersonEndedAction, (state, { person }) => ({
        ...state,
        person,
    })),
);


export const selectFeature = (state: AppState) => state.app;

export const selectPerson = createSelector(selectFeature, (state) => state.person);
