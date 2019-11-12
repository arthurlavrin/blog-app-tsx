import { applyMiddleware, combineReducers, createStore } from 'redux';
import thunk, { ThunkMiddleware } from 'redux-thunk';
import { postsReducer } from './reducers/blog';
import { createReducer } from './reducers/create';
import { AppActions } from '../types/actions';

export const rootReducer = combineReducers({
    blog: postsReducer,
    create: createReducer,
});

export type AppState = ReturnType<typeof rootReducer>;

export const store = createStore(rootReducer, applyMiddleware(thunk as ThunkMiddleware<AppState, AppActions>));
