import styles from './button.module.css';

const Button = (props: { buttonText: string, onClickHandler: (value: boolean) => void}) => {
    return (
        <button className={styles.button} onClick={() => { props.onClickHandler(true) }}>
            { props.buttonText }
        </button>
    );
};

export default Button;