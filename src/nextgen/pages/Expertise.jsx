import React, { useEffect, useRef, useState } from "react";
import { useLocation } from "react-router-dom";
import styles from "./Expertise.module.css";
import {
  getTechIcon,
  techBrandColors,
} from "../components/Header/TechIcons.jsx";
import PageBanner from "../components/PageBanner/PageBanner.jsx";
import heroImage from "../assets/images/ServicePage/services-hero.jpg";

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

const techDescriptions = {
  "React.js": {
    description: "We build dynamic, component-driven user interfaces with React.js — delivering fast, scalable, and maintainable front-end architectures for web applications of any complexity.",
    features: [
      { title: "Component Architecture", desc: "Reusable, modular components for consistent UI patterns across your application." },
      { title: "State Management", desc: "Advanced state handling with Context API, Redux, and custom hooks for complex data flows." },
      { title: "Performance Optimization", desc: "Code splitting, lazy loading, and memoization for blazing-fast user experiences." },
    ],
  },
  "React Native": {
    description: "Cross-platform mobile applications built with React Native — sharing code between iOS and Android while delivering truly native performance and experience.",
    features: [
      { title: "Cross-Platform", desc: "Single codebase for iOS and Android, reducing development time by up to 40%." },
      { title: "Native Modules", desc: "Seamless integration with native device capabilities — camera, GPS, biometrics, and more." },
      { title: "OTA Updates", desc: "Push updates directly to users without app store review cycles." },
    ],
  },
  "C#.NET": {
    description: "Enterprise-grade backend systems and desktop applications powered by C#.NET — delivering type-safe, high-performance solutions for mission-critical operations.",
    features: [
      { title: "Enterprise Solutions", desc: "Robust backend architectures handling complex business logic and workflows." },
      { title: "API Development", desc: "RESTful and gRPC APIs with comprehensive authentication and authorization." },
      { title: "Desktop Applications", desc: "WPF and WinForms applications for specialized business tooling." },
    ],
  },
  "ASP.NET": {
    description: "Scalable web applications and APIs built on ASP.NET — leveraging Microsoft's mature ecosystem for secure, high-throughput enterprise platforms.",
    features: [
      { title: "MVC Architecture", desc: "Clean separation of concerns for maintainable, testable web applications." },
      { title: "Web API", desc: "High-performance REST APIs with built-in model validation and serialization." },
      { title: "Identity & Security", desc: "Enterprise authentication with OAuth, JWT, and role-based access control." },
    ],
  },
  "MySQL": {
    description: "Reliable relational database design and optimization with MySQL — structuring data for performance, integrity, and scale across transactional systems.",
    features: [
      { title: "Schema Design", desc: "Normalized database architectures optimized for your specific query patterns." },
      { title: "Performance Tuning", desc: "Query optimization, indexing strategies, and replication for high-traffic systems." },
      { title: "Data Migration", desc: "Zero-downtime migrations and ETL pipelines for seamless data transitions." },
    ],
  },
  "Azure DevOps": {
    description: "End-to-end DevOps pipelines on Azure — automating builds, tests, deployments, and monitoring for continuous delivery at enterprise scale.",
    features: [
      { title: "CI/CD Pipelines", desc: "Automated build, test, and deployment workflows reducing release cycles." },
      { title: "Infrastructure as Code", desc: "ARM templates and Terraform for reproducible, version-controlled environments." },
      { title: "Monitoring & Alerts", desc: "Application Insights integration for proactive performance monitoring." },
    ],
  },
  "HTML5": {
    description: "Semantic, accessible markup with HTML5 — building the structural foundation for web experiences that are performant, SEO-optimized, and universally accessible.",
    features: [
      { title: "Semantic Structure", desc: "Meaningful markup that improves accessibility and search engine visibility." },
      { title: "Multimedia Integration", desc: "Native audio, video, and canvas elements for rich interactive content." },
      { title: "Progressive Enhancement", desc: "Graceful degradation ensuring functionality across all browsers and devices." },
    ],
  },
  "CSS3": {
    description: "Pixel-perfect, responsive styling with CSS3 — crafting visual experiences through modern layout systems, animations, and design system implementation.",
    features: [
      { title: "Responsive Design", desc: "Fluid layouts with Grid, Flexbox, and container queries for every screen size." },
      { title: "Animations & Transitions", desc: "Performant CSS animations that enhance UX without sacrificing speed." },
      { title: "Design Systems", desc: "Scalable CSS architectures with custom properties and modular methodologies." },
    ],
  },
  "JavaScript": {
    description: "Full-spectrum JavaScript development — from complex front-end interactions to server-side logic, delivering dynamic experiences with modern ES2024+ standards.",
    features: [
      { title: "Modern ES2024+", desc: "Leveraging the latest language features for cleaner, more expressive code." },
      { title: "DOM Manipulation", desc: "Efficient event handling and dynamic content for rich interactive interfaces." },
      { title: "Testing & Quality", desc: "Comprehensive unit, integration, and E2E testing with Jest, Vitest, and Playwright." },
    ],
  },
  "Node.js": {
    description: "High-performance server-side applications with Node.js — building scalable APIs, real-time systems, and microservices on JavaScript's event-driven runtime.",
    features: [
      { title: "REST & GraphQL APIs", desc: "Express and Fastify backends serving thousands of concurrent connections." },
      { title: "Real-Time Systems", desc: "WebSocket and SSE implementations for live dashboards, chat, and notifications." },
      { title: "Microservices", desc: "Containerized service architectures with message queues and event sourcing." },
    ],
  },
  "Google Apps Script": {
    description: "Business process automation with Google Apps Script — extending Google Workspace with custom functions, triggers, and integrations that eliminate manual work.",
    features: [
      { title: "Workflow Automation", desc: "Automated document generation, email workflows, and data processing." },
      { title: "Custom Add-ons", desc: "Bespoke Google Sheets, Docs, and Forms extensions for specific business needs." },
      { title: "Third-Party Integration", desc: "Connecting Google Workspace with external APIs and services." },
    ],
  },
  "Microsoft Excel": {
    description: "Advanced Excel solutions for data analysis and reporting — building complex models, macros, and dashboards that transform raw data into actionable business intelligence.",
    features: [
      { title: "VBA Macros", desc: "Custom automation scripts for repetitive tasks and complex calculations." },
      { title: "Data Modeling", desc: "Power Query and Power Pivot for enterprise-level data transformation." },
      { title: "Dashboard Design", desc: "Interactive dashboards with charts, slicers, and conditional formatting." },
    ],
  },
  "AI Tools": {
    description: "Integrating cutting-edge AI capabilities — from natural language processing to computer vision, embedding intelligent automation into your existing workflows.",
    features: [
      { title: "LLM Integration", desc: "OpenAI, Claude, and custom model integration for intelligent content generation." },
      { title: "Process Automation", desc: "AI-powered document processing, classification, and data extraction." },
      { title: "Predictive Analytics", desc: "Machine learning models for forecasting, recommendation, and anomaly detection." },

    ],
  },
};

