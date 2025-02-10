"use client";

import { useRef } from "react";

import { motion, useScroll, useTransform } from "framer-motion";

import BenefitsSection from "@/components/module/Benefitscard";

interface Plan {
	title: string;
	desc: string;
	defaultValue?: any;
	services?: ServiceItem[];
	healthConnectData?: HealthConnectData;
	sections?: Sections[];
}

interface Sections {
	title: string;
	items: Item[];
}

interface Item {
	title?: string;
	sub: string[];
	desc?: string;
}

interface PlanProps {
	details: Plan;
}

interface ServiceItem {
	icon: any;
	title: string;
	description: string;
	href: string;
}

export interface PlanTier {
	name: string;
	description: string;
}

export interface CoverageDetails {
	intro: string;
}

export interface Description {
	intro: string[];
	planTiers?: PlanTier[];
}

interface HealthConnectData {
	title: string;
	subtitle: string;
	coverageDetails: CoverageDetails;
	description: Description;
}

export default function BenefitsPage({ details }: PlanProps) {
	const containerRef = useRef<HTMLDivElement>(null);
	const { scrollYProgress } = useScroll({
		target: containerRef,
		offset: ["start start", "end start"],
	});

	const y = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);
	const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

	return (
		<div ref={containerRef} className="min-h-screen relative overflow-x-hidden">
			<main className="min-h-screen relative isolate overflow-hidden">
				{/* Content */}
				<div className="relative z-10">
					{/* Hero Section */}
					<motion.div
						className="min-h-[60vh] flex bg-primary items-center justify-center"
						style={{ y, opacity }}
					>
						<div className="max-w-7xl mx-auto px-6 py-24 w-full flex justify-center">
							<motion.div
								initial={{ opacity: 0, y: 20 }}
								animate={{ opacity: 1, y: 0 }}
								transition={{ duration: 0.8 }}
								className="max-w-3xl"
							>
								<h1 className="text-3xl md:text-4xl font-bold mb-6 text-white text-center">
									{details.title}
								</h1>
								<p className="text-md md:text-lg leading-relaxed text-white text-center">
									{details.desc}
								</p>
							</motion.div>
						</div>
					</motion.div>

					{/* Benefits Sections */}
					<div className="mt-12">
						<div className="max-w-7xl mx-auto px-6 md:py-4 relative">
							<div className="grid grid-cols-1 md:grid-cols-2 gap-12">
								{details.sections?.map((section, index) => (
									<motion.div
										key={section.title}
										initial={{ opacity: 0, y: 50 }}
										whileInView={{ opacity: 1, y: 0 }}
										viewport={{ once: true }}
										transition={{
											duration: 0.8,
											delay: index * 0.2,
											ease: [0.21, 0.45, 0.15, 1.2],
										}}
										className="relative group"
									>
										<div
											className="absolute inset-0 bg-white/5 rounded-2xl backdrop-blur-md -z-10 
                                transition-colors duration-300 group-hover:bg-white/10"
										/>
										<div
											className="absolute inset-0 -z-20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
											style={{
												backgroundImage:
													"radial-gradient(circle at 1px 1px, rgba(255,255,255,0.1) 1px, transparent 0)",
												backgroundSize: "20px 20px",
											}}
										/>
										<div className="md:p-8">
											<BenefitsSection
												key={index}
												title={section.title}
												items={section.items}
											/>
										</div>
									</motion.div>
								))}
							</div>
						</div>
					</div>
				</div>
			</main>
		</div>
	);
}
