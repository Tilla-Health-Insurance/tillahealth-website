"use client";

import { useCallback, useEffect, useState } from "react";

import {
	ClipboardCheck,
	Clock,
	DollarSign,
	Globe,
	Link,
	Shield,
	Truck,
	Users,
} from "lucide-react";

import styles from "@/styles/umbrella.module.css";

const benefits = [
	{
		title: "Access Made Easy",
		description:
			"Delivering care through telemedicine and a robust provider network.",
		icon: ClipboardCheck, // Represents easy access and organization
	},
	{
		title: "Tailored Solutions",
		description:
			"Plans designed for individuals, families, NGOs, and businesses.",
		icon: Users, // Represents personalized solutions for different groups
	},
	{
		title: "Quality Care",
		description:
			"Combining global expertise and advanced technology to deliver top-tier services.",
		icon: Globe, // Represents global expertise and quality
	},
	{
		title: "Cost Efficiency",
		description:
			"Minimizing expenses through preventive care and reduced travel.",
		icon: DollarSign, // Represents cost-saving and financial efficiency
	},
	{
		title: "Timely Interventions",
		description:
			"Early detection and rapid treatment with digital diagnostic tools.",
		icon: Clock, // Represents timely action and quick response
	},
	{
		title: "Empowered Communities",
		description:
			"Tools and resources to improve care delivery and health management.",
		icon: Shield, // Represents strength and community support
	},
	{
		title: "Safe Transport",
		description:
			"Reliable medical transportation with follow-up care until recovery.",
		icon: Truck, // Represents transportation and logistics
	},
	{
		title: "Sustainable Systems",
		description:
			"Resilient infrastructure to address Ethiopia's evolving healthcare needs.",
		icon: Link, // Represents connection and sustainability
	},
	{
		title: "Global Connections",
		description:
			"Bridging local communities with diaspora and international expertise for impactful solutions.",
		icon: Globe, // Represents global networking and connections
	},
];

export default function Umbrella() {
	const [isClosed, setIsClosed] = useState(true);
	const [showScrollMessage, setShowScrollMessage] = useState(true);

	const handleScroll = useCallback(() => {
		const scrollPosition = window.scrollY;
		const windowHeight = window.innerHeight;
		const umbrellaElement = document.querySelector(
			`.${styles.umbrella}`
		) as HTMLElement;

		if (umbrellaElement) {
			const umbrellaPosition =
				umbrellaElement.getBoundingClientRect().top + window.scrollY;

			if (scrollPosition > umbrellaPosition - windowHeight / 3) {
				setIsClosed(false);
				setShowScrollMessage(false);
			} else {
				setIsClosed(true);
			}
		}
	}, []);

	useEffect(() => {
		window.addEventListener("scroll", handleScroll);
		return () => window.removeEventListener("scroll", handleScroll);
	}, [handleScroll]);

	const toggleUmbrella = () => {
		setIsClosed(!isClosed);
	};

	return (
		<div className={`${styles.container} ${styles.bgColor}`}>
			<div className={styles.rain}></div>
			<div
				className={`${styles.umbrella} ${isClosed ? styles.closed : ""}`}
				onClick={toggleUmbrella}
			>
				<div className={styles.tip}></div>
				<div className={styles.top}></div>
				<div className={styles.handle}></div>
				<div
					className={`${styles.umbrellaMessage} ${!isClosed ? styles.messageVisible : ""}`}
				>
					<div className={styles.messageContent}>
						<h2 className={styles.messageTitle}>Why Choose Tilla Health</h2>
						<p className={styles.messageText}>
							Transforming healthcare delivery with innovation and accessibility
						</p>

						<div className={styles.featureGrid}>
							{benefits.map((benefit, index) => {
								const Icon = benefit.icon;
								return (
									<div key={index} className={styles.featureItem}>
										<div className={styles.featureIcon}>
											<Icon className={styles.icon} />
										</div>
										<h3>{benefit.title}</h3>
										<p>{benefit.description}</p>
									</div>
								);
							})}
						</div>
					</div>
				</div>
			</div>
			{/* <button className={styles.toggleButton} onClick={toggleUmbrella}>
        {isClosed ? "Open Umbrella" : "Close Umbrella"}
      </button> */}
			{/* {showScrollMessage && (
				<div className={styles.scrollMessage}>
					Scroll down to open the umbrella
				</div>
			)} */}
		</div>
	);
}
