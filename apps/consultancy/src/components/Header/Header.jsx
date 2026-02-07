



import React, { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { useNavigate } from 'react-router-dom';
import artemis from '../../assets/images/artemis.png';
import styles from './Header.module.css';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
      document.body.style.touchAction = 'none';
    } else {
      document.body.style.overflow = '';
      document.body.style.touchAction = '';
    }

    return () => {
      document.body.style.overflow = '';
      document.body.style.touchAction = '';
    };
  }, [isMenuOpen]);

  // Close menu with Escape key
  useEffect(() => {
    const handleKey = (e) => {
      if (e.key === 'Escape' && isMenuOpen) setIsMenuOpen(false);
    };
    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, [isMenuOpen]);

  const menuItems = [
    { path: '/', label: 'Home' },
    { path: '/about', label: 'About Us' },
    { path: '/services', label: 'Services' },
    { path: '/projects', label: 'Projects' },
    { path: '/why-artemis', label: 'Why Artemis' },
    { path: '/our-team', label: 'Our Team' },

    { path: '/contact', label: 'Contact Us' },
  ];

  const handleNavClick = (path) => {
    navigate(path);
    setIsMenuOpen(false);
  };

  return (
    <>
      <header className={`${styles.header} ${isScrolled ? styles.scrolled : ''}`}>
        <div className={styles.headerContainer}>
          {/* Logo Section */}
          <div className={styles.logoSection} onClick={() => handleNavClick('/')}>
            <div className={styles.logoIcon}>
              <img
                src={artemis}
                alt="Artemis Infratech Consultancy Logo"
                className={styles.logoImage}
              />
            </div>
            <div className={styles.logoText}>
              <span className={styles.logoTitle}>Artemis Infratech Consultancy</span>
              <span className={styles.logoTagline}>Turning Land into a Timeless Legacy</span>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className={styles.navDesktop}>
            <ul className={styles.navList}>
              {menuItems.map((item, index) => (
                <li key={item.path} className={styles.navItem}>
                  <button
                    className={styles.navLink}
                    onClick={() => handleNavClick(item.path)}
                    style={{ '--delay': `${index * 0.05}s` }}
                  >
                    {item.label}
                    <span className={styles.navUnderline}></span>
                  </button>
                </li>
              ))}
            </ul>
          </nav>

          {/* CTA Button */}
          <div className={styles.ctaSection}>
            <button className={styles.ctaButton} onClick={() => handleNavClick('/contact')}>
              <span>Request Consultation</span>
              <svg className={styles.ctaArrow} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M5 12h14M12 5l7 7-7 7"/>
              </svg>
            </button>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className={`${styles.menuToggle} ${isMenuOpen ? styles.menuOpen : ''}`}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
            aria-expanded={isMenuOpen}
          >
            <span className={styles.menuBar}></span>
            <span className={styles.menuBar}></span>
            <span className={styles.menuBar}></span>
          </button>
        </div>
      </header>

      {/* Mobile Menu Portal */}
      {createPortal(
        <div className={`${styles.mobileMenu} ${isMenuOpen ? styles.mobileMenuOpen : ''}`}>
          <div className={styles.mobileMenuOverlay} onClick={() => setIsMenuOpen(false)}></div>
          <div className={styles.mobileMenuContent}>
            <nav className={styles.mobileNav}>
              <ul className={styles.mobileNavList}>
                {menuItems.map((item, index) => (
                  <li
                    key={item.path}
                    className={styles.mobileNavItem}
                    style={{ '--index': index }}
                  >
                    <button
                      className={styles.mobileNavLink}
                      onClick={() => handleNavClick(item.path)}
                    >
                      <span className={styles.mobileNavNumber}>0{index + 1}</span>
                      <span className={styles.mobileNavText}>{item.label}</span>
                      <svg className={styles.mobileNavArrow} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M5 12h14M12 5l7 7-7 7"/>
                      </svg>
                    </button>
                  </li>
                ))}
              </ul>
            </nav>
            <div className={styles.mobileMenuFooter}>
              <button className={styles.mobileCtaButton} onClick={() => handleNavClick('/contact')}>
                Request Consultation
              </button>
              <div className={styles.mobileContact}>
                <a href="mailto:priyanka.patil@artemisinfratech.com">priyanka.patil@artemisinfratech.com</a>
                <a href="mailto:shubhangi.deore@artemisinfratech.com">shubhangi.deore@artemisinfratech.com</a>

                <a href="tel:+91 7447777413">+91 7447777413</a>
              </div>
            </div>
          </div>
        </div>,
        document.body
      )}
    </>
  );
};

export default Header;







