

import React, { useRef, useEffect, useState } from 'react';
import styles from './StatsCounter.module.css';

const stats = [
	{ number: 18, suffix: '%', label: 'Cost Saving', icon: '💰', shouldAnimate: false },
	{ number: 1.5, suffix: ' Lakh sq. ft.', label: 'Delivered', icon: '🏗️', shouldAnimate: true },
	{ number: 90, suffix: ' Days', label: 'Faster', icon: '⚡', shouldAnimate: true },
	{ number: 98, suffix: '%', label: 'Customer Satisfaction', icon: '⭐', shouldAnimate: false },
];

function StatCard({ number, suffix, label, icon, description, index, shouldAnimate }) {
	const [displayNumber, setDisplayNumber] = useState(shouldAnimate ? 0 : number);
	const [isAnimating, setIsAnimating] = useState(false);
	const [isVisible, setIsVisible] = useState(false);
	const cardRef = useRef(null);
	const animationRef = useRef(null);

	useEffect(() => {
		const observer = new IntersectionObserver(
			(entries) => {
				entries.forEach((entry) => {
					if (entry.isIntersecting && !isAnimating) {
						setTimeout(() => {
							setIsVisible(true);
							if (shouldAnimate) {
								setIsAnimating(true);
							}
						}, index * 150);
						observer.unobserve(entry.target);
					}
				});
			},
			{ threshold: 0.1 }
		);

		const currentRef = cardRef.current;
		if (currentRef) observer.observe(currentRef);

		return () => {
			if (currentRef) observer.unobserve(currentRef);
		};
	}, [isAnimating, index, shouldAnimate]);

	useEffect(() => {
		if (!isAnimating) return;

		const target = number;
		const duration = 3000;
		const startTime = performance.now();

		const easeOutCubic = (t) => 1 - Math.pow(1 - t, 3);

		const animate = (currentTime) => {
			const elapsed = currentTime - startTime;
			const progress = Math.min(elapsed / duration, 1);
			const easedProgress = easeOutCubic(progress);
			const currentValue = target * easedProgress;

			if (Number.isInteger(target)) {
				setDisplayNumber(Math.round(currentValue));
			} else {
				setDisplayNumber(parseFloat(currentValue.toFixed(1)));
			}

			if (progress < 1) {
				animationRef.current = requestAnimationFrame(animate);
			}
		};

		animationRef.current = requestAnimationFrame(animate);

		return () => {
			if (animationRef.current) cancelAnimationFrame(animationRef.current);
		};
	}, [isAnimating, number]);

	return (
		<div
			ref={cardRef}
			className={`${styles.statCard} ${isVisible ? styles.visible : ''}`}
		>
			<div className={styles.cardGlow}></div>
			<div className={styles.shine}></div>
			<div className={styles.cardBorderGlow}></div>

			<div className={styles.statContent}>
				<div className={styles.iconWrapper}>
					<span className={styles.icon}>{icon}</span>
				</div>
				<div className={styles.statNumber}>
					{displayNumber}
					<span className={styles.suffix}>{suffix}</span>
				</div>
				<div className={styles.dividerLine}></div>
				<div className={styles.statLabel}>{label}</div>
				<div className={styles.statDescription}>{description}</div>
			</div>
		</div>
	);
}

function StatsCounter() {
	return (
		<section className={styles.statsSection}>
			{/* Decorative floating particles */}
			<div className={styles.particles}>
				<div className={`${styles.particle} ${styles.particle1}`}></div>
				<div className={`${styles.particle} ${styles.particle2}`}></div>
				<div className={`${styles.particle} ${styles.particle3}`}></div>
				<div className={`${styles.particle} ${styles.particle4}`}></div>
				<div className={`${styles.particle} ${styles.particle5}`}></div>
				<div className={`${styles.particle} ${styles.particle6}`}></div>
			</div>

			{/* Decorative geometric shapes */}
			<div className={styles.geometricShapes}>
				<div className={`${styles.shape} ${styles.shapeCircle}`}></div>
				<div className={`${styles.shape} ${styles.shapeDiamond}`}></div>
				<div className={`${styles.shape} ${styles.shapeRing}`}></div>
			</div>

			<div className={styles.statsContainer}>
				<div className={styles.sectionHeader}>
					<h2 className={styles.sectionTitle}>Our Impact in Numbers</h2>

				</div>

				<div className={styles.statsGrid}>
					{stats.map((stat, index) => (
						<StatCard
							key={index}
							number={stat.number}
							suffix={stat.suffix}
							label={stat.label}
							icon={stat.icon}
							index={index}
							shouldAnimate={stat.shouldAnimate}
						/>
					))}
				</div>
			</div>
		</section>
	);
}

export default StatsCounter;

