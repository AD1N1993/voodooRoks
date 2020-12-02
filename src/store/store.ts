import {applyMiddleware, combineReducers, createStore} from "redux";
import thunkMiddleware from "redux-thunk";
import {appReducer} from "../App/app-reducer";

let reducers = combineReducers({
    app: appReducer,
});

export type RootStateRedux = ReturnType<typeof reducers>

const store = createStore(reducers, applyMiddleware(thunkMiddleware));


// (<any>window).store = store;

export default store;