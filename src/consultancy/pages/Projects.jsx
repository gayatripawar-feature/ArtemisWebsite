import React,{useEffect} from "react";
import BannerSlider from "../components/ProjectBanner/BannerSlider";
import styles from "./Projects.module.css";
import ProjectPortfolio from "../components/ProjectPortfolio/ProjectPortfolio";

const Projects = () => {
   

  return (

    <>
      <BannerSlider />
      <div className={styles.section}>
        <ProjectPortfolio />
      </div>
    </>
  );
};

export default Projects;
