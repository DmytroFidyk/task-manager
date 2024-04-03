'use client';

import styles from './page.module.css';

import { useAppSelector } from '../lib/hooks';


import Header from '../components/Header';
import Task from '../components/Task';
import { RootState } from '../lib/store';
import Button from '../components/Button';
import Modal from '../components/Modal';
import { v4 as uuidv4 } from 'uuid';
import { useState } from 'react';

export default function Home() {
  const [modalStatus, setModalStatus] = useState(false);

  const taskList = useAppSelector((state: RootState) => state.taskList.value);

  const openModalWindow = (value: boolean) => {
      setModalStatus(value);
  };

  return (
    <div className={styles.container}>
      <Modal modalWindowStatus={modalStatus} onClickHandler={openModalWindow}/>
      <Header/>
      <main className={styles.main}>
        <div className={styles.list}>
            <h2 className={styles.heading}>Список завдань</h2>
            {taskList.map(task => <Task key={uuidv4()} task={task}/>)}
        </div>
        <Button buttonText={'Додати завдання'} onClickHandler={openModalWindow}/>
      </main>
    </div> 
  );
};
