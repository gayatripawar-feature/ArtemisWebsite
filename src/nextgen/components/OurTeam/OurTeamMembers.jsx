import { teamMembers } from "./data/teamData";

import styles from "./OurTeamMembers.module.css";

const OurTeamMembers = () => {
  return (
    <section className={styles.teamSection} aria-labelledby="team-heading">
      <header className={styles.teamHeader}>
        <p className={styles.teamEyebrow}>Meet the Team</p>
        <h2 id="team-heading" className={styles.teamTitle}>
          Our <span>Team</span>
        </h2>
      </header>

      <div className={styles.teamGrid}>
        {teamMembers.map((member) => (
          <article key={member.id} className={styles.teamCard}>
            <div className={styles.teamPhotoWrap}>
              {member.photo ? (
                <img src={member.photo} alt={member.name} loading="lazy" />
              ) : (
                <div className={styles.photoFallback}>
                  <div className={styles.photoFallbackIcon}>
                    {member.name.charAt(0)}
                  </div>
                  {member.name.split(" ").slice(0, 2).join(" ")}
                </div>
              )}
            </div>
            <div className={styles.teamCardBody}>
              <h3 className={styles.teamMemberName}>{member.name}</h3>
              <p className={styles.teamMemberPosition}>{member.position}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default OurTeamMembers;
