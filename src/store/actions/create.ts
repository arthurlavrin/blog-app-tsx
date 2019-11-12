import { SAVE_POST_IN_STORE, RESET_POST_CREATION } from './actionTypes';
import axios from '../../axios/axios-simple-blog';
import { AppActions } from '../../types/actions';
import { Dispatch } from 'redux';
import { AppState } from '../configureStore';

export const savePostInStore = (item: any): AppActions => ({
    type: SAVE_POST_IN_STORE,
    item,
});

export const resetPostCreation = (): AppActions => ({
    type: RESET_POST_CREATION,
});

export function finishCreatePost(history: any) {
    return async (dispatch: Dispatch<AppActions>, getState: () => AppState) => {
        await axios.post('/posts', getState().create.post);
        dispatch(resetPostCreation());
        history.push('/');
    };
}
