import React, { useEffect, useRef, useState } from "react";
import styles from "./OurMission.module.css";
import Mission1 from "../../assets/images/OurMission/OurMission1.jpg";
import Mission2 from "../../assets/images/OurMission/OurMission2.jpg";

const OurMission = () => {
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
      className={styles.missionSection}
      id="mission"
      ref={sectionRef}
    >
      {/* Background decorative elements */}
      <div className={styles.missionBgAccent}></div>
      <div className={styles.missionFloatingShapes}>
        <span className={`${styles.shape} ${styles.shape1}`}></span>
        <span className={`${styles.shape} ${styles.shape2}`}></span>
        <span className={`${styles.shape} ${styles.shape3}`}></span>
      </div>

      <div
        className={`${styles.missionContainer} ${isVisible ? styles.animateIn : ""}`}
      >
        <div className={styles.missionContent}>
          <span className={styles.missionLabel}>
            <span className={styles.labelIcon}>◆</span>
            Our Commitment
          </span>
          <h2 className={styles.missionTitle}>
            Our <span className={styles.titleHighlight}>Mission</span>
          </h2>
          <div className={styles.missionDivider}>
            <span
              className={`${styles.dividerLine} ${styles.left}`}
            ></span>
            <span className={styles.dividerDiamond}></span>
            <span
              className={`${styles.dividerLine} ${styles.right}`}
            ></span>
          </div>
          <div className={styles.missionStatementWrapper}>
            <div className={styles.quoteMark}>"</div>
            <ul className={styles.missionList}>
              <li>
                Deliver projects <strong>before committed timelines</strong>
              </li>
              <li>
                Ensure <strong>uncompromised quality and safety</strong>
              </li>
              <li>
                Achieve up to <strong>18% cost optimization</strong> through
                value engineering
              </li>
            </ul>
          </div>
        </div>

        {/* Images Side */}
        <div className={styles.missionImages}>
          <div
            className={`${styles.missionImageWrapper} ${styles.primary}`}
          >
            <img
              src={Mission1}
              alt="Construction consultants reviewing project plans"
            />
            <div className={styles.imageOverlay}></div>
            <div className={styles.imageBorderGlow}></div>
          </div>
          <div
            className={`${styles.missionImageWrapper} ${styles.secondary}`}
          >
            <img
              src={Mission2}
              alt="Cost optimization in construction management"
            />
            <div className={styles.imageOverlay}></div>
            <div className={styles.imageBorderGlow}></div>
          </div>
          <div className={styles.missionDecorativeBox}></div>
          <div className={styles.missionDecorativeDots}>
            {Array.from({ length: 16 }).map((_, i) => (
              <span key={i}></span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurMission;
