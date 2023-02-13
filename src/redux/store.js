import {combineReducers, configureStore} from "@reduxjs/toolkit";
import {authReducer} from "./auth.slice";
import {paidReducer} from "./paid.slice";

const rootReducer = combineReducers ({
    auth:authReducer,
    paid:paidReducer,
});

const setupStore =()=> configureStore({
    reducer:rootReducer
});

export {
    setupStore
}