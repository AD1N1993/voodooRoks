import {loremAPI} from "../api/api";
import {Dispatch} from "redux";

const SET_LOREM_HTML = "SET_LOREM_HTML";
const SET_IS_FETCH = "SET_IS_FETCH";
const SET_ERROR = "SET_ERROR";

export let initialState = {
    html: "",
    isFetch: null as boolean | null,
    error: null as string | null
}

type initialStateType = typeof initialState

export const appReducer = (state: initialStateType = initialState, action: ActionsTypes): initialStateType => {
    switch (action.type) {
        case SET_LOREM_HTML:
            return {
                ...state, html: action.payload
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
export const setLoremHTML = (data: string) => ({type: SET_LOREM_HTML, payload: data} as const);
export const setIsFetchAC = (isFetch: boolean | null) => ({type: SET_IS_FETCH, isFetch} as const);
export const setError = (error: string) => ({type: SET_ERROR, error} as const);

//thunks
export const getLoremHTML = (count: number, size: string, headers: string) => async (dispatch: Dispatch<ActionsTypes>) => {
    dispatch(setIsFetchAC(false));
    try {
        let html = await loremAPI.getLoremHTML(count, size, headers);
        dispatch(setLoremHTML(html))
        dispatch(setIsFetchAC(true))
    } catch (error) {
        dispatch(setError(error))
    }
}

//types
type ActionsTypes =
    | ReturnType<typeof setLoremHTML>
    | ReturnType<typeof setIsFetchAC>
    | ReturnType<typeof setError>
