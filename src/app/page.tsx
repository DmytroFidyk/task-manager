'use client';

import { useRef } from 'react';
import { useAppDispatch, useAppSelector, useAppStore } from '../lib/hooks';
import { addNewTask } from '../lib/features/taskList/taskListSlice';
import styles from './page.module.css';
import Header from '../components/Header';
import Task from '../components/Task';
import { RootState } from '../lib/store';


export default function Home() {
  const store = useAppStore();
  const taskList = useAppSelector((state: RootState) => state.taskList.value);
  const dispatch = useAppDispatch();

  return (
    <>
      <Header/>
      <main className={styles.main}>
        <div className={styles.list}>
            <h2 className={styles.heading}>Список завдань</h2>
            {taskList.map(task => <Task task={task}/>)}
        </div>
        <button onClick={() => dispatch(addNewTask('Заправити авто'))}>Додати</button>
      </main>
    </> 
  );
}
