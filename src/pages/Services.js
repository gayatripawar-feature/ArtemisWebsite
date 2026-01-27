import React, { useEffect } from 'react';
import styles from './Services.module.css';
import useScrollAnimation from '../hooks/useScrollAnimation';
import PageBanner from '../components/PageBanner';

const services = [
	{
		title: 'Cost Optimization & Value Engineering',
		desc: 'Reduce construction cost by 8–15% without compromising quality through BOQ optimization, specification rationalization, vendor benchmarking, and alternate system design.',
		icon: '💰'
	},
	{
		title: 'Single-Point Responsibility (End-to-End PMC)',
		desc: 'From land due diligence to final handover, we manage design, approvals, contractors, quality, safety, and delivery under one accountable command.',
		icon: '🎯'
	},
	{
		title: 'Real-Time Digital Project Control',
		desc: 'Live dashboards, daily site reporting with photos, and real-time cost tracking ensure complete visibility and zero surprises.',
		icon: '📊'
	},
	{
		title: 'RERA, Compliance & Risk Shield',
		desc: 'Comprehensive RERA documentation, contract risk management, delay avoidance, and audit-ready records to protect your project and reputation.',
		icon: '📋'
	},
	{
		title: 'Design-to-Execution Alignment',
		desc: 'Clash detection, constructability reviews, and execution-oriented detailing to ensure what is designed is exactly what gets built.',
		icon: '🔧'
	},
	{
		title: 'Fast-Track Construction',
		desc: 'Accelerate delivery by 10–20% using parallel planning, lean construction techniques, and prefab/modular methodologies.',
		icon: '⚡'
	}
];

const images = [
	'https://crystalconstructionconsulting.com/wp-content/uploads/2022/06/Construction-Consultants-Expert-Guidance-for-Design-and-Construction-Needs.jpg',
	'https://www.theprojectgroup.com/data/Bilder_Services/TPG_PMO-Consulting_E.png',
	'https://www.reraconnect.com/assets/images/logo/logo-2.png',
	'https://media.licdn.com/dms/image/v2/C561BAQHZbaJNF6OKsw/company-background_10000/company-background_10000/0/1606720370215/rera_consultants_llp_cover?e=2147483647&t=4bJt20YQhFX71NulzfYXXA7wVkXZF0xcobD1oKodO-0&v=beta'
];

export default function Services() {
	const [imagesRef, imagesVisible] = useScrollAnimation(0.3);
	const [servicesRef, servicesVisible] = useScrollAnimation(0.3);

	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	const breadcrumbs = [
		{ label: 'Home' },
		{ label: 'Services' }
	];

	return (
		<div className={styles.page}>
			<PageBanner
				title="Our Services"
				breadcrumbs={breadcrumbs}
				bgImage="https://images.unsplash.com/photo-1553484771-371a605b060b?w=1200&h=400&fit=crop&crop=center"
			/>

			<section className={styles.images}>
				<div className={styles.container}>
					<div ref={imagesRef} className={`${styles.imagesGrid} ${imagesVisible ? styles.animateIn : ''}`}>
						{images.map((src, index) => (
							<img key={index} src={src} alt="" className={styles.image} />
						))}
					</div>
				</div>
			</section>

			<section className={styles.services}>
				<div className={styles.container}>
					<div ref={servicesRef} className={`${styles.servicesList} ${servicesVisible ? styles.animateIn : ''}`}>
						{services.map((service, index) => (
							<div key={index} className={styles.serviceItem}>
								<div className={styles.serviceHeader}>
									<div className={styles.serviceIcon}>{service.icon}</div>
									<h3 className={styles.serviceTitle}>{index + 1}. {service.title}</h3>
								</div>
								<p className={styles.serviceDesc}>{service.desc}</p>
								<hr className={styles.separator} />
							</div>
						))}
					</div>
				</div>
			</section>
		</div>
	);
}