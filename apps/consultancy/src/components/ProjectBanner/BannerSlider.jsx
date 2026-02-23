


import React, { useState, useEffect, useCallback, useRef } from 'react';
import styles from './BannerSlider.module.css';

const AUTOPLAY_DURATION = 5500;

const slides = [
  {
    id: 1,
    bgImage: 'https://images.pexels.com/photos/1105766/pexels-photo-1105766.jpeg?auto=compress&cs=tinysrgb&w=1600',
    title: 'Our Ongoing',
    titleAccent: 'Projects',
    breadcrumbs: ['Home', 'Our Projects'],
    ctaLabel: 'View Ongoing',
  },
  {
    id: 2,
    bgImage: 'https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg?auto=compress&cs=tinysrgb&w=1600',
    title: 'Our Completed',
    titleAccent: 'Projects',
    breadcrumbs: ['Home', 'Our Projects'],
    ctaLabel: 'View Projects',
  },

];

const BannerSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [progress, setProgress] = useState(0);
  const startTimeRef = useRef(null);
  const animFrameRef = useRef(null);
  const isPausedRef = useRef(false);

  const animateProgress = useCallback((timestamp) => {
    if (isPausedRef.current) return;
    if (!startTimeRef.current) startTimeRef.current = timestamp;
    const elapsed = timestamp - startTimeRef.current;
    const pct = Math.min((elapsed / AUTOPLAY_DURATION) * 100, 100);
    setProgress(pct);
    if (pct < 100) {
      animFrameRef.current = requestAnimationFrame(animateProgress);
    }
  }, []);

  const startProgress = useCallback(() => {
    cancelAnimationFrame(animFrameRef.current);
    startTimeRef.current = null;
    setProgress(0);
    animFrameRef.current = requestAnimationFrame(animateProgress);
  }, [animateProgress]);

  const goToSlide = useCallback((index) => {
    if (isAnimating || index === currentIndex) return;
    setIsAnimating(true);
    setTimeout(() => {
      setCurrentIndex(index);
      setIsAnimating(false);
      startProgress();
    }, 750);
  }, [isAnimating, currentIndex, startProgress]);

  const goNext = useCallback(() => {
    const next = (currentIndex + 1) % slides.length;
    goToSlide(next, 'next');
  }, [currentIndex, goToSlide]);

  const goPrev = useCallback(() => {
    const prev = (currentIndex - 1 + slides.length) % slides.length;
    goToSlide(prev, 'prev');
  }, [currentIndex, goToSlide]);

  useEffect(() => {
    startProgress();
    return () => cancelAnimationFrame(animFrameRef.current);
  }, []);

  useEffect(() => {
    const timer = setTimeout(goNext, AUTOPLAY_DURATION);
    return () => clearTimeout(timer);
  }, [currentIndex, goNext]);

  const slide = slides[currentIndex];

  return (
    <div
      className={styles.bannerSlider}
    >


      {/* Background Slides  */}
      {slides.map((s, i) => (
        <div
          key={s.id}
          className={`${styles.bannerSlide} ${i === currentIndex ? styles.active : ''}`}
          style={{ backgroundImage: `url(${s.bgImage})` }}
        />
      ))}

      {/* Layered Overlays */}
      <div className={styles.bannerOverlay} />
      <div className={styles.bannerOverlayVignette} />
      <div className={styles.bannerPattern} />

      {/* Floating Geometric Particles */}
      <div className={styles.particles}>
        <div className={`${styles.particle} ${styles.p1}`} />
        <div className={`${styles.particle} ${styles.p2}`} />
        <div className={`${styles.particle} ${styles.p3}`} />
        <div className={`${styles.particle} ${styles.p4}`} />
        <div className={`${styles.particle} ${styles.p5}`} />
        <div className={`${styles.particle} ${styles.p6}`} />
      </div>

      {/* Slide Counter — Top Right */}
      <div className={styles.slideCounter}>
        <span className={styles.counterCurrent}>{String(currentIndex + 1).padStart(2, '0')}</span>
        <span className={styles.counterTrack}>
          <span className={styles.counterFill} style={{ height: `${progress}%` }} />
        </span>
        <span className={styles.counterTotal}>{String(slides.length).padStart(2, '0')}</span>
      </div>



      {/* Main Content */}
      <div className={styles.bannerContent} key={currentIndex}>



        {/* Breadcrumb */}
        <nav className={styles.bannerBreadcrumb}>
          {slide.breadcrumbs.map((crumb, idx) => (
            <React.Fragment key={idx}>
              {idx > 0 && <span className={styles.breadcrumbSep}>&#47;</span>}
              <span className={`${styles.breadcrumbItem} ${idx === slide.breadcrumbs.length - 1 ? styles.active : ''}`}>
                {crumb}
              </span>
            </React.Fragment>
          ))}
        </nav>

        {/* Title Split */}
        <h1 className={styles.bannerTitle}>
          <span className={styles.titleLine1}>{slide.title}</span>
          <span className={styles.titleLine2}>{slide.titleAccent}</span>
        </h1>



        {/* CTA Buttons */}
        <div className={styles.ctaRow}>
          <button className={styles.bannerExploreBtn}>
            {slide.ctaLabel}
            <span className={styles.btnArrow}>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" width="16" height="16">
                <line x1="5" y1="12" x2="19" y2="12" />
                <polyline points="12 5 19 12 12 19" />
              </svg>
            </span>
          </button>
          <button className={styles.bannerSecondaryBtn}>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="16" height="16">
              <circle cx="12" cy="12" r="10" />
              <polygon points="10 8 16 12 10 16 10 8" fill="currentColor" stroke="none" />
            </svg>
            Watch Overview
          </button>
        </div>
      </div>

      {/* Right Decorative Panel */}
      <div className={styles.bannerDecorative}>
        <div className={styles.decoRingOuter} />
        <div className={styles.decoRingMid} />
        <div className={styles.decoRingInner} />
        <div className={styles.decoDotGrid}>
          {[...Array(9)].map((_, i) => (
            <span key={i} className={styles.decoDot} />
          ))}
        </div>
        <div className={styles.decoVertLine} />
      </div>

      {/* Bottom Dots */}
      <div className={styles.sliderDots}>
        {slides.map((_, i) => (
          <button
            key={i}
            className={`${styles.sliderDot} ${i === currentIndex ? styles.active : ''}`}
            onClick={() => goToSlide(i)}
            aria-label={`Go to slide ${i + 1}`}
          />
        ))}
      </div>

      {/* Scroll Hint */}
      <div className={styles.scrollHint}>
        <div className={styles.scrollMouse}>
          <div className={styles.scrollWheel} />
        </div>
        <span className={styles.scrollText}>Scroll</span>
      </div>
    </div>
  );
};

export default BannerSlider;

