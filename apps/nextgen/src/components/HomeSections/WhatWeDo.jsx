import React from 'react';
import styles from './WhatWeDo.module.css';


const items = [
  { label: 'Custom Software', icon: '💻' },
  { label: 'ERP & Enterprise Systems', icon: '🏢' },
  { label: 'Website & Web Apps', icon: '🌐' },
  { label: 'Mobile Applications', icon: '📱' },
  { label: 'Cloud & Automation', icon: '☁️' },
];

const WhatWeDo = () => (
  <div className={styles.whatWeDoContainer}>
      <section className={styles.whatWeDoSection}>
        <span className={styles.sectionLabel}>What We Do</span>

        <h2 className={styles.sectionTitle}>
           Powering Your Digital Future
          <span className={styles.sectionTitleUnderline} />
        </h2>

        <p className={styles.sectionSubtitle}>
          We design, build, and scale digital systems that improve efficiency, visibility, and growth.
        </p>

        <ul className={styles.whatWeDoList}>
          {items.map((item, i) => (
            <li
              key={item.label}
              className={styles.whatWeDoChip}
              style={{ animationDelay: `${i * 120}ms` }}
            >
              <span className={styles.chipIcon}>{item.icon}</span>
              {item.label}
            </li>
          ))}
        </ul>
      </section>
    </div>
);

export default WhatWeDo;
