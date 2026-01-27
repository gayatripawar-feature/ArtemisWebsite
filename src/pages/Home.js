import React, { useEffect } from 'react';
import styles from './Home.module.css';
import Button from '../components/Button/Button';
import useScrollAnimation from '../hooks/useScrollAnimation';
import { useNavigate } from 'react-router-dom';

const highlights = [
	{ text: '8–15% Cost Optimization', icon: '💰' },
	{ text: '10–20% Faster Delivery', icon: '⚡' },
	{ text: 'End-to-End PMC', icon: '🎯' },
	{ text: 'Real-Time Digital Control', icon: '📊' },
];

const services = [
	{ title: 'Cost Optimization & Value Engineering', desc: 'Strategic cost management and value engineering solutions', icon: '💰' },
	{ title: 'End-to-End Project Management (PMC)', desc: 'Complete project lifecycle management', icon: '🎯' },
	{ title: 'Real-Time Digital Project Control', desc: 'Advanced digital monitoring and control systems', icon: '📊' },
	{ title: 'RERA & Compliance Management', desc: 'Regulatory compliance and documentation', icon: '📋' },
	{ title: 'Design-to-Execution Alignment', desc: 'Seamless design implementation', icon: '🔧' },
	{ title: 'Fast-Track Construction', desc: 'Accelerated project delivery methods', icon: '⚡' },
];

const stats = [
	{ number: '500+', label: 'Projects Completed' },
	{ number: '15%', label: 'Average Cost Savings' },
	{ number: '98%', label: 'Client Satisfaction' },
	{ number: '24/7', label: 'Support Available' },
];

export default function Home() {
	const [heroRef, heroVisible] = useScrollAnimation(0.3);
	const [expertiseRef, expertiseVisible] = useScrollAnimation(0.3);
	const [servicesRef, servicesVisible] = useScrollAnimation(0.3);
	const [statsRef, statsVisible] = useScrollAnimation(0.3);
	const [whyRef, whyVisible] = useScrollAnimation(0.3);
	const navigate = useNavigate();

	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	return (
		<div className={styles.page}>
			{/* Hero Section */}
			<section className={styles.hero}>
				<div className={styles.heroBackground}>
					<div className={styles.heroGradient}></div>
					<div className={styles.heroPattern}></div>
				</div>

				<div className={styles.container}>
					<div ref={heroRef} className={`${styles.heroContent} ${heroVisible ? styles.animateIn : ''}`}>
						<div className={styles.heroText}>
							<h1 className={styles.heroTitle}>
								Engineering Certainty for
								<span className={styles.heroHighlight}> Cost, Time & Quality </span>
								in Construction
							</h1>
							<p className={styles.heroSubtitle}>
								Artemis Consultants delivers <strong>cost-optimized, compliant, and fast-tracked construction projects</strong> through engineering excellence, digital controls, and single-point accountability.
							</p>

							<div className={styles.highlights}>
								{highlights.map((highlight, index) => (
									<div key={highlight.text} className={`${styles.highlightItem} ${heroVisible ? styles.animateIn : ''}`} style={{ animationDelay: `${index * 0.1}s` }}>
										<span className={styles.highlightIcon}>{highlight.icon}</span>
										<span className={styles.highlightText}>{highlight.text}</span>
										<div className={styles.highlightGlow}></div>
									</div>
								))}
							</div>

							<div className={styles.ctaRow}>
								<a href="/contact">
									<Button variant="primary" className={styles.ctaButton}>
										Talk to an Expert
									</Button>
								</a>
								<a href="#services">
									<Button variant="secondary" className={styles.ctaButton}>
										View Our Services
									</Button>
								</a>
							</div>
						</div>

						<div className={styles.heroVisual}>
							<div className={styles.heroImageContainer}>
								<img
									src="https://blog.novatr.com/hs-fs/hubfs/Construction%20managers%20discussing%20a%20project.jpg?height=1080&name=Construction+managers+discussing+a+project.jpg&width=1920"
									alt="Construction managers discussing project"
									className={styles.heroImage}
								/>
								<div className={styles.imageOverlay}></div>
							</div>
							<div className={styles.floatingElements}>
								<div className={styles.floatingCard}>
									<span className={styles.floatingIcon}>📈</span>
									<span>Cost Optimized</span>
								</div>
								<div className={styles.floatingCard}>
									<span className={styles.floatingIcon}>⏱️</span>
									<span>Time Efficient</span>
								</div>
								<div className={styles.floatingCard}>
									<span className={styles.floatingIcon}>✅</span>
									<span>Quality Assured</span>
								</div>
							</div>
						</div>
					</div>
				</div>


			</section>

			{/* Stats Section */}
			<section className={styles.stats}>
				<div className={styles.container}>
					<div ref={statsRef} className={`${styles.statsGrid} ${statsVisible ? styles.animateIn : ''}`}>
						{stats.map((stat, index) => (
							<div key={stat.label} className={styles.statItem} style={{ animationDelay: `${index * 0.2}s` }}>
								<div className={styles.statNumber}>{stat.number}</div>
								<div className={styles.statLabel}>{stat.label}</div>
								<div className={styles.statGlow}></div>
							</div>
						))}
					</div>
				</div>
			</section>

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

