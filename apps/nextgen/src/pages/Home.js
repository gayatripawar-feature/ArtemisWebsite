import React, { useEffect, useRef, useState } from 'react';
import { SoftwareIcon, ErpIcon, WebIcon, MobileIcon, CloudIcon } from '../assets/icons/WhatWeDoIcons';
import styles from './Home.module.css';
import Button from '../components/Button/Button';
import heroJpg from '../assets/images/hero.jpg';
import heroSvg from '../assets/images/hero-photo.svg';



// Typed phrases for the headline (will stop after one full cycle)
const typedPhrases = [
  'Building Intelligent Digital Solutions for Modern Businesses',

];

// Services data
const services = [
	{ title: 'Custom Software Development', desc: 'Tailored software solutions designed for your unique business needs', icon: '💻' },
	{ title: 'Enterprise Systems & ERP', desc: 'Scalable enterprise solutions for complex operations', icon: '🏢' },
	{ title: 'Web Applications', desc: 'Modern, responsive web apps for enhanced user experience', icon: '🌐' },
	{ title: 'Mobile Applications', desc: 'Native and cross-platform mobile solutions', icon: '📱' },
	{ title: 'Cloud & Infrastructure', desc: 'Cloud migration and infrastructure automation', icon: '☁️' },
	{ title: 'Digital Transformation', desc: 'End-to-end digital modernization and automation', icon: '⚡' },
];


