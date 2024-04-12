import { TaskModel } from '@/Models/TaskModel';
import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

export interface TaskListState {
    value: TaskModel[],
};

let initialValue: TaskModel[] = [];

if (typeof window !== 'undefined') {
    const tasks: any = localStorage.getItem('tasks');
    if (tasks !== null)
        initialValue = JSON.parse(tasks);
}

const initialState: TaskListState = {
    value: initialValue,
};

export const taskListSlice = createSlice({
    name: 'taskList',
    initialState,
    reducers: {
        addNewTask: (state, action: PayloadAction<TaskModel>) => {
            console.log(action.payload);
            state.value.push(action.payload);
        },

        deleteTask: (state, action: PayloadAction<TaskModel>) => {
            state.value = state.value.filter((item) => {
                return item.id !== action.payload.id;
            });
        },

        markAsDone: (state, action: PayloadAction<TaskModel>) => {
            state.value = state.value.map(item => {
                if (item.id === action.payload.id) {
                    item.isDone = action.payload.isDone;
                }

                return item;
            });
        }, 
    }
});

export const { addNewTask, deleteTask, markAsDone } = taskListSlice.actions;
export default taskListSlice.reducer;