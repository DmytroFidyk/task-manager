import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

export interface TaskListState {
    value: string[],
};

const initialState: TaskListState = {
    value: [],
};

export const taskListSlice = createSlice({
    name: 'taskList',
    initialState,
    reducers: {
        addNewTask: (state, action: PayloadAction<string>) => {
            state.value.push(action.payload);
        },
    }
});

export const { addNewTask } = taskListSlice.actions;
export default taskListSlice.reducer;