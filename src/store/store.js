import {combineReducers, configureStore} from '@reduxjs/toolkit'
import counterReducer from './reducers/counterSlice'

const rootReducer = combineReducers({
    counter: counterReducer
})

/*
export const store = configureStore({
    reducer: rootReducer
})*/


export const store = (initialState = {}) => {
    return configureStore({
        reducer: rootReducer,
        preloadedState: initialState
    })
}