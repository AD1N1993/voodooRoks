import {placeholderAPI, ResponseAuthorsDataType, ResponsePostsDataType} from "../api/api";
import {Dispatch} from "redux";

const SET_USERS_DATA = "SET_USERS_DATA";
const SET_POSTS_DATA = "SET_POSTS_DATA";
const SET_IS_FETCH = "SET_IS_FETCH";
const SET_ERROR = "SET_ERROR";

export let initialState = {
    users: [] as Array<ResponseAuthorsDataType>,
    posts: [] as Array<ResponsePostsDataType>,
    isFetch: null as boolean | null,
    error: null as string | null
}

type initialStateType = typeof initialState

export const appReducer = (state: initialStateType = initialState, action: ActionsTypes): initialStateType => {
    switch (action.type) {
        case SET_USERS_DATA:
            return {
                ...state, users: action.payload
            }
        case SET_POSTS_DATA:
            return {
                ...state, posts: action.payload
            }
        case SET_IS_FETCH:
            return {
                ...state, isFetch: action.isFetch
            }
        default:
            return state
    }
}

//actions
export const setUsersDataAC = (data: ResponseAuthorsDataType[]) => ({type: SET_USERS_DATA, payload: data} as const);
export const setPostsDataAC = (data: ResponsePostsDataType[]) => ({type: SET_POSTS_DATA, payload: data} as const);
export const setIsFetchAC = (isFetch: boolean | null) => ({type: SET_IS_FETCH, isFetch} as const);
export const setError = (error: string) => ({type: SET_ERROR, error} as const);

//thunks
export const setDataTC = () => async (dispatch: Dispatch<ActionsTypes>) => {
    dispatch(setIsFetchAC(false));
    try {
        let posts = await placeholderAPI.getPosts();
        let users = await placeholderAPI.getAuthors();
        dispatch(setPostsDataAC(posts.data))
        dispatch(setUsersDataAC(users.data))
        dispatch(setIsFetchAC(true))
    } catch (error) {
        dispatch(setError(error))
    }
}

//types
type ActionsTypes =
    | ReturnType<typeof setUsersDataAC>
    | ReturnType<typeof setPostsDataAC>
    | ReturnType<typeof setIsFetchAC>
    | ReturnType<typeof setError>
