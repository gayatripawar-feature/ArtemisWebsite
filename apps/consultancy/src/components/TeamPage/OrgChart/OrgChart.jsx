

import React, { useState } from "react";
import { orgData } from "./orgData";
import styles from "./OrgChart.module.css";

const OFFICE_ICONS = {
  cmo: "🏗️",
  pmo: "📐",
  bdo: "💼",
};



const RoleTree = ({ node, depth = 0 }) => {
  const hasChildren = node.children && node.children.length > 0;

  return (
    <div className={styles.roleTreeItem}>
      <div className={styles.roleTreeNode} data-depth={depth}>
        <span className={styles.roleTreeDot} />
        <div className={styles.roleTreeContent}>
          <p className={styles.roleTreeRole}>{node.role}</p>
          {node.note && (
            <span className={styles.roleTreeNote}>{node.note}</span>
          )}
        </div>
      </div>

      {hasChildren && (
        <div className={styles.roleTreeChildren}>
          {node.children.map((child, i) => (
            <RoleTree key={i} node={child} depth={depth + 1} />
          ))}
        </div>
      )}
    </div>
  );
};

/* Department accordion */
const DepartmentCard = ({ dept, officeColor, index }) => {
  const [open, setOpen] = useState(false);

  return (
    <div
      className={`${styles.deptCard} ${open ? styles.deptCardOpen : ""}`}
      style={{ animationDelay: `${index * 60}ms` }}
    >
      <button
        className={styles.deptHeader}
        onClick={() => setOpen((v) => !v)}
        style={{ "--dept-accent": officeColor }}
      >
        <span
          className={styles.deptAccentBar}
          style={{ background: officeColor }}
        />
        <div className={styles.deptHeaderText}>
          <span className={styles.deptHeadTitle}>{dept.head}</span>
          {dept.note && (
            <span className={styles.deptHeadNote}>{dept.note}</span>
          )}
        </div>

        <span
          className={`${styles.deptChevron} ${
            open ? styles.deptChevronOpen : ""
          }`}
        >
          <svg
            width="14"
            height="14"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <polyline points="6 9 12 15 18 9" />
          </svg>
        </span>
      </button>

      {open && dept.children && (
        <div className={styles.deptBody}>
          {dept.children.map((child, i) => (
            <RoleTree key={i} node={child} />
          ))}
        </div>
      )}
    </div>
  );
};

/* Office card */
const OfficeCard = ({ office }) => {
  return (
    <div className={styles.officeCard}>
      {/* Office header */}
      <div
        className={styles.officeHeader}
        style={{ background: office.color }}
      >
        <div className={styles.officeIcon}>
          {OFFICE_ICONS[office.id] || "🏢"}
        </div>
        <div>
          <h4 className={styles.officeName}>{office.name}</h4>
        </div>
      </div>

      {/* Departments */}
      <div className={styles.deptList}>
        {office.departments.map((dept, i) => (
          <DepartmentCard
            key={i}
            dept={dept}
            officeColor={office.color}
            index={i}
          />
        ))}
      </div>

      {/* Projects */}
      {office.projects && (
        <div className={styles.projectsSection}>
          <p className={styles.projectsTitle}>Active Projects</p>
          <div className={styles.projectsGrid}>
            {office.projects.map((p, i) => (
              <span
                key={i}
                className={styles.projectChip}
                style={{ "--chip-color": office.color }}
              >
                {p}
              </span>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

/* Main chart */
const OrgChart = () => {


  return (
    <section className={styles.section}>
      <div className={styles.bgPattern} />

      <header className={styles.header}>
        <span className={styles.eyebrow}>Organization</span>
        <h2 className={styles.title}>
          Our <span>Structure</span>
        </h2>
        {/* <p className={styles.subtitle}>
          A streamlined hierarchy designed for excellence across construction,
          project management, and business operations.
        </p> */}
      </header>



      {/* Top node */}
      <div className={styles.topNodeWrap}>
        <div className={styles.topNode}>
          <div className={styles.topNodeGlow} />
          <h3 className={styles.topNodeTitle}>{orgData.name}</h3>
          <p className={styles.topNodeSub}>{orgData.subtitle}</p>
        </div>
        <div className={styles.spine} />
        <div className={styles.spineHorizontal} />
      </div>

      {/* Offices */}
      <div className={styles.officesGrid}>
        {orgData.offices.map((office) => (
          <div key={office.id} className={styles.officeCol}>
            <div className={styles.officeConnector}>
              <div
                className={styles.connectorDot}
                style={{ background: office.color }}
              />
            </div>
            <OfficeCard office={office} />
          </div>
        ))}
      </div>
    </section>
  );
};

export default OrgChart;