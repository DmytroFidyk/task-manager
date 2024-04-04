import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

export interface Task {
    id: string,
    description: string,
};

export interface TaskListState {
    value: Task[],
};

const initialState: TaskListState = {
    value: [],
};

export const taskListSlice = createSlice({
    name: 'taskList',
    initialState,
    reducers: {
        addNewTask: (state, action: PayloadAction<Task>) => {
            state.value.push(action.payload);
        },

        deleteTask: (state, action: PayloadAction<Task>) => {
            state.value = state.value.filter((item) => {
                return item.id !== action.payload.id;
            });
        },
    }
});

export const { addNewTask, deleteTask } = taskListSlice.actions;
export default taskListSlice.reducer;