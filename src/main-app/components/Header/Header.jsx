import React from "react";
import styles from "./Header.module.css";
import logo from "../../assets/images/artemis.png";

const Header = () => {
  const handleGetInTouch = () => {
    window.location.href = "/consultancy/contact";
  };

  return (
    <header className={styles.container}>
      <div className={styles.inner}>
        <div className={styles.logo}>
          <img src={logo} alt="Artemis logo" className={styles.logoImg} />
          <h1 className={styles.logoText}>Artemis Group of Companies</h1>
        </div>

        <div className={styles.ctaSection}>
          <button className={styles.ctaPrimary} onClick={handleGetInTouch}>
            Get in Touch
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
              <path
                d="M1 7H13M13 7L7 1M13 7L7 13"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
