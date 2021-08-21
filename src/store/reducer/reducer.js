import {combineReducers } from "redux";
import filterReducer from "./filterReducer";
import todoReducer from "./todoReducer";

const reducers=combineReducers({
    todos:todoReducer,
    filters:filterReducer
})




export default reducers;