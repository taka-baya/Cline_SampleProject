import React from 'react';
import Link from 'next/link';
import styles from './page.module.css';

const HomePage = () => {
  return (
    <div className={styles.hero}>
      <div className={styles.heroContent}>
        <h1>革新的なソリューションでビジネスを成長させる</h1>
        <p className={styles.subtitle}>私たちはお客様の成功を最優先に考えたサービスを提供します</p>
        <div className={styles.ctaButtons}>
          <Link href="/services" className={styles.primaryButton}>
            サービスを見る
          </Link>
          <Link href="/contact" className={styles.secondaryButton}>
            お問い合わせ
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
