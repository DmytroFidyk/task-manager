import { configureStore } from '@reduxjs/toolkit';
import taskListReducer from '../lib/features/taskList/taskListSlice';

export const makeStore = () => {
    return configureStore({
        reducer: { 
            taskList: taskListReducer
        },
    });
};

export type AppStore = ReturnType<typeof makeStore>;
export type RootState = ReturnType<AppStore['getState']>
export type AppDispatch = AppStore['dispatch'];