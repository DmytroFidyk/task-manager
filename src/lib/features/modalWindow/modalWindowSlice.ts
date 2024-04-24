import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

export const modalWindowSlice = createSlice({
    name: 'modalWindow',
    initialState: {
        value: false
    },
    reducers: {
        changeModalWindowStatus: (state, action: PayloadAction<boolean>) => {
            state.value = action.payload;
        },
    }
});

export const { changeModalWindowStatus } = modalWindowSlice.actions;
export default modalWindowSlice.reducer;