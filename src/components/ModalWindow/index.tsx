import styles from './modal.module.css';
import { RxCross1 } from 'react-icons/rx';
import Form from '../Form';
import { RootState } from '../../lib/store';
import { useAppSelector, useAppDispatch } from '../../lib/hooks';
import { changeModalWindowStatus } from '../../lib/features/modalWindow/modalWindowSlice';

const ModalWindow = () => {
    const modalWindowStatus = useAppSelector((state: RootState) => state.modalWindow.value);
    const dispatch = useAppDispatch();

    return (
        <div className={modalWindowStatus ? styles.modal : styles.modal_closed}>
            <div className={styles.modal_content}>
                <div className={styles.modal_header}>
                    <div className={styles.modal_heading}>
                        <h2>Нове завдання</h2>
                    </div>
                    <button className={styles.close_button} onClick={() => { dispatch(changeModalWindowStatus(false)); } }>
                        <RxCross1/>
                    </button>
                </div>
                
                <Form/>
            </div>
        </div>
    );
};

export default ModalWindow;