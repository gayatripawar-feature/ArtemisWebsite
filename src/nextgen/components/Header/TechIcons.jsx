import React from "react";



// React.js
export const ReactIcon = ({ className }) => (
  <svg
    className={className}
    viewBox="0 0 841.9 595.3"
    width="20"
    height="20"
    fill="none"
    stroke="currentColor"
    strokeWidth="40"
  >
    <circle cx="420.9" cy="296.5" r="45" fill="currentColor" stroke="none" />
    <ellipse cx="420.9" cy="296.5" rx="300" ry="115" />
    <ellipse cx="420.9" cy="296.5" rx="300" ry="115" transform="rotate(60 420.9 296.5)" />
    <ellipse cx="420.9" cy="296.5" rx="300" ry="115" transform="rotate(120 420.9 296.5)" />
  </svg>
);


// React Native
export const ReactNativeIcon = ({ className }) => (
  <svg
    className={className}
    viewBox="0 0 841.9 595.3"
    width="20"
    height="20"
    fill="none"
    stroke="currentColor"
    strokeWidth="40"
  >
    <circle cx="420.9" cy="296.5" r="45" fill="currentColor" stroke="none" />
    <ellipse cx="420.9" cy="296.5" rx="300" ry="115" />
    <ellipse cx="420.9" cy="296.5" rx="300" ry="115" transform="rotate(60 420.9 296.5)" />
    <ellipse cx="420.9" cy="296.5" rx="300" ry="115" transform="rotate(120 420.9 296.5)" />
  </svg>
);

// C#.NET
export const CSharpIcon = ({ className }) => (
  <svg
    className={className}
    viewBox="0 0 256 256"
    width="20"
    height="20"
    fill="currentColor"
  >
    <path d="M128 8l104 60v120l-104 60L24 188V68L128 8z" />
    <path
      d="M110 80c-28 0-50 20-50 48s22 48 50 48c10 0 20-3 28-9v-20c-8 8-17 12-26 12-18 0-32-13-32-31s14-31 32-31c9 0 18 4 26 12V89c-8-6-18-9-28-9z"
      fill="#fff"
    />

    <path
      d="M150 95h10l-2 14h12l2-14h10l-2 14h12v10h-14l-2 14h12v10h-14l-2 14h-10l2-14h-12l-2 14h-10l2-14h-12v-10h14l2-14h-12v-10h14l2-14z"
      fill="#fff"
    />
  </svg>
);


// ASP.NET
export const AspNetIcon = ({ className }) => (
  <svg
    className={className}
    viewBox="0 0 256 256"
    width="20"
    height="20"
    fill="currentColor"
  >
    <path d="M128 8l104 60v120l-104 60L24 188V68L128 8z" />

    <text
      x="128"
      y="150"
      textAnchor="middle"
      fontSize="70"
      fontWeight="bold"
      fill="#ffffff"
      fontFamily="Segoe UI, Arial, sans-serif"
    >
      .NET
    </text>
  </svg>
);


// MySQL
export const MySQLIcon = ({ className }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" width="20" height="20">
    <path d="M2 12c0-3.5 2-6 5-6s5 2.5 5 6-2 6-5 6-5-2.5-5-6z"/>
    <path d="M17 12c0-3.5 2-6 5-6s5 2.5 5 6-2 6-5 6-5-2.5-5-6z"/>
    <path d="M7 12h10"/>
  </svg>
);

//Azure
export const AzureIcon = ({ className, size = 20 }) => (
  <svg
    className={className}
    width={size}
    height={size}
    viewBox="0 0 256 256"
    fill="currentColor"
  >
    <path d="M121.7 21.6L21.5 198.3c-2.4 4.3.7 9.7 5.6 9.7h39.5c3.1 0 5.9-1.7 7.4-4.4l80.4-141.5 43.5 76.6-55.2 69.3h78.5c2.7 0 5.1-1.2 6.7-3.3 1.6-2.1 2.1-4.8 1.2-7.4L146.6 21.6c-1.4-3.1-4.4-5.1-7.8-5.1s-6.4 2-7.8 5.1z"/>
  </svg>
);


// HTML5
export const HTML5Icon = ({ className }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor" width="20" height="20">
    <polygon points="2,2 22,2 20,22 12,24 4,22"/>
    <path d="M6 6h12M6 10h10M6 14h8" stroke="white" strokeWidth="1.5" fill="none"/>
  </svg>
);

