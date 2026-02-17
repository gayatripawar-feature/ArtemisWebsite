import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import styles from "./PageBanner.module.css";

const PageBanner = ({ title, subtitle, image, breadcrumbs }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className={styles.pageBanner}>
      <img
        src={image}
        alt={title}
        className={styles.bannerImage}
      />
      <div className={styles.bannerOverlay} />

        

      {/* Floating particles */}
      <div className={styles.particles}>
        {[...Array(6)].map((_, i) => (
          <span key={i} className={styles.particle} />
        ))}
      </div>

      {/* Glowing accent line */}
      <div className={styles.glowLine} />

      <div className={`${styles.bannerContent} ${isVisible ? styles.visible : ""}`}>
        {breadcrumbs && (
          <nav className={styles.breadcrumbs}>
            <Link to="/" className={styles.breadcrumbLink}>Home</Link>
            {breadcrumbs.map((crumb, index) => (
              <React.Fragment key={index}>
                <span className={styles.breadcrumbSep}>
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                    <path d="M6 4L10 8L6 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </span>
                {crumb.path ? (
                  <Link to={crumb.path} className={styles.breadcrumbLink}>{crumb.label}</Link>
                ) : (
                  <span className={styles.breadcrumbCurrent}>{crumb.label}</span>
                )}
              </React.Fragment>
            ))}
          </nav>
        )}

        <div className={styles.titleWrapper}>
          <div className={styles.titleAccent} />
          <h1 className={styles.title}>{title}</h1>
        </div>


        <div className={styles.bottomBar}>
          <div className={styles.barLine} />
          <div className={styles.barDot} />
          <div className={styles.barLine} />
        </div>
      </div>
    </section>
  );
};

export default PageBanner;
