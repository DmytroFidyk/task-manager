import styles from './form.module.css';
import { FormEvent, useState } from 'react';
import { addNewTask } from '../../lib/features/taskList/taskListSlice';
import { useAppDispatch } from '../../lib/hooks';
import { v4 as uuid } from 'uuid';
import Alert from '@mui/material/Alert';

const Form = (props: {closeModal: (value: boolean) => void}) => {
    const [inputedValue, setInputedValue] = useState('');
    const [error, setError] = useState(false);

    const dispatch = useAppDispatch();

    const onSubmitHandler = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
    };
    const inputMaxLength: number = 50;

    return (
        <form onSubmit={onSubmitHandler}>
            {error && <Alert severity="error">Заповніть поле</Alert>}
            <input
                type='text'
                className={styles.input}
                value={inputedValue} 
                placeholder='Введіть завдання'
                maxLength={inputMaxLength}
                onChange={(e) => {
                    setInputedValue(e.target.value);
                }}/>

            <div className={styles.symbols_count}>Кількість символів: {inputedValue.length}/{inputMaxLength}</div>

            <div className={styles.buttons_container}>
                <button className={styles.add_button} onClick={() => {
                    const description = inputedValue.trim();
                    
                    if (description !== '') {
                        dispatch(addNewTask({id: uuid(), description: description, isDone: false}));
                        setInputedValue('');
                        setError(false);
                    } else {
                        setInputedValue('');
                        setError(true);
                    }
                }}>Додати</button>

                <button className={styles.cancel_button} onClick={() => {
                        props.closeModal(false);
                        setError(false);
                    }
                }>Скасувати</button>
            </div>
        </form>
    );
};

export default Form;