const Home = () => {
  const heroRef = useRef(null);
  const midRef = useRef(null);
  const [servicesVisible, setServicesVisible] = useState(false);
  const servicesRef = useRef(null);


  const [typedText, setTypedText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [phraseIndex, setPhraseIndex] = useState(0);
  const [cycleDone, setCycleDone] = useState(false);

  // Respect user reduced-motion setting
  const [reduceMotion, setReduceMotion] = useState(false);
  useEffect(() => {
    if (typeof window === 'undefined' || !window.matchMedia) return;
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)');
    setReduceMotion(mq.matches);
    const handler = (e) => setReduceMotion(e.matches);
    if (mq.addEventListener) mq.addEventListener('change', handler);
    else mq.addListener(handler);
    return () => {
      if (mq.removeEventListener) mq.removeEventListener('change', handler);
      else mq.removeListener(handler);
    };
  }, []);

  useEffect(() => {
    let timeout;
    const currentPhrase = typedPhrases[phraseIndex];

    if (reduceMotion) {
      setTypedText(typedPhrases[0]);
      setCycleDone(true);
      return;
    }

    if (cycleDone) {
      // stop typing further once the full cycle completed
      return;
    }

    if (!isDeleting && typedText === currentPhrase) {
      // If this is the last phrase, stop after a pause
      if (phraseIndex === typedPhrases.length - 1) {
        timeout = setTimeout(() => setCycleDone(true), 1200);
      } else {
        // Pause then delete to move to next phrase
        timeout = setTimeout(() => setIsDeleting(true), 1200);
      }
    } else if (isDeleting && typedText === '') {
      // Move to next phrase (no wrap if finishing cycle)
      setIsDeleting(false);
      setPhraseIndex((i) => i + 1);
    } else {
      timeout = setTimeout(() => {
        setTypedText((prev) =>
          isDeleting ? currentPhrase.substring(0, prev.length - 1) : currentPhrase.substring(0, prev.length + 1)
        );
      }, isDeleting ? 50 : 90);
    }

    return () => clearTimeout(timeout);
  }, [typedText, isDeleting, phraseIndex, cycleDone, reduceMotion]);

  useEffect(() => {
    // Combined parallax: scroll-driven + desktop mouse-driven with inertial smoothing
    const el = heroRef.current;
    const mid = midRef.current;
    if (!el && !mid) return;

    const scrollOffset = { y: 0 };
    const scrollScale = { s: 1 };

    const mouseTarget = { x: 0, y: 0 };
    const mouseCurrent = { x: 0, y: 0 };

    const onScroll = () => {
      const scrolled = window.scrollY;
      scrollOffset.y = Math.min(scrolled * 0.12, 40);
      scrollScale.s = 1 + Math.min(scrolled * 0.0005, 0.02);
    };

    const handleMove = (e) => {
      // only apply on wider screens (desktop feel)
      if (window.innerWidth <= 900) return;
      // Defensive: el may not be set yet in some render cycles
      if (!el) return;
      const rect = el.getBoundingClientRect();
      if (!rect || rect.width === 0) return;
      const nx = (e.clientX - (rect.left + rect.width / 2)) / rect.width; // -0.5 .. 0.5
      const ny = (e.clientY - (rect.top + rect.height / 2)) / rect.height;
      mouseTarget.x = nx;
      mouseTarget.y = ny;
    };

    const handleLeave = () => {
      mouseTarget.x = 0;
      mouseTarget.y = 0;
    };

    let rafId = 0;
    const animate = () => {
      // lerp mouse values for smooth inertial motion
      mouseCurrent.x += (mouseTarget.x - mouseCurrent.x) * 0.08;
      mouseCurrent.y += (mouseTarget.y - mouseCurrent.y) * 0.08;

      const hx = mouseCurrent.x * (reduceMotion ? 8 : 22); // horizontal px shift for foreground
      const hy = mouseCurrent.y * (reduceMotion ? 6 : 18); // vertical px shift for foreground
      const mx = mouseCurrent.x * (reduceMotion ? 4 : 12); // mid layer smaller shift
      const my = mouseCurrent.y * (reduceMotion ? 3 : 10);

      const sY = scrollOffset.y;
      const sScale = scrollScale.s;

      if (el) el.style.transform = `translateX(${hx}px) translateY(${sY + hy}px) scale(${sScale})`;
      if (mid) mid.style.transform = `translateX(${mx}px) translateY(${sY * 0.6 + my}px) scale(${1 + (sScale - 1) * 0.6})`;

      rafId = requestAnimationFrame(animate);
    };

    // initialise and start
    onScroll();
    animate();

    window.addEventListener('scroll', onScroll, { passive: true });
    if (!reduceMotion) {
      window.addEventListener('mousemove', handleMove);
      window.addEventListener('mouseleave', handleLeave);
    }

    return () => {
      window.removeEventListener('scroll', onScroll);
      if (!reduceMotion) {
        window.removeEventListener('mousemove', handleMove);
        window.removeEventListener('mouseleave', handleLeave);
      }
      cancelAnimationFrame(rafId);
    };
  }, [reduceMotion]);

  // Services scroll animation
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setServicesVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1 }
    );
    if (servicesRef.current) observer.observe(servicesRef.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);




  return (
    <>
      <section className={styles.hero}>
        <div
          className={styles.heroMidLayer}
          ref={midRef}
          style={{ backgroundImage: `url(${heroSvg})`, backgroundSize: 'cover' }}
          aria-hidden="true"
        />

        <div
          className={styles.heroBackground}
          ref={heroRef}
          style={{ backgroundImage: `url(${heroJpg}), url(${heroSvg})`, backgroundSize: 'cover, cover' }}
          aria-hidden="true"
        />
        <div className={styles.heroOverlay} />

        <div className={styles.heroContent}>
            <div className={styles.heroInner}>
            {/* <div className={styles.eyebrow}>NextGen</div> */}

          <h1 className={styles.title}>
            <span className={styles.headlineText}>
              <span className={styles.typedText}>{typedText || typedPhrases[0]}</span>
              <span className={styles.caret} aria-hidden="true" />
            </span>
          </h1>

          <p className={styles.subtitle}>
            NextGen is a technology-driven IT company delivering scalable software, modern websites, and enterprise-grade digital solutions for businesses ready to grow, automate, and innovate. We help organizations transform ideas into high-impact digital products using the right blend of technology, design, and business understanding.
          </p>

          <div className={styles.heroCta}>

            <Button variant="ghost" aria-label="Explore services" onClick={() => window.location.href = '/services'} className={styles.ctaGhost}>
              Explore Services
            </Button>
          </div>



          </div>


        </div>

      </section>

      {/* What We Do Container */}
      <div className={styles.whatWeDoContainer}>
        <div className={styles.homeContainer}>
          <section className={styles.whatWeDoSection}>
            <h2 className={styles.whatWeDoTitle}>🚀 What We Do</h2>
            <p className={styles.whatWeDoDescription}>
              We design, build, and scale digital systems that improve efficiency, visibility, and growth.
            </p>
            <ul className={styles.whatWeDoList}>
              <li className={styles.fadeIn} style={{ animationDelay: '0ms' }}><span className={styles.icon}><SoftwareIcon /></span>Custom Software</li>
              <li className={styles.fadeIn} style={{ animationDelay: '120ms' }}><span className={styles.icon}><ErpIcon /></span>ERP &amp; Enterprise Systems</li>
              <li className={styles.fadeIn} style={{ animationDelay: '240ms' }}><span className={styles.icon}><WebIcon /></span>Website &amp; Web Apps</li>
              <li className={styles.fadeIn} style={{ animationDelay: '360ms' }}><span className={styles.icon}><MobileIcon /></span>Mobile Applications</li>
              <li className={styles.fadeIn} style={{ animationDelay: '480ms' }}><span className={styles.icon}><CloudIcon /></span>Cloud &amp; Automation</li>
            </ul>
          </section>
        </div>
      </div>

      {/* Services Section */}
      <section id="services" className={styles.services} ref={servicesRef}>
        <div className={styles.servicesBackground}>
          <div className={styles.servicesGradient}></div>
          <div className={styles.servicesPattern}></div>
        </div>
        <div className={styles.container}>
          <div className={`${styles.servicesContent} ${servicesVisible ? styles.animateIn : ''}`}>
            <div className={styles.sectionHeader}>
              <h2 className={styles.sectionTitle}>Our Services</h2>
              <p className={styles.sectionSubtitle}>
                From concept to completion, we provide end-to-end solutions for your digital transformation
              </p>
            </div>

            <div className={styles.servicesGrid}>
              {services.map((service, index) => (
                <div key={service.title} className={`${styles.serviceCard} ${servicesVisible ? styles.animateIn : ''}`} style={{ animationDelay: `${index * 0.1}s` }}>
                  <div className={styles.serviceIcon}>
                    <span>{service.icon}</span>
                  </div>
                  <div className={styles.serviceContent}>
                    <h3>{service.title}</h3>
                    <p>{service.desc}</p>
                  </div>
                  <div className={styles.serviceGlow}></div>
                </div>
              ))}
            </div>

            <div className={styles.servicesCta}>
              <Button variant="primary" onClick={() => window.location.href = '/services'} className={styles.servicesButton}>
                View All Services
              </Button>
            </div>
          </div>
        </div>
      </section>

    </>
  );
};

export default Home;

