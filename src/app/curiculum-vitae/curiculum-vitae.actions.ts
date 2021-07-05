import {
    createAction,
    props,
} from '@ngrx/store';

import { Person } from './models/person';

export const loadPersonEndedAction = createAction('[App] Load Person Ended', props<{ person: Person }>());
export const loadPersonFailedAction = createAction('[App] Load Person Failed');
export const loadPersonStartedAction = createAction('[App] Load Person Started', props<{ id: string }>());
