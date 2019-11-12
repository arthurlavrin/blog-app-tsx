import { Create } from '../../types/Create';
import { BlogActionTypes } from '../../types/actions';

import { SAVE_POST_IN_STORE, RESET_POST_CREATION } from '../actions/actionTypes';

const initialState: Create = {
    post: {
        title: '',
        body: '',
    },
};

const createReducer = (state = initialState, action: BlogActionTypes): Create => {
    switch (action.type) {
        case SAVE_POST_IN_STORE:
            return {
                ...state,
                post: {
                    body: action.item.controlName === 'body' ? action.item.value : state.post.body,
                    title: action.item.controlName === 'title' ? action.item.value : state.post.title,
                },
            };
        case RESET_POST_CREATION:
            return {
                ...state,
                title: '',
                body: '',
            };
        default:
            return state;
    }
};

export { createReducer };
