

import React, { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import heroImage from "../assets/images/ServicePage/services-hero.jpg";
import PageBanner from "../components/PageBanner";
import styles from "./About.module.css";

/* ─── Scroll-reveal hook ─── */
function useReveal(threshold = 0.15) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) { setVisible(true); obs.unobserve(el); } },
      { threshold }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [threshold]);
  return [ref, visible];
}

/* ─── Animated counter ─── */
function AnimatedCounter({ end, suffix = "", duration = 2000 }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const started = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(([e]) => {
      if (e.isIntersecting && !started.current) {
        started.current = true;
        const start = performance.now();
        const tick = (now) => {
          const progress = Math.min((now - start) / duration, 1);
          const eased = 1 - Math.pow(1 - progress, 3);
          setCount(Math.floor(eased * end));
          if (progress < 1) requestAnimationFrame(tick);
        };
        requestAnimationFrame(tick);
      }
    }, { threshold: 0.5 });
    obs.observe(el);
    return () => obs.disconnect();
  }, [end, duration]);

  return <span ref={ref}>{count}{suffix}</span>;
}

/* ─── Data ─── */
const stats = [
  { value: 10, suffix: "+", label: "Projects Delivered" },
  { value: 10, suffix: "+", label: "Happy Clients" },
  { value: 10, suffix: "+", label: "Years Experience" },
  { value: 10, suffix: "+", label: "Team Members" },
];

const values = [
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2L2 7l10 5 10-5-10-5z" /><path d="M2 17l10 5 10-5" /><path d="M2 12l10 5 10-5" />
      </svg>
    ),
    title: "Innovation",
    desc: "We push boundaries with cutting-edge technologies and creative solutions that transform businesses.",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M23 21v-2a4 4 0 0 0-3-3.87" /><path d="M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    ),
    title: "Collaboration",
    desc: "We work as true partners with our clients, ensuring transparency and alignment at every step.",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
      </svg>
    ),
    title: "Excellence",
    desc: "Quality is non-negotiable. Every line of code, every pixel, every interaction is crafted with precision.",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      </svg>
    ),
    title: "Integrity",
    desc: "We believe in honest communication, ethical practices, and building trust that lasts a lifetime.",
  },
];



/* ─── Component ─── */
const About = () => {
  const navigate = useNavigate();
  const [missionRef, missionVisible] = useReveal();
  const [statsRef, statsVisible] = useReveal();
  const [valuesRef, valuesVisible] = useReveal();
  const [ctaRef, ctaVisible] = useReveal();
  useEffect(() => {
      window.scrollTo(0, 0);
    }, []);

  return (
    <div className={styles.aboutPage}>

        <PageBanner
        title="About Us"
        image={heroImage}
        breadcrumbs={[{ label: "About Us" }]}
      />

      {/* ── Mission / Vision ── */}
      <section ref={missionRef} className={`${styles.section} ${styles.sectionAlt} ${missionVisible ? styles.revealed : ""}`}>
        <div className={styles.container}>
          <div className={styles.mvGrid}>
            <div className={styles.mvCard}>
              <div className={styles.mvIcon}>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="10" /><circle cx="12" cy="12" r="6" /><circle cx="12" cy="12" r="2" />
                </svg>
              </div>
              <h3 className={styles.mvTitle}>Our Mission</h3>
              <p className={styles.mvText}>
                To empower businesses with innovative technology solutions that drive growth, efficiency, and competitive advantage in an ever-evolving digital landscape.
              </p>
              <div className={styles.mvAccent} />
            </div>
            <div className={styles.mvCard}>
              <div className={styles.mvIcon}>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" /><circle cx="12" cy="12" r="3" />
                </svg>
              </div>
              <h3 className={styles.mvTitle}>Our Vision</h3>
              <p className={styles.mvText}>
                To be the most trusted technology partner globally, known for transforming ideas into impactful digital experiences that shape the future of industries.
              </p>
              <div className={styles.mvAccent} />
            </div>
          </div>
        </div>
      </section>

      {/* ── Stats ── */}
      <section ref={statsRef} className={`${styles.section} ${styles.statsSection} ${statsVisible ? styles.revealed : ""}`}>
        <div className={styles.statsOverlay} />
        <div className={styles.container}>
          <div className={styles.statsGrid}>
            {stats.map((s, i) => (
              <div key={i} className={styles.statItem} style={{ animationDelay: `${i * 0.15}s` }}>
                <div className={styles.statNumber}>
                  <AnimatedCounter end={s.value} suffix={s.suffix} />
                </div>
                <div className={styles.statLabel}>{s.label}</div>
                <div className={styles.statLine} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Values ── */}
      <section ref={valuesRef} className={`${styles.section} ${valuesVisible ? styles.revealed : ""}`}>
        <div className={styles.container}>
          <div className={styles.sectionLabel}>
            <span className={styles.labelDot} />
            <span>Core Values</span>
          </div>
          <h2 className={styles.sectionTitleCenter}>What Drives Us Forward</h2>
          <div className={styles.valuesGrid}>
            {values.map((v, i) => (
              <div key={i} className={styles.valueCard} style={{ animationDelay: `${i * 0.12}s` }}>
                <div className={styles.valueIcon}>{v.icon}</div>
                <h4 className={styles.valueTitle}>{v.title}</h4>
                <p className={styles.valueDesc}>{v.desc}</p>
                <div className={styles.valueHoverLine} />
              </div>
            ))}
          </div>
        </div>
      </section>



      {/* ── CTA ── */}
      <section ref={ctaRef} className={`${styles.section} ${styles.ctaSection} ${ctaVisible ? styles.revealed : ""}`}>
        <div className={styles.ctaGlow} />
        <div className={styles.container}>
          <h2 className={styles.ctaTitle}>Ready to Build Something Great?</h2>
          <p className={styles.ctaText}>
            Let's collaborate and turn your vision into a powerful digital reality.
          </p>
          <button className={styles.ctaButton} onClick={() => navigate('../contact')}>
            <span>Get In Touch</span>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M5 12h14" /><path d="M12 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </section>
    </div>
  );
};

export default About;

