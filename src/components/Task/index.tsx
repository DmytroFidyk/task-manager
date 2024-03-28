import styles from './task.module.css';
import Checkbox from '../Checkbox';
import { RxCross1 } from 'react-icons/rx';

const Task = ({ task }: { task: string}) => {
    return (
        <div className={styles.container}>
            <div className={styles.task_container}>
                <Checkbox task={task}/>
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