const Expertise = () => {
  const location = useLocation();
  const [activeHash, setActiveHash] = useState("");
  const sectionsRef = useRef({});

  useEffect(() => {
    const hash = location.hash.replace("#", "");
    if (hash) {
      setActiveHash(hash);
      setTimeout(() => {
        const el = document.getElementById(hash);
        if (el) {
          const y = el.getBoundingClientRect().top + window.scrollY - 80;
          window.scrollTo({ top: y, behavior: "smooth" });
        }
      }, 100);
    }
  }, [location.hash]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveHash(entry.target.id);
          }
        });
      },
      { rootMargin: "-40% 0px -40% 0px", threshold: 0 }
    );

    Object.values(sectionsRef.current).forEach((el) => {
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const scrollToHash = (hash) => {
    setActiveHash(hash);
    const el = document.getElementById(hash);
    if (el) {
      const y = el.getBoundingClientRect().top + window.scrollY - 60;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
  };

  return (
    <div className={styles.expertisePage}>

       <PageBanner
        title="Technical Expertise"
        image={heroImage}
        breadcrumbs={[{ label: "Technical Expertise" }]}
      />

      {/* Sticky Nav */}
      <nav className={styles.techNav}>
        <div className={styles.techNavInner}>
          {technologyItems.map((item) => {
            const IconComp = getTechIcon(item.label);
            const brandColor = techBrandColors[item.label];
            return (
              <button
                key={item.hash}
                className={`${styles.techNavItem} ${activeHash === item.hash ? styles.active : ""}`}
                onClick={() => scrollToHash(item.hash)}
                style={{ "--brand-color": brandColor }}
              >
                <span className={styles.techNavIcon} style={{ color: brandColor }}>
                  {IconComp && <IconComp className="" />}
                </span>
                {item.label}
              </button>
            );
          })}
        </div>
      </nav>

      {/* Technology Sections */}
      <div className={styles.sectionsContainer}>
        {technologyItems.map((item, index) => {
          const IconComp = getTechIcon(item.label);
          const brandColor = techBrandColors[item.label];
          const data = techDescriptions[item.label];
          if (!data) return null;

          return (
            <section
              key={item.hash}
              id={item.hash}
              className={styles.techSection}
              ref={(el) => (sectionsRef.current[item.hash] = el)}
              style={{ animationDelay: `${index * 0.05}s` }}
            >
              <div className={styles.sectionInner}>
                <div className={styles.sectionLeft}>
                  <div
                    className={styles.sectionIconWrapper}
                    style={{ color: brandColor }}
                  >
                    {IconComp && <IconComp className="" />}
                  </div>
                  <div
                    className={`${styles.activationLine} ${activeHash === item.hash ? styles.visible : ""}`}
                    style={{ background: brandColor }}
                  />
                  <h2 className={styles.sectionTitle}>{item.label}</h2>
                  <span
                    className={styles.sectionCategory}
                    style={{
                      color: brandColor,
                      background: `color-mix(in srgb, ${brandColor} 10%, transparent)`,
                    }}
                  >
                    Technology
                  </span>
                  <p className={styles.sectionDescription}>{data.description}</p>
                </div>

                <div className={styles.sectionRight}>
                  {data.features.map((f) => (
                    <div className={styles.featureCard} key={f.title}>
                      <h3 className={styles.featureCardTitle}>
                        <span
                          className={styles.featureCardDot}
                          style={{ background: brandColor }}
                        />
                        {f.title}
                      </h3>
                      <p className={styles.featureCardDesc}>{f.desc}</p>
                    </div>
                  ))}
                </div>
              </div>
            </section>
          );
        })}
      </div>

      {/* CTA */}
      <section className={styles.ctaSection}>
        <div className={styles.ctaContainer}>
          <h2 className={styles.ctaTitle}>Ready to Build Something Great?</h2>
          <p className={styles.ctaSubtitle}>
            Let's discuss how our technical expertise can bring your vision to life.
          </p>
          <a href="/nextgen/contact" className={styles.ctaButton}>
            Get in Touch
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </a>
        </div>
      </section>
    </div>
  );
};

export default Expertise;
