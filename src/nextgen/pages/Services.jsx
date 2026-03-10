import React, { useState, useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";
import styles from "./Services.module.css";

import heroImage from "../assets/images/ServicePage/services-hero.jpg";
import PageBanner from "../components/PageBanner";

import serviceSoftware from "../assets/images/ServicePage/service-software.jpg";
import serviceErp from "../assets/images/ServicePage/service-erp.jpg";
import serviceWebsite from "../assets/images/ServicePage/service-website.jpg";
import serviceWebapp from "../assets/images/ServicePage/service-webapp.jpg";
import serviceMobile from "../assets/images/ServicePage/service-mobile.jpg";
import serviceMvp from "../assets/images/ServicePage/service-mvp.jpg";
import serviceUiux from "../assets/images/ServicePage/service-uiux.jpg";
import serviceCloud from "../assets/images/ServicePage/service-cloud.jpg";
import serviceQa from "../assets/images/ServicePage/service-qa.jpg";
import serviceMaintenance from "../assets/images/ServicePage/service-maintenance.jpg";

const servicesData = [
  {
    id: "custom-software-development",
    title: "Custom Software Development",
    description:
      "We build tailor-made software solutions aligned with your business workflows — secure, scalable, and built for the long term.",
    image: serviceSoftware,
    imageLabel: "Development",
    listsTitle: "Includes",
    lists: [
      "Business management systems",
      "Workflow automation platforms",
      "Enterprise dashboards",
      "Internal operation tools",
    ],
    footer: "✔ Secure • Scalable • Long-term maintainable",
  },
  {
    id: "erp-enterprise-solutions",
    title: "ERP & Enterprise Solutions",
    description:
      "We design ERP systems that integrate departments, data, and decisions into one unified platform.",
    image: serviceErp,
    imageLabel: "Enterprise",
    listsTitle: "ERP Capabilities",
    lists: [
      "Project & process management",
      "Sales, CRM & customer lifecycle",
      "Inventory & purchase workflows",
      "Finance & reporting integration",
      "Role-based access & approvals",
    ],
    footer: "🎯 Built for operational control and decision-making.",
  },
  {
    id: "website-design-development",
    title: "Website Design & Development",
    description:
      "We create modern, high-performance websites that represent your brand and convert visitors into customers.",
    image: serviceWebsite,
    imageLabel: "Web Design",
    multiLists: [
      {
        title: "Website Types",
        items: [
          "Corporate & company websites",
          "IT & startup websites",
          "Real estate & project websites",
          "Business portfolios",
          "Landing pages",
        ],
      },
      {
        title: "Key Features",
        items: [
          "Responsive & mobile-first",
          "SEO-optimized structure",
          "Fast loading performance",
          "Clean UI/UX",
          "Easy content management",
        ],
      },
    ],
  },
  {
    id: "web-application-development",
    title: "Web Application Development",
    description:
      "We develop secure, cloud-ready web applications using modern frameworks and cutting-edge technology.",
    image: serviceWebapp,
    imageLabel: "Web Apps",
    multiLists: [
      {
        title: "Technology Stack",
        items: [
          "Frontend: React.js, Angular",
          "Backend: Node.js, ASP.NET Core",
          "Database: MySQL, Azure SQL",
          "Cloud: Microsoft Azure",
        ],
      },
      {
        title: "Use Cases",
        items: [
          "Business portals",
          "Vendor & partner systems",
          "Client dashboards",
          "Data-driven platforms",
        ],
      },
    ],
  },
  {
    id: "mobile-app-development",
    title: "Mobile App Development",
    description:
      "We build reliable mobile apps for businesses and enterprise users with seamless cross-platform experiences.",
    image: serviceMobile,
    imageLabel: "Mobile",
    listsTitle: "Solutions",
    lists: [
      "Sales & CRM mobile apps",
      "Field & site management apps",
      "Approval & reporting apps",
      "Customer engagement apps",
    ],
    footer: "📱 Seamless integration with web & ERP systems.",
  },
  {
    id: "product-engineering-mvp",
    title: "Product Engineering & MVP Development",
    description:
      "Turn your idea into a scalable product with our strategic approach to building MVPs and beyond.",
    image: serviceMvp,
    imageLabel: "Product",
    listsTitle: "Our Approach",
    lists: [
      "Product strategy & architecture",
      "MVP development",
      "Feature scaling",
      "Performance optimization",
    ],
    footer: "🚀 Ideal for startups and innovation-driven companies.",
  },
  {
    id: "ui-ux-design",
    title: "UI / UX Design Services",
    description:
      "We design interfaces that users actually enjoy using — intuitive, beautiful, and purpose-driven.",
    image: serviceUiux,
    imageLabel: "Design",
    listsTitle: "Design Services",
    lists: [
      "Website UI/UX",
      "ERP & dashboard design",
      "Mobile app UI",
      "Wireframes & user journeys",
    ],
    footer: "🎨 Focused on clarity, speed, and usability.",
  },
  {
    id: "cloud-devops",
    title: "Cloud Solutions & DevOps",
    description:
      "We help businesses move to the cloud with confidence — secure, scalable, and always available.",
    image: serviceCloud,
    imageLabel: "Cloud",
    listsTitle: "Services",
    lists: [
      "Cloud migration",
      "Azure hosting & setup",
      "CI/CD pipelines",
      "Backup & disaster recovery",
      "Security & monitoring",
    ],
    footer: "☁️ Reliable infrastructure for growing systems.",
  },
  {
    id: "quality-assurance-testing",
    title: "Quality Assurance & Testing",
    description:
      "We ensure your software works flawlessly — every feature tested, every edge case covered.",
    image: serviceQa,
    imageLabel: "QA Testing",
    listsTitle: "Testing Types",
    lists: [
      "Manual & automation testing",
      "Functional & regression testing",
      "Performance testing",
      "Security testing",
    ],
  },
  {
    id: "maintenance-support",
    title: "Maintenance & Support",
    description:
      "We provide long-term support to keep your systems updated, optimized, and running at peak performance.",
    image: serviceMaintenance,
    imageLabel: "Support",
    listsTitle: "Includes",
    lists: [
      "Bug fixes",
      "Feature enhancements",
      "Performance tuning",
      "AMC & support plans",
    ],
  },
];

const Services = () => {
  const [activeSection, setActiveSection] = useState("");
  const [visibleSections, setVisibleSections] = useState(new Set());
  const [isNearFooter, setIsNearFooter] = useState(false);
  const [isPageBannerVisible, setIsPageBannerVisible] = useState(true);
  const pageBannerRef = useRef(null);
  const location = useLocation();

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          setIsPageBannerVisible(entry.isIntersecting);
        });
      },
      { threshold: 0.1 }
    );

    if (pageBannerRef.current) {
      observer.observe(pageBannerRef.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (location.hash) {
      const id = location.hash.replace("#", "");
      setTimeout(() => {
        const el = document.getElementById(id);
        if (el) {
          const yCoordinate = el.getBoundingClientRect().top + window.scrollY;
          window.scrollTo({ top: yCoordinate - 80, behavior: "smooth" });
        }
      }, 100);
    }
  }, [location.hash]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
            setVisibleSections((prev) => new Set([...prev, entry.target.id]));
          }
        });
      },
      { threshold: 0.15, rootMargin: "-60px 0px 0px 0px" },
    );

    servicesData.forEach((service) => {
      const el = document.getElementById(service.id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const scrollHeight = document.documentElement.scrollHeight;
      const scrollTop = window.scrollY;
      const clientHeight = window.innerHeight;

      // Check if user is within 300px of the bottom of the page (footer area)
      const distanceFromBottom = scrollHeight - (scrollTop + clientHeight);
      setIsNearFooter(distanceFromBottom < 300);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
   useEffect(() => {
      window.scrollTo(0, 0);
    }, []);

  const activeName =
    servicesData.find((s) => s.id === activeSection)?.title || "";

  return (
    <div className={styles.servicesPage}>

      <div ref={pageBannerRef}>
        <PageBanner
          title="Our Services"
          image={heroImage}
          breadcrumbs={[{ label: "Services" }]}
        />
      </div>

      {/* Service Sections */}
      {servicesData.map((service, index) => {
        const isReversed = index % 2 !== 0;
        const isVisible = visibleSections.has(service.id);

        return (
          <section
            key={service.id}
            id={service.id}
            className={`${styles.serviceSection} ${
              index % 2 === 0 ? styles.sectionLight : styles.sectionDark
            }`}
          >
            <div
              className={`${styles.sectionInner} ${
                isReversed ? styles.sectionReversed : ""
              }`}
            >
              {/* Content Side */}
              <div
                className={`${styles.serviceContent} ${
                  isVisible ? styles.visible : ""
                }`}
              >

                <h2 className={styles.serviceTitle}>{service.title}</h2>
                <p className={styles.serviceDescription}>
                  {service.description}
                </p>

                {service.lists && (
                  <div className={styles.listBlock}>
                    <h3 className={styles.listHeading}>{service.listsTitle}</h3>
                    <ul className={styles.list}>
                      {service.lists.map((item) => (
                        <li key={item} className={styles.listItem}>
                          <span className={styles.listBullet}>▸</span>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {service.multiLists && (
                  <div className={styles.multiListGrid}>
                    {service.multiLists.map((block) => (
                      <div key={block.title} className={styles.listBlock}>
                        <h3 className={styles.listHeading}>{block.title}</h3>
                        <ul className={styles.list}>
                          {block.items.map((item) => (
                            <li key={item} className={styles.listItem}>
                              <span className={styles.listBullet}>▸</span>
                              {item}
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                )}

                {service.footer && (
                  <p className={styles.sectionFooter}>{service.footer}</p>
                )}
              </div>

              {/* Image Side */}
              <div
                className={`${styles.serviceImageWrapper} ${
                  isVisible ? styles.visible : ""
                }`}
              >
                <img
                  src={service.image}
                  alt={service.title}
                  className={styles.serviceImage}
                  loading="lazy"
                />
                <div className={styles.serviceImageOverlay} />
                <div className={styles.serviceImageGlow} />
                <span className={styles.serviceImageLabel}>
                  {service.imageLabel}
                </span>
              </div>
            </div>
          </section>
        );
      })}

      {/* Active Section Indicator */}
      <div
        className={`${styles.activeIndicator} ${
          activeSection && !isNearFooter && !isPageBannerVisible ? styles.activeIndicatorVisible : ""
        }`}
      >
        {activeName}
      </div>
    </div>

  );
};

export default Services;
