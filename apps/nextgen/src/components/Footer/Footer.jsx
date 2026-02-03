import React from 'react';
import styles from './Footer.module.css';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <p>&copy; 2026 Artemis NextGen. All rights reserved.</p>
      <p className={styles.subtext}>
        Next Generation Solutions Platform
      </p>
    </footer>
  );
};

export default Footer;
