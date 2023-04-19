import { createSlice } from "@reduxjs/toolkit";
import { RootState } from '.';

export const popupSlice = createSlice({
    name: 'popup',
    initialState: false,
    reducers: {
        togglePopup: (state) => {
            return !state;
        }
    }
})

export const { togglePopup } = popupSlice.actions;
export const selectPopup = (state: RootState) => state.popup;
export default popupSlice.reducer;