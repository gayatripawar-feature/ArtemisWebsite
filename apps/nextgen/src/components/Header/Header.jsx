import React, { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import { Link, useNavigate, useLocation } from "react-router-dom";
import Button from "../Button/Button";
import artemis from "../../assets/images/artemis.png";
import styles from "./Header.module.css";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  // For mobile: track which dropdown is open
  const [openMobileDropdown, setOpenMobileDropdown] = useState(null);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    setIsLoaded(true);
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
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
        if (isMenuOpen) setIsMenuOpen(false);
        if (openDropdown) setOpenDropdown(null);
      }
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [isMenuOpen, openDropdown]);

  const handleNavClick = (path) => {
    navigate(path);
    setIsMenuOpen(false);
    setOpenDropdown(null);
  };

  const toggleDropdown = (key) => {
    setOpenDropdown((prev) => (prev === key ? null : key));
  };


  const handleItemMouseEnter = (key) => {
    // Open the hovered dropdown (switches if another was open).
    setOpenDropdown(key);
  };

  // Close dropdown when keyboard focus leaves the nav item entirely
  const handleItemBlur = (e) => {
    if (!e.currentTarget.contains(e.relatedTarget)) {
      setOpenDropdown(null);
    }
  };

  useEffect(() => {
    const handleDocClick = (e) => {
      const isInsideDropdown = !!e.target.closest(`.${styles.dropdown}`);
      const isInsideButton = !!e.target.closest(`.${styles.navButton}`);
      if (!isInsideDropdown && !isInsideButton && openDropdown) {
        setOpenDropdown(null);
      }
    };

    if (openDropdown) document.addEventListener("click", handleDocClick);
    return () => document.removeEventListener("click", handleDocClick);
  }, [openDropdown]);

  return (
    <header
      className={`${styles.header} ${isScrolled ? styles.scrolled : ""} ${isLoaded ? styles.loaded : ""}`}
    >
      <div className={styles.headerContainer}>
        {/* Logo Section */}
        <div className={styles.logoSection}>
          <div className={styles.logo} onClick={() => handleNavClick("/")}>
            <div className={styles.logoIcon}>
              <img
                src={artemis}
                alt="NextGen Logo"
                className={styles.logoImage}
              />
            </div>
            <div className={styles.logoText}>
              <h1 className={styles.logoTitle}> Artemis NextGen</h1>
              {/* Tagline */}
              {/* <p className={styles.logoTagline}></p> */}
            </div>
          </div>
        </div>

        {/* Desktop Navigation */}
        <nav
          className={styles.navDesktop}
          onMouseLeave={() => openDropdown && setOpenDropdown(null)}
        >
          <ul className={styles.navList}>
            {/* Home */}
            <li
              className={styles.navItem}
              onMouseEnter={() => openDropdown && setOpenDropdown(null)}
            >
              <Link
                to="/"
                className={`${styles.navLink} ${location.pathname === "/" ? styles.active : ""}`}
                onClick={() => setIsMenuOpen(false)}
              >
                <span className={styles.linkText}>Home</span>
                <span className={styles.linkUnderline}></span>
              </Link>
            </li>

            {/* Services */}
            <li
              className={`${styles.navItem} ${openDropdown === "services" ? styles.dropdownOpen : ""}`}
              onMouseEnter={() => handleItemMouseEnter("services")}
              onFocus={() => setOpenDropdown("services")}
              onBlur={handleItemBlur}
            >
              <span
                className={`${styles.navButton} ${location.pathname.startsWith("/services") ? styles.active : ""} ${styles.nonClickable}`}
                aria-haspopup="menu"
                aria-controls="services-menu"
                aria-expanded={openDropdown === "services"}
                style={{ pointerEvents: 'none', userSelect: 'none' }}
              >
                  <span className={styles.linkText}>Services</span>
                <span className={styles.linkUnderline}></span>
                <span
                  className={`${styles.chevron} ${openDropdown === "services" ? styles.chevronOpen : ""}`}
                  aria-hidden="true"
                >
                  ▾
                </span>
              </span>

              <div
                id="services-menu"
                className={styles.dropdown}
                role="menu"
                aria-label="Services"
                aria-labelledby="services-toggle"
              >
                <ul className={styles.dropdownList}>
                  <li
                    className={styles.dropdownItem}
                    role="menuitem"
                    tabIndex={0}
                    onClick={() =>
                      handleNavClick("/services/custom-software-development")
                    }
                    onKeyDown={(e) =>
                      (e.key === "Enter" || e.key === " ") &&
                      handleNavClick("/services/custom-software-development")
                    }
                  >

                    <span className={styles.dropdownItemIcon}>💻</span>
                    <div className={styles.dropdownText}>
                      <span className="label">Custom Software Development</span>

                    </div>
                  </li>

                  <li
                    className={styles.dropdownItem}
                    role="menuitem"
                    tabIndex={0}
                    onClick={() =>
                      handleNavClick("/services/erp-enterprise-solutions")
                    }
                    onKeyDown={(e) =>
                      (e.key === "Enter" || e.key === " ") &&
                      handleNavClick("/services/erp-enterprise-solutions")
                    }
                  >
                    <span className={styles.dropdownItemIcon}>🏢</span>
                    <div className={styles.dropdownText}>
                      <span className="label">ERP & Enterprise Solutions</span>

                    </div>
                  </li>

                  <li
                    className={styles.dropdownItem}
                    role="menuitem"
                    tabIndex={0}
                    onClick={() =>
                      handleNavClick("/services/website-design-development")
                    }
                    onKeyDown={(e) =>
                      (e.key === "Enter" || e.key === " ") &&
                      handleNavClick("/services/website-design-development")
                    }
                  >
                    <span className={styles.dropdownItemIcon}>🌐</span>
                    <div className={styles.dropdownText}>
                      <span className="label">
                        Website Design & Development
                      </span>

                    </div>
                  </li>

                  <li
                    className={styles.dropdownItem}
                    role="menuitem"
                    tabIndex={0}
                    onClick={() =>
                      handleNavClick("/services/web-application-development")
                    }
                    onKeyDown={(e) =>
                      (e.key === "Enter" || e.key === " ") &&
                      handleNavClick("/services/web-application-development")
                    }
                  >
                    <span className={styles.dropdownItemIcon}>🖥️</span>
                    <div className={styles.dropdownText}>
                      <span className="label">Web Application Development</span>

                    </div>
                  </li>

                  <li
                    className={styles.dropdownItem}
                    role="menuitem"
                    tabIndex={0}
                    onClick={() =>
                      handleNavClick("/services/mobile-app-development")
                    }
                    onKeyDown={(e) =>
                      (e.key === "Enter" || e.key === " ") &&
                      handleNavClick("/services/mobile-app-development")
                    }
                  >
                    <span className={styles.dropdownItemIcon}>📱</span>
                    <div className={styles.dropdownText}>
                      <span className="label">Mobile App Development</span>

                    </div>
                  </li>

                  <li
                    className={styles.dropdownItem}
                    role="menuitem"
                    tabIndex={0}
                    onClick={() =>
                      handleNavClick("/services/product-engineering-mvp")
                    }
                    onKeyDown={(e) =>
                      (e.key === "Enter" || e.key === " ") &&
                      handleNavClick("/services/product-engineering-mvp")
                    }
                  >
                    <span className={styles.dropdownItemIcon}>🚀</span>
                    <div className={styles.dropdownText}>
                      <span className="label">
                        Product Engineering & MVP Development
                      </span>

                    </div>
                  </li>

                  <li
                    className={styles.dropdownItem}
                    role="menuitem"
                    tabIndex={0}
                    onClick={() => handleNavClick("/services/ui-ux-design")}
                    onKeyDown={(e) =>
                      (e.key === "Enter" || e.key === " ") &&
                      handleNavClick("/services/ui-ux-design")
                    }
                  >
                    <span className={styles.dropdownItemIcon}>🎨</span>
                    <div className={styles.dropdownText}>
                      <span className="label">UI / UX Design Services</span>

                    </div>
                  </li>

                  <li
                    className={styles.dropdownItem}
                    role="menuitem"
                    tabIndex={0}
                    onClick={() => handleNavClick("/services/cloud-devops")}
                    onKeyDown={(e) =>
                      (e.key === "Enter" || e.key === " ") &&
                      handleNavClick("/services/cloud-devops")
                    }
                  >
                    <span className={styles.dropdownItemIcon}>☁️</span>
                    <div className={styles.dropdownText}>
                      <span className="label">Cloud Solutions & DevOps</span>

                    </div>
                  </li>

                  <li
                    className={styles.dropdownItem}
                    role="menuitem"
                    tabIndex={0}
                    onClick={() =>
                      handleNavClick("/services/quality-assurance-testing")
                    }
                    onKeyDown={(e) =>
                      (e.key === "Enter" || e.key === " ") &&
                      handleNavClick("/services/quality-assurance-testing")
                    }
                  >
                    <span className={styles.dropdownItemIcon}>✅</span>
                    <div className={styles.dropdownText}>
                      <span className="label">Quality Assurance & Testing</span>

                    </div>
                  </li>

                  <li
                    className={styles.dropdownItem}
                    role="menuitem"
                    tabIndex={0}
                    onClick={() =>
                      handleNavClick("/services/maintenance-support")
                    }
                    onKeyDown={(e) =>
                      (e.key === "Enter" || e.key === " ") &&
                      handleNavClick("/services/maintenance-support")
                    }
                  >
                    <span className={styles.dropdownItemIcon}>🛠️</span>
                    <div className={styles.dropdownText}>
                      <span className="label">Maintenance & Support</span>

                    </div>
                  </li>
                </ul>
              </div>
            </li>

            {/* Expertise */}
            <li
              className={`${styles.navItem} ${openDropdown === "expertise" ? styles.dropdownOpen : ""}`}
              onMouseEnter={() => handleItemMouseEnter("expertise")}
              onFocus={() => setOpenDropdown("expertise")}
              onBlur={handleItemBlur}
            >
              <span
                className={`${styles.navButton} ${location.pathname.startsWith("/expertise") ? styles.active : ""} ${styles.nonClickable}`}
                aria-haspopup="menu"
                aria-controls="expertise-menu"
                aria-expanded={openDropdown === "expertise"}
                style={{ pointerEvents: 'none', userSelect: 'none' }}
              >
                  <span className={styles.linkText}>Expertise</span>
                <span className={styles.linkUnderline}></span>
                <span
                  className={`${styles.chevron} ${openDropdown === "expertise" ? styles.chevronOpen : ""}`}
                  aria-hidden="true"
                >
                  ▾
                </span>
              </span>

              <div
                id="expertise-menu"
                className={styles.dropdown}
                role="menu"
                aria-label="Expertise"
                aria-labelledby="expertise-toggle"
              >
                <ul className={styles.dropdownList}>
                  <li
                    className={styles.dropdownItem}
                    role="menuitem"
                    tabIndex={0}
                    onClick={() => handleNavClick("/expertise/cloud")}
                    onKeyDown={(e) =>
                      (e.key === "Enter" || e.key === " ") &&
                      handleNavClick("/expertise/cloud")
                    }
                  >
                    <span className={styles.dropdownItemIcon}>☁️</span>
                    <span className="label">Cloud Modernization</span>
                  </li>
                  <li
                    className={styles.dropdownItem}
                    role="menuitem"
                    tabIndex={0}
                    onClick={() => handleNavClick("/expertise/data")}
                    onKeyDown={(e) =>
                      (e.key === "Enter" || e.key === " ") &&
                      handleNavClick("/expertise/data")
                    }
                  >
                    <span className={styles.dropdownItemIcon}>📊</span>
                    <span className="label">Data & Analytics</span>
                  </li>
                  <li
                    className={styles.dropdownItem}
                    role="menuitem"
                    tabIndex={0}
                    onClick={() => handleNavClick("/expertise/security")}
                    onKeyDown={(e) =>
                      (e.key === "Enter" || e.key === " ") &&
                      handleNavClick("/expertise/security")
                    }
                  >
                    <span className={styles.dropdownItemIcon}>🔒</span>
                    <span className="label">Security</span>
                  </li>
                </ul>
              </div>
            </li>

            {/* ERP Nav Item - Custom Dropdown */}
            <li
              className={`${styles.navItem} ${openDropdown === "products" ? styles.dropdownOpen : ""}`}
              onMouseEnter={() => handleItemMouseEnter("products")}
              onFocus={() => setOpenDropdown("products")}
              onBlur={handleItemBlur}
            >
              <span
                className={`${styles.navButton} ${location.pathname.startsWith("/products") ? styles.active : ""} ${styles.nonClickable}`}
                aria-haspopup="menu"
                aria-controls="products-menu"
                aria-expanded={openDropdown === "products"}
                style={{ pointerEvents: 'none', userSelect: 'none' }}
              >
                  <span className={styles.linkText}>Our ERP Products</span>
                <span className={styles.linkUnderline}></span>
                <span
                  className={`${styles.chevron} ${openDropdown === "products" ? styles.chevronOpen : ""}`}
                  aria-hidden="true"
                >
                  ▾
                </span>
              </span>

              <div
                id="products-menu"
                className={styles.dropdown}
                role="menu"
                aria-label="Our ERP Products"
                aria-labelledby="products-toggle"
              >
                <ul className={styles.dropdownList}>
                  {[
                    "New Company Creation",
                    "Land Dealing",
                    "Product Development",
                    "Sales Office & Sample Flat",
                    "Marketing & Advertising",
                    "Human Resource Module",
                    "Account Department Module",
                    "Engineering Module",
                    "Inventory Management Module",
                    "Purchase Department Module",
                    "Site Management Module",
                    "Sales Module",
                    "CRM Module",
                    "Training & Implementation"
                  ].map((item, idx) => (
                    <li
                      key={item}
                      className={styles.dropdownItem}
                      role="menuitem"
                      tabIndex={0}
                      onClick={() => handleNavClick(`/products/erp/${item.toLowerCase().replace(/\s|&/g, "-").replace(/-+/g, "-").replace(/[^a-z0-9-]/g, "")}`)}
                      onKeyDown={(e) =>
                        (e.key === "Enter" || e.key === " ") &&
                        handleNavClick(`/products/erp/${item.toLowerCase().replace(/\s|&/g, "-").replace(/-+/g, "-").replace(/[^a-z0-9-]/g, "")}`)
                      }
                    >
                      <span className="label">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </li>

            {/* Contact Us */}
            <li
              className={styles.navItem}
              onMouseEnter={() => openDropdown && setOpenDropdown(null)}
            >
              <Link
                to="/contact"
                className={`${styles.navLink} ${location.pathname === "/contact" ? styles.active : ""}`}
                onClick={() => setIsMenuOpen(false)}
              >
                <span className={styles.linkText}>Contact Us</span>
                <span className={styles.linkUnderline}></span>
              </Link>
            </li>

            {/* Careers */}
            <li
              className={styles.navItem}
              onMouseEnter={() => openDropdown && setOpenDropdown(null)}
            >
              <Link
                to="/careers"
                className={`${styles.navLink} ${location.pathname === "/careers" ? styles.active : ""}`}
                onClick={() => setIsMenuOpen(false)}
              >
                <span className={styles.linkText}>Careers</span>
                <span className={styles.linkUnderline}></span>
              </Link>
            </li>

            {/* About Us */}
            <li
              className={styles.navItem}
              onMouseEnter={() => openDropdown && setOpenDropdown(null)}
            >
              <Link
                to="/about"
                className={`${styles.navLink} ${location.pathname === "/about" ? styles.active : ""}`}
                onClick={() => setIsMenuOpen(false)}
              >
                <span className={styles.linkText}>About Us</span>
                <span className={styles.linkUnderline}></span>
              </Link>
            </li>
          </ul>
        </nav>
        {/* CTA Button */}
        <div className={styles.ctaSection}>
          <Button
            variant="primary"
            onClick={() => handleNavClick("/contact")}
          >
            Get in Touch
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className={`${styles.menuButton} ${isMenuOpen ? styles.open : ""}`}
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
          aria-expanded={isMenuOpen}
          aria-controls="mobile-navigation"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>

      {/* Mobile overlay/backdrop rendered via portal (so it sits above header transform) */}
      {typeof document !== "undefined" &&
        createPortal(
          <>
            <div
              className={`${styles.backdrop} ${isMenuOpen ? styles.open : ""}`}
              onClick={() => setIsMenuOpen(false)}
              aria-hidden={!isMenuOpen}
            />

            <div
              id="mobile-navigation"
              className={`${styles.mobileMenu} ${isMenuOpen ? styles.open : ""}`}
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
                  {/* Home */}
                  <li className={styles.mobileNavItem}>
                    <Link
                      to="/"
                      className={`${styles.mobileNavLink} ${location.pathname === "/" ? styles.active : ""}`}
                      onClick={() => {
                        setIsMenuOpen(false);
                        setOpenMobileDropdown(null);
                      }}
                    >
                      Home
                    </Link>
                  </li>

                  {/* Services */}
                  <li className={styles.mobileNavItem}>
                    <details className={styles.mobileDetails} open={openMobileDropdown === "services"}>
                      <summary
                        onClick={e => {
                          e.preventDefault();
                          setOpenMobileDropdown(openMobileDropdown === "services" ? null : "services");
                        }}
                        style={{ cursor: "pointer" }}
                      >Services</summary>
                      <ul className={styles.mobileSubList}>
                        <li
                          className={styles.mobileSubItem}
                          onClick={() => {
                            handleNavClick(
                              "/services/custom-software-development",
                            );
                            setIsMenuOpen(false);
                          }}
                        >
                          <span className={styles.mobileItemIcon}>💻</span>
                          <div className={styles.mobileItemText}>
                            <span className={styles.mobileItemTitle}>
                              Custom Software Development
                            </span>

                          </div>
                        </li>
                        <li
                          className={styles.mobileSubItem}
                          onClick={() => {
                            handleNavClick(
                              "/services/erp-enterprise-solutions",
                            );
                            setIsMenuOpen(false);
                          }}
                        >
                          <span className={styles.mobileItemIcon}>🏢</span>
                          <div className={styles.mobileItemText}>
                            <span className={styles.mobileItemTitle}>
                              ERP & Enterprise Solutions
                            </span>

                          </div>
                        </li>
                        <li
                          className={styles.mobileSubItem}
                          onClick={() => {
                            handleNavClick(
                              "/services/website-design-development",
                            );
                            setIsMenuOpen(false);
                          }}
                        >
                          <span className={styles.mobileItemIcon}>🌐</span>
                          <div className={styles.mobileItemText}>
                            <span className={styles.mobileItemTitle}>
                              Website Design & Development
                            </span>

                          </div>
                        </li>
                        <li
                          className={styles.mobileSubItem}
                          onClick={() => {
                            handleNavClick(
                              "/services/web-application-development",
                            );
                            setIsMenuOpen(false);
                          }}
                        >
                          <span className={styles.mobileItemIcon}>🖥️</span>
                          <div className={styles.mobileItemText}>
                            <span className={styles.mobileItemTitle}>
                              Web Application Development
                            </span>

                          </div>
                        </li>
                        <li
                          className={styles.mobileSubItem}
                          onClick={() => {
                            handleNavClick("/services/mobile-app-development");
                            setIsMenuOpen(false);
                          }}
                        >
                          <span className={styles.mobileItemIcon}>📱</span>
                          <div className={styles.mobileItemText}>
                            <span className={styles.mobileItemTitle}>
                              Mobile App Development
                            </span>

                          </div>
                        </li>
                        <li
                          className={styles.mobileSubItem}
                          onClick={() => {
                            handleNavClick("/services/product-engineering-mvp");
                            setIsMenuOpen(false);
                          }}
                        >
                          <span className={styles.mobileItemIcon}>🚀</span>
                          <div className={styles.mobileItemText}>
                            <span className={styles.mobileItemTitle}>
                              Product Engineering & MVP Development
                            </span>

                          </div>
                        </li>
                        <li
                          className={styles.mobileSubItem}
                          onClick={() => {
                            handleNavClick("/services/ui-ux-design");
                            setIsMenuOpen(false);
                          }}
                        >
                          <span className={styles.mobileItemIcon}>🎨</span>
                          <div className={styles.mobileItemText}>
                            <span className={styles.mobileItemTitle}>
                              UI / UX Design Services
                            </span>

                          </div>
                        </li>
                        <li
                          className={styles.mobileSubItem}
                          onClick={() => {
                            handleNavClick("/services/cloud-devops");
                            setIsMenuOpen(false);
                          }}
                        >
                          <span className={styles.mobileItemIcon}>☁️</span>
                          <div className={styles.mobileItemText}>
                            <span className={styles.mobileItemTitle}>
                              Cloud Solutions & DevOps
                            </span>

                          </div>
                        </li>
                        <li
                          className={styles.mobileSubItem}
                          onClick={() => {
                            handleNavClick(
                              "/services/quality-assurance-testing",
                            );
                            setIsMenuOpen(false);
                          }}
                        >
                          <span className={styles.mobileItemIcon}>✅</span>
                          <div className={styles.mobileItemText}>
                            <span className={styles.mobileItemTitle}>
                              Quality Assurance & Testing
                            </span>

                          </div>
                        </li>
                        <li
                          className={styles.mobileSubItem}
                          onClick={() => {
                            handleNavClick("/services/maintenance-support");
                            setIsMenuOpen(false);
                          }}
                        >
                          <span className={styles.mobileItemIcon}>🛠️</span>
                          <div className={styles.mobileItemText}>
                            <span className={styles.mobileItemTitle}>
                              Maintenance & Support
                            </span>

                          </div>
                        </li>
                      </ul>
                    </details>
                  </li>
                  {/* Expertise */}
                  <li className={styles.mobileNavItem}>
                    <details className={styles.mobileDetails} open={openMobileDropdown === "expertise"}>
                      <summary
                        onClick={e => {
                          e.preventDefault();
                          setOpenMobileDropdown(openMobileDropdown === "expertise" ? null : "expertise");
                        }}
                        style={{ cursor: "pointer" }}
                      >Expertise</summary>
                      <ul className={styles.mobileSubList}>
                        <li
                          className={styles.mobileSubItem}
                          onClick={() => {
                            handleNavClick("/expertise/cloud");
                            setIsMenuOpen(false);
                          }}
                        >
                          ☁️ Cloud Modernization
                        </li>
                        <li
                          className={styles.mobileSubItem}
                          onClick={() => {
                            handleNavClick("/expertise/data");
                            setIsMenuOpen(false);
                          }}
                        >
                          📊 Data & Analytics
                        </li>
                        <li
                          className={styles.mobileSubItem}
                          onClick={() => {
                            handleNavClick("/expertise/security");
                            setIsMenuOpen(false);
                          }}
                        >
                          🔒 Security
                        </li>
                      </ul>
                    </details>
                  </li>

                  {/* ERP Nav Item - Custom Dropdown */}
                  <li className={styles.mobileNavItem}>
                    <details className={styles.mobileDetails} open={openMobileDropdown === "products"}>
                      <summary
                        onClick={e => {
                          e.preventDefault();
                          setOpenMobileDropdown(openMobileDropdown === "products" ? null : "products");
                        }}
                        style={{ cursor: "pointer" }}
                      >Our ERP Products</summary>
                      <ul className={styles.mobileSubList}>
                        {[
                          "New Company Creation",
                          "Land Dealing",
                          "Product Development",
                          "Sales Office & Sample Flat",
                          "Marketing & Advertising",
                          "Human Resource Module",
                          "Account Department Module",
                          "Engineering Module",
                          "Inventory Management Module",
                          "Purchase Department Module",
                          "Site Management Module",
                          "Sales Module",
                          "CRM Module",
                          "Training & Implementation"
                        ].map((item) => (
                          <li
                            key={item}
                            className={styles.mobileSubItem}
                            onClick={() => {
                              handleNavClick(`/products/erp/${item.toLowerCase().replace(/\s|&/g, "-").replace(/-+/g, "-").replace(/[^a-z0-9-]/g, "")}`);
                              setIsMenuOpen(false);
                            }}
                          >
                            {item}
                          </li>
                        ))}
                      </ul>
                    </details>
                  </li>

                  {/* Contact Us */}
                  <li className={styles.mobileNavItem}>
                    <Link
                      to="/contact"
                      className={`${styles.mobileNavLink} ${location.pathname === "/contact" ? styles.active : ""}`}
                      onClick={() => {
                        setIsMenuOpen(false);
                        setOpenMobileDropdown(null);
                      }}
                    >
                      Contact Us
                    </Link>
                  </li>

                  {/* Careers */}
                  <li className={styles.mobileNavItem}>
                    <Link
                      to="/careers"
                      className={`${styles.mobileNavLink} ${location.pathname === "/careers" ? styles.active : ""}`}
                      onClick={() => {
                        setIsMenuOpen(false);
                        setOpenMobileDropdown(null);
                      }}
                    >
                      Careers
                    </Link>
                  </li>

                  {/* About Us */}
                  <li className={styles.mobileNavItem}>
                    <Link
                      to="/about"
                      className={`${styles.mobileNavLink} ${location.pathname === "/about" ? styles.active : ""}`}
                      onClick={() => {
                        setIsMenuOpen(false);
                        setOpenMobileDropdown(null);
                      }}
                    >
                      About Us
                    </Link>
                  </li>
                </ul>
              </div>

              {/* CTA placed outside content so it can be anchored to bottom of overlay */}
              <div className={styles.mobileCta}>
                <Button
                  variant="primary"
                  onClick={() => {
                    handleNavClick("/contact");
                    setIsMenuOpen(false);
                  }}
                  className={styles.mobileCtaButton}
                >
                  Get in Touch
                </Button>
              </div>
            </div>
          </>,
          document.body,
        )}

      {/* Header Glow Effect */}
      <div className={styles.headerGlow}></div>
    </header>
  );
};

export default Header;
