




import React from 'react';
import { useNavigate } from 'react-router-dom';
import PageBanner from '../components/PageBanner';
import styles from './Services.module.css';

// Import images

import ServiceBanner from "../assets/images/ServicePage/ServiceBanner.jpg";
import CostOptimization1 from "../assets/images/ServicePage/CostOptimization1.png";
import CostOptimization2 from "../assets/images/ServicePage/CostOptimization2.png";
import PMC1 from "../assets/images/ServicePage/PMC1.png";
import PMC2 from "../assets/images/ServicePage/PMC2.png";
import RealTime1 from "../assets/images/ServicePage/RealTime1.png";
import RealTime2 from "../assets/images/ServicePage/RealTime1.png";
import RERA1 from "../assets/images/ServicePage/RERA1.jpg";
import RERA2 from "../assets/images/ServicePage/RERA2.png";
import Design1 from "../assets/images/ServicePage/Design1.jpg";
import Design2 from "../assets/images/ServicePage/Design2.jpg";
import FastTrack1 from "../assets/images/ServicePage/FastTrack1.jpg";
import FastTrack2 from "../assets/images/ServicePage/FastTrack2.jpg";









const Services = () => {
  const navigate = useNavigate();
  const breadcrumbs = [
    { label: 'Home' },
    { label: 'Services' }
  ];

  const services = [
    {
      number: 1,
      title: 'Cost Optimization & Value Engineering',
      description: 'We review designs, specifications, and quantities to eliminate waste and inefficiency—achieving up to 18% cost reduction without compromising safety, performance, or lifecycle value.',
      highlight: 'Up to 18% Cost Reduction',
      images: [CostOptimization1, CostOptimization2],
      features: [
        'Design review & optimization',
        'Specification analysis',
        'Quantity surveying',
        'Lifecycle value assessment'
      ]
    },
    {
      number: 2,
      title: 'End-to-End Project Management (PMC)',
      description: 'Single-point responsibility from planning to handover, ensuring faster decisions, seamless coordination, and predictable outcomes.',
      highlight: 'Single-Point Responsibility',
      images: [PMC1, PMC2],
      features: [
        'Complete project oversight',
        'Stakeholder coordination',
        'Timeline management',
        'Quality assurance'
      ]
    },
    {
      number: 3,
      title: 'Real-Time Digital Project Control',
      description: 'Live dashboards, daily photo reports, and real-time cost tracking deliver complete transparency for stakeholders.',
      highlight: 'Complete Transparency',
      images: [RealTime1, RealTime2],
      features: [
        'Live project dashboards',
        'Daily photo documentation',
        'Real-time cost tracking',
        'Stakeholder reporting'
      ]
    },
    {
      number: 4,
      title: 'RERA, Compliance & Risk Management',
      description: 'Robust compliance systems that safeguard projects from legal, contractual, and regulatory risks.',
      highlight: 'Risk Mitigation',
      images: [RERA1, RERA2],
      features: [
        'RERA compliance',
        'Legal risk assessment',
        'Contractual safeguards',
        'Regulatory adherence'
      ]
    },
    {
      number: 5,
      title: 'Design-to-Execution Alignment',
      description: 'We bridge the gap between drawings and site execution—minimizing rework, delays, and cost overruns.',
      highlight: 'Zero Rework Philosophy',
      images: [Design1, Design2	],
      features: [
        'Drawing verification',
        'Site coordination',
        'Execution planning',
        'Quality control'
      ]
    },
    {
      number: 6,
      title: 'Fast-Track Construction',
      description: 'Accelerated delivery through lean planning, parallel execution, and modern construction methodologies.',
      highlight: 'Accelerated Delivery',
      images: [FastTrack1, FastTrack2],
      features: [
        'Lean construction planning',
        'Parallel work execution',
        'Modern methodologies',
        'Time optimization'
      ]
    }
  ];

  return (
	<>


    <div className={styles.servicesPage}>
		 <PageBanner
        title="Our Services"
        breadcrumbs={breadcrumbs}
        bgImage={ServiceBanner}
      />


      <section className={styles.sectionIntro}>
        <h2>Services Overview</h2>
        <p>
          Our services are designed to eliminate uncertainty, control risk, and maximize project value at every stage of your construction journey.
        </p>
      </section>

      {services.map((service) => (
        <section key={service.number} className={styles.serviceBlock}>
          <div className={styles.serviceContent}>
            <h3 className={styles.serviceTitle}>{service.title}</h3>
            <p className={styles.serviceDescription}>{service.description}</p>

            <ul className={styles.featuresList}>
              {service.features.map((feature, idx) => (
                <li key={idx} className={styles.featureItem}>
                  <span className={styles.featureIcon}>✓</span>
                  {feature}
                </li>
              ))}
            </ul>

            <span className={styles.serviceHighlight}>{service.highlight}</span>
          </div>

          <div className={styles.serviceImages}>
            {service.images.map((img, idx) => (
              <img
                key={idx}
                src={img}
                alt={`${service.title} illustration ${idx + 1}`}
                className={`${styles.serviceImage} ${service.images.length === 1 ? styles.singleImage : ''}`}
              />
            ))}
          </div>
        </section>
      ))}

      <section className={styles.ctaSection}>
        <div className={styles.ctaContent}>
          <h2>Ready to Start Your Project?</h2>
          <p>Let's discuss how we can help you achieve excellence in your  construction project.</p>
          <button
            className={styles.ctaButton}
            onClick={() => navigate('../contact')}
          >
            Get in Touch
          </button>


        </div>
      </section>
    </div>
	</>
  );
};

export default Services;
