import React from 'react';
import styles from './Header.module.css';

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.logoContainer}>
        {/* 仮ロゴ - 後で実際のロゴに置き換え */}
        <div className={styles.logo}>Company Logo</div>
      </div>
      <nav className={styles.nav}>
        <ul className={styles.navList}>
          <li className={styles.navItem}><a href="/">ホーム</a></li>
          <li className={styles.navItem}><a href="/about">会社概要</a></li>
          <li className={styles.navItem}><a href="/services">サービス</a></li>
          <li className={styles.navItem}><a href="/contact">お問い合わせ</a></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
