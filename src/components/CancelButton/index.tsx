import styles from './cancel.module.css';

const CancelButton = ({ text, closeModalWindow }: { text: string, closeModalWindow: (value: boolean) => void}) => {
    return (
        <button className={styles.cancel_button} onClick={() => closeModalWindow(false)}>
            {text}
        </button>
    );
};

export default CancelButton;