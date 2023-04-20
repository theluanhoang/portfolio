import { createSlice } from "@reduxjs/toolkit";
import { RootState } from '.';

export const darkLightSlice = createSlice({
    name: 'darkLight',
    initialState: false,
    reducers: {
        toggleMode: (state) => {
            return !state;
        }
    }
})

export const { toggleMode } = darkLightSlice.actions;
export const selectDarkLight = (state: RootState) => state.darkLight;
export default darkLightSlice.reducer;