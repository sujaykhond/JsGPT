import { configureStore } from '@reduxjs/toolkit';
import themeReducer from './themeReducer';
import queryReducer from './queryReducer';
import popupReducer from './popupReducer';

const store = configureStore({
    reducer: {
        themeReducer,
        queryReducer,
        popupReducer
    }
});

export default store;
