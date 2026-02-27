import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './Home.module.css';

const Home = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <main
      className={`${styles.mainContainer} ${isLoaded ? styles.loaded : ''}`}
      style={{
        backgroundImage: `linear-gradient(135deg, var(--primary-maroon-dark) 0%, rgba(54,69,79,0.25) 50%, rgba(54,69,79,0.15) 100%), url('https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=1920&h=1080&fit=crop&q=90')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center center',
        backgroundAttachment: 'fixed',
        backgroundRepeat: 'no-repeat'
      }}
    >
      {/*  HERO SECTION */}
      <section className={styles.cinematicHero} aria-label="Hero section">
        {/* Dark gradient overlay */}
        <div className={styles.cinematicOverlay}></div>



        {/* Left-aligned content block */}
        <div className={styles.heroContainer}>
          <div className={styles.leftContent}>


            {/* Main headline */}
            <h1 className={styles.cinematicHeadline}>
              Transform Your Enterprise
            </h1>

            {/* Supporting description */}
            <p className={styles.cinematicSubtext}>
              Step into a new era of strategic consulting and next-generation innovation.
              <br />
              Redefine what's possible for your organization.
            </p>


          </div>

          {/* Right-side spacer for balance (desktop) */}
          <div className={styles.rightSpacer}></div>
        </div>


      </section>

      {/*  CTA SECTION WITH DUAL CARDS */}
      <section
        className={styles.ctaSection}
        aria-labelledby="platform-heading"
      >
        <div className={styles.ctaWrapper}>
          <div className={styles.ctaContent}>
            <h2 id="platform-heading" className={styles.ctaHeading}>
              Choose Your Path Forward
            </h2>
            <p className={styles.ctaIntro}>
              Explore our integrated platforms designed for enterprise transformation
            </p>
          </div>

          {/* DUAL CTA CARDS */}
          <div className={styles.cardGrid}>
            {/* CONSULTANCY CARD */}
            <article className={styles.premiumCard}>
              <div className={styles.cardGlow}></div>

              <div className={styles.cardTop}>
                <div className={styles.premiumIcon}>
                  <svg
                    width="56"
                    height="56"
                    viewBox="0 0 56 56"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    aria-hidden="true"
                  >
                    <path
                      d="M28 4L46 14V34C46 42 28 50 28 50S10 42 10 34V14L28 4Z"
                      stroke="currentColor"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M18 34L24 40L42 22"
                      stroke="currentColor"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>

                <h3 className={styles.premiumCardTitle}>Artemis Consultancy</h3>
              </div>

              <button
                onClick={() => navigate('/consultancy')}
                className={styles.premiumCTA}
                aria-label="Access Artemis Consultancy Services"
              >
                <span>Explore Consultancy</span>
                <span className={styles.ctaArrow} aria-hidden="true">→</span>
              </button>
            </article>

            {/* NEXTGEN CARD */}
            <article className={styles.premiumCard}>
              <div className={styles.cardGlow}></div>

              <div className={styles.cardTop}>
                <div className={styles.premiumIcon}>
                  <svg
                    width="56"
                    height="56"
                    viewBox="0 0 56 56"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    aria-hidden="true"
                  >
                    <rect x="8" y="12" width="40" height="36" rx="2" stroke="currentColor" strokeWidth="2.5" />
                    <path d="M16 30L24 38L42 20" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                    <circle cx="42" cy="16" r="2.5" fill="currentColor" />
                  </svg>
                </div>

                <h3 className={styles.premiumCardTitle}>Artemis NextGen</h3>
              </div>

              <button
                onClick={() => navigate('/nextgen')}
                className={styles.premiumCTA}
                aria-label="Access Artemis NextGen Solutions"
              >
                <span>Explore Nextgen</span>
                <span className={styles.ctaArrow} aria-hidden="true">→</span>
              </button>
            </article>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Home;
