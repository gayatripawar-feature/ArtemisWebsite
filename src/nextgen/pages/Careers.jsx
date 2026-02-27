


import React, { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './Careers.module.css';

const benefits = [
  { icon: '🚀', title: 'Growth & Learning', desc: 'Continuous learning budget, mentorship programs, and conference sponsorships to accelerate your career.' },
  { icon: '💰', title: 'Competitive Pay', desc: 'Top-of-market salaries, equity options, and annual performance bonuses that reward excellence.' },
  { icon: '🎯', title: 'Impactful Work', desc: 'Solve real-world problems at scale. Your code powers solutions used by millions globally.' },
];

const jobs = [
  { id: 1, title: 'Senior Frontend Developer', dept: 'Engineering', location: 'Pune', type: 'Full-time', tags: ['React', 'JavaScript', 'Next.js'] },
  { id: 2, title: 'Product Designer', dept: 'Design', location: 'Pune', type: 'Full-time', tags: ['Figma', 'UI/UX', 'Design Systems'] },
  { id: 3, title: 'Backend Developer', dept: 'Engineering', location: 'Pune', type: 'Full-time', tags: ['.Net', 'SQL Server', 'Azure'] },
  { id: 4, title: 'DevOps Engineer', dept: 'Engineering', location: 'Pune', type: 'Full-time', tags: ['Docker', 'AWS', 'CI/CD'] },
  { id: 5, title: 'Product Manager', dept: 'Product', location: 'Pune', type: 'Full-time', tags: ['Strategy', 'Agile', 'Analytics'] },
  { id: 6, title: 'Data Scientist', dept: 'Data', location: 'Pune', type: 'Full-time', tags: ['Python', 'ML', 'SQL'] },
];

const departments = ['All', 'Engineering', 'Design', 'Product', 'Data'];

const steps = [
  { num: '01', title: 'Apply Online', desc: 'Submit your application and portfolio through our careers portal.' },
  { num: '02', title: 'Initial Screen', desc: 'A 10-minute call with our talent team to learn about you.' },
  { num: '03', title: 'Technical Round', desc: 'Showcase your skills with a practical, real-world challenge.' },
  { num: '04', title: 'Offer & Onboard', desc: 'Receive your offer and start your journey with us.' },
];

function useInView(options = {}) {
  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) { setIsVisible(true); observer.unobserve(el); }
    }, { threshold: 0.15, ...options });
    observer.observe(el);
    return () => observer.disconnect();
  }, []);
  return [ref, isVisible];
}

function AnimatedSection({ children, className = '' }) {
  const [ref, visible] = useInView();
  return <div ref={ref} className={`${styles.animateOnScroll} ${visible ? styles.visible : ''} ${className}`}>{children}</div>;
}

