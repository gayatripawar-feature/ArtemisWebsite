
import React, { useState, useEffect, useRef, useCallback } from "react";
import { createPortal } from "react-dom";
import { Link, useNavigate, useLocation } from "react-router-dom";
import styles from "./Header.module.css";
import {
  getTechIcon,
  getIndustryIcon,
  techBrandColors,
  industryBrandColors,
  serviceBrandColors,
} from "./TechIcons.jsx";
import { getErpIcon, erpBrandColors } from "./ErpIcons.jsx";
import artemisLogo from "../../assets/images/artemis.png";
const ACTIVE_ERP_MODULES = ["Sales Module", "CRM Module"];

const servicesItems = [
  { label: "Custom Software Development", hash: "custom-software-development" },
  { label: "ERP & Enterprise Solutions", hash: "erp-enterprise-solutions" },
  { label: "Website Design & Development", hash: "website-design-development" },
  { label: "Web Application Development", hash: "web-application-development" },
  { label: "Mobile App Development", hash: "mobile-app-development" },
  {
    label: "Product Engineering & MVP Development",
    hash: "product-engineering-mvp",
  },
  { label: "UI / UX Design Services", hash: "ui-ux-design" },
  { label: "Cloud Solutions & DevOps", hash: "cloud-devops" },
  { label: "Quality Assurance & Testing", hash: "quality-assurance-testing" },
  { label: "Maintenance & Support", hash: "maintenance-support" },
];

const ServiceIcons = {
  "Custom Software Development": (p) => (
    <svg
      {...p}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
    >
      <rect x="3" y="4" width="18" height="14" rx="2" />
      <path d="M8 10l2 2-2 2M13 10h3" />
    </svg>
  ),
  "ERP & Enterprise Solutions": (p) => (
    <svg
      {...p}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
    >
      <rect x="3" y="3" width="7" height="7" rx="1" />
      <rect x="14" y="3" width="7" height="7" rx="1" />
      <rect x="3" y="14" width="7" height="7" rx="1" />
      <rect x="14" y="14" width="7" height="7" rx="1" />
    </svg>
  ),
  "Website Design & Development": (p) => (
    <svg
      {...p}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
    >
      <rect x="2" y="4" width="20" height="14" rx="2" />
      <path d="M2 8h20M8 20h8M12 18v2" />
    </svg>
  ),
  "Web Application Development": (p) => (
    <svg
      {...p}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
    >
      <rect x="3" y="3" width="18" height="18" rx="2" />
      <path d="M3 9h18M9 9v12" />
    </svg>
  ),
  "Mobile App Development": (p) => (
    <svg
      {...p}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
    >
      <rect x="6" y="2" width="12" height="20" rx="2" />
      <path d="M10 18h4" />
    </svg>
  ),
  "Product Engineering & MVP Development": (p) => (
    <svg
      {...p}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
    >
      <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
    </svg>
  ),
  "UI / UX Design Services": (p) => (
    <svg
      {...p}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
    >
      <circle cx="12" cy="12" r="3" />
      <path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83" />
    </svg>
  ),
  "Cloud Solutions & DevOps": (p) => (
    <svg
      {...p}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
    >
      <path d="M18 10a5 5 0 00-9.58-1.5A4 4 0 006 16h12a3 3 0 000-6z" />
    </svg>
  ),
  "Quality Assurance & Testing": (p) => (
    <svg
      {...p}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
    >
      <path d="M9 12l2 2 4-4" />
      <circle cx="12" cy="12" r="10" />
    </svg>
  ),
  "Maintenance & Support": (p) => (
    <svg
      {...p}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
    >
      <path d="M14.7 6.3a1 1 0 000 1.4l1.6 1.6a1 1 0 001.4 0l3.8-3.8a6 6 0 01-7.9 7.9L6 20.9a2 2 0 01-2.8 0 2 2 0 010-2.8l7.4-7.6A6 6 0 016.3 2.5l3.8 3.8z" />
    </svg>
  ),
};

