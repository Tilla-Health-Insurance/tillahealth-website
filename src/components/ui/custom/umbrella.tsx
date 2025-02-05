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

import { TitleUnderLine } from "@/components/shared/Decorations/TitleUnderLine";
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

	// const toggleUmbrella = () => {
	// 	setIsClosed(!isClosed);
	// };

	return (
		<div className={`${styles.container} ${styles.bgColor} dark:bg-background`}>
			<div className={styles.rain}></div>
			<div
				className={`${styles.umbrella} ${isClosed ? styles.closed : ""} dark:bg-red`}
			>
				<div className={`${styles.tip} dark:bg-background`}></div>
				<div className={`${styles.top} dark:bg-background`}></div>
				<div className={`${styles.handle} dark:bg-background`}></div>
				<div
					className={`${styles.umbrellaMessage} ${!isClosed ? styles.messageVisible : ""} dark:bg-background`}
				>
					<div className={`${styles.messageContent} dark:bg-background`}>
						<h2 className={"text-primary text-5xl font-bold"}>
							Why Choose Tilla Health
							<TitleUnderLine width={"20%"} />
						</h2>
						<p className={"text-muted-foreground text-lg font-medium"}>
							Transforming healthcare delivery with innovation and accessibility
						</p>

						<div className="grid grid-cols-3 gap-4 p-2">
							{benefits.map((benefit, index) => {
								const Icon = benefit.icon;
								return (
									<div
										key={index}
										className="flex flex-col items-center p-4 rounded-lg bg-white/5 backdrop-blur-sm border border-white/10 shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-0.5 hover:bg-white/10"
									>
										<div className="p-2 rounded-full bg-primary/10 mb-2">
											<Icon className="w-5 h-5 text-primary" />
										</div>
										<h3 className="text-base font-semibold text-primary mb-1">
											{benefit.title}
										</h3>
										<p className="text-muted-foreground text-center text-xs">
											{benefit.description}
										</p>
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
