import styles from './modal.module.css';

import { RxCross1 } from 'react-icons/rx';

import Form from '../Form';

const ModalWindow = (props: { modalWindowStatus: boolean, onClickHandler: (value: boolean) => void }) => {
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
                
                <Form closeModal={props.onClickHandler}/>
            </div>
        </div>
    );
};

export default ModalWindow;