import React, { useEffect, useRef, useState } from "react";
import styles from "./ProjectPortfolio.module.css";

import ongoingProjects from "./data/ongoingProjects";
import completedProjects from "./data/completedProjects";

import OngoingCard from "./cards/OngoingCard";
import CompletedCard from "./cards/CompletedCard";

const ProjectSection = ({
  title,
  subtitle,
  projects,
  statusClass,
  icon,
  CardComponent,
}) => {
  const headerRef = useRef(null);
  const [isExpanded, setIsExpanded] = useState(true);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add(styles.headerVisible);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.2 },
    );
    if (headerRef.current) observer.observe(headerRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div className={styles.categorySection}>
      <div
        className={styles.categoryHeader}
        ref={headerRef}
        onClick={() => setIsExpanded(!isExpanded)}
        style={{ cursor: "pointer" }}
      >
        <div className={styles.categoryHeaderLeft}>
          <div className={`${styles.categoryIconWrap} ${styles[statusClass]}`}>
            {icon}
          </div>
          <div>
            <h2 className={styles.categoryTitle}>{title}</h2>
            <p className={styles.categorySubtitle}>{subtitle}</p>
          </div>
        </div>
        <div className={styles.headerRight}>
          <span className={styles.projectCount}>
            {projects.length} Projects
          </span>
          <svg
            className={`${styles.toggleIcon} ${isExpanded ? styles.expanded : ""}`}
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          >
            <polyline points="6 9 12 15 18 9"></polyline>
          </svg>
        </div>
      </div>
      {isExpanded && (
        <div className={styles.projectsGrid}>
          {projects.map((project, idx) => (
            <CardComponent key={project.id} project={project} index={idx} />
          ))}
        </div>
      )}
    </div>
  );
};

const ProjectPortfolio = () => {
  return (
    <section className={styles.portfolioSection}>
      <div className={styles.sectionHeader}>
        <div className={styles.headerLine}>
          <span className={styles.line}></span>
          <span className={styles.headerLabel}>OUR PROJECTS</span>
          <span className={styles.line}></span>
        </div>
        <h2 className={styles.sectionTitle}>
          Explore Our <em>Projects</em>
        </h2>
      </div>

      <ProjectSection
        title="Ongoing Projects"
        subtitle="Currently under active construction"
        projects={ongoingProjects}
        statusClass="dotOngoing"
        CardComponent={OngoingCard}
        icon={
          <svg
            width="22"
            height="22"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z" />
            <line x1="3" y1="6" x2="21" y2="6" />
            <path d="M16 10a4 4 0 0 1-8 0" />
          </svg>
        }
      />

      <ProjectSection
        title="Completed Projects"
        subtitle="Successfully delivered landmarks"
        projects={completedProjects}
        statusClass="dotCompleted"
        CardComponent={CompletedCard}
        icon={
          <svg
            width="22"
            height="22"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
            <polyline points="22 4 12 14.01 9 11.01" />
          </svg>
        }
      />

    </section>
  );
};

export default ProjectPortfolio;
