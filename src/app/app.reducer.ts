import {
    ActionReducer,
    MetaReducer,
} from '@ngrx/store';

import { environment } from '../environments/environment';

function debug(reducer: ActionReducer<any>): ActionReducer<any> {
    return function (state, action) {
        const newState = reducer(state, action);

        console.group();
        console.log('before', state);
        console.log('action', action);
        console.log('after', newState);
        console.groupEnd();

        return newState;
    };
}

export const metaReducers: MetaReducer<any>[] = environment.production ? [] : [ debug ];
