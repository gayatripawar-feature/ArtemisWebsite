


import { directors } from "./data/directorData";
import styles from "./DirectorDesk.module.css";

const DirectorDesk = () => {
  return (
    <section className={styles.directorsSection} aria-labelledby="directors-heading">
      <header className={styles.directorsHeader}>
        <p className={styles.directorsEyebrow}>Board of Directors</p>
        <h2 id="directors-heading" className={styles.directorsTitle}>
          From the <span>Director's</span> Desk
        </h2>
      </header>

      <div className={styles.directorsList}>
        {directors.map((dir, idx) => (
          <article
            key={dir.id}
            className={`${styles.directorCard}${idx % 2 === 1 ? ` ${styles.reverse}` : ""}`}
          >
            <div className={styles.directorPhotoCol}>
              {dir.photo ? (
                <img src={dir.photo} alt={dir.name} loading="lazy" />
              ) : (
                <div className={styles.photoPlaceholder}>
                  <div className={styles.photoPlaceholderIcon}>
                    {dir.name.trim().charAt(0)}
                  </div>
                  {dir.name.trim().split(" ").slice(0, 2).join(" ")}
                </div>
              )}
            </div>

            <div className={styles.directorContentCol}>
              <div className={styles.directorIdentity}>
                <p className={styles.directorTitleLabel}>{dir.title}</p>
                <h3 className={styles.directorName}>{dir.name}</h3>
              </div>

              <div className={styles.directorMessageWrap}>
                {dir.message ? (
                  <p className={styles.directorMessage}>{dir.message}</p>
                ) : (
                  <p className={styles.noMessage}>Message coming soon...</p>
                )}
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default DirectorDesk;
