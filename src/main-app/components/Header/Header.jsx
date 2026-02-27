import React from 'react';
import styles from './Header.module.css';
import logo from '../../assets/images/artemis.png';

const Header = () => {
  return (
    <header className={styles.container}>
      <div className={styles.inner}>
        <div className={styles.logo}>
          <img src={logo} alt="Artemis logo" className={styles.logoImg} />
          <h1 className={styles.logoText}>Artemis Group of Companies</h1>
        </div>

        {/* <nav className={styles.nav} aria-label="Main navigation">
          <a href="/" className={styles.link}>Home</a>
        </nav> */}
      </div>
    </header>
  );
};

export default Header;
