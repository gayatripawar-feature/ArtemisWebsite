import React, { useState } from 'react';
import styles from './Footer.module.css';
import logo from '../../assets/images/artemis.png';

const Footer = () => {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setEmail('');
      setTimeout(() => setSubscribed(false), 3000);
    }
  };

  return (
    <footer className={styles.footer}>
      <div className={styles.mainContent}>
        <div className={styles.logoSection}>
          <div className={styles.logoRow}>
            <img src={logo} alt="Artemis logo" className={styles.footerLogo} />
            <h3 className={styles.logoText}>Artemis</h3>
          </div>
          <p className={styles.brandStatement}>
            Transforming enterprises through strategic consulting and next-generation innovation. Your vision, our expertise.
          </p>
        </div>

        <div className={styles.newsletterSection}>
          <h4 className={styles.sectionTitle}>Stay Updated</h4>
          <p style={{ fontSize: '13px', color: 'rgba(255, 255, 255, 0.6)', margin: 0, fontWeight: 300 }}>
            Subscribe to our insights and industry trends
          </p>
          <form className={styles.newsletterForm} onSubmit={handleSubscribe}>
            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className={styles.input}
              required
            />
            <button type="submit" className={styles.subscribeButton}>
              Subscribe
            </button>
            {subscribed && <p className={styles.successMessage}>✓ Thank you for subscribing!</p>}
          </form>
        </div>

        <div className={styles.divider} />
      </div>

      <div className={styles.copyrightSection}>
        <p className={styles.copyrightText}>© 2026 Artemis Consultants. All rights reserved.</p>
        <div className={styles.socialLinks}>
          <a href="#" className={styles.socialLink}>Privacy</a>
          <a href="#" className={styles.socialLink}>Terms</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
