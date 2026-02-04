

import React, { useState, useEffect, useCallback } from "react";
import styles from "./CinematicCarousel.module.css";
import Hero1 from "../../assets/images/Hero1.png";
import Hero2 from "../../assets/images/Hero2.png";
import Hero3 from "../../assets/images/Hero3.png";
import Hero4 from "../../assets/images/Hero4.jpg";

const CinematicCarousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const images = [
    {
      src: Hero1,
      alt: "Hero Image 1",
      title: "Engineering Certainty for Faster, More Profitable Construction",
      subtitle:
        "We help developers, landowners, and investors deliver construction projects before committed timelines, with assured quality and up to 18% cost optimization through disciplined engineering and project leadership.",
      buttonText: "Learn More",
      buttonLink: "#",
    },
    {
      src: Hero2,
      alt: "Hero Image 2",
      title: "Engineering Certainty for Faster, More Profitable Construction",
      subtitle: "We help developers, landowners, and investors deliver construction projects before committed timelines, with assured quality and up to 18% cost optimization through disciplined engineering and project leadership.",

      buttonText: "Learn More",
      buttonLink: "#",
    },
    {
      src: Hero3,
      alt: "Hero Image 3",
      title: "Engineering Certainty for Faster, More Profitable Construction",
      subtitle:
                "We help developers, landowners, and investors deliver construction projects before committed timelines, with assured quality and up to 18% cost optimization through disciplined engineering and project leadership.",

      buttonText: "Learn More",
      buttonLink: "#",
    },
    {
      src: Hero4,
      alt: "Hero Image 4",
      title: "Engineering Certainty for Faster, More Profitable Construction",
      subtitle:         "We help developers, landowners, and investors deliver construction projects before committed timelines, with assured quality and up to 18% cost optimization through disciplined engineering and project leadership.",

      buttonText: "Learn More",
      buttonLink: "#",
    },
  ];

  const goToSlide = useCallback((index) => {
    setCurrentSlide(index);
  }, []);

  const handlePrevSlide = useCallback(() => {
    goToSlide((currentSlide - 1 + images.length) % images.length);
  }, [currentSlide, images.length, goToSlide]);

  const handleNextSlide = useCallback(() => {
    goToSlide((currentSlide + 1) % images.length);
  }, [currentSlide, images.length, goToSlide]);

  const handleDotClick = (index) => {
    goToSlide(index);
  };

  const handleArrowClick = (direction) => {
    if (direction === "prev") {
      handlePrevSlide();
    } else {
      handleNextSlide();
    }
  };

  useEffect(() => {
    const interval = setInterval(() => {
      handleNextSlide();
    }, 4000);

    return () => clearInterval(interval);
  }, [handleNextSlide]);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "ArrowLeft") {
        handlePrevSlide();
      } else if (e.key === "ArrowRight") {
        handleNextSlide();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [handleNextSlide, handlePrevSlide]);

  return (
    <div
      className={styles.cinematicContainer}
    >
      <div className={styles.carouselWrapper}>
        <div className={styles.imagesContainer}>
          {images.map((image, index) => (
            <div
              key={index}
              className={`${styles.slide} ${index === currentSlide ? styles.active : ""}`}
            >
              <img
                src={image.src}
                alt={image.alt}
                className={styles.slideImage}
                loading={index === 0 ? "eager" : "lazy"}
              />
              <div className={styles.slideOverlay}></div>
            </div>
          ))}
        </div>

        <div className={styles.contentOverlay} key={currentSlide}>
          <h1 className={styles.slideTitle}>{images[currentSlide].title}</h1>
          <p className={styles.slideSubtitle}>
            {images[currentSlide].subtitle}
          </p>
          <a
            href={images[currentSlide].buttonLink}
            className={styles.slideButton}
          >
            {images[currentSlide].buttonText}
          </a>
        </div>

        <button
          className={styles.navButton}
          onClick={() => handleArrowClick("prev")}
          aria-label="Previous slide"
        >
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          >
            <polyline points="15 18 9 12 15 6"></polyline>
          </svg>
        </button>
        <button
          className={styles.navButton}
          onClick={() => handleArrowClick("next")}
          aria-label="Next slide"
        >
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          >
            <polyline points="9 18 15 12 9 6"></polyline>
          </svg>
        </button>

        <div className={styles.dotsContainer}>
          {images.map((_, index) => (
            <button
              key={index}
              className={`${styles.dot} ${index === currentSlide ? styles.active : ""}`}
              onClick={() => handleDotClick(index)}
              aria-label={`Go to slide ${index + 1}`}
            ></button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CinematicCarousel;
