import React, { useRef, useCallback } from "react";
import styles from "../../pages/TeamPage.module.css";

const TeamCard = ({ member, onClick }) => {
  const cardRef = useRef(null);
  const glareRef = useRef(null);
  const rafRef = useRef(null);

  const handleMouseMove = useCallback((e) => {
    const card = cardRef.current;
    if (!card) return;

    if (rafRef.current) cancelAnimationFrame(rafRef.current);

    rafRef.current = requestAnimationFrame(() => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      const centerX = rect.width / 2;
      const centerY = rect.height / 2;

      const rotateY = ((x - centerX) / centerX) * 10;
      const rotateX = ((centerY - y) / centerY) * 8;

      card.style.transform = `rotateY(${rotateY}deg) rotateX(${rotateX}deg)`;

      if (glareRef.current) {
        glareRef.current.style.background = `radial-gradient(circle at ${x}px ${y}px, rgba(255,255,255,0.18) 0%, transparent 60%)`;
        glareRef.current.style.opacity = "1";
      }
    });
  }, []);

  const handleMouseLeave = useCallback(() => {
    const card = cardRef.current;
    if (!card) return;
    if (rafRef.current) cancelAnimationFrame(rafRef.current);
    card.style.transition = "transform 0.6s cubic-bezier(0.22, 1, 0.36, 1)";
    card.style.transform = "rotateY(0deg) rotateX(0deg)";
    if (glareRef.current) glareRef.current.style.opacity = "0";
    setTimeout(() => {
      if (card) card.style.transition = "";
    }, 600);
  }, []);

  return (
    <div
      className={styles.teamCardWrapper}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onClick={() => onClick(member)}
    >
      <div
        ref={cardRef}
        className={styles.teamCard}
        style={{ "--card-accent": member.accentColor }}
      >
        <div className={styles.teamCardAccentBar} />

        <div className={styles.teamCardImageWrap}>
          <img src={member.photo} alt={member.name} loading="lazy" />
          <div className={styles.teamCardOverlay} />
          <span className={styles.teamCardClickHint}>View Profile</span>
          <div ref={glareRef} className={styles.teamCardGlare} />
        </div>

        <div className={styles.teamCardBody}>
          <p className={styles.teamCardRole}>{member.role}</p>
          <h3 className={styles.teamCardName}>{member.name}</h3>
          <p className={styles.teamCardTagline}>{member.tagline}</p>
          <div className={styles.teamCardDivider} />
          <div className={styles.teamCardMeta}>
            <span className={styles.teamCardMetaDot} />
            <span>{member.experience} </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TeamCard;
