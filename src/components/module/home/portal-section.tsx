"use client";

import Image from "next/image";
import { useState } from "react";

import { AnimatePresence, motion } from "framer-motion";
import { BriefcaseMedical, Building2, Hospital, Users } from "lucide-react";

import { Card } from "@/components/ui/card";
import { IMAGES } from "@/constants/files";
import { cn } from "@/lib/utils";

const portals = [
	{
		title: "Member Portal",
		description:
			"Designed for individuals and families to manage health plans, schedule appointments, view medical history, and request services such as telemedicine or medical transportation.",
		icon: Users,
		color: "bg-blue-500/10",
		iconColor: "text-blue-500",
	},
	{
		title: "Provider Portal",
		description:
			"Equipping healthcare providers with tools to manage patient care, track referrals, access medical records, and collaborate within the Tilla Health network for efficient service delivery.",
		icon: Hospital,
		color: "bg-emerald-500/10",
		iconColor: "text-emerald-500",
	},
	{
		title: "Broker Portal",
		description:
			"Supporting brokers with resources to manage client accounts, track commissions, and access tools to simplify insurance enrollment and administration.",
		icon: BriefcaseMedical,
		color: "bg-purple-500/10",
		iconColor: "text-purple-500",
	},
	{
		title: "Employer Portal",
		description:
			"Provides businesses with real-time tools to track and manage employee health benefits. With detailed insights into enrollment, utilization, and costs, it empowers employers to prioritize employee wellbeing while optimizing resources.",
		icon: Building2,
		color: "bg-orange-500/10",
		iconColor: "text-orange-500",
	},
];

function FeatureCard({
	title,
	description,
	icon: Icon,
	color,
	iconColor,
}: {
	title: string;
	description: string;
	icon: React.ElementType;
	color: string;
	iconColor: string;
}) {
	const [isHovered, setIsHovered] = useState(false);
	const [isOpen, setIsOpen] = useState(false);

	return (
		<Card
			className={cn(
				"relative overflow-hidden transition-all duration-300",
				"hover:shadow-lg hover:-translate-y-1"
			)}
			onMouseEnter={() => setIsHovered(true)}
			onMouseLeave={() => setIsHovered(false)}
		>
			<motion.button
				layout
				onClick={() => setIsOpen(!isOpen)}
				className="w-full text-left p-6"
			>
				<motion.div
					layout
					className="relative z-10 flex flex-col items-center gap-4"
				>
					<div className={cn("p-3 rounded-xl", color)}>
						<Icon className={cn("h-6 w-6", iconColor)} />
					</div>
					<h3 className="text-xl font-semibold tracking-tight">{title}</h3>
					<AnimatePresence>
						<motion.div
							initial={{ opacity: 0, height: 0 }}
							animate={{ opacity: 1, height: "auto" }}
							exit={{ opacity: 0, height: 0 }}
							transition={{ duration: 0.2 }}
							className="text-center"
						>
							<p className="text-sm text-muted-foreground leading-relaxed">
								{description}
							</p>
						</motion.div>
					</AnimatePresence>
				</motion.div>
			</motion.button>
			<div
				className={cn(
					"absolute inset-0 opacity-0 transition-opacity duration-300",
					isHovered && "opacity-100"
				)}
				style={{
					background:
						"radial-gradient(circle at center, rgba(255,255,255,0.1) 0%, transparent 70%)",
				}}
			/>
		</Card>
	);
}

export function PortalsSection() {
	return (
		<section className="relative pb-32 pt-20">
			<div className="absolute inset-0 h-[500px]">
				<Image
					src={IMAGES.portal}
					alt="TillaHealth Portals Overview"
					fill
					className="object-cover"
					priority
				/>
				<div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/80 to-background" />
			</div>

			<div className="container relative z-10">
				<div className="mx-auto max-w-[800px] text-center mb-16 space-y-4">
					<h2 className="text-primary text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl">
						Dedicated TillaHealth Portals
					</h2>
					<p className="text-xl text-muted-foreground">
						Empowering all stakeholders in our healthcare ecosystem with
						dedicated solutions
					</p>
				</div>

				<div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
					{portals.map((portal) => (
						<FeatureCard
							key={portal.title}
							title={portal.title}
							description={portal.description}
							icon={portal.icon}
							color={portal.color}
							iconColor={portal.iconColor}
						/>
					))}
				</div>
			</div>
		</section>
	);
}