export default function Careers() {
  const navigate = useNavigate();
  const [filter, setFilter] = useState('All');
  const filtered = filter === 'All' ? jobs : jobs.filter(j => j.dept === filter);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className={styles.careerPage}>
      {/* Hero */}
      <section className={styles.careerHero}>
        <div className={styles.heroParticles}>
          {Array.from({ length: 8 }).map((_, i) => <div key={i} className={styles.particle} />)}
        </div>
        <div className={styles.heroContent}>
          <div className={styles.heroBadge}><span className={styles.dot} /> We're Hiring</div>
          <h1 className={styles.heroTitle}>
            Build the Future<br />
            <span className={styles.highlight}>With Us</span>
          </h1>
          <p className={styles.heroSubtitle}>
            Join a team of passionate engineers, designers, and thinkers shaping the next generation of digital experiences.
          </p>
          <div className={styles.heroActions}>
            <button className={styles.btnPrimary} onClick={() => document.getElementById('jobs')?.scrollIntoView({ behavior: 'smooth' })}>
              View Open Roles
            </button>
            <button className={styles.btnSecondary} onClick={() => navigate('/nextgen/about')}>
              Learn More About Us
            </button>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className={styles.section} id="benefits">
        <AnimatedSection>
          <div className={styles.sectionHeader}>
            <span className={styles.sectionLabel}>Why Join Us</span>
            <h2 className={styles.sectionTitle}>Benefits</h2>
            <p className={styles.sectionDesc}>We invest in our people so they can do their best work and live their best lives.</p>
          </div>
        </AnimatedSection>
        <div className={styles.benefitsGrid}>
          {benefits.map((b, i) => (
            <BenefitCard key={i} {...b} delay={i * 100} />
          ))}
        </div>
      </section>

      {/* Jobs */}
      <section className={styles.jobsSection} id="jobs">
        <div className={styles.jobsInner}>
          <AnimatedSection>
            <div className={styles.sectionHeader}>
              <span className={styles.sectionLabel}>Open Positions</span>
              <h2 className={styles.sectionTitle}>Find Your Role</h2>
              <p className={styles.sectionDesc}>Explore opportunities across our teams and find where you'll make the biggest impact.</p>
            </div>
          </AnimatedSection>
          <div className={styles.jobsFilters}>
            {departments.map(d => (
              <button key={d} className={`${styles.filterBtn} ${filter === d ? styles.active : ''}`} onClick={() => setFilter(d)}>{d}</button>
            ))}
          </div>
          <div className={styles.jobsList}>
            {filtered.map((job, i) => (
              <JobCard key={job.id} job={job} delay={i * 80} onApply={() => navigate(`/nextgen/careers/apply/${job.id}`)} />
            ))}
          </div>
        </div>
      </section>

      {/* Hiring Process */}
      <section className={styles.section}>
        <AnimatedSection>
          <div className={styles.sectionHeader}>
            <span className={styles.sectionLabel}>Hiring Process</span>
            <h2 className={styles.sectionTitle}>How We Hire</h2>
            <p className={styles.sectionDesc}>Our process is designed to be transparent, fair, and respectful of your time.</p>
          </div>
        </AnimatedSection>
        <div className={styles.processSteps}>
          {steps.map((s, i) => (
            <StepCard key={i} {...s} delay={i * 150} />
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className={styles.ctaSection}>
        <div className={styles.ctaContent}>
          <h2 className={styles.ctaTitle}>Ready to Make an Impact?</h2>
          <p className={styles.ctaDesc}>We'd love to hear from you. Even if you don't see a perfect fit, send us your resume — great people always find a place here.</p>
          <button className={styles.btnPrimary} style={{ fontSize: '1.1rem', padding: '16px 44px' }} onClick={() => navigate('/nextgen/careers/apply/general')}>
            Send Your Resume
          </button>
        </div>
      </section>
    </div>
  );
}

function BenefitCard({ icon, title, desc, delay }) {
  const [ref, visible] = useInView();
  return (
    <div ref={ref} className={`${styles.benefitCard} ${visible ? styles.visible : ''}`} style={{ transitionDelay: `${delay}ms` }}>
      <div className={styles.benefitIcon}>{icon}</div>
      <h3 className={styles.benefitTitle}>{title}</h3>
      <p className={styles.benefitDesc}>{desc}</p>
    </div>
  );
}

function JobCard({ job, delay, onApply }) {
  const [ref, visible] = useInView();
  return (
    <div ref={ref} className={`${styles.jobCard} ${visible ? styles.visible : ''}`} style={{ transitionDelay: `${delay}ms` }}>
      <div className={styles.jobInfo}>
        <h3>{job.title}</h3>
        <div className={styles.jobMeta}>
          <span><span className={styles.icon}>📍</span> {job.location}</span>
          <span><span className={styles.icon}>🏢</span> {job.dept}</span>
          <span><span className={styles.icon}>⏰</span> {job.type}</span>
        </div>
        <div className={styles.jobTags}>
          {job.tags.map(t => <span key={t} className={styles.jobTag}>{t}</span>)}
        </div>
      </div>
      <button className={styles.jobApplyBtn} onClick={onApply}>Apply Now</button>
    </div>
  );
}

function StepCard({ num, title, desc, delay }) {
  const [ref, visible] = useInView();
  return (
    <div ref={ref} className={`${styles.step} ${visible ? styles.visible : ''}`} style={{ transitionDelay: `${delay}ms` }}>
      <div className={styles.stepNumber}>{num}</div>
      <h3>{title}</h3>
      <p>{desc}</p>
    </div>
  );
}



