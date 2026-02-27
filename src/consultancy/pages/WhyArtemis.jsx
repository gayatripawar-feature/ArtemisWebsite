


import React, { useEffect, useState, useRef } from 'react';
import styles from './WhyArtemis.module.css';
import PageBanner from '../components/PageBanner';
import WhyArtemisBanner from "../assets/images/WhyArtemis/WhyArtemisBanner.jpg";


const features = [
  {
    icon: '🧠',
    title: 'Engineering-Led Decision Making',
    desc: 'Every project is governed by technical evaluation, constructability analysis, and value engineering, not guesswork. This ensures right decisions at the right time, reducing rework and hidden costs.',
    highlight: 'Technical Excellence',
  },
  {
    icon: '💰',
    title: 'Proven Cost Optimization (Up to 18%)',
    desc: 'Through detailed BOQ analysis, specification optimization, and smart construction methodologies, we consistently deliver up to 18% cost savings—without compromising quality, safety, or long-term performance.',
    highlight: 'Guaranteed Savings',
  },
  {
    icon: '⏱️',
    title: 'Before-Time Delivery Focus',
    desc: 'Our planning systems, milestone controls, and fast-track execution strategies are designed to recover lost time and compress schedules, enabling before-committed delivery, not just on-time completion.',
    highlight: 'Speed & Efficiency',
  },
  {
    icon: '🎯',
    title: 'Single-Point Accountability',
    desc: 'From planning to handover, Artemis acts as a single accountable partner, eliminating coordination gaps between consultants, contractors, and stakeholders—so decisions are faster and outcomes are predictable.',
    highlight: 'Full Ownership',
  },
  {
    icon: '📊',
    title: 'Digital Transparency & Real-Time Control',
    desc: 'Clients get live project visibility through dashboards, progress reports, and photographic documentation—ensuring no surprises, no blind spots, and full confidence throughout execution.',
    highlight: 'Complete Visibility',
  },
];

function useScrollAnimation(threshold = 0.2) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [threshold]);

  return [ref, visible];
}

export default function WhyArtemis() {
  const [featuresRef, featuresVisible] = useScrollAnimation(0.1);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const breadcrumbs = [
    { label: 'Home' },
    { label: 'Why Artemis' },
  ];

  return (
    <div className={styles.page}>
      <PageBanner
        title="Why Choose Artemis Consultancy?"
        breadcrumbs={breadcrumbs}
        bgImage={WhyArtemisBanner}
      />

      {/* Intro Section */}
      <section className={styles.introSection}>
        <div className={styles.container}>
          <div className={styles.introContent}>
            <span className={styles.introLabel}>Our Promise</span>
            <h2 className={styles.introTitle}>
              Engineering-Led Consulting.<br />
              <span className={styles.highlight}>Execution Certainty.</span><br />
              Measurable Results.
            </h2>
            <p className={styles.introText}>
              At Artemis Infratech Consultancy, we don't rely on assumptions or generic project management.
              Every decision is driven by engineering logic, data-backed planning, and on-ground execution
              control—ensuring your project performs exactly as committed.
            </p>
            <div className={styles.introDecor}></div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className={styles.featuresSection}>
        <div className={styles.container}>
          <div className={styles.sectionHeader}>
            <span className={styles.sectionLabel}>Our Edge</span>
            <h2 className={styles.sectionTitle}>What Truly Sets Us Apart</h2>
            <div className={styles.titleUnderline}></div>
          </div>

          <div ref={featuresRef} className={`${styles.featuresGrid} ${featuresVisible ? styles.animateIn : ''}`}>
            {features.map((feature, index) => (
              <div
                key={feature.title}
                className={styles.featureCard}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className={styles.cardBadge}>{feature.highlight}</div>
                <div className={styles.featureIconWrapper}>
                  <div className={styles.featureIcon}>{feature.icon}</div>
                </div>
                <h3 className={styles.featureTitle}>{feature.title}</h3>
                <p className={styles.featureDesc}>{feature.desc}</p>
                <div className={styles.cardGlow}></div>
              </div>
            ))}
          </div>
        </div>
        <div className={styles.floatingShape1}></div>
        <div className={styles.floatingShape2}></div>
      </section>
    </div>
  );
}

