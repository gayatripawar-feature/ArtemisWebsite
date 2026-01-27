import React, { useState, useEffect } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import Button from '../Button/Button';
import artemis from '../../assets/images/artemis.png';
import styles from './Header.module.css';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    setIsLoaded(true);

    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const menuItems = [
    { path: '/', label: 'Home' },
    { path: '/about', label: 'About Us' },
    { path: '/services', label: 'Services' },
    { path: '/approach', label: 'Our Approach' },
    { path: '/projects', label: 'Projects / Expertise' },
    { path: '/why-artemis', label: 'Why Artemis' },
    { path: '/contact', label: 'Contact Us' },
  ];

  const handleNavClick = (path) => {
    navigate(path);
    setIsMenuOpen(false);
  };

  return (
    <header className={`${styles.header} ${isScrolled ? styles.scrolled : ''} ${isLoaded ? styles.loaded : ''}`}>
      <div className={styles.headerContainer}>
        {/* Logo Section */}
        <div className={styles.logoSection}>
          <div
            className={styles.logo}
            onClick={() => handleNavClick('/')}
          >
            <div className={styles.logoIcon}>
              <img
                src={artemis}
                alt="Artemis Consultants Logo"
                className={styles.logoImage}
              />
            </div>
            <div className={styles.logoText}>
              <h1 className={styles.logoTitle}>Artemis Consultants</h1>
              <p className={styles.logoTagline}>Engineering-Led Project Consulting</p>
            </div>
          </div>
        </div>

        {/* Desktop Navigation */}
        <nav className={styles.navDesktop}>
          <ul className={styles.navList}>
            {menuItems.map((item) => (
              <li key={item.path} className={styles.navItem}>
                <Link
                  to={item.path}
                  className={`${styles.navLink} ${location.pathname === item.path ? styles.active : ''}`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  <span className={styles.linkText}>{item.label}</span>
                  <span className={styles.linkUnderline}></span>
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* CTA Button */}
        <div className={styles.ctaSection}>
          <Button
            variant="primary"
            onClick={() => handleNavClick('/contact')}
            className={styles.ctaButton}
          >
            Request Consultation
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className={`${styles.menuButton} ${isMenuOpen ? styles.open : ''}`}
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>

      {/* Mobile Navigation */}
      <div className={`${styles.mobileMenu} ${isMenuOpen ? styles.open : ''}`}>
        <div className={styles.mobileMenuContent}>
          <ul className={styles.mobileNavList}>
            {menuItems.map((item) => (
              <li key={item.path} className={styles.mobileNavItem}>
                <Link
                  to={item.path}
                  className={`${styles.mobileNavLink} ${location.pathname === item.path ? styles.active : ''}`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
          <div className={styles.mobileCta}>
            <Button
              variant="primary"
              onClick={() => {
                handleNavClick('/contact');
                setIsMenuOpen(false);
              }}
              className={styles.mobileCtaButton}
            >
              🔹 Request Consultation
            </Button>
          </div>
        </div>
      </div>

      {/* Header Glow Effect */}
      <div className={styles.headerGlow}></div>
    </header>
  );
};

export default Header;