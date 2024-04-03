import styles from './add.module.css';

const AddButton = ({ text, addNewTask }: { text: string, addNewTask: (value: boolean) => void}) => {
    return (
        <button className={styles.add_button} onClick={() => addNewTask(false)}>
            {text}
        </button>
    );
};

export default AddButton;