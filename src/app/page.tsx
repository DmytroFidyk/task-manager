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
  const [modalStatus, setModalStatus] = useState(false);

  const taskList = useAppSelector((state: RootState) => state.taskList.value);

  const openModalWindow = (value: boolean) => {
      setModalStatus(value);
  };

  useEffect(() => {
    console.log('Save to local');
    localStorage.setItem('tasks', JSON.stringify(taskList));
  }, [taskList]);

  return (
    <div className={styles.container}>
      <ModalWindow 
        modalWindowStatus={modalStatus} 
        onClickHandler={openModalWindow}
      />
      <Header/>
      <main className={styles.main}>
        <div className={styles.list}>
            <h2 className={styles.heading}>Список завдань</h2>
            {taskList.length > 0 ? taskList.map(task => <Task key={task.id} task={task}/>) : <div>Немає завдань</div>}
        </div>
        <Button 
          buttonText={'Додати завдання'} 
          onClickHandler={openModalWindow}
        />
      </main>
    </div> 
  );
};
