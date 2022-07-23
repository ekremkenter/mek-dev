import type { NextPage } from 'next';
import styles from '@/styles/Home.module.scss';
import React from 'react';

const PopupTestPage: NextPage = () => {
  return (
    <div className={styles.container}>
      <main className={styles.main}>Testing popup</main>
    </div>
  );
};

export default PopupTestPage;
