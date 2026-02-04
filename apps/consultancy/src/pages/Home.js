import React, { useEffect } from 'react';
import styles from './Home.module.css';
import Button from '../components/Button/Button';
import CinematicCarousel from '../components/CinematicCarousel';
import StatsCounter from '../components/StatsCounter';
import useScrollAnimation from '../hooks/useScrollAnimation';
import { useNavigate } from 'react-router-dom';

const services = [
	{ title: 'Cost Optimization & Value Engineering', desc: 'Strategic cost management and value engineering solutions', icon: '💰' },
	{ title: 'End-to-End Project Management (PMC)', desc: 'Complete project lifecycle management', icon: '🎯' },
	{ title: 'Real-Time Digital Project Control', desc: 'Advanced digital monitoring and control systems', icon: '📊' },
	{ title: 'RERA & Compliance Management', desc: 'Regulatory compliance and documentation', icon: '📋' },
	{ title: 'Design-to-Execution Alignment', desc: 'Seamless design implementation', icon: '🔧' },
	{ title: 'Fast-Track Construction', desc: 'Accelerated project delivery methods', icon: '⚡' },
];


export default function Home() {
	const [expertiseRef, expertiseVisible] = useScrollAnimation(0.3);
	const [servicesRef, servicesVisible] = useScrollAnimation(0.3);
	const [whyRef, whyVisible] = useScrollAnimation(0.3);
	const navigate = useNavigate();

	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	return (
		<div className={styles.page}>
			{/* Hero Section */}
			<section className={styles.hero}>
				<CinematicCarousel />
			</section>

			{/* Key Outcomes Section */}
			<section className={styles.keyOutcomesSection}>
				<div className={styles.keyOutcomesContainer}>
					<div className={styles.keyOutcomesContent}>
						<div className={styles.keyOutcomesHeader}>
							<h2 className={styles.keyOutcomesTitle}>Key Outcomes</h2>
							<p className={styles.keyOutcomesSubtitle}>
								The results you can expect when partnering with Artemis Consultancy.
							</p>
						</div>
						<div className={styles.expertiseGrid}>
							<div className={styles.expertiseCard}>
								<div className={styles.cardImage}>
									<img src={require("../assets/images/KeyOutcomes/Key_Outcome1.jpg")} alt="Key Outcome 1" />
								</div>
								<div className={styles.cardContent}>
									<h3>Up to 18% Construction Cost Savings</h3>
								</div>
							</div>
							<div className={styles.expertiseCard}>
								<div className={styles.cardImage}>
									<img src={require("../assets/images/KeyOutcomes/Key_Outcome3.jpg")} alt="Key Outcome 3" />
								</div>
								<div className={styles.cardContent}>
									<h3>Before-Time Project Delivery</h3>
								</div>
							</div>
							<div className={styles.expertiseCard}>
								<div className={styles.cardImage}>
									<img src={require("../assets/images/KeyOutcomes/Key_Outcome2.jpg")} alt="Key Outcome 2" />
								</div>
								<div className={styles.cardContent}>
									<h3>Single-Point Accountability</h3>
								</div>
							</div>
								<div className={styles.expertiseCard}>
								<div className={styles.cardImage}>
									<img src={require("../assets/images/KeyOutcomes/Key_Outcome2.jpg")} alt="Key Outcome 2" />
								</div>
								<div className={styles.cardContent}>
									<h3>Real-Time Digital Project Visibility</h3>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>


			{/* Stats Counter Section */}
			<StatsCounter />

			{/* Expertise Section */}
			<section className={styles.expertise}>
				<div className={styles.container}>
					<div ref={expertiseRef} className={`${styles.expertiseContent} ${expertiseVisible ? styles.animateIn : ''}`}>
						<div className={styles.sectionHeader}>
							<h2 className={styles.sectionTitle}>Our Core Expertise</h2>
							<p className={styles.sectionSubtitle}>
								We specialize in engineering-driven project consulting that protects developer margins, ensures regulatory compliance, and delivers predictable outcomes.
							</p>
						</div>
						<div className={styles.expertiseGrid}>
							<div className={styles.expertiseCard}>
								<div className={styles.cardImage}>
									<img src="https://www.gordian.com/uploads/2019/05/ValureEngineeringGraph.png.webp" alt="Value engineering" />
								</div>
								<div className={styles.cardContent}>
									<h3>Value Engineering</h3>
									<p>Optimizing project costs without compromising quality or functionality</p>
								</div>
							</div>
							<div className={styles.expertiseCard}>
								<div className={styles.cardImage}>
									<img src="https://cdn.prod.website-files.com/607f739c92f9cf647516b37b/66f9f3418d8c1a6d2dd2b10d_66c681c76b14f4545e1e0917_66c67f19673312ac98ddb662_The%252520Ultimate%252520Construction%252520Dashboard%252520for%252520Capital%252520Projects%2525201.webp" alt="Dashboard" />
								</div>
								<div className={styles.cardContent}>
									<h3>Digital Control</h3>
									<p>Real-time monitoring and control through advanced digital platforms</p>
								</div>
							</div>
							<div className={styles.expertiseCard}>
								<div className={styles.cardImage}>
									<img src="https://lydonsolutions.com/wp-content/uploads/2015/12/Lydon-Solutions-Construction-Project-Management-Dashboard-Featured.jpg" alt="Project dashboard" />
								</div>
								<div className={styles.cardContent}>
									<h3>Project Management</h3>
									<p>End-to-end project management with single-point accountability</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>



			{/* Services Section */}
			<section id="services" className={styles.services}>
				<div className={styles.servicesBackground}>
					<div className={styles.servicesGradient}></div>
					<div className={styles.servicesPattern}></div>
				</div>
				<div className={styles.container}>
					<div ref={servicesRef} className={`${styles.servicesContent} ${servicesVisible ? styles.animateIn : ''}`}>
						<div className={styles.sectionHeader}>
							<h2 className={styles.sectionTitle}>Our Services</h2>
							<p className={styles.sectionSubtitle}>
								From concept to completion, we provide end-to-end solutions for construction projects
							</p>
						</div>

						<div className={styles.servicesGrid}>
							{services.map((service, index) => (
								<div key={service.title} className={`${styles.serviceCard} ${servicesVisible ? styles.animateIn : ''}`} style={{ animationDelay: `${index * 0.1}s` }}>
									<div className={styles.serviceIcon}>
										<span>{service.icon}</span>
									</div>
									<div className={styles.serviceContent}>
										<h3>{service.title}</h3>
										<p>{service.desc}</p>
									</div>
									<div className={styles.serviceGlow}></div>
								</div>
							))}
						</div>

						<div className={styles.servicesCta}>
							<Button variant="primary" className={styles.servicesButton} onClick={() => navigate('/services')}>
								View All Services
							</Button>
						</div>
					</div>
				</div>
			</section>

			{/* Why Choose Us Section */}
			<section className={styles.why}>
				<div className={styles.container}>
					<div ref={whyRef} className={`${styles.whyContent} ${whyVisible ? styles.animateIn : ''}`}>
						<div className={styles.sectionHeader}>
							<h2 className={styles.sectionTitle}>Why Clients Choose Artemis</h2>
							<p className={styles.sectionSubtitle}>
								Trusted by developers and contractors for delivering exceptional results
							</p>
						</div>

						<div className={styles.whyGrid}>
							<div className={styles.whyCard}>
								<div className={styles.whyIcon}>🎯</div>
								<h3>Single-point Responsibility</h3>
								<p>One dedicated team handling all aspects of your project</p>
							</div>

							<div className={styles.whyCard}>
								<div className={styles.whyIcon}>🛡️</div>
								<h3>Zero-surprise Governance</h3>
								<p>Transparent processes with no hidden costs or delays</p>
							</div>

							<div className={styles.whyCard}>
								<div className={styles.whyIcon}>📋</div>
								<h3>Compliance & Audit Ready</h3>
								<p>Full regulatory compliance with audit-ready documentation</p>
							</div>

							<div className={styles.whyCard}>
								<div className={styles.whyIcon}>⚙️</div>
								<h3>Engineering Excellence</h3>
								<p>Designed by engineers, delivered for developers</p>
							</div>
						</div>
					</div>
				</div>
			</section>
		</div>
	);
}

