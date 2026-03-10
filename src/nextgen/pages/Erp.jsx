
import React, { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import styles from "./Erp.module.css";

import { CheckCircle2, Phone, ArrowRight } from "lucide-react";
import PageBanner from "../components/PageBanner";
import heroImage from "../assets/images/ServicePage/services-hero.jpg";
import Module2 from "../assets/images/ErpPage/Module2.jpg";
import Module3 from "../assets/images/ErpPage/Module3.png";
import Module5 from "../assets/images/ErpPage/Module5.jpg";
import Module6 from "../assets/images/ErpPage/Module6.png";
import Module7 from "../assets/images/ErpPage/Module7.png";
import Module9 from "../assets/images/ErpPage/Module9.webp";

const modulesData = [

  {
    name: "Sales Module",
    hash: "sales-module",
    subtitle: "Structured Sales Process",
    image:
      "https://images.pexels.com/photos/3183197/pexels-photo-3183197.jpeg?auto=compress&cs=tinysrgb&w=800",
    features: [
      "Lead qualification",
      "Initial contact",
      "Needs assessment",
      "Product demonstrations",
      "Proposal generation",
      "Follow-up",
      "Negotiation",
      "Booking confirmation",
    ],
    benefits: [
      "Higher conversions",
      "Organized sales funnel",
      "Real-time sales tracking",
    ],
  },
  {
    name: "CRM Module",
    hash: "crm-module",
    subtitle: "Customer Lifecycle & Agreement Management",
    image:
      "https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=800",
    features: [
      "APF",
      "Banking options for home loans",
      "Home loan document tracking",
      "Home loan certificate issuance",
      "Automated agreement generation",
      "Agreement documents checklist",
      "Agreement scheduling",
      "Agreement execution at registrar office",
      "Agreement handover",
      "Demand raise & disbursement",
      "Customer communication",
    ],
    benefits: [
      "Faster agreements",
      "Better customer trust",
      "End-to-end lifecycle visibility",
    ],
  },
  {
    name: "New Company Creation",
    hash: "new-company",
    subtitle: "Legal & Financial Setup Management",
    image:
      "https://images.pexels.com/photos/5668838/pexels-photo-5668838.jpeg?auto=compress&cs=tinysrgb&w=800",
    features: [
      "MCA type of company creation",
      "ROF type of company creation",
      "Escrow bank account opening",
    ],
    benefits: [
      "Faster statutory setup",
      "Centralized legal records",
      "Compliance-ready foundation",
    ],
  },
  {
    name: "Land Dealing",
    hash: "land-dealing",
    subtitle: "Complete Land Acquisition & Legal Due Diligence",
    image:Module2,
    features: [
      "Paper notice",
      "Litigation resolving",
      "MOU",
      "Private & government demarcation",
      "Boundary confirmation",
      "Search & title report",
      "Stamp duty registration",
      "Power of attorney",
      "Development agreement",
      "Sale deed",
    ],
    benefits: [
      "Reduced legal risk",
      "Structured documentation",
      "Transparent land records",
    ],
  },
  {
    name: "Product Development",
    hash: "product-development",
    subtitle: "Pre-Construction Planning & Approvals",
    image: Module3,
    features: [
      "Consultant onboarding",
      "Project feasibility report",
      "Cost MIS",
      "NA order",
      "APF from multiple banks",
      "Royalty challan",
      "Construction site electric meter",
    ],
    benefits: [
      "Informed decision-making",
      "Cost & approval control",
      "Faster project readiness",
    ],
  },
  {
    name: "Sales Office & Sample Flat",
    hash: "sales-office-sample-flat",
    subtitle: "Physical Sales Infrastructure Management",
    image:
      "https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=800",
    features: [
      "Site selection & preparation",
      "Design & planning",
      "Regulatory approvals",
      "Construction planning & execution",
      "Interior design & furnishing",
      "Marketing material development",
      "Sales office setup",
      "Launch & promotion",
      "Customer engagement",
    ],
    benefits: [
      "Professional sales presence",
      "Faster project launch",
      "Better customer experience",
    ],
  },
  {
    name: "Marketing & Advertising",
    hash: "marketing-advertising",
    subtitle: "Demand Generation & Brand Building",
    image: Module5,
    features: [
      "Market research",
      "Brand development",
      "Digital marketing strategy",
      "Traditional marketing",
      "Lead generation",
      "Sales collateral development",
      "Campaign performance tracking",
      "Partnership development",
      "Feedback & improvement",
    ],
    benefits: [
      "Strong brand visibility",
      "Qualified leads",
      "Measurable campaign ROI",
    ],
  },
  {
    name: "Human Resource Module",
    hash: "human-resource-module",
    subtitle: "Workforce & Payroll Management",
    image: Module6,
    features: [
      "Recruitment & onboarding",
      "Attendance & leave management",
      "Payroll management",
      "Employee database",
      "Performance appraisal",
      "Training & development",
    ],
    benefits: [
      "Centralized HR control",
      "Accurate payroll processing",
      "Improved employee productivity",
    ],
  },
  {
    name: "Account Department Module",
    hash: "account-department-module",
    subtitle: "Financial Control & Compliance",
    image: Module7,
    features: [
      "Bookkeeping",
      "Accounts payable & receivable",
      "Bank reconciliation",
      "GST & tax management",
      "Financial reporting",
      "Expense tracking & budgeting",
    ],
    benefits: [
      "Real-time financial visibility",
      "Statutory compliance",
      "Better cash flow management",
    ],
  },
  {
    name: "Engineering Module",
    hash: "engineering-module",
    subtitle: "Planning, Execution & Quality Control",
    image:
      "https://images.pexels.com/photos/3862365/pexels-photo-3862365.jpeg?auto=compress&cs=tinysrgb&w=800",
    features: [
      "Work Breakdown Structure (WBS)",
      "Drawing management",
      "Estimation & analysis",
      "Planning & execution",
      "Quality checks & quality reports",
      "Daily progress report (DPR)",
    ],
    benefits: [
      "Better execution control",
      "Reduced rework",
      "Improved construction quality",
    ],
  },
  {
    name: "Inventory Management Module",
    hash: "inventory-management-module",
    subtitle: "Material Tracking & Control",
    image:Module9,
    features: [
      "Inventory monitoring",
      "Inventory requisition",
      "Inventory update",
      "Consumption as per project planning",
      "Goods Receipt Note (GRN)",
      "Product validity",
      "Inventory description",
    ],
    benefits: [
      "Reduced material wastage",
      "Accurate stock tracking",
      "Site-wise material control",
    ],
  },
  {
    name: "Purchase Department Module",
    hash: "purchase-department-module",
    subtitle: "Vendor & Procurement Management",
    image:
      "https://images.pexels.com/photos/4482900/pexels-photo-4482900.jpeg?auto=compress&cs=tinysrgb&w=800",
    features: [
      "Vendor database creation",
      "Quotation comparison & negotiation",
      "Purchase Order (PO) generation",
      "Billing & challan generation",
      "Vendor outstanding management (FIFO)",
    ],
    benefits: [
      "Cost optimization",
      "Transparent procurement",
      "Strong vendor control",
    ],
  },
  {
    name: "Site Management Module",
    hash: "site-management-module",
    subtitle: "On-Site Execution & Coordination",
    image:
      "https://images.pexels.com/photos/3862625/pexels-photo-3862625.jpeg?auto=compress&cs=tinysrgb&w=800",
    features: [
      "Site setup",
      "Safety compliance",
      "Issue resolution",
      "Site coordination meetings",
    ],
    benefits: [
      "Safer sites",
      "Faster issue resolution",
      "Better site coordination",
    ],
  },
  {
    name: "Training & Implementation",
    hash: "training-implementation",
    subtitle: "Smooth ERP Adoption",
    image:
      "https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=800",
    features: [
      "User training",
      "Role-based system onboarding",
      "Implementation support",
    ],
    benefits: ["Faster adoption", "Reduced resistance", "Maximum ROI"],
  },
];

const ACTIVE_MODULES = ["sales-module", "crm-module"];

const CheckCircleIcon = () => (
  <svg
    className={styles.benefitCheck}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <circle cx="12" cy="12" r="10" />
    <path d="M9 12l2 2 4-4" />
  </svg>
);


const Erp = () => {
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    if (location.hash) {
      const hash = location.hash.replace("#", "");
      setTimeout(() => {
        const el = document.getElementById(hash);
        if (el) {
          const yCoordinate = el.getBoundingClientRect().top + window.scrollY;
          window.scrollTo({ top: yCoordinate - 80, behavior: "smooth" });
        }
      }, 200);
    } else {
      window.scrollTo(0, 0);
    }
  }, [location.hash]);

  return (
    <>
      <PageBanner
        title="Our ERP Products"
        image={heroImage}
        breadcrumbs={[{ label: "Our ERP Products" }]}
      />

      {/* ERP Modules Section */}
      <section className={styles.erpSection}>
        <div className={styles.container}>
          <div className={styles.sectionHeader}>
            <h2 className={styles.sectionTitle}>
              End-to-End <span className={styles.highlight}>ERP Modules</span>{" "}
              for{" "}
              <span className={styles.highlightGold}>
                Real Estate &amp; Construction
              </span>{" "}
              Businesses
            </h2>
            <div className={styles.sectionDivider}></div>
            <p className={styles.sectionSubtitle}>
              Our ERP is a fully integrated, modular system designed to manage
              the entire real estate lifecycle — from company creation and land
              acquisition to sales, CRM, accounts, and post-handover operations.
            </p>
            <p className={styles.sectionSubtitleSecondary}>
              Each module can work independently or as part of a single unified
              ERP platform.
            </p>
          </div>

          <div className={styles.modulesList}>
            {modulesData.map((mod, index) => {
              const isComingSoon = !ACTIVE_MODULES.includes(mod.hash);
              return (
                <div
                  className={`${styles.moduleCard} ${isComingSoon ? styles.comingSoonCard : ""}`}
                  key={mod.name}
                  id={mod.hash}
                >
                  {isComingSoon && (
                    <>
                      <div className={styles.comingSoonStamp}>
                        <span className={styles.comingSoonDot}></span>
                        Coming Soon
                      </div>
                    </>
                  )}
                  <div className={styles.moduleImageSection}>
                    <img
                      src={mod.image}
                      alt={mod.name}
                      className={styles.moduleImage}
                    />
                    <div className={styles.imageOverlay}></div>
                  </div>
                  <div className={styles.moduleContent}>
                    <div className={styles.moduleHeader}>
                      <h3 className={styles.moduleName}>{mod.name}</h3>
                      <p className={styles.moduleSubtitle}>{mod.subtitle}</p>
                    </div>
                    <div className={styles.moduleBody}>
                      <div className={styles.featuresSection}>
                        <p className={styles.featuresTitle}>Key Features</p>
                        <ul className={styles.featuresList}>
                          {mod.features.map((f) => (
                            <li className={styles.featureItem} key={f}>
                              <span className={styles.featureArrow}>›</span>
                              {f}
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div className={styles.benefitsSection}>
                        <p className={styles.benefitsTitle}>Benefits</p>
                        <ul className={styles.benefitsList}>
                          {mod.benefits.map((b) => (
                            <li className={styles.benefitItem} key={b}>
                              <CheckCircleIcon />
                              {b}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Advantage Section */}
      <section className={styles.advantageSection}>
        <div className={styles.advantageContainer}>
          <div className={styles.advantageContent}>
            <h2 className={styles.advantageTitle}>Unified ERP Advantage</h2>
            <p className={styles.advantageDescription}>
              Experience the power of a fully integrated system built from real
              industry experience
            </p>

            <div className={styles.advantageGrid}>
              {[
                "Single integrated platform",
                "Modular & scalable",
                "Role-based access",
                "Real-time MIS & dashboards",
                "Built from real industry experience",
              ].map((text) => (
                <div className={styles.advantageItem} key={text}>
                  <CheckCircle2 className={styles.advantageCheckIcon} />{" "}
                  <span className={styles.advantageItemText}>{text}</span>
                </div>
              ))}
            </div>

            <div className={styles.ctaBox}>
              <h3 className={styles.ctaTitle}>
                <Phone className={styles.ctaPhoneIcon} />
                Want a Complete ERP Demo?
              </h3>
              <p className={styles.ctaText}>
                Let us show how all modules work together to manage your entire
                real estate business from one system.
              </p>
              <button
                onClick={() => navigate("/contact")}
                className={styles.ctaButton}
              >
                Contact us today for a live product demo
                <ArrowRight className={styles.ctaArrowIcon} />
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Erp;
