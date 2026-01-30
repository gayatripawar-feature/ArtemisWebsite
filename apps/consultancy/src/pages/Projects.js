import React, { useEffect } from 'react';
import styles from './Projects.module.css';
import useScrollAnimation from '../hooks/useScrollAnimation';
import PageBanner from '../components/PageBanner';
import { FaHome, FaBuilding, FaCity, FaTools, FaDollarSign, FaClock, FaCheckCircle, FaUsers, FaShieldAlt } from 'react-icons/fa';

const expertise = [
	{ title: 'Residential & Township Projects', icon: FaHome },
	{ title: 'Commercial & Office Developments', icon: FaBuilding },
	{ title: 'Mixed-Use & Redevelopment Projects', icon: FaCity },
	{ title: 'High-Rise & Premium Constructions', icon: FaTools }
];

const handles = [
	{ title: 'Cost & budget control', icon: FaDollarSign },
	{ title: 'Time & milestone tracking', icon: FaClock },
	{ title: 'Authority approvals', icon: FaCheckCircle },
	{ title: 'Contractor performance', icon: FaUsers },
	{ title: 'Quality and safety audits', icon: FaShieldAlt }
];

export default function Projects() {
	const [expertiseRef, expertiseVisible] = useScrollAnimation(0.3);
	const [handlesRef, handlesVisible] = useScrollAnimation(0.3);

	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	const breadcrumbs = [
		{ label: 'Home' },
		{ label: 'Projects' }
	];

	return (
		<div className={styles.page}>
			<PageBanner
				title="Our Projects"
				breadcrumbs={breadcrumbs}
				bgImage="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1200&h=400&fit=crop&crop=center"
			/>

			<section className={styles.expertiseSection}>
				<div className={styles.container}>
					<div ref={expertiseRef} className={`${styles.expertiseContent} ${expertiseVisible ? styles.animateIn : ''}`}>
						<h2 className={styles.sectionTitle}>Our Expertise Covers</h2>
						<div className={styles.expertiseGrid}>
							{expertise.map((item, index) => (
								<div key={index} className={`${styles.expertiseCard} ${expertiseVisible ? styles.animateIn : ''}`} style={{ animationDelay: `${index * 0.1}s` }}>
									<div className={styles.iconContainer}>
										<item.icon className={styles.cardIcon} />
									</div>
									<p className={styles.expertiseItem}>{item.title}</p>
								</div>
							))}
						</div>
					</div>
				</div>
			</section>

			<section className={styles.handlesSection}>
				<div className={styles.container}>
					<div ref={handlesRef} className={`${styles.handlesContent} ${handlesVisible ? styles.animateIn : ''}`}>
						<h2 className={styles.sectionTitle}>What We Handle</h2>
						<div className={styles.handlesGrid}>
							{handles.map((item, index) => (
								<div key={index} className={`${styles.handlesCard} ${handlesVisible ? styles.animateIn : ''}`} style={{ animationDelay: `${index * 0.1}s` }}>
									<div className={styles.iconContainer}>
										<item.icon className={styles.cardIcon} />
									</div>
									<p className={styles.handlesItem}>{item.title}</p>
								</div>
							))}
						</div>
					</div>
				</div>
			</section>
		</div>
	);
}