import styles from './button.module.css';
import { useAppDispatch } from '../../lib/hooks';
import { changeModalWindowStatus } from '../../lib/features/modalWindow/modalWindowSlice';

const Button = (props: { buttonText: string }) => {
    const dispatch = useAppDispatch();
    return (
        <button className={styles.button} onClick={() => { dispatch(changeModalWindowStatus(true)); }}>
            { props.buttonText }
        </button>
    );
};

export default Button;