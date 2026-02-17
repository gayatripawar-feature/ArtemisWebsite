import React, { useState, useEffect, useRef } from "react";
import heroImage from "../../assets/images/hero.jpg";
import styles from "./HeroSection.module.css";

const typedPhrases = [
  "Building Intelligent Digital Solutions for Modern Businesses",
];

const HeroSection = () => {
  const [typedText, setTypedText] = useState("");
  const [cycleDone, setCycleDone] = useState(false);
  const [heroVisible, setHeroVisible] = useState(false);
  const heroRef = useRef(null);

  useEffect(() => {
    const timer = setTimeout(() => setHeroVisible(true), 200);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (cycleDone) return;
    const phrase = typedPhrases[0];
    let i = 0;
    const interval = setInterval(() => {
      i++;
      setTypedText(phrase.slice(0, i));
      if (i >= phrase.length) {
        clearInterval(interval);
        setCycleDone(true);
      }
    }, 80);
    return () => clearInterval(interval);
  }, [cycleDone]);

  return (
    <section className={styles.hero} ref={heroRef}>
      <div className={styles.heroBg}>
        <img
          src={heroImage}
          alt="Digital Transformation"
          className={styles.heroBgImage}
        />
        <div className={styles.heroOverlay} />
        <div className={styles.heroGradient} />
        {/* <iframe
        loading="lazy"
       src="https://my.spline.design/orb-77z0tAPPUxV0JFgtV89NuH8A/"
       frameBorder="0"
        width="100%"
       height="100%"
        title="3D Orb"
      /> */}
      </div>

      {/* Animated particles */}
      <div className={styles.particles}>
        {[...Array(6)].map((_, i) => (
          <div
            key={i}
            className={styles.particle}
            style={{
              left: `${15 + i * 14}%`,
              animationDelay: `${i * 0.8}s`,
              animationDuration: `${3 + i * 0.5}s`,
            }}
          />
        ))}
      </div>

      <div
        className={`${styles.heroContent} ${heroVisible ? styles.heroContentVisible : ""}`}
      >


        <h1 className={styles.heroTitle}>
          {typedText}
          <span
            className={`${styles.cursor} ${cycleDone ? styles.cursorBlink : ""}`}
          >
            |
          </span>
        </h1>

        <p className={styles.heroSubtitle}>
          NextGen is a technology-driven IT company delivering scalable
          software, modern websites, and enterprise-grade digital solutions for
          businesses ready to grow, automate, and innovate. We help
          organizations transform ideas into high-impact digital products using
          the right blend of technology, design, and business understanding.
        </p>

        <div className={styles.heroButtons}>
          <a href="/contact" className={styles.heroPrimary}>
            Start Your Project
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              className={styles.btnArrow}
            >
              <path
                d="M3 8h10M9 4l4 4-4 4"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </a>
          <a href="/services" className={styles.heroSecondary}>
            Explore Services
          </a>
        </div>
      </div>

      <div className={styles.scrollIndicator}>
        <div className={styles.scrollMouse}>
          <div className={styles.scrollWheel} />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
