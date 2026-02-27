import React, { useEffect, useRef, useState } from "react";
import styles from "./WhoWeAre.module.css";
import WhoWe1 from "../../assets/images/WhoWeAre/Who_We1.jpg";
import WhoWe2 from "../../assets/images/WhoWeAre/Who_We2.jpg";

const WhoWeAre = () => {
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section
      className={`${styles.whoWeAre} ${isVisible ? styles.animateIn : ""}`}
      ref={sectionRef}
    >
      <div className={styles.whoWeAreContainer}>
        <div className={styles.whoWeAreContent}>
          <span className={styles.sectionLabel}>About Us</span>
          <h2 className={styles.whoWeAreTitle}>Who We Are</h2>
          <p className={styles.whoWeAreSubtitle}>
            Artemis Infratech Consultancy is an engineering-led construction
            consulting firm focused on predictable delivery, cost discipline,
            and execution excellence.
          </p>
          <p className={styles.whoWeAreDescription}>
            With decades of combined experience in infrastructure development,
            our team brings together technical expertise and strategic insight
            to ensure every project meets its objectives—on time and within
            budget.
          </p>
          <div className={styles.taglineBox}>
            <p className={styles.taglineText}>
              We don't just manage projects—we{" "}
              <span className={styles.taglineHighlight}>
                engineer certainty
              </span>
              .
            </p>
          </div>
        </div>

        <div className={styles.whoWeAreImages}>
          <div className={styles.geometricAccent}></div>
          <div className={styles.dotsPattern}>
            {Array.from({ length: 25 }).map((_, i) => (
              <span key={i}></span>
            ))}
          </div>
          <div
            className={`${styles.imageWrapper} ${styles.imagePrimary}`}
          >
            <img src={WhoWe1} alt="Engineering consulting team in meeting" />
          </div>
          <div
            className={`${styles.imageWrapper} ${styles.imageSecondary}`}
          >
            <img src={WhoWe2} alt="Artemis Infratech office building" />
          </div>
          {/* <div className={styles.statsBar}>
            <div className={styles.statItem}>
              <p className={styles.statNumber}>
                15<span>+</span>
              </p>
              <p className={styles.statLabel}>Years Experience</p>
            </div>
            <div className={styles.statItem}>
              <p className={styles.statNumber}>
                200<span>+</span>
              </p>
              <p className={styles.statLabel}>Projects Delivered</p>
            </div>
            <div className={styles.statItem}>
              <p className={styles.statNumber}>
                98<span>%</span>
              </p>
              <p className={styles.statLabel}>Client Satisfaction</p>
            </div>
          </div> */}
        </div>
      </div>
    </section>
  );
};

export default WhoWeAre;
