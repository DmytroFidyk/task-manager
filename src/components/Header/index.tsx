import styles from './header.module.css';

const Header = () => {
    return (
        <header className={styles.header}>
            <div className={styles.title}>
                <h1>Taskman</h1>
            </div>
        </header>
    );
}

export default Header;