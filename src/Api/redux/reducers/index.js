import { combineReducers } from "redux";
import { todoReducers } from "./toReducers";

export const rootRender = combineReducers({
    todoReducers
})