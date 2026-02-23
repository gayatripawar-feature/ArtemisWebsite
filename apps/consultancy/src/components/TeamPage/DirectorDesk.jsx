import React from "react";
import { directors } from "./data/directorData";
import styles from "./DirectorDesk.module.css";

const DirectorDesk = () => {
  return (
    <section className={styles.directorsSection} aria-labelledby="directors-heading">
      {/* Header */}
      <header className={styles.directorsHeader}>
        <p className={styles.directorsEyebrow}>Board of Directors</p>
        <h2 id="directors-heading" className={styles.directorsTitle}>
          From the <span>Director's</span> Desk
        </h2>
        {/* <p className={styles.directorsSubtitle}>
          Words of vision, stewardship, and purpose from the leaders who guide
          Artemis Infratech at the highest level.
        </p> */}
      </header>

      {/* Cards */}
      <div className={styles.directorsList}>
        {directors.map((dir, idx) => (
          <article
            key={dir.id}
            className={`${styles.directorCard}${idx % 2 === 1 ? ` ${styles.reverse}` : ""}`}

          >
            {/* Photo column */}
            <div className={styles.directorPhotoCol}>
              <img src={dir.photo} alt={dir.name} loading="lazy" />
              {/* <span className={styles.directorTenureBadge}>{dir.tenure}</span> */}
            </div>

            {/* Content column */}
            <div className={styles.directorContentCol}>
              {/* Identity */}
              <div className={styles.directorIdentity}>
                <p className={styles.directorTitleLabel}>{dir.title}</p>
                <h3 className={styles.directorName}>{dir.name}</h3>
                {/* <p className={styles.directorCredentials}>{dir.credentials}</p> */}
              </div>

              {/* Message */}
              <div className={styles.directorMessageWrap}>
                {/* <span className={styles.directorQuoteMark} aria-hidden="true">
                  &ldquo;
                </span> */}
                <p className={styles.directorMessage}>{dir.message}</p>
              </div>

              {/* Footer */}
              {/* <div className={styles.directorCardFooter}>
                <span className={styles.directorSignature}>— {dir.signature}</span>
                <div className={styles.directorFocusTags} aria-label="Focus areas">
                  {dir.focus.map((f) => (
                    <span key={f} className={styles.directorFocusTag}>
                      {f}
                    </span>
                  ))}
                </div>
              </div> */}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default DirectorDesk;