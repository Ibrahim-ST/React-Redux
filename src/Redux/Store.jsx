import { configureStore } from "@reduxjs/toolkit";
import counterReducer from './Features/Counter/counterSlice.js';

const store = configureStore({
    reducer: {
        counter: counterReducer
    },
})

export default store;