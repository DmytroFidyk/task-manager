import styles from './form.module.css';
import { FormEvent, useState } from 'react';
import { addNewTask } from '../../lib/features/taskList/taskListSlice';
import { useAppDispatch } from '../../lib/hooks';
import { v4 as uuid } from 'uuid';

const Form = (props: {closeModal: (value: boolean) => void}) => {
    const [inputedValue, setInputedValue] = useState('');
    console.log(inputedValue);

    const dispatch = useAppDispatch();

    const onSubmitHandler = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
    };

    return (
        <form onSubmit={onSubmitHandler}>
            <input
                type='text'
                className={styles.input}
                value={inputedValue} 
                placeholder='Введіть завдання' 
                onChange={(e) => {
                    setInputedValue(e.target.value);
                }}/>
            
            <div className={styles.buttons_container}>
                <button className={styles.add_button} onClick={() => {
                    dispatch(addNewTask({id: uuid(), description: inputedValue, isDone: false}));
                    setInputedValue('');
                }}>Додати</button>

                <button className={styles.cancel_button} onClick={() => {props.closeModal(false)}}>Скасувати</button>
            </div>
        </form>
    );
};

export default Form;