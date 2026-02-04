import React, { useRef, useEffect, useState } from 'react';
import styles from './StatsCounter.module.css';

const stats = [
	{ number: 18, suffix: '%', label: 'Cost Saving' },
	{ number: 1.5, suffix: ' Lakh sq. ft.', label: 'Delivered' },
	{ number: 90, suffix: ' Days', label: 'Faster' },
	{ number: 98, suffix: '%', label: 'Customer Satisfaction' },
];

function StatCard({ number, suffix, label, index }) {
	const [displayNumber, setDisplayNumber] = useState(0);
	const [isAnimating, setIsAnimating] = useState(false);
	const cardRef = useRef(null);
	const animationRef = useRef(null);

	useEffect(() => {
		const observer = new IntersectionObserver(
			(entries) => {
				entries.forEach((entry) => {
					if (entry.isIntersecting && !isAnimating) {
						setIsAnimating(true);
						observer.unobserve(entry.target);
					}
				});
			},
			{ threshold: 0.1 }
		);

		const currentRef = cardRef.current;

		if (currentRef) {
			observer.observe(currentRef);
		}

		return () => {
			if (currentRef) {
				observer.unobserve(currentRef);
			}
		};
	}, [isAnimating]);

	useEffect(() => {
		if (!isAnimating) return;

		const target = number;
		const duration = 2000;
		const startTime = performance.now();
		const startValue = 0;

		const easeOutCubic = (t) => 1 - Math.pow(1 - t, 3);

		const animate = (currentTime) => {
			const elapsed = currentTime - startTime;
			const progress = Math.min(elapsed / duration, 1);
			const easedProgress = easeOutCubic(progress);
			const currentValue = startValue + (target - startValue) * easedProgress;

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
			if (animationRef.current) {
				cancelAnimationFrame(animationRef.current);
			}
		};
	}, [isAnimating, number]);

	return (
		<div
			ref={cardRef}
			className={styles.statCard}
			style={{
				animationDelay: `${index * 0.1}s`,
			}}
		>
			<div className={styles.shine}></div>

			<div className={styles.statContent}>
				<div className={styles.statNumber}>
					{displayNumber}
					<span className={styles.suffix}>{suffix}</span>
				</div>
				<div className={styles.statLabel}>{label}</div>
			</div>
		</div>
	);
}

export default function StatsCounter() {
	const statsRef = useRef(null);

	useEffect(() => {
		const observer = new IntersectionObserver(
			(entries) => {
				entries.forEach((entry) => {
					if (entry.isIntersecting) {
						entry.target.classList.add(styles.visible);
						observer.unobserve(entry.target);
					}
				});
			},
			{ threshold: 0.1 }
		);

		const currentRef = statsRef.current;

		if (currentRef) {
			observer.observe(currentRef);
		}

		return () => {
			if (currentRef) {
				observer.unobserve(currentRef);
			}
		};
	}, []);

	return (
		<section className={styles.statsSection}>
			<div className={styles.statsContainer} ref={statsRef}>
				<div className={styles.statsGrid}>
					{stats.map((stat, index) => (
						<StatCard
							key={stat.label}
							number={stat.number}
							suffix={stat.suffix}
							label={stat.label}
							index={index}
						/>
					))}
				</div>
			</div>
		</section>
	);
}
