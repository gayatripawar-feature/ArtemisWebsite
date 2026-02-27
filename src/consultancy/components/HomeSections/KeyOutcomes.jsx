import React, { useEffect, useRef, useState } from "react";
import styles from "./KeyOutcomes.module.css";
import KeyOutcome1 from "../../assets/images/KeyOutcomes/Key_Outcome1.jpg";

const CostSavingsIcon = () => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <circle cx="12" cy="12" r="10" />
    <path d="M16 8h-6a2 2 0 1 0 0 4h4a2 2 0 1 1 0 4H8" />
    <path d="M12 18V6" />
  </svg>
);

const TimeDeliveryIcon = () => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <circle cx="12" cy="12" r="10" />
    <polyline points="12 6 12 12 16 14" />
  </svg>
);

const AccountabilityIcon = () => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
    <polyline points="9 12 11 14 15 10" />
  </svg>
);

const DigitalVisibilityIcon = () => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <rect x="2" y="3" width="20" height="14" rx="2" ry="2" />
    <line x1="8" y1="21" x2="16" y2="21" />
    <line x1="12" y1="17" x2="12" y2="21" />
    <path d="M6 8h.01M9 8h.01" />
    <path d="M6 12h12" />
  </svg>
);


const outcomes = [
  {
    id: 1,
    title: "Up to 18% Construction Cost Savings",
    description:
      "Strategic cost optimization through value engineering and smart procurement.",
    icon: CostSavingsIcon,
    stat: "18%",
    image: KeyOutcome1,
  },
  {
    id: 2,
    title: "Before-Time Project Delivery",
    description:
      "Accelerated timelines with efficient project management methodologies.",
    icon: TimeDeliveryIcon,
    stat: "On-Time",
    image:
      "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=600&q=80",
  },
  {
    id: 3,
    title: "Single-Point Accountability",
    description:
      "One dedicated team responsible for your entire project lifecycle.",
    icon: AccountabilityIcon,
    stat: "100%",
    image:
      "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=600&q=80",
  },
  {
    id: 4,
    title: "Real-Time Digital Project Visibility",
    description:
      "Live dashboards and reports for complete transparency and control.",
    icon: DigitalVisibilityIcon,
    stat: "24/7",
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&q=80",
  },
];

const KeyOutcomes = () => {
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section className={styles.keyOutcomesSection} ref={sectionRef}>
      <div className={styles.keyOutcomesContainer}>
        <div className={styles.keyOutcomesHeader}>
          <span className={styles.sectionLabel}>Results That Matter</span>
          <h2 className={styles.keyOutcomesTitle}>Key Outcomes</h2>
          <p className={styles.keyOutcomesSubtitle}>
            The measurable results you can expect when partnering with Artemis
            Infratech Consultancy for your infrastructure projects.
          </p>
        </div>

        <div className={styles.outcomesGrid}>
          {outcomes.map((outcome, index) => {
            const IconComponent = outcome.icon;
            return (
              <div
                key={outcome.id}
                className={`${styles.outcomeCard} ${
                  isVisible ? styles.animateIn : ""
                }`}
                style={{ animationDelay: `${index * 0.15}s` }}
              >
                <div className={styles.cardImageWrapper}>
                  <img
                    src={outcome.image}
                    alt={outcome.title}
                    className={styles.cardImage}
                  />
                  <div className={styles.imageOverlay}></div>
                  <div className={styles.cardIconBadge}>
                    <IconComponent />
                  </div>
                </div>

                <div className={styles.cardContent}>
                  <div className={styles.cardNumber}>0{outcome.id}</div>
                  <h3 className={styles.cardTitle}>{outcome.title}</h3>
                  <p className={styles.cardDescription}>
                    {outcome.description}
                  </p>

                  {/* <div className={styles.cardFooter}>
                    <span className={styles.learnMore}>
                      Learn More <ArrowRightIcon />
                    </span>
                    <span className={styles.statsBadge}>
                      <StarIcon />
                      {outcome.stat}
                    </span>
                  </div> */}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default KeyOutcomes;
