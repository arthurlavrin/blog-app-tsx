export const FETCH_POSTS_START = 'FETCH_POSTS_START';
export const FETCH_POSTS_SUCCESS = 'FETCH_POSTS_SUCCESS';
export const FETCH_POSTS_ERROR = 'FETCH_POSTS_ERROR';
export const FETCH_POST_SUCCESS = 'FETCH_POST_SUCCESS';
export const SAVE_POST_IN_STORE = 'SAVE_POST_IN_STORE';
export const RESET_POST_CREATION = 'RESET_POST_CREATION';
export const DELETE_POST = 'DELETE_POST';

export interface SetBlogStartAction {
    type: typeof FETCH_POSTS_START;
}

export interface SetBlogSuccessAction {
    type: typeof FETCH_POSTS_SUCCESS;
    posts: any;
}

export interface SetBlogErrorAction {
    type: typeof FETCH_POSTS_ERROR;
    error: any;
}

export interface SetSinglePostSuccess {
    type: typeof FETCH_POST_SUCCESS;
    post: any;
}

export interface DeletePost {
    type: typeof DELETE_POST;
    postId: any;
}

export interface SavePostInStore {
    type: typeof SAVE_POST_IN_STORE;
    item: any;
}

export interface ResetPostCreation {
    type: typeof RESET_POST_CREATION;
}

export type BlogActionTypes =
    | SetBlogStartAction
    | SetBlogSuccessAction
    | SetBlogErrorAction
    | SetSinglePostSuccess
    | DeletePost
    | SavePostInStore
    | ResetPostCreation;

export type AppActions = BlogActionTypes;