const technologyItems = [
  { label: "React.js", hash: "react-js" },
  { label: "React Native", hash: "react-native" },
  { label: "C#.NET", hash: "c-net" },
  { label: "ASP.NET", hash: "asp-net" },
  { label: "MySQL", hash: "mysql" },
  { label: "Azure DevOps", hash: "azure-devops" },
  { label: "HTML5", hash: "html5" },
  { label: "CSS3", hash: "css3" },
  { label: "JavaScript", hash: "javascript" },
  { label: "Node.js", hash: "node-js" },
  { label: "Google Apps Script", hash: "google-apps-script" },
  { label: "Microsoft Excel", hash: "microsoft-excel" },
  { label: "AI Tools", hash: "ai-tools" },
];

const industryItems = [
  { label: "Real Estate", hash: "real-estate" },
  { label: "Construction", hash: "construction" },
  { label: "Finance", hash: "finance" },
  { label: "E-Commerce", hash: "e-commerce" },
  { label: "Technology", hash: "technology" },
  { label: "Sales", hash: "sales" },
  { label: "Marketing", hash: "marketing" },
];

const erpProducts = [
  { label: "New Company Creation", hash: "new-company" },
  { label: "Land Dealing", hash: "land-dealing" },
  { label: "Product Development", hash: "product-development" },
  { label: "Sales Office & Sample Flat", hash: "sales-office-sample-flat" },
  { label: "Marketing & Advertising", hash: "marketing-advertising" },
  { label: "Human Resource Module", hash: "human-resource-module" },
  { label: "Account Department Module", hash: "account-department-module" },
  { label: "Engineering Module", hash: "engineering-module" },
  { label: "Inventory Management Module", hash: "inventory-management-module" },
  { label: "Purchase Department Module", hash: "purchase-department-module" },
  { label: "Site Management Module", hash: "site-management-module" },
  { label: "Sales Module", hash: "sales-module" },
  { label: "CRM Module", hash: "crm-module" },
  { label: "Training & Implementation", hash: "training-implementation" },
];

// Helper function to check if a nav item is active
const isPathActive = (pathname, targetPath) => {
  // Normalize paths by removing trailing slashes
  const normalizedPathname = pathname.replace(/\/$/, "") || "/";
  const normalizedTarget = targetPath.replace(/\/$/, "") || "/";
  return normalizedPathname === normalizedTarget;
};

// Helper function to check if pathname starts with a path
const isPathStarting = (pathname, basePath) => {
  const normalizedPathname = pathname.replace(/\/$/, "") || "/";
  const normalizedBase = basePath.replace(/\/$/, "");
  return normalizedPathname.startsWith(normalizedBase);
};

