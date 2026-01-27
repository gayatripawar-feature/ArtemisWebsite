import React from 'react';
import styles from './Button.module.css';

const Button = ({ children, variant = 'primary', onClick, className = '', type = 'button', disabled = false }) => {
  const buttonClass = `${styles.button} ${styles[variant]} ${className}`;

  return (
    <button
      type={type}
      className={buttonClass}
      onClick={onClick}
      disabled={disabled}
    >
      <span className={styles.buttonContent}>
        {children}
        <span className={styles.buttonGlow}></span>
      </span>
    </button>
  );
};

export default Button;