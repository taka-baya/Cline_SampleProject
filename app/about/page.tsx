import React from 'react';
import styles from './page.module.css';

const AboutPage = () => {
  return (
    <div className={styles.container}>
      <h1>会社概要</h1>
      <section className={styles.section}>
        <h2>企業理念</h2>
        <p>私たちはお客様の成功を通じて社会に貢献します</p>
      </section>
      <section className={styles.section}>
        <h2>沿革</h2>
        <ul className={styles.historyList}>
          <li>2010年 - 会社設立</li>
          <li>2015年 - 本社移転</li>
          <li>2020年 - 海外進出</li>
        </ul>
      </section>
      <section className={styles.section}>
        <h2>アクセス</h2>
        <p>東京都千代田区〇〇1-2-3</p>
      </section>
    </div>
  );
};

export default AboutPage;
