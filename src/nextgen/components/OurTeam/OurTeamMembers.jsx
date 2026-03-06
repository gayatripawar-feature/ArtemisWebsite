
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
        {teamMembers.map((member, index) => (
          <article key={member.id} className={styles.teamItem}>
            <h3 className={styles.teamMemberName}>{member.name}</h3>
            <div className={styles.accentLine} />
            <p className={styles.teamMemberPosition}>{member.position}</p>
            <div className={styles.dotDecor}>
              <span />
              <span />
              <span />
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default OurTeamMembers;

