import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    setupKeyPopup: false
};

const popupReducer = createSlice({
    name: 'popup',
    initialState,
    reducers: {
        toggleSetupKeyPopup(state, { payload }) {
            state.setupKeyPopup = payload;
        }
    }
});

export const { toggleSetupKeyPopup } = popupReducer.actions;

export default popupReducer.reducer;
