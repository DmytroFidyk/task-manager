'use client';

import styles from './page.module.css';

import { useEffect, useState } from 'react';

import { useAppSelector } from '../lib/hooks';
import { RootState } from '../lib/store';

import ModalWindow from '../components/ModalWindow';
import Header from '../components/Header';
import Task from '../components/Task';
import Button from '../components/Button';

export default function Home() {
  const taskList = useAppSelector((state: RootState) => state.taskList.value);

  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(taskList));
  }, [taskList]);

  return (
    <div className={styles.container}>
      <ModalWindow />
      <Header/>
      <main className={styles.main}>
        <div className={styles.list}>
          <h2 className={styles.heading}>Список завдань</h2>      
            {taskList.length > 0 ? taskList.map(task => <Task key={task.id} task={task}/>) : <div className={styles.message_text}>Немає завдань</div>}
        </div>
        <Button buttonText={'Додати завдання'}/>
      </main>
    </div> 
  );
};