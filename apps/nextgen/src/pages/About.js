import React from "react";
import heroImage from "../assets/images/ServicePage/services-hero.jpg";
import PageBanner from "../components/PageBanner";
import styles from "./About.module.css";

const About = () => {
  return (
    <div className={styles.aboutPage}>
      <PageBanner
        title="About Us"
        image={heroImage}
        breadcrumbs={[{ label: "About Us" }]}
      />
      <section className={styles.contentSection}>
        <p className={styles.placeholder}>
          About page content coming soon.
        </p>
      </section>
    </div>
  );
};

export default About;
