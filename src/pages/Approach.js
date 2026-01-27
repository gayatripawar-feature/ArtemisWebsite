import React, { useEffect } from 'react';
import styles from './Approach.module.css';
import useScrollAnimation from '../hooks/useScrollAnimation';
import PageBanner from '../components/PageBanner';

const steps = [
	{
		number: '1',
		title: 'Project Diagnosis',
		description: 'Cost, design, risk, and schedule assessment.'
	},
	{
		number: '2',
		title: 'Engineering Optimization',
		description: 'Value engineering, constructability checks, and execution planning.'
	},
	{
		number: '3',
		title: 'Digital Controls',
		description: 'Live dashboards, MIS, and real-time reporting.'
	},
	{
		number: '4',
		title: 'Execution Governance',
		description: 'Contractor coordination, quality assurance, safety, and compliance.'
	},
	{
		number: '5',
		title: 'Delivery & Handover',
		description: 'Audit-ready documentation and smooth project closure.'
	}
];

const images = [
	'https://www.researchgate.net/publication/24077714/figure/fig1/AS%3A341301104005121%401458383932190/The-construction-planning-process-adapted-from-Hendrickson-2000.png',
	'https://www.researchgate.net/publication/328135430/figure/fig3/AS%3A679243621093377%401538955707469/The-project-lifecycle-includes-design-construction-and-maintenance-Collaborative-work.png',
	'https://buildinginformationmanagement.wordpress.com/wp-content/uploads/2016/07/lean-contruction-delivery-process.png'
];

export default function Approach() {
	const [subtitleRef, subtitleVisible] = useScrollAnimation(0.3);
	const [imagesRef, imagesVisible] = useScrollAnimation(0.3);
	const [stepsRef, stepsVisible] = useScrollAnimation(0.3);

	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	const breadcrumbs = [
		{ label: 'Home' },
		{ label: 'Approach' }
	];

	return (
		<div className={styles.page}>
			<PageBanner
				title="Our Approach"
				breadcrumbs={breadcrumbs}
				bgImage="https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=1200&h=400&fit=crop&crop=center"
			/>
			<section className={styles.subtitleSection}>
				<div className={styles.container}>
					<div ref={subtitleRef} className={`${styles.subtitleContent} ${subtitleVisible ? styles.animateIn : ''}`}>
						<h2 className={styles.subtitle}>How We Deliver Predictable Results</h2>
					</div>
				</div>
			</section>

			<section className={styles.imagesSection}>
				<div className={styles.container}>
					<div ref={imagesRef} className={`${styles.imagesContent} ${imagesVisible ? styles.animateIn : ''}`}>
						<div className={styles.imagesGrid}>
							{images.map((image, index) => (
								<div key={index} className={styles.imageContainer}>
									<img src={image} alt={`Process illustration ${index + 1}`} className={styles.processImage} />
								</div>
							))}
						</div>
					</div>
				</div>
			</section>

			<section className={styles.stepsSection}>
				<div className={styles.container}>
					<div ref={stepsRef} className={`${styles.stepsContent} ${stepsVisible ? styles.animateIn : ''}`}>
						<div className={styles.stepsGrid}>
							{steps.map((step, index) => (
								<div key={step.number} className={`${styles.stepCard} ${stepsVisible ? styles.animateIn : ''}`} style={{ animationDelay: `${index * 0.1}s` }}>
									<div className={styles.stepNumber}>{step.number}</div>
									<h3 className={styles.stepTitle}>{step.title}</h3>
									<p className={styles.stepDescription}>{step.description}</p>
								</div>
							))}
						</div>
					</div>
				</div>
			</section>
		</div>
	);
}