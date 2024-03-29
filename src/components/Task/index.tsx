import styles from './task.module.css';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import { RxCross1 } from 'react-icons/rx';

const label = { inputProps: { 'aria-label': 'Checkbox demo' } };

const Task = ({ id, task }: { id: number, task: string}) => {
    return (
        <div className={styles.container}>
            <div className={styles.task_container}>
                <FormControlLabel control={<Checkbox defaultChecked size='medium' color='success'/>} label={task} />
            </div>
            <div className={styles.remove_button_container}>
                <button className={styles.remove_button}>
                    <RxCross1/>
                </button>
            </div>
        </div>
    );
};

export default Task;