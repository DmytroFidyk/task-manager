import styles from './task.module.css';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import { RxCross1 } from 'react-icons/rx';
import { useAppDispatch } from '../../lib/hooks';
import { Task, deleteTask } from '../../lib/features/taskList/taskListSlice';

const Task = ({ task }: { task: Task}) => {
    const dispatch = useAppDispatch();
    return (
        <div className={styles.container}>
            <div className={styles.task_container}>
                <FormControlLabel control={<Checkbox size='medium' color='success'/>} label={task.description} />
            </div>
            <div className={styles.remove_button_container}>
                <button className={styles.remove_button} onClick={() => dispatch(deleteTask(task))}>
                    <RxCross1/>
                </button>
            </div>
        </div>
    );
};

export default Task;