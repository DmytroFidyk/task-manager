import styles from './page.module.css';
import Header from '../components/Header';
import Task from '../components/Task';

export default function Home() {
  return (
    <>
      <Header/>
      <main className={styles.main}>
        <div className={styles.list}>
          <h2 className={styles.heading}>Список завдань</h2>
          <Task task='Витерти пил'/>
          <Task task='Пропилососити'/>
          <Task task='Доробити проєкт'/>
        </div>
      </main>
    </>
  );
}
