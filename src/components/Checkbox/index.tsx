import styles from './checkbox.module.css';

const Checkbox = (props: { task: string}) => {
    return (
        <div>
            <input className={styles.checkbox} type="checkbox" id="checkbox"/>
            <label className={styles.label} htmlFor="checkbox">{props.task}</label>
        </div>
    );
}

export default Checkbox;