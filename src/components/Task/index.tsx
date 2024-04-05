import styles from './task.module.css';

import { useState } from 'react';
import { useAppDispatch } from '../../lib/hooks';

import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import { green } from '@mui/material/colors';

import { RxCross1 } from 'react-icons/rx';

import { TaskModel, deleteTask, markAsDone } from '../../lib/features/taskList/taskListSlice';

const Task = ({ task }: { task: TaskModel}) => {
    const [isDone, setIsDone] = useState<boolean>(false);

    const dispatch = useAppDispatch();
    return (
        <div className={styles.container}>
            <div className={isDone ? styles.task_container_line_through : styles.task_container}>
                <FormControlLabel control={
                    <Checkbox 
                        size='medium' 
                        checked={isDone} 
                        onChange={() => {
                            dispatch(markAsDone({...task, isDone: !isDone}));
                            setIsDone(isDone => !isDone);
                        }} 
                        sx={{color: green[500], 
                            '&.Mui-checked': {color: green[500]}, 
                            '& .MuiSvgIcon-root': {fontSize: 28} }
                    }/>
                } label={task.description}/>
            </div>
            <div className={styles.remove_button_container}>
                <button className={styles.remove_button} 
                    onClick={() => dispatch(deleteTask(task))}>
                    <RxCross1/>
                </button>
            </div>
        </div>
    );
};

export default Task;