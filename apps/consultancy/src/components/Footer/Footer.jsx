

import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import {
  FaLinkedin,
  FaInstagram,
  FaTwitter,
  FaFacebook,
  FaMapMarkerAlt,
  FaPhone,
  FaEnvelope,
  FaArrowUp,
  FaClock,
  FaChevronRight,
} from "react-icons/fa";
import styles from "./Footer.module.css";

const Footer = () => {
  const [showBackToTop, setShowBackToTop] = useState(false);


  useEffect(() => {
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 400);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);



  const footerLinks = {
    quickLinks: [
      { label: "Home", path: "/" },
      { label: "About Us", path: "/about" },
      { label: "Services", path: "/services" },
      { label: "Projects", path: "/projects" },
      { label: "Why Artemis", path: "/why-artemis" },
      { label: "Our Team", path: "/our-team" },
      { label: "Contact Us", path: "/contact" },
    ],
    services: [
      { label: "Cost Optimization", path: "/services" },
      { label: "End-to-End PMC", path: "/services" },
      { label: "Digital Project Control", path: "/services" },
      { label: "RERA & Compliance", path: "/services" },
      { label: "Fast-Track Construction", path: "/services" },
    ],
    contact: [
      {
        icon: <FaMapMarkerAlt />,
        text: "Chovisawadi, Charholi Budruk, Maharashtra 412105",
        type: "address",
      },
      { icon: <FaPhone />, text: "+91 7447777413", type: "phone" },
      {
        icon: <FaEnvelope />,
        text: ["priyanka.patil@artemisinfratech.com", "shubhangi.deore@artemisinfratech.com"],
        type: "email",
      },
    ],
  };

  const socialLinks = [
    {
      icon: <FaLinkedin />,
      label: "LinkedIn",
      href: "https://www.linkedin.com/company/artemis-infratech-consultancy/",
      color: "#0A66C2",
    },
    { icon: <FaInstagram />, label: "Instagram", href: "#", color: "#E4405F" },
    { icon: <FaTwitter />, label: "Twitter", href: "#", color: "#1DA1F2" },
    { icon: <FaFacebook />, label: "Facebook", href: "#", color: "#1877F2" },
  ];

  const workingHours = [
    { day: "Mon – Fri", time: "9:00 AM – 6:00 PM" },
    { day: "Saturday", time: "10:00 AM – 4:00 PM" },
    { day: "Sunday", time: "Closed" },
  ];

  return (
    <footer className={styles.footer}>
      {/* Wave Top Separator */}
      <div className={styles.waveTop}>
        <svg
          viewBox="0 0 1440 120"
          preserveAspectRatio="none"
          className={styles.waveSvg}
        >
          <path
            d="M0,60 C360,120 720,0 1080,60 C1260,90 1380,80 1440,60 L1440,120 L0,120 Z"
            className={styles.wavePath}
          />
          <path
            d="M0,80 C360,140 720,20 1080,80 C1260,110 1380,100 1440,80 L1440,120 L0,120 Z"
            className={styles.wavePathOverlay}
          />
        </svg>
      </div>

      <div className={styles.footerContent}>
        {/* Main Links Section */}
        <div className={styles.footerMain}>
          {/* Brand Section */}
          <div className={styles.brandSection}>
            <div className={styles.brandText}>
              <h2 className={styles.brandTitle}>
                <span className={styles.gradientText}>Artemis Infratech</span>
                <span className={styles.brandSubtitle}>Consultancy</span>
              </h2>
              <p className={styles.brandTagline}>
                Turning Land into a Timeless Legacy
              </p>
              <div className={styles.brandDivider}></div>
              <p className={styles.brandDescription}>
                Delivering excellence in infrastructure consulting with
                innovation, integrity, and unmatched expertise.
              </p>
            </div>
            <div className={styles.socialLinks}>
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  className={styles.socialLink}
                  aria-label={social.label}
                  style={{ "--social-color": social.color }}
                  target="_blank"
                  rel="noopener noreferrer"
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
              <span className={styles.titleAccent}></span>
              Quick Links
            </h3>
            <ul className={styles.linksList}>
              {footerLinks.quickLinks.map((link, index) => (
                <li key={index} className={styles.linkItem}>
                  <Link to={link.path} className={styles.footerLink}>
                    <FaChevronRight className={styles.linkArrow} />
                    <span className={styles.linkText}>{link.label}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div className={styles.linksColumn}>
            <h3 className={styles.columnTitle}>
              <span className={styles.titleAccent}></span>
              Our Services
            </h3>
            <ul className={styles.linksList}>
              {footerLinks.services.map((link, index) => (
                <li key={index} className={styles.linkItem}>
                  <Link to={link.path} className={styles.footerLink}>
                    <FaChevronRight className={styles.linkArrow} />
                    <span className={styles.linkText}>{link.label}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact & Hours */}
          <div className={styles.linksColumn}>
            <h3 className={styles.columnTitle}>
              <span className={styles.titleAccent}></span>
              Get in Touch
            </h3>
            <ul className={styles.contactList}>
              {footerLinks.contact.map((item, index) => (
                <li key={index} className={styles.contactItem}>
                  <span className={styles.contactIcon}>{item.icon}</span>
                  <div>
                    {Array.isArray(item.text) ? (
                      item.text.map((text, idx) => (
                        <span key={idx} className={styles.contactText}>
                          {text}
                        </span>
                      ))
                    ) : (
                      <span className={styles.contactText}>{item.text}</span>
                    )}
                  </div>
                </li>
              ))}
            </ul>

            {/* Working Hours */}
            <div className={styles.hoursCard}>
              <h4 className={styles.hoursTitle}>
                <FaClock className={styles.hoursIcon} />
                Working Hours
              </h4>
              {workingHours.map((item, index) => (
                <div key={index} className={styles.hoursRow}>
                  <span className={styles.hoursDay}>{item.day}</span>
                  <span
                    className={
                      item.time === "Closed"
                        ? styles.hoursClosed
                        : styles.hoursTime
                    }
                  >
                    {item.time}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className={styles.footerDivider}>
          <div className={styles.dividerLine}></div>
          <div className={styles.dividerDiamond}></div>
        </div>

        {/* Bottom Section */}
        <div className={styles.footerBottom}>
          <div className={styles.copyright}>
            <p className={styles.copyrightText}>
              © 2026{" "}
              <span className={styles.highlight}>
                Artemis Infratech Consultancy
              </span>
              . All Rights Reserved.
            </p>
            <p className={styles.tagline}>
              Before-Time Delivery | Assured Quality | Up to 18% Cost
              Saving{" "}
            </p>
          </div>
          <div className={styles.legalLinks}>
            <a href="#" className={styles.legalLink}>
              Privacy Policy
            </a>
            <span className={styles.separator}>|</span>
            <a href="#" className={styles.legalLink}>
              Terms of Service
            </a>
            <span className={styles.separator}>|</span>
            <a href="#" className={styles.legalLink}>
              Cookie Policy
            </a>
          </div>
        </div>
      </div>

      {/* Back to Top Button */}
      <button
        className={`${styles.backToTop} ${showBackToTop ? styles.backToTopVisible : ""}`}
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        aria-label="Back to top"
      >
        <FaArrowUp className={styles.arrowUp} />
        <span className={styles.backToTopRing}></span>
      </button>
    </footer>
  );
};

export default Footer;
