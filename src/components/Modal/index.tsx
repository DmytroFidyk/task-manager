import styles from './modal.module.css';
import Input from '../Input';
import { addNewTask } from '../../lib/features/taskList/taskListSlice';
import { useAppDispatch } from '../../lib/hooks';
import { useState } from 'react';
import { RxCross1 } from 'react-icons/rx';
import AddButton from '../AddButton';
import CancelButton from '../CancelButton';

const Modal = (props: { modalWindowStatus: boolean, onClickHandler: (value: boolean) => void }) => {
    const [newTask, setNewTask] = useState('');

    const dispatch = useAppDispatch();

    function onChangeHandler (value: string) {
        setNewTask(value);
    };

    return (
        <div className={props.modalWindowStatus ? styles.modal : styles.modal_closed}>
            <div className={styles.modal_content}>
                <div className={styles.modal_header}>
                    <div className={styles.modal_heading}>
                        <h2>Нове завдання</h2>
                    </div>
                    <button className={styles.close_button} onClick={() => { props.onClickHandler(false)} }>
                        <RxCross1/>
                    </button>
                </div>
                
                <Input onChangeHandler={onChangeHandler}/>
                <div className={styles.buttons_container}>
                    <AddButton text={'Додати'} addNewTask={() => dispatch(addNewTask(newTask))}/>
                    <CancelButton text={'Скасувати'} closeModalWindow={() => props.onClickHandler(false)}/>
                </div>
                
            </div>
        </div>
    );
};

export default Modal;