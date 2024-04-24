import { configureStore } from '@reduxjs/toolkit';
import taskListReducer from '../lib/features/taskList/taskListSlice';
import modalWindowReducer from '../lib/features/modalWindow/modalWindowSlice';

export const makeStore = () => {
    return configureStore({
        reducer: { 
            taskList: taskListReducer,
            modalWindow: modalWindowReducer,
        },
    });
};

export type AppStore = ReturnType<typeof makeStore>;
export type RootState = ReturnType<AppStore['getState']>
export type AppDispatch = AppStore['dispatch'];