const ChevronIcon = ({ isOpen }) => (
  <svg
    className={`${styles.chevron} ${isOpen ? styles.chevronOpen : ""}`}
    width="10"
    height="6"
    viewBox="0 0 10 6"
    fill="none"
  >
    <path
      d="M1 1L5 5L9 1"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [openMobileDropdown, setOpenMobileDropdown] = useState(null);
  const navigate = useNavigate();
  const location = useLocation();
  const dropdownTimeout = useRef(null);

  useEffect(() => {
    setIsLoaded(true);
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
      document.body.style.touchAction = "none";
    } else {
      document.body.style.overflow = "";
      document.body.style.touchAction = "";
    }
    return () => {
      document.body.style.overflow = "";
      document.body.style.touchAction = "";
    };
  }, [isMenuOpen]);

  useEffect(() => {
    const handleKey = (e) => {
      if (e.key === "Escape") {
        setIsMenuOpen(false);
        setOpenDropdown(null);
      }
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [isMenuOpen, openDropdown]);

  useEffect(() => {
    setIsMenuOpen(false);
    setOpenDropdown(null);
    setOpenMobileDropdown(null);
  }, [location.pathname]);

  const handleNavClick = useCallback(
    (path) => {
      navigate(path);
      setIsMenuOpen(false);
      setOpenDropdown(null);
    },
    [navigate],
  );

  const closeAll = useCallback(() => {
    setIsMenuOpen(false);
    setOpenDropdown(null);
    setOpenMobileDropdown(null);
  }, []);

  const handleItemMouseEnter = useCallback((key) => {
    if (dropdownTimeout.current) clearTimeout(dropdownTimeout.current);
    setOpenDropdown(key);
  }, []);

  const handleNavMouseLeave = useCallback(() => {
    dropdownTimeout.current = setTimeout(() => setOpenDropdown(null), 150);
  }, []);

  const headerClasses = [
    styles.header,
    isScrolled ? styles.scrolled : "",
    isLoaded ? styles.loaded : "",
  ]
    .filter(Boolean)
    .join(" ");

  const scrollToSection = useCallback(
    (hash) => {
      closeAll();
      const targetPath = `erp#${hash}`;
      navigate(targetPath);
      setTimeout(() => {
        const el = document.getElementById(hash);
        if (el) {
          const yCoordinate = el.getBoundingClientRect().top + window.scrollY;
          const yOffset = -80;
          window.scrollTo({ top: yCoordinate + yOffset, behavior: "smooth" });
        }
      }, 100);
    },
    [navigate, closeAll],
  );

  const renderServiceDropdownItems = () =>
    servicesItems.map((item) => {
      const IconComp = ServiceIcons[item.label];
      const brandColor = serviceBrandColors[item.label];
      return (
        <Link
          key={item.label}
          to={`services#${item.hash}`}
          className={styles.dropdownItem}
          onClick={closeAll}
          style={{ "--brand-color": brandColor }}
        >
          <span className={styles.dropdownItemIcon}>
            {IconComp ? <IconComp width="18" height="18" /> : null}
          </span>
          <div className={styles.dropdownItemContent}>
            <span className={styles.dropdownItemTitle}>{item.label}</span>
          </div>
          <svg
            className={styles.dropdownItemArrow}
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
          >
            <path
              d="M6 4L10 8L6 12"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </Link>
      );
    });

  const renderExpertiseMegaMenu = () => (
    <li
      className={styles.navItem}
      onMouseEnter={() => handleItemMouseEnter("expertise")}
      onMouseLeave={handleNavMouseLeave}
    >
      <span
        className={`${styles.navButton} ${openDropdown === "expertise" ? styles.active : ""} ${
          isPathStarting(location.pathname, "/nextgen/expertise")
            ? styles.active
            : ""
        }`}
        aria-haspopup="menu"
        aria-expanded={openDropdown === "expertise"}
      >
        <span className={styles.linkText}>Technical Expertise</span>
        <ChevronIcon isOpen={openDropdown === "expertise"} />
      </span>

      <div
        className={`${styles.megaMenu} ${openDropdown === "expertise" ? styles.megaMenuVisible : ""}`}
        onMouseEnter={() => {
          if (dropdownTimeout.current) clearTimeout(dropdownTimeout.current);
        }}
      >
        <div className={styles.megaMenuInner}>
          <div className={styles.megaMenuColumns}>
            <div className={styles.megaMenuSection}>
              <span className={styles.megaMenuSectionTitle}>Technologies</span>
              <div className={styles.techGrid}>
                {technologyItems.map((item) => {
                  const IconComponent = getTechIcon(item.label);
                  const brandColor = techBrandColors[item.label];
                  return (
                    <Link
                      key={item.label}
                      to={`expertise#${item.hash}`}
                      className={styles.techItem}
                      onClick={closeAll}
                      style={{ "--brand-color": brandColor }}
                    >
                      <span className={styles.techItemIcon}>
                        {IconComponent && <IconComponent />}
                      </span>
                      <span className={styles.techItemLabel}>{item.label}</span>
                    </Link>
                  );
                })}
              </div>
            </div>

            <div className={styles.megaMenuSection}>
              <span className={styles.megaMenuSectionTitle}>Industries</span>
              <div className={styles.industriesCard}>
                {industryItems.map((item) => {
                  const IconComponent = getIndustryIcon(item.label);
                  const brandColor = industryBrandColors[item.label];
                  return (
                    <button
                      key={item.label}
                      className={styles.industryItem}
                      style={{ "--brand-color": brandColor }}
                    >
                      <span className={styles.industryItemIcon}>
                        {IconComponent && <IconComponent />}
                      </span>
                      <span className={styles.industryItemLabel}>
                        {item.label}
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </li>
  );

  const renderErpItems = () =>
    erpProducts.map((item) => {
      const IconComp = getErpIcon(item.label);
      const brandColor = erpBrandColors[item.label];
      const isComingSoon = !ACTIVE_ERP_MODULES.includes(item.label);

      return (
        <button
          key={item.label}
          className={`${styles.dropdownItem} ${isComingSoon ? styles.comingSoonItem : ""}`}
          onClick={() => scrollToSection(item.hash)}
          style={{ "--brand-color": brandColor }}
        >
          <span className={styles.dropdownItemIcon}>
            {IconComp ? <IconComp width="18" height="18" /> : null}
          </span>
          <div className={styles.dropdownItemContent}>
            <span className={styles.dropdownItemTitle}>{item.label}</span>
          </div>
          {isComingSoon ? (
            <span className={styles.comingSoonBadge}>Coming Soon</span>
          ) : (
            <svg
              className={styles.dropdownItemArrow}
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
            >
              <path
                d="M6 4L10 8L6 12"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          )}
        </button>
      );
    });

  const renderNavDropdown = (key, label, content, isWide) => (
    <li
      className={styles.navItem}
      onMouseEnter={() => handleItemMouseEnter(key)}
      onMouseLeave={handleNavMouseLeave}
    >
      <span
        className={`${styles.navButton} ${openDropdown === key ? styles.active : ""} ${
          isPathStarting(location.pathname, `/nextgen/${key}`)
            ? styles.active
            : ""
        }`}
        aria-haspopup="menu"
        aria-expanded={openDropdown === key}
      >
        <span className={styles.linkText}>{label}</span>
        <ChevronIcon isOpen={openDropdown === key} />
      </span>

      <div
        className={`${styles.dropdown} ${openDropdown === key ? styles.dropdownVisible : ""} ${
          isWide ? styles.dropdownWide : ""
        }`}
        onMouseEnter={() => {
          if (dropdownTimeout.current) clearTimeout(dropdownTimeout.current);
        }}
      >
        <div className={styles.dropdownInner}>
          <div className={styles.dropdownHeader}>
            <span className={styles.dropdownHeaderLabel}>{label}</span>
          </div>
          <div
            className={`${styles.dropdownGrid} ${isWide ? styles.dropdownGridWide : ""}`}
          >
            {content}
          </div>
        </div>
      </div>
    </li>
  );

  return (
    <>
      <header className={headerClasses}>
        <div className={styles.headerContainer}>
          <div className={styles.logoSection}>
            <Link
              to=""
              className={styles.logo}
              onClick={() => setIsMenuOpen(false)}
            >
              <img
                src={artemisLogo}
                alt="Artemis Logo"
                className={styles.logoIcon}
              />
              <span className={styles.logoTitle}>Artemis NextGen</span>
            </Link>
          </div>

          <nav className={styles.navDesktop} onMouseLeave={handleNavMouseLeave}>
            <ul className={styles.navList}>
              <li
                className={styles.navItem}
                onMouseEnter={() => {
                  if (dropdownTimeout.current)
                    clearTimeout(dropdownTimeout.current);
                  setOpenDropdown(null);
                }}
              >
                <Link
                  to=""
                  className={`${styles.navLink} ${isPathActive(location.pathname, "/nextgen") || isPathActive(location.pathname, "/nextgen/") ? styles.active : ""}`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  <span className={styles.linkText}>Home</span>
                </Link>
              </li>

              {renderNavDropdown(
                "services",
                "Services",
                renderServiceDropdownItems(),
                true,
              )}
              {renderExpertiseMegaMenu()}
              {renderNavDropdown(
                "erp",
                "Our ERP Products",
                renderErpItems(),
                true,
              )}

              <li
                className={styles.navItem}
                onMouseEnter={() => {
                  if (dropdownTimeout.current)
                    clearTimeout(dropdownTimeout.current);
                  setOpenDropdown(null);
                }}
              >
                <Link
                  to="contact"
                  className={`${styles.navLink} ${isPathActive(location.pathname, "/nextgen/contact") ? styles.active : ""}`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  <span className={styles.linkText}>Contact Us</span>
                </Link>
              </li>
              <li
                className={styles.navItem}
                onMouseEnter={() => {
                  if (dropdownTimeout.current)
                    clearTimeout(dropdownTimeout.current);
                  setOpenDropdown(null);
                }}
              >
                <Link
                  to="careers"
                  className={`${styles.navLink} ${isPathActive(location.pathname, "/nextgen/careers") ? styles.active : ""}`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  <span className={styles.linkText}>Careers</span>
                </Link>
              </li>

              <li
                className={styles.navItem}
                onMouseEnter={() => {
                  if (dropdownTimeout.current)
                    clearTimeout(dropdownTimeout.current);
                  setOpenDropdown(null);
                }}
              >
                <Link
                  to="about"
                  className={`${styles.navLink} ${isPathActive(location.pathname, "/nextgen/about") ? styles.active : ""}`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  <span className={styles.linkText}>About Us</span>
                </Link>
              </li>
              <li
                className={styles.navItem}
                onMouseEnter={() => {
                  if (dropdownTimeout.current)
                    clearTimeout(dropdownTimeout.current);
                  setOpenDropdown(null);
                }}
              >
                <Link
                  to="our-team"
                  className={`${styles.navLink} ${location.pathname === "/nextgen/our-team" ? styles.active : ""}`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  <span className={styles.linkText}>Our Team</span>
                </Link>
              </li>
            </ul>
          </nav>

          <div className={styles.ctaSection}>
            <button
              className={styles.ctaPrimary}
              onClick={() => handleNavClick("contact")}
            >
              Get in Touch
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                <path
                  d="M1 7H13M13 7L7 1M13 7L7 13"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
          </div>

          <button
            className={`${styles.menuButton} ${isMenuOpen ? styles.menuButtonOpen : ""}`}
            onClick={() => setIsMenuOpen((prev) => !prev)}
            aria-label="Toggle menu"
            aria-expanded={isMenuOpen}
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
        <div className={styles.headerGlow}></div>
      </header>

      {typeof document !== "undefined" &&
        createPortal(
          <>
            <div
              className={`${styles.backdrop} ${isMenuOpen ? styles.backdropOpen : ""}`}
              onClick={() => setIsMenuOpen(false)}
            />
            <div
              className={`${styles.mobileMenu} ${isMenuOpen ? styles.mobileMenuOpen : ""}`}
              role="dialog"
              aria-modal={isMenuOpen}
            >
              <div className={styles.mobileMenuContent}>
                <button
                  className={styles.closeButton}
                  onClick={() => setIsMenuOpen(false)}
                  aria-label="Close menu"
                >
                  ✕
                </button>

                <ul className={styles.mobileNavList}>
                  <li className={styles.mobileNavItem}>
                    <Link
                      to=""
                      className={`${styles.mobileNavLink} ${isPathActive(location.pathname, "/nextgen") || isPathActive(location.pathname, "/nextgen/") ? styles.active : ""}`}
                      onClick={closeAll}
                    >
                      Home
                    </Link>
                  </li>

                  <li className={styles.mobileNavItem}>
                    <button
                      className={styles.mobileNavButton}
                      onClick={() =>
                        setOpenMobileDropdown((prev) =>
                          prev === "services" ? null : "services",
                        )
                      }
                    >
                      <span>Services</span>
                      <ChevronIcon isOpen={openMobileDropdown === "services"} />
                    </button>
                    <div
                      className={`${styles.mobileDropdown} ${
                        openMobileDropdown === "services"
                          ? styles.mobileDropdownOpen
                          : ""
                      }`}
                    >
                      {servicesItems.map((item) => {
                        const IconComp = ServiceIcons[item.label];
                        const brandColor = serviceBrandColors[item.label];
                        return (
                          <Link
                            key={item.label}
                            to={`/nextgen/services#${item.hash}`}
                            className={styles.mobileSubItem}
                            onClick={closeAll}
                            style={{ "--brand-color": brandColor }}
                          >
                            <span className={styles.mobileItemIcon}>
                              {IconComp ? (
                                <IconComp width="16" height="16" />
                              ) : null}
                            </span>
                            <span className={styles.mobileItemTitle}>
                              {item.label}
                            </span>
                          </Link>
                        );
                      })}
                    </div>
                  </li>

                  <li className={styles.mobileNavItem}>
                    <button
                      className={styles.mobileNavButton}
                      onClick={() =>
                        setOpenMobileDropdown((prev) =>
                          prev === "expertise" ? null : "expertise",
                        )
                      }
                    >
                      <span>Expertise</span>
                      <ChevronIcon
                        isOpen={openMobileDropdown === "expertise"}
                      />
                    </button>
                    <div
                      className={`${styles.mobileDropdown} ${
                        openMobileDropdown === "expertise"
                          ? styles.mobileDropdownOpen
                          : ""
                      }`}
                    >
                      <div className={styles.mobileSectionLabel}>
                        Technologies
                      </div>
                      {technologyItems.map((item) => {
                        const IconComponent = getTechIcon(item.label);
                        const brandColor = techBrandColors[item.label];
                        return (
                          <Link
                            key={item.label}
                            to={`/nextgen/expertise#${item.hash}`}
                            className={styles.mobileSubItem}
                            onClick={closeAll}
                            style={{ "--brand-color": brandColor }}
                          >
                            <span className={styles.mobileItemIcon}>
                              {IconComponent && <IconComponent />}
                            </span>
                            <span className={styles.mobileItemTitle}>
                              {item.label}
                            </span>
                          </Link>
                        );
                      })}
                      <div
                        className={`${styles.mobileSectionLabel} ${styles.mobileSectionLabelSpaced}`}
                      >
                        Industries
                      </div>
                      {industryItems.map((item) => {
                        const IconComponent = getIndustryIcon(item.label);
                        const brandColor = industryBrandColors[item.label];
                        return (
                          <button
                            key={item.label}
                            className={styles.mobileSubItem}
                            onClick={() => {
                              setIsMenuOpen(false);
                            }}
                            style={{ "--brand-color": brandColor }}
                          >
                            <span className={styles.mobileItemIcon}>
                              {IconComponent && <IconComponent />}
                            </span>
                            <span className={styles.mobileItemTitle}>
                              {item.label}
                            </span>
                          </button>
                        );
                      })}
                    </div>
                  </li>

                  <li className={styles.mobileNavItem}>
                    <button
                      className={styles.mobileNavButton}
                      onClick={() =>
                        setOpenMobileDropdown((prev) =>
                          prev === "erp" ? null : "erp",
                        )
                      }
                    >
                      <span>Our ERP Products</span>
                      <ChevronIcon isOpen={openMobileDropdown === "erp"} />
                    </button>
                    <div
                      className={`${styles.mobileDropdown} ${
                        openMobileDropdown === "erp"
                          ? styles.mobileDropdownOpen
                          : ""
                      }`}
                    >
                      {erpProducts.map((item) => {
                        const IconComp = getErpIcon(item.label);
                        const brandColor = erpBrandColors[item.label];
                        const isComingSoon = !ACTIVE_ERP_MODULES.includes(
                          item.label,
                        );
                        return (
                          <button
                            key={item.label}
                            className={`${styles.mobileSubItem} ${isComingSoon ? styles.mobileComingSoonItem : ""}`}
                            onClick={() => scrollToSection(item.hash)}
                            style={{ "--brand-color": brandColor }}
                          >
                            <span className={styles.mobileItemIcon}>
                              {IconComp ? (
                                <IconComp width="16" height="16" />
                              ) : null}
                            </span>
                            <span className={styles.mobileItemTitle}>
                              {item.label}
                            </span>
                            {isComingSoon && (
                              <span className={styles.comingSoonBadge}>
                                Coming Soon
                              </span>
                            )}
                          </button>
                        );
                      })}
                    </div>
                  </li>

                  <li className={styles.mobileNavItem}>
                    <Link
                      to="contact"
                      className={`${styles.mobileNavLink} ${isPathActive(location.pathname, "/nextgen/contact") ? styles.active : ""}`}
                      onClick={closeAll}
                    >
                      Contact Us
                    </Link>
                  </li>
                  <li className={styles.mobileNavItem}>
                    <Link
                      to="careers"
                      className={`${styles.mobileNavLink} ${isPathActive(location.pathname, "/nextgen/careers") ? styles.active : ""}`}
                      onClick={closeAll}
                    >
                      Careers
                    </Link>
                  </li>
                  <li className={styles.mobileNavItem}>
                    <Link
                      to="about"
                      className={`${styles.mobileNavLink} ${isPathActive(location.pathname, "/nextgen/about") ? styles.active : ""}`}
                      onClick={closeAll}
                    >
                      About Us
                    </Link>
                  </li>
                  <li className={styles.mobileNavItem}>
                    <Link
                      to="our-team"
                      className={`${styles.mobileNavLink} ${location.pathname === "/nextgen/our-team" ? styles.active : ""}`}
                      onClick={closeAll}
                    >
                      Our Team
                    </Link>
                  </li>
                </ul>
              </div>

              <div className={styles.mobileCta}>
                <button
                  className={styles.mobileCtaPrimary}
                  onClick={() => {
                    handleNavClick("contact");
                    setIsMenuOpen(false);
                  }}
                >
                  Get in Touch
                </button>
              </div>
            </div>
          </>,
          document.body,
        )}
    </>
  );
};

export default Header;
