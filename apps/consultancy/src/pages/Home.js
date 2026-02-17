import styles from "./Home.module.css";
import CinematicCarousel from "../components/CinematicCarousel";
import StatsCounter from "../components/StatsCounter";
import { useNavigate } from "react-router-dom";
import SectionDivider from "../components/SectionDivider/SectionDivider";
import Vision1 from "../assets/images/OurVision/Vision1.png";
import Vision2 from "../assets/images/OurVision/Vision2.png";
import OurMission from "../components/HomeSections";
import { KeyOutcomes, WhoWeAre } from "../components/HomeSections";
import WhatWeDo1 from "../assets/images/WhatWeDo/WhatWeDo1.jpg";
import WhatWeDo2 from "../assets/images/WhatWeDo/WhatWeDo2.jpg";

import React, { useEffect, useRef, useState } from "react";
const servicesData = [
  {
    id: 1,
    image: WhatWeDo1,
    icon: "🏗️",
    title: "Land Development",
    description:
      "Transform raw land into high-value, compliant developments with our comprehensive land conversion expertise and strategic planning.",
    features: ["Plot Development", "Infrastructure", "Compliance"],
    link: "/services/land-development",
  },
  {
    id: 2,
    image: WhatWeDo2,
    icon: "🏢",
    title: "Real Estate Consulting",
    description:
      "Expert guidance on residential and commercial projects, ensuring optimal returns through quality construction and risk management.",
    features: ["Project Management", "Quality Control", "Risk Analysis"],
    link: "/services/real-estate",
  },
];

export default function Home() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 },
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <>
      <div className={styles.page}>
        <CinematicCarousel />
        <KeyOutcomes />
        <SectionDivider />
        <StatsCounter />
        <SectionDivider />

        {/* What We Do Section */}
        <section className={styles.whatWeDoSection}>
          <div className={styles.container}>
            <div className={styles.sectionHeader}>
              <span className={styles.sectionLabel}>Our Expertise</span>
              <h2 className={styles.sectionTitle}>
                <span>What We Do</span>
              </h2>
              <p className={styles.sectionSubtitle}>
                Artemis Infratech Consultancy partners with real estate
                stakeholders to convert land into high-value, compliant, and
                durable developments by controlling time, cost, quality, and
                risk—from concept to handover.
              </p>
            </div>

            <div className={styles.cardsGrid}>
              {servicesData.map((service) => (
                <div className={styles.card} key={service.id}>
                  <div className={styles.cardImageWrapper}>
                    <img
                      src={service.image}
                      alt={service.title}
                      className={styles.cardImage}
                    />
                    <div className={styles.cardOverlay}></div>
                    <div className={styles.cardIcon}>{service.icon}</div>
                  </div>

                  <div className={styles.cardContent}>
                    <span className={styles.cardNumber}>0{service.id}</span>
                    <h3 className={styles.cardTitle}>{service.title}</h3>
                    <p className={styles.cardDescription}>
                      {service.description}
                    </p>

                    <div className={styles.cardFeatures}>
                      {service.features.map((feature, index) => (
                        <span className={styles.featureTag} key={index}>
                          <span className={styles.featureIcon}>✓</span>
                          {feature}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className={styles.ctaWrapper}>
              <button
                onClick={() => navigate("/services")}
                className={styles.ctaButton}
              >
                Know More
                <span className={styles.ctaButtonIcon}>→</span>
              </button>
            </div>
          </div>
        </section>

        <SectionDivider />
        <WhoWeAre />
        <SectionDivider />

        {/* Vision Section */}
        <section className={styles["vision-section"]} id="vision">
          <div className={styles["vision-bg-pattern"]}></div>
          <div className={styles["vision-floating-shapes"]}>
            <span className={`${styles.shape} ${styles["shape-1"]}`}></span>
            <span className={`${styles.shape} ${styles["shape-2"]}`}></span>
            <span className={`${styles.shape} ${styles["shape-3"]}`}></span>
          </div>

          <div className={styles["vision-container"]}>
            <div className={styles["vision-images"]}>
              <div
                className={`${styles["vision-image-wrapper"]} ${styles.primary}`}
              >
                <img
                  src={Vision1}
                  alt="Cityscape with connected network overlay"
                />
                <div className={styles["image-overlay"]}></div>
                <div className={styles["image-border-glow"]}></div>
              </div>
              <div
                className={`${styles["vision-image-wrapper"]} ${styles.secondary}`}
              >
                <img src={Vision2} alt="Engineer holding safety helmet" />
                <div className={styles["image-overlay"]}></div>
                <div className={styles["image-border-glow"]}></div>
              </div>
              <div className={styles["vision-decorative-box"]}></div>
              <div className={styles["vision-decorative-dots"]}>
                {Array.from({ length: 16 }).map((_, i) => (
                  <span key={i}></span>
                ))}
              </div>
              <div className={styles["vision-connecting-line"]}></div>
            </div>

            <div className={styles["vision-content"]}>
              <span className={styles["vision-label"]}>
                <span className={styles["label-icon"]}>◆</span>
                Our Purpose
              </span>
              <h2 className={styles["vision-title"]}>
                Our <span className={styles["title-highlight"]}>Vision</span>
              </h2>
              <div className={styles["vision-divider"]}>
                <span
                  className={`${styles["divider-line"]} ${styles.left}`}
                ></span>
                <span className={styles["divider-diamond"]}></span>
                <span
                  className={`${styles["divider-line"]} ${styles.right}`}
                ></span>
              </div>
              <div className={styles["vision-statement-wrapper"]}>
                <div className={styles["quote-mark"]}>"</div>
                <p className={styles["vision-statement"]}>
                  To consistently deliver construction projects before committed
                  timelines through <strong>disciplined engineering</strong> and{" "}
                  <strong>intelligent planning</strong>.
                </p>
              </div>
            </div>
          </div>
        </section>

        <SectionDivider />

        <OurMission />

        <SectionDivider />
      </div>
    </>
  );
}
