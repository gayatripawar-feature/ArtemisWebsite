import React, { useEffect, useRef, useState, useCallback } from 'react';
import styles from './ServiceSection.module.css';


const services = [
  { title: 'Custom Software Development', desc: 'Tailored software solutions designed for your unique business needs', icon: '💻' },
  { title: 'Enterprise Systems & ERP', desc: 'Scalable enterprise solutions for complex operations', icon: '🏢' },
  { title: 'Web Applications', desc: 'Modern, responsive web apps for enhanced user experience', icon: '🌐' },
  { title: 'Mobile Applications', desc: 'Native and cross-platform mobile solutions', icon: '📱' },
  { title: 'Cloud & Infrastructure', desc: 'Cloud migration and infrastructure automation', icon: '☁️' },
  { title: 'Digital Transformation', desc: 'End-to-end digital modernization and automation', icon: '⚡' },
];

const ServiceCard = ({ service, index }) => {
  const cardRef = useRef(null);
  const shineRef = useRef(null);

  const handleMouseMove = useCallback((e) => {
    const card = cardRef.current;
    if (!card) return;

    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateX = ((y - centerY) / centerY) * -10;
    const rotateY = ((x - centerX) / centerX) * 10;

    card.style.transform = `perspective(600px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.05, 1.05, 1.05)`;
    card.style.boxShadow = `${-rotateY * 3}px ${rotateX * 3}px 45px rgba(114, 47, 55, 0.16), 0 16px 50px rgba(0,0,0,0.1), inset 0 0 40px rgba(212, 175, 55, 0.03)`;

    if (shineRef.current) {
      const percX = (x / rect.width) * 100;
      const percY = (y / rect.height) * 100;
      shineRef.current.style.setProperty('--mouse-x', `${percX}%`);
      shineRef.current.style.setProperty('--mouse-y', `${percY}%`);
    }

    const iconEl = card.querySelector(`.${styles.serviceIcon}`);
    const contentEl = card.querySelector(`.${styles.serviceContent}`);
    if (iconEl) iconEl.style.transform = `translateZ(60px) translate(${rotateY * 0.8}px, ${-rotateX * 0.8}px) scale(1.1)`;
    if (contentEl) contentEl.style.transform = `translateZ(35px) translate(${rotateY * 0.3}px, ${-rotateX * 0.3}px)`;
  }, []);

  const handleMouseLeave = useCallback(() => {
    const card = cardRef.current;
    if (!card) return;
    card.style.transform = 'perspective(600px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)';
    card.style.boxShadow = '';

    const iconEl = card.querySelector(`.${styles.serviceIcon}`);
    const contentEl = card.querySelector(`.${styles.serviceContent}`);
    if (iconEl) iconEl.style.transform = '';
    if (contentEl) contentEl.style.transform = '';
  }, []);

  return (
    <div className={styles.cardWrapper}>
      <div
        ref={cardRef}
        className={styles.serviceCard}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
      >
        <div ref={shineRef} className={styles.cardShine} />
        <div className={styles.cardShadow} />

        <span className={styles.cardNumber}>0{index + 1}</span>

        <div className={styles.serviceIcon}>
          <span>{service.icon}</span>
          <div className={styles.iconRing} />
          <div className={styles.iconPulse} />
        </div>

        <div className={styles.serviceContent}>
          <h3>{service.title}</h3>
          <p>{service.desc}</p>

        </div>

        <div className={styles.serviceGlow} />
      </div>
    </div>
  );
};

const ServicesSection = () => {
  const [visible, setVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="services" className={styles.services} ref={sectionRef}>
   

      <div className={`${styles.servicesContent} ${visible ? styles.animateIn : ''}`}>
        <div className={styles.sectionHeader}>
          <span className={styles.sectionLabel}>What We Offer</span>
          <h2 className={styles.sectionTitle}>
            Our Services
            <span className={styles.sectionTitleUnderline} />
          </h2>

        </div>

        <div className={styles.servicesGrid}>
          {services.map((service, index) => (
            <ServiceCard key={service.title} service={service} index={index} />
          ))}
        </div>

        <div className={styles.servicesCta}>
          <button className={styles.servicesButton}>
            <span>View All Services</span>
            <span className={styles.btnArrow}>→</span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
