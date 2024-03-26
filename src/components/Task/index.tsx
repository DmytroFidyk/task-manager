import styles from './task.module.css';

const Task = ({ task }: { task: string}) => {
    return (
        <div className={styles.container}>
            <div className={styles.task_container}>
                <input className={styles.checkbox} type='checkbox' name='isDone'/>
                <p>{task}</p>
            </div>
            <div className={styles.remove_button_container}>
                <button>X</button>
            </div>
        </div>
    );
};

export default Task;