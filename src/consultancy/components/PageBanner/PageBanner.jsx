




import React from 'react';
import styles from './PageBanner.module.css';

const PageBanner = ({ title, breadcrumbs = [], bgImage = '' }) => {
  return (
    <section
      className={styles.banner}
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      <div className={styles.overlay}></div>
      <div className={styles.content}>
        <h1 className={styles.title}>{title}</h1>
      </div>
      <div className={styles.decorative}>
        <div className={styles.dots}>
          <span className={styles.dot}></span>
          <span className={styles.dot}></span>
          <span className={styles.dot}></span>
        </div>
        <div className={styles.arrow}></div>
      </div>
    </section>
  );
};

export default PageBanner;