// CSS3
export const CSS3Icon = ({ className }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor" width="20" height="20">
    <polygon points="2,2 22,2 20,22 12,24 4,22" opacity="0.9"/>
    <circle cx="7" cy="10" r="1.5" fill="currentColor"/>
    <circle cx="12" cy="10" r="1.5" fill="currentColor"/>
    <circle cx="17" cy="10" r="1.5" fill="currentColor"/>
    <path d="M7 15h10" stroke="white" strokeWidth="1.5"/>
  </svg>
);

// JavaScript
export const JavaScriptIcon = ({ className }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor" width="20" height="20">
    <rect x="2" y="2" width="20" height="20" rx="2" fill="#F7DF1E" opacity="0.3"/>
    <text x="6" y="18" fontSize="13" fontWeight="bold" fill="currentColor">JS</text>
  </svg>
);

// Node.js


export const NodeIcon = ({ className, size = 24 }) => (
  <svg
    className={className}
    width={size}
    height={size}
    viewBox="0 0 256 272"
    fill="currentColor"
  >
    <path d="M128 0L0 74v124l128 74 128-74V74L128 0z"/>
    <path d="M176.6 192.4c-6.6 3.8-15.9 5.4-25.1 5.4-18.6 0-29.3-7.7-34.8-17.9l15.1-8.7c2.9 5.1 8.2 9.1 19.2 9.1 9.1 0 14.9-3.6 14.9-8.6 0-6-4.7-8.1-16-11.3-14.1-4-23.5-9-23.5-19.6 0-9.8 7.5-17.3 19.2-19.4 14.3-2.6 25.1 2.7 31.6 13.5l-14.7 8.4c-2.9-5.1-6.6-7.1-11.8-7.1-5.4 0-9.1 2.4-9.1 6.6 0 4.6 2.9 6.6 13.5 9.8 17.5 5.3 26 10.4 26 21.1 0 11.1-8.8 18.7-23.5 22.1z"/>
  </svg>
);


// Google Apps Script
export const GoogleAppsIcon = ({ className }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" width="20" height="20">
    <rect x="3" y="3" width="7" height="7" rx="1"/>
    <rect x="14" y="3" width="7" height="7" rx="1"/>
    <rect x="3" y="14" width="7" height="7" rx="1"/>
    <rect x="14" y="14" width="7" height="7" rx="1"/>
  </svg>
);

// Microsoft Excel
export const ExcelIcon = ({ className }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" width="20" height="20">
    <rect x="2" y="2" width="20" height="20" rx="2"/>
    <path d="M6 8L10 12L6 16M14 8L18 12L14 16M10 12H14"/>
  </svg>
);

// AI Tools
export const AIToolsIcon = ({ className }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" width="20" height="20">
    <circle cx="12" cy="6" r="2" fill="currentColor"/>
    <circle cx="7" cy="14" r="2" fill="currentColor"/>
    <circle cx="17" cy="14" r="2" fill="currentColor"/>
    <circle cx="12" cy="22" r="2" fill="currentColor"/>
    <path d="M12 8v4M7 16v4M17 16v4M12 15L9 13M12 15L15 13"/>
  </svg>
);

// /* Industry Icons */

// Real Estate
export const RealEstateIcon = ({ className }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor" width="20" height="20">
    <path d="M3 21V10l9-7 9 7v11H3z" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round"/>
    <rect x="9" y="14" width="6" height="7" fill="none" stroke="currentColor" strokeWidth="1.5"/>
    <path d="M9 17h6" fill="none" stroke="currentColor" strokeWidth="1"/>
  </svg>
);

// Construction
export const ConstructionIcon = ({ className }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor" width="20" height="20">
    <path d="M5 21l7-14 7 14H5z" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round"/>
    <path d="M12 7V3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
    <path d="M9 21v-4h6v4" fill="none" stroke="currentColor" strokeWidth="1.5"/>
    <circle cx="12" cy="3" r="1.5" fill="currentColor" opacity="0.5"/>
  </svg>
);

// Finance
export const FinanceIcon = ({ className }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor" width="20" height="20">
    <path d="M12 2L2 7V9H22V7L12 2Z"/>
    <rect x="4" y="10" width="2.5" height="8"/>
    <rect x="8.5" y="10" width="2.5" height="8"/>
    <rect x="13" y="10" width="2.5" height="8"/>
    <rect x="17.5" y="10" width="2.5" height="8"/>
    <rect x="2" y="19" width="20" height="2.5" rx="0.5"/>
  </svg>
);

