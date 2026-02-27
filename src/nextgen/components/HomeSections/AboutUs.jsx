import React, { useEffect, useRef, useState } from 'react';
import styles from './AboutUs.module.css';

const aboutApproach = [
  'Understand your business deeply',
  'Design scalable solutions',
  'Build clean and secure systems',
  'Support you long after delivery',
];

const AboutUs = () => {
  const [visible, setVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisible(true);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    if (ref.current) observer.observe(ref.current);

    return () => observer.disconnect();
  }, []);

  return (
    <section className={styles.aboutSection} ref={ref}>
        <div className={styles.sectionHeader}>
          <span className={styles.sectionLabel}>About Us</span>
          <h2 className={styles.sectionTitle}>
            Who We Are
            <span className={styles.sectionTitleUnderline}></span>
          </h2>
        </div>

        <div className={styles.aboutGrid}>
          <div className={visible ? styles.aboutContent : undefined} style={!visible ? { opacity: 0 } : undefined}>
            <p className={styles.aboutText}>
              NextGen was founded with a clear purpose:
              to create practical, reliable, and future-ready technology for real-world businesses.
            </p>

            <p className={styles.aboutText}>
              We believe technology should{' '}
              <span className={styles.aboutHighlight}>simplify operations, not complicate them.</span>
              {' '}Our approach is simple and proven:
            </p>

            <ul className={styles.aboutApproach}>
              {aboutApproach.map((step, i) => (
                <li className={styles.approachItem} key={i}>
                  <span className={styles.approachNumber}>{i + 1}</span>
                  <span className={styles.approachText}>{step}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className={visible ? styles.aboutVisual : undefined} style={!visible ? { opacity: 0 } : undefined}>
            <div className={styles.aboutCard3d}>
              <h3 className={styles.aboutCardTitle}>Our Mission</h3>

              <p className={styles.aboutCardText}>
                To empower businesses with intelligent, scalable digital solutions that drive real results
                and lasting competitive advantage.
              </p>

              <div className={styles.aboutStats}>
                <div className={styles.statItem}>
                  <div className={styles.statNumber}>50+</div>
                  <div className={styles.statLabel}>Projects</div>
                </div>

                <div className={styles.statItem}>
                  <div className={styles.statNumber}>99%</div>
                  <div className={styles.statLabel}>Satisfaction</div>
                </div>

                <div className={styles.statItem}>
                  <div className={styles.statNumber}>24/7</div>
                  <div className={styles.statLabel}>Support</div>
                </div>
              </div>
            </div>
          </div>
        </div>
    </section>
  );
};

export default AboutUs;
