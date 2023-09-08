import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit'
import counterReducer from './Features/Counter/counterSlice.js';
import logger from './Middlewares/Logger.js';
// import logger from 'redux-logger'


const store = configureStore({
    reducer: {
        counter: counterReducer
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger)  
    
})

export default store;