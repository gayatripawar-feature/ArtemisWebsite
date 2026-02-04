import React from 'react';
import { Link } from 'react-router-dom';
import { FaLinkedin, FaInstagram, FaTwitter, FaFacebook, FaMapMarkerAlt, FaPhone, FaEnvelope } from 'react-icons/fa';
import styles from './Footer.module.css';

const Footer = () => {




  const footerLinks = {
    quickLinks: [
      { label: 'Home', path: '/' },
      { label: 'About Us', path: '/about' },
      { label: 'Services', path: '/services' },
      { label: 'Our Approach', path: '/approach' },
      { label: 'Contact', path: '/contact' },
    ],
    services: [
      { label: 'Cost Optimization', path: '/services' },
      { label: 'End-to-End PMC', path: '/services' },
      { label: 'Digital Project Control', path: '/services' },
      { label: 'RERA & Compliance', path: '/services' },
      { label: 'Fast-Track Construction', path: '/services' },
    ],
    contact: [
      { icon: <FaMapMarkerAlt />, text: 'Chovisawadi, Charholi Budruk, Maharashtra 412105' },
      { icon: <FaPhone />, text: '+91 7447777413' },
      { icon: <FaEnvelope />, text: 'priyanka.patil@artemisinfratech.com, shubhangi.deore@artemisinfratech.com' },
    ],
  };

  const socialLinks = [
    { icon: <FaLinkedin />, label: 'LinkedIn', href: 'https://www.linkedin.com/company/artemis-infratech-consultancy/' },
    { icon: <FaInstagram />, label: 'Instagram', href: '#' },
    { icon: <FaTwitter />, label: 'Twitter', href: '#' },
    { icon: <FaFacebook />, label: 'Facebook', href: '#' },
  ];

  return (
    <footer className={styles.footer}>
      {/* Animated Background Elements */}
      <div className={styles.footerBgElements}>
        <div className={styles.bgCircle1}></div>
        <div className={styles.bgCircle2}></div>
        <div className={styles.bgCircle3}></div>
      </div>

      <div className={styles.footerContent}>


        {/* Main Links Section */}

        <div className={styles.footerMain}>
           <div className={styles.brandSection}>

            <div className={styles.brandText}>
              <h2 className={styles.brandTitle}>
                <span className={styles.gradientText}>Artemis Infratech Consultancy</span>
              </h2>
              <p className={styles.brandTagline}>
                Turning Land into a Timeless Legacy
              </p>
            </div>
            <div className={styles.socialLinks}>
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  className={styles.socialLink}
                  aria-label={social.label}
                >
                  <span className={styles.socialIcon}>{social.icon}</span>
                  <span className={styles.socialTooltip}>{social.label}</span>
                </a>
              ))}
            </div>
          </div>
          {/* Quick Links */}
          <div className={styles.linksColumn}>
            <h3 className={styles.columnTitle}>
              <span className={styles.titleIcon}>⚡</span> Quick Links
            </h3>
            <ul className={styles.linksList}>
              {footerLinks.quickLinks.map((link, index) => (
                <li key={index} className={styles.linkItem}>
                  <Link to={link.path} className={styles.footerLink}>
                    <span className={styles.linkBullet}>›</span>
                    <span className={styles.linkText}>{link.label}</span>
                    <span className={styles.linkHover}></span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div className={styles.linksColumn}>
            <h3 className={styles.columnTitle}>
              <span className={styles.titleIcon}>🛠️</span> Services
            </h3>
            <ul className={styles.linksList}>
              {footerLinks.services.map((link, index) => (
                <li key={index} className={styles.linkItem}>
                  <Link to={link.path} className={styles.footerLink}>
                    <span className={styles.linkBullet}>›</span>
                    <span className={styles.linkText}>{link.label}</span>
                    <span className={styles.linkHover}></span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className={styles.linksColumn}>
            <h3 className={styles.columnTitle}>
              <span className={styles.titleIcon}>📞</span> Contact
            </h3>
            <ul className={styles.linksList}>
              {footerLinks.contact.map((item, index) => (
                <li key={index} className={styles.contactItem}>
                  <span className={styles.contactIcon}>{item.icon}</span>
                  <span className={styles.contactText}>{item.text}</span>
                </li>
              ))}
            </ul>

          </div>


        </div>

        {/* Divider */}
        <div className={styles.footerDivider}>
          <div className={styles.dividerLine}></div>
          <div className={styles.dividerCircle}></div>
        </div>

        {/* Bottom Section */}
        <div className={styles.footerBottom}>
          <div className={styles.copyright}>
            <p className={styles.copyrightText}>
              © 2026 <span className={styles.highlight}>Artemis Infratech Consultancy</span>. All Rights Reserved.
            </p>
            <p className={styles.tagline}>
              Designed for Developers. Trusted by Investors.
            </p>
          </div>
          <div className={styles.legalLinks}>
            {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
            <a href="#" className={styles.legalLink}>Privacy Policy</a>
            <span className={styles.separator}>•</span>
            {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
            <a href="#" className={styles.legalLink}>Terms of Service</a>
            <span className={styles.separator}>•</span>
            {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
            <a href="#" className={styles.legalLink}>Cookie Policy</a>
          </div>
        </div>
      </div>

      {/* Back to Top Button */}
      <button
        className={styles.backToTop}
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        aria-label="Back to top"
      >
        <span className={styles.arrowUp}>↑</span>
        <span className={styles.tooltip}>Top</span>
      </button>
    </footer>
  );
};

export default Footer;