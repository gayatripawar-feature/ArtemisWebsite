import React, { useEffect } from "react";
import styles from "../../pages/TeamPage.module.css";

const TeamModal = ({ member, onClose }) => {
  useEffect(() => {
    const handleKey = (e) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", handleKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", handleKey);
      document.body.style.overflow = "";
    };
  }, [onClose]);

  const handleBackdropClick = (e) => {
    if (e.target === e.currentTarget) onClose();
  };

  return (
    <div className={styles.teamModalBackdrop} onClick={handleBackdropClick}>
      <div
        className={styles.teamModal}
        style={{ "--modal-accent": member.accentColor }}
      >
        <div
          className={styles.teamModalAccent}
          style={{ background: member.accentColor }}
        />
        <button className={styles.teamModalClose} onClick={onClose} aria-label="Close">
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
            <line x1="1" y1="1" x2="13" y2="13" />
            <line x1="13" y1="1" x2="1" y2="13" />
          </svg>
        </button>

        <div className={styles.teamModalHero}>
          <img className={styles.teamModalPhoto} src={member.photo} alt={member.name} />
          <div className={styles.teamModalIdentity}>
            <p className={styles.teamModalRole} style={{ color: member.accentColor }}>
              {member.role}
            </p>
            <h3 className={styles.teamModalName}>{member.name}</h3>
            <p className={styles.teamModalExp}>
              {member.experience} · {member.city}
            </p>
          </div>
        </div>

        <div className={styles.teamModalContent}>
          <p className={styles.teamModalBio}>{member.bio}</p>

          <p className={styles.teamModalSectionTitle}>Areas of Expertise</p>
          <div className={styles.teamModalSkills}>
            {member.skills.map((skill) => (
              <span
                key={skill}
                className={styles.teamSkillTag}
                style={{
                  "--modal-accent": member.accentColor,
                  "--modal-accent-bg": member.accentColor + "14",
                }}
              >
                {skill}
              </span>
            ))}
          </div>

          <div className={styles.teamModalSocial}>
            <a
              href={member.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className={`${styles.teamSocialLink} ${styles.primary}`}
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
              LinkedIn
            </a>
            <a
              href={`mailto:${member.email}`}
              className={`${styles.teamSocialLink} ${styles.secondary}`}
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="2" y="4" width="20" height="16" rx="2"/>
                <path d="M22 7l-10 7L2 7"/>
              </svg>
              Email
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TeamModal;
