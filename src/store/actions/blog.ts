import {
    FETCH_POSTS_START,
    FETCH_POSTS_SUCCESS,
    FETCH_POSTS_ERROR,
    FETCH_POST_SUCCESS,
    DELETE_POST,
} from './actionTypes';

import axios from '../../axios/axios-simple-blog';
import { AppActions } from '../../types/actions';
import { Dispatch } from 'redux';

export const fetchPostsStart = (): AppActions => ({
    type: FETCH_POSTS_START,
});

export const fetchPostsSuccess = (posts: any): AppActions => ({
    type: FETCH_POSTS_SUCCESS,
    posts,
});

export const fetchPostsError = (e: any): AppActions => ({
    type: FETCH_POSTS_ERROR,
    error: e,
});

export const fetchPostSuccess = (post: any): AppActions => ({
    type: FETCH_POST_SUCCESS,
    post,
});

export const deletePostSuccess = (postId: any): AppActions => ({
    postId,
    type: DELETE_POST,
});

export function fetchPosts() {
    return async (dispatch: Dispatch<AppActions>) => {
        dispatch(fetchPostsStart());
        try {
            const response = await axios.get('/posts');

            const posts = [...response.data];

            dispatch(fetchPostsSuccess(posts));
        } catch (e) {
            dispatch(fetchPostsError(e));
        }
    };
}

// --------------------------------------

export function fetchPostById(postId: any) {
    return async (dispatch: Dispatch<AppActions>) => {
        dispatch(fetchPostsStart());
        try {
            const response = await axios.get(`/posts/${postId}?_embed=comments`);
            const post = response.data;

            console.log(post);
            dispatch(fetchPostSuccess(post));
        } catch (e) {
            dispatch(fetchPostsError(e));
        }
    };
}

export function deletePost(postId: any, history: any) {
    return async (dispatch: Dispatch<AppActions>) => {
        dispatch(fetchPostsStart());
        try {
            await axios.delete(`/posts/${postId}`);
            dispatch(deletePostSuccess(postId));
            history.push('/');
        } catch (e) {
            dispatch(fetchPostsError(e));
        }
    };
}
