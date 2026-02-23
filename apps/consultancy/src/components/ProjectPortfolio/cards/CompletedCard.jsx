




import React, { useEffect, useRef } from "react";
import styles from "../ProjectPortfolio.module.css";

const CompletedCard = ({ project, index }) => {
  const cardRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add(styles.cardVisible);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.15 }
    );
    if (cardRef.current) observer.observe(cardRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      className={styles.projectCard}
      ref={cardRef}
      style={{ animationDelay: `${index * 0.15}s` }}
    >
      <div className={styles.cardImageWrap}>
        <img src={project.image} alt={project.buildingName} className={styles.cardImage} />
        <div className={styles.imageOverlay}>
          {/* <span className={styles.overlayText}>View Project</span> */}
        </div>
        <span className={`${styles.statusBadge} ${styles.badgeCOMPLETED}`}>
          <span className={styles.statusPulse}></span>
          COMPLETED
        </span>
      </div>
      <div className={styles.cardBody}>
        <h3 className={styles.buildingName}>{project.buildingName}</h3>
        <div className={styles.detailsGrid}>
          <div className={styles.detailRow}>
            <span className={styles.detailIcon}>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                <circle cx="12" cy="7" r="4" />
              </svg>
            </span>
            <span className={styles.detailLabel}>Project By</span>
            <span className={styles.detailValue}>{project.projectBy}</span>
          </div>
          <div className={styles.detailRow}>
            <span className={styles.detailIcon}>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <rect x="3" y="3" width="18" height="18" rx="2" />
                <path d="M3 9h18" />
              </svg>
            </span>
            <span className={styles.detailLabel}>Total Land Area</span>
            <span className={styles.detailValue}>{project.totalLandArea}</span>
          </div>
          <div className={styles.detailRow}>
            <span className={styles.detailIcon}>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M3 21h18" />
                <path d="M5 21V7l8-4v18" />
                <path d="M19 21V11l-6-4" />
              </svg>
            </span>
            <span className={styles.detailLabel}>Built Up Area</span>
            <span className={styles.detailValue}>{project.builtUpArea}</span>
          </div>
          <div className={styles.detailRow}>
            <span className={styles.detailIcon}>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M12 2L2 7l10 5 10-5-10-5z" />
                <path d="M2 17l10 5 10-5" />
                <path d="M2 12l10 5 10-5" />
              </svg>
            </span>
            <span className={styles.detailLabel}>Configuration</span>
            <span className={styles.detailValue}>{project.configuration}</span>
          </div>
          <div className={styles.detailRow}>
            <span className={styles.detailIcon}>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                <circle cx="12" cy="10" r="3" />
              </svg>
            </span>
            <span className={styles.detailLabel}>Location</span>
            <span className={styles.detailValue}>{project.location}</span>
          </div>
          <div className={styles.detailRow}>
            <span className={styles.detailIcon}>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <rect x="3" y="3" width="7" height="7" />
                <rect x="14" y="3" width="7" height="7" />
                <rect x="3" y="14" width="7" height="7" />
                <rect x="14" y="14" width="7" height="7" />
              </svg>
            </span>
            <span className={styles.detailLabel}>Total Unit</span>
            <span className={styles.detailValue}>{project.totalUnit}</span>
          </div>
        </div>
        <button className={styles.knowMoreBtn}>
          <span>Know More</span>
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className={styles.btnArrow}>
            <path d="M5 12h14" />
            <path d="m12 5 7 7-7 7" />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default CompletedCard;

