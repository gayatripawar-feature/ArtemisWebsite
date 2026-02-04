import React, { useEffect } from 'react';
import styles from './About.module.css';
import useScrollAnimation from '../hooks/useScrollAnimation';
import PageBanner from '../components/PageBanner';

export default function About() {
	const [whoWeAreRef, whoWeAreVisible] = useScrollAnimation(0.3);
	const [philosophyRef, philosophyVisible] = useScrollAnimation(0.3);
	const [standForRef, standForVisible] = useScrollAnimation(0.3);

	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	const breadcrumbs = [
		{ label: 'Home' },
		{ label: 'About' }
	];

	return (
		<div className={styles.page}>
			<PageBanner
				title="About Us"
				breadcrumbs={breadcrumbs}
				bgImage="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=1200&h=400&fit=crop&crop=center"
			/>
			<section className={styles.section}>
				<div className={styles.container}>
					<div ref={whoWeAreRef} className={`${styles.content} ${whoWeAreVisible ? styles.animateIn : ''}`}>
						<h1 className={styles.sectionTitle}>Who We Are</h1>
						<p className={styles.description}>
							<strong>Artemis Infratech Consultancy</strong> is an engineering-led project consulting firm focused on delivering <em>financial certainty, execution clarity, and regulatory confidence</em> in real estate and infrastructure projects.
						</p>
						<p className={styles.description}>
							We work as an <em>extended arm of developers and investors</em>, ensuring that every rupee spent and every day invested delivers measurable value.
						</p>
					</div>
				</div>
			</section>

			{/* Our Philosophy Section */}
			<section className={styles.section}>
				<div className={styles.container}>
					<div ref={philosophyRef} className={`${styles.content} ${philosophyVisible ? styles.animateIn : ''}`}>
						<h2 className={styles.sectionTitle}>Our Philosophy</h2>
						<ul className={styles.philosophyList}>
							<li className={styles.philosophyItem}>
								<strong>Engineering before assumptions</strong>
							</li>
							<li className={styles.philosophyItem}>
								<strong>Data before decisions</strong>
							</li>
							<li className={styles.philosophyItem}>
								<strong>Execution before excuses</strong>
							</li>
						</ul>
					</div>
				</div>
			</section>

			{/* What We Stand For Section */}
			<section className={styles.section}>
				<div className={styles.container}>
					<div ref={standForRef} className={`${styles.content} ${standForVisible ? styles.animateIn : ''}`}>
						<h2 className={styles.sectionTitle}>What We Stand For</h2>
						<ul className={styles.valuesList}>
							<li className={styles.valueItem}>
								<strong>Accountability over coordination</strong>
							</li>
							<li className={styles.valueItem}>
								<strong>Transparency over reporting</strong>
							</li>
							<li className={styles.valueItem}>
								<strong>Prevention over correction</strong>
							</li>
						</ul>
					</div>
				</div>
			</section>
		</div>
	);
}
