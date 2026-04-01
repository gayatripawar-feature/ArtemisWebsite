
import React, { useState, useEffect, useCallback, useRef } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./CinematicCarousel.module.css";
import Hero1 from "../../assets/images/Hero1.jpg";
import Hero2 from "../../assets/images/Hero2.jpg";
import Hero3 from "../../assets/images/Hero3.jpg";
import Hero4 from "../../assets/images/Hero4.jpg";

const AUTOPLAY_INTERVAL = 6000;

const CinematicCarousel = () => {
  const navigate = useNavigate();
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [progressKey, setProgressKey] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const intervalRef = useRef(null);

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
      subtitle:
        "We help developers, landowners, and investors deliver construction projects before committed timelines, with assured quality and up to 18% cost optimization through disciplined engineering and project leadership.",
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
      subtitle:
        "We help developers, landowners, and investors deliver construction projects before committed timelines, with assured quality and up to 18% cost optimization through disciplined engineering and project leadership.",
      buttonText: "Learn More",
      buttonLink: "#",
    },
  ];

  const goToSlide = useCallback(
    (index) => {
      if (isTransitioning) return;
      setIsTransitioning(true);
      setCurrentSlide(index);
      setProgressKey((prev) => prev + 1);
      setTimeout(() => setIsTransitioning(false), 800);
    },
    [isTransitioning]
  );

  const handlePrevSlide = useCallback(() => {
    goToSlide((currentSlide - 1 + images.length) % images.length);
  }, [currentSlide, images.length, goToSlide]);

  const handleNextSlide = useCallback(() => {
    goToSlide((currentSlide + 1) % images.length);
  }, [currentSlide, images.length, goToSlide]);

  // Autoplay
  useEffect(() => {
    if (isPaused) return;
    intervalRef.current = setInterval(() => {
      handleNextSlide();
    }, AUTOPLAY_INTERVAL);
    return () => clearInterval(intervalRef.current);
  }, [handleNextSlide, isPaused]);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "ArrowLeft") handlePrevSlide();
      else if (e.key === "ArrowRight") handleNextSlide();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [handleNextSlide, handlePrevSlide]);

  return (
    <section
      className={styles.cinematicContainer}

      aria-roledescription="carousel"
      aria-label="Hero carousel"
    >
      <div className={styles.carouselWrapper}>
        {/* Background slides */}
        <div className={styles.imagesContainer}>
          {images.map((image, index) => (
            <div
              key={index}
              className={`${styles.slide} ${
                index === currentSlide ? styles.active : ""
              }`}
            >
              <img
                src={image.src}
                alt={image.alt}
                className={styles.slideImage}
                loading={index === 0 ? "eager" : "lazy"}
              />
              <div className={styles.slideOverlay} />
            </div>
          ))}
        </div>

        {/* Content */}
        <div className={styles.contentOverlay} key={`content-${currentSlide}`}>
          <h1 className={styles.slideTitle}>{images[currentSlide].title}</h1>
          <p className={styles.slideSubtitle}>
            {images[currentSlide].subtitle}
          </p>
          <div className={styles.buttonGroup}>
            <a
              href={images[currentSlide].buttonLink}
              className={styles.slideButton}
            >
              {images[currentSlide].buttonText}
              <svg
                className={styles.buttonArrow}
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <line x1="5" y1="12" x2="19" y2="12" />
                <polyline points="12 5 19 12 12 19" />
              </svg>
            </a>
            <button
              onClick={() => navigate('contact')}
              className={styles.slideButtonOutline}
            >
              Contact Us
            </button>
          </div>
        </div>

        {/* Navigation arrows */}
        <button
          className={`${styles.navButton} ${styles.navPrev}`}
          onClick={handlePrevSlide}
          aria-label="Previous slide"
        >
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <polyline points="15 18 9 12 15 6" />
          </svg>
        </button>
        <button
          className={`${styles.navButton} ${styles.navNext}`}
          onClick={handleNextSlide}
          aria-label="Next slide"
        >
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <polyline points="9 18 15 12 9 6" />
          </svg>
        </button>

        {/* Bottom bar: dots + progress */}
        <div className={styles.bottomBar}>
          <div className={styles.dotsContainer}>
            {images.map((_, index) => (
              <button
                key={index}
                className={`${styles.dot} ${
                  index === currentSlide ? styles.active : ""
                }`}
                onClick={() => goToSlide(index)}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
          <div className={styles.progressTrack}>
            <div
              className={styles.progressBar}
              key={progressKey}
              style={{
                animationDuration: isPaused ? "0s" : `${AUTOPLAY_INTERVAL}ms`,
                animationPlayState: isPaused ? "paused" : "running",
              }}
            />
          </div>
        </div>

        {/* Decorative corner accent */}
        <div className={styles.cornerAccent} />
      </div>
    </section>
  );
};

export default CinematicCarousel;

