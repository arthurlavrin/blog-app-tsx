import { Blog } from '../../types/Blog';
import { BlogActionTypes } from '../../types/actions';

import {
    FETCH_POSTS_START,
    FETCH_POSTS_SUCCESS,
    FETCH_POSTS_ERROR,
    FETCH_POST_SUCCESS,
    DELETE_POST,
} from '../actions/actionTypes';

const initialState: Blog = {
    posts: [],
    loading: false,
    loaded: false,
    post: [],
    error: '',
};

const postsReducer = (state = initialState, action: BlogActionTypes): Blog => {
    switch (action.type) {
        case FETCH_POSTS_START:
            return {
                ...state,
                loading: true,
            };
        case FETCH_POSTS_SUCCESS:
            return {
                ...state,
                loading: false,
                loaded: true,
                posts: action.posts,
            };
        case FETCH_POSTS_ERROR:
            return {
                ...state,
                loading: false,
                loaded: false,
                error: action.error,
            };

        case FETCH_POST_SUCCESS:
            return {
                ...state,
                loading: false,
                loaded: true,
                post: action.post,
            };
        case DELETE_POST:
            const posts = [...state.posts].filter(e => e.id !== action.postId);
            return {
                ...state,
                posts,
                post: [],
            };

        default:
            return state;
    }
};

export { postsReducer };