// E-commerce
export const ECommerceIcon = ({ className }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor" width="20" height="20">
    <path d="M7 22C6.45 22 6 21.55 6 21C6 20.45 6.45 20 7 20C7.55 20 8 20.45 8 21C8 21.55 7.55 22 7 22Z"/>
    <path d="M17 22C16.45 22 16 21.55 16 21C16 20.45 16.45 20 17 20C17.55 20 18 20.45 18 21C18 21.55 17.55 22 17 22Z"/>
    <path d="M1 2H4L6.6 14.6C6.8 15.4 7.5 16 8.3 16H17.5C18.3 16 18.9 15.4 19.1 14.6L21 6H5.2"/>
  </svg>
);

// Technology
export const TechnologyIcon = ({ className }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor" width="20" height="20">
    <rect x="2" y="4" width="20" height="13" rx="2" fill="none" stroke="currentColor" strokeWidth="1.5"/>
    <path d="M8 20H16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
    <path d="M12 17V20" stroke="currentColor" strokeWidth="1.5"/>
    <path d="M8 9L6 11.5L8 14" fill="none" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M16 9L18 11.5L16 14" fill="none" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M13 8L11 15" fill="none" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round"/>
  </svg>
);

// Sales
export const SalesIcon = ({ className }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor" width="20" height="20">
    <path d="M22 12h-4l-3 9L9 3l-3 9H2" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

// Marketing
export const MarketingIcon = ({ className }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor" width="20" height="20">
    <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z" fill="none" stroke="currentColor" strokeWidth="1.5"/>
  </svg>
);


export const techIconMap = {
  "React.js": ReactIcon,
  "React Native": ReactNativeIcon,
  "C#.NET": CSharpIcon,
  "ASP.NET": AspNetIcon,
  "MySQL": MySQLIcon,
  "Azure DevOps": AzureIcon,
  "HTML5": HTML5Icon,
  "CSS3": CSS3Icon,
  "JavaScript": JavaScriptIcon,
  "Node.js": NodeIcon,
  "Google Apps Script": GoogleAppsIcon,
  "Microsoft Excel": ExcelIcon,
  "AI Tools": AIToolsIcon,
};


export const industryIconMap = {
  "Real Estate": RealEstateIcon,
  "Construction": ConstructionIcon,
  "Finance": FinanceIcon,
  "E-Commerce": ECommerceIcon,
  "Technology": TechnologyIcon,
  "Sales": SalesIcon,
  "Marketing": MarketingIcon,
};

export const getTechIcon = (label) => techIconMap[label] || null;
export const getIndustryIcon = (label) => industryIconMap[label] || null;



export const techBrandColors = {
  "React.js": "var(--tech-react)",
  "React Native": "var(--tech-react-native)",
  "C#.NET": "var(--tech-cnet)",
  "ASP.NET": "var(--tech-aspnet)",
  "MySQL": "var(--tech-mysql)",
  "Azure DevOps": "var(--tech-azure-devops)",
  "HTML5": "var(--tech-html5)",
  "CSS3": "var(--tech-css3)",
  "JavaScript": "var(--tech-javascript)",
  "Node.js": "var(--tech-node)",
  "Google Apps Script": "var(--tech-google-apps-script)",
  "Microsoft Excel": "var(--tech-excel)",
  "AI Tools": "var(--tech-ai-tools)",
};


export const industryBrandColors = {
  "Real Estate": "#C9A84C",
  "Construction": "#6B7280",
  "Finance": "var(--industry-finance)",
  "E-Commerce": "var(--industry-ecommerce)",
  "Technology": "var(--industry-technology)",
  "Sales": "#A855F7",
  "Marketing": "#8B5CF6",
};

export const serviceBrandColors = {
  "Custom Software Development": "var(--service-custom-software)",
  "ERP & Enterprise Solutions": "var(--service-erp)",
  "Website Design & Development": "var(--service-website)",
  "Web Application Development": "var(--service-webapp)",
  "Mobile App Development": "var(--service-mobile)",
  "Product Engineering & MVP Development": "var(--service-product)",
  "UI / UX Design Services": "var(--service-uiux)",
  "Cloud Solutions & DevOps": "var(--service-cloud)",
  "Quality Assurance & Testing": "var(--service-qa)",
  "Maintenance & Support": "var(--service-maintenance)",
};
