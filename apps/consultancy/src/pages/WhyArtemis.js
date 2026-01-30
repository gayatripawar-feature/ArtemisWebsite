import React, { useEffect } from 'react';
import styles from './WhyArtemis.module.css';
import useScrollAnimation from '../hooks/useScrollAnimation';
import PageBanner from '../components/PageBanner';

const images = [
	'https://miro.medium.com/1%2AuANnhTXT8zGJWnZp32vRtQ.jpeg',
	'https://cdn.prod.website-files.com/607f739c92f9cf647516b37b/68b67dab8544d5ae3ad4ee9e_project-controls-dashboard.png',
	'https://cdn-ikpnogb.nitrocdn.com/cdPGWyOaMJgCoqiEOEpUSTgMoqloHDjJ/assets/images/optimized/rev-38d1899/www.tejjy.com/wp-content/uploads/2024/05/Types-of-Risk-in-Construction-Projects.png',
];

const points = [
	{ icon: '🛠️', title: 'Engineering-first decision making', desc: 'Technical rigor drives practical, cost-effective choices.' },
	{ icon: '🎯', title: 'Single accountable authority', desc: 'One accountable team for seamless delivery and clarity.' },
	{ icon: '🔍', title: 'Digital transparency', desc: 'Real-time visibility into cost, schedule and quality.' },
	{ icon: '📋', title: 'Strong compliance framework', desc: 'Audit-ready processes that de-risk regulatory exposure.' },
	{ icon: '⚡', title: 'Faster ROI realization', desc: 'Accelerated delivery and value optimisation for owners.' },
];

export default function WhyArtemis() {
	const [ref, visible] = useScrollAnimation(0.28);

	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	const breadcrumbs = [
		{ label: 'Home' },
		{ label: 'Why Artemis' }
	];

	return (
		<div className={styles.page}>
			<PageBanner
				title="Why Artemis Consultants?"
				breadcrumbs={breadcrumbs}
				bgImage="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1200&h=400&fit=crop&crop=center"
			/>
			<section className={styles.why}>
				<div className={styles.container}>

					<div ref={ref} className={`${styles.whyContent} ${visible ? styles.animateIn : ''}`}>
						<div className={styles.sectionHeader}>
							<h2 className={styles.sectionTitle}>Why Artemis Consultants?</h2>
							<p className={styles.sectionSubtitle}>
								We don’t just manage projects — we protect investments.
							</p>
						</div>

					{/* Images row  */}
					<div className={styles.imagesRow}>
						{images.map((src, idx) => (
							<div key={idx} className={styles.imageBox}>
								<img src={src} alt={`why-artemis-${idx + 1}`} className={styles.imageElement} />
							</div>
						))}
					</div>

					<div className={styles.whyGrid}>
						{points.map((p) => (
							<div key={p.title} className={styles.whyCard}>
								<div className={styles.whyIcon}>{p.icon}</div>
								<h3 className={styles.cardTitle}>{p.title}</h3>
								<p className={styles.cardDesc}>{p.desc}</p>
							</div>
						))}
					</div>

				</div>
			</div>
		</section>
		</div>
	);
}

