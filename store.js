import {configureStore, combineReducers} from '@reduxjs/toolkit'
import { createWrapper, HYDRATE } from 'next-redux-wrapper'
import newsReducer from './src/features/newsSlice'
import savedReducer from './src/features/savedSlice'

const combinedReducers = combineReducers({
    news: newsReducer,
    saved: savedReducer
})

const reducer = (state, action) => {
    if (action.type === HYDRATE) {
        const nextState = {
            ...state, // use previous state
            ...action.payload, // apply delta from hydration
        };
      return nextState;
    } else {
        return combinedReducers(state, action);
    }
};

export const makeStore = () =>
    configureStore({
        reducer
    })

export const wrapper = createWrapper(makeStore, { debug: true });
