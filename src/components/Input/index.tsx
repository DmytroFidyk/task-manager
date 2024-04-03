import styles from './input.module.css';

const Input = ({ onChangeHandler }: { onChangeHandler: (value: string) => void}) => {
    return (
        <input
            className={styles.input}
            type='text' 
            name='task' 
            placeholder='Введіть завдання' 
            onChange={(e) => {
                onChangeHandler(e.target.value);
            }}
        />
    );
};

export default Input;