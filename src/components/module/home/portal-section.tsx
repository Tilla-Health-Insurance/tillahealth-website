"use client";

import Image from "next/image";
import { useState } from "react";

import { AnimatePresence, motion } from "framer-motion";
import { BriefcaseMedical, Building2, Hospital, Users } from "lucide-react";

import { IMAGES } from "@/constants/files";
import { cn } from "@/lib/utils";

const portals = [
	{
		title: "Member Portal",
		description:
			"Designed for individuals and families to manage health plans, schedule appointments, view medical history, and request services such as telemedicine or medical transportation.",
		icon: Users,
		image: IMAGES.memberportal,
		color: "bg-blue-500/10",
		iconColor: "text-blue-500",
	},
	{
		title: "Provider Portal",
		description:
			"Equipping healthcare providers with tools to manage patient care, track referrals, access medical records, and collaborate within the Tilla Health network for efficient service delivery.",
		icon: Hospital,
		image: IMAGES.providerportal,
		color: "bg-emerald-500/10",
		iconColor: "text-emerald-500",
	},
	{
		title: "Broker Portal",
		description:
			"Supporting brokers with resources to manage client accounts, track commissions, and access tools to simplify insurance enrollment and administration.",
		icon: BriefcaseMedical,
		image: IMAGES.brokerportal,
		color: "bg-purple-500/10",
		iconColor: "text-purple-500",
	},
	{
		title: "Employer Portal",
		description:
			"Provides businesses with real-time tools to track and manage employee health benefits. With detailed insights into enrollment, utilization, and costs, it empowers employers to prioritize employee wellbeing while optimizing resources.",
		icon: Building2,
		image: IMAGES.companyportal,
		color: "bg-orange-500/10",
		iconColor: "text-orange-500",
	},
];

function FeatureCard({
	title,
	description,
	icon: Icon,
	image,
	color,
	iconColor,
}: {
	title: string;
	description: string;
	icon: React.ElementType;
	image: any;
	color: string;
	iconColor: string;
}) {
	const [isHovered, setIsHovered] = useState(false);
	const [isOpen, setIsOpen] = useState(false);

	return (
		<div
			className={cn(
				"relative overflow-hidden transition-all duration-300 ",
				"hover:shadow-lg hover:-translate-y-1"
			)}
			onMouseEnter={() => setIsHovered(true)}
			onMouseLeave={() => setIsHovered(false)}
		>
			<div className="absolute inset-0">
				<AnimatePresence mode="wait">
					<motion.div
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						exit={{ opacity: 0 }}
						transition={{ duration: 0.5 }}
						className="relative w-full h-full"
					>
						<Image
							src={image || "/placeholder.svg"}
							alt={`${title} Background`}
							fill
							className="object-cover"
							priority
							sizes="100vw"
						/>
						<div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/75 to-transparent" />
					</motion.div>
				</AnimatePresence>
			</div>

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
					<h3 className="text-xl font-semibold tracking-tight text-white drop-shadow-md">
						{title}
					</h3>
					<AnimatePresence>
						<motion.div
							initial={{ opacity: 0, height: 0 }}
							animate={{ opacity: 1, height: "auto" }}
							exit={{ opacity: 0, height: 0 }}
							transition={{ duration: 0.2 }}
							className="text-center"
						>
							<p className="text-sm text-white leading-relaxed bg-black/60 p-2 rounded-md drop-shadow-md">
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
		</div>
	);
}

export function PortalsSection() {
	return (
		<section
			className="py-24 bg-gradient-to-b from-blue-50 via-white to-gray-50 dark:bg-muted/40 dark:from-black dark:via-gray-700 dark:to-gray-900 
               transition duration-300"
		>
			<div className="container mx-auto px-6 lg:px-12 flex flex-col lg:flex-row items-center gap-12">
				{/* Left Section: Text Content */}
				<div className="lg:w-1/2 text-center lg:text-left">
					<h3 className="text-sm font-semibold text-primary mb-4">
						{">>"} Portals {"<<"}
					</h3>
					<h2 className="text-4xl font-bold text-gray-800 leading-snug">
						Dedicated TillaHealth Portals
					</h2>
					<p className="mt-4 text-gray-600 leading-relaxed">
						Empowering all stakeholders in our healthcare ecosystem with
						dedicated solutions
					</p>
					<div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-4">
						{portals.map((portal) => (
							<FeatureCard
								key={portal.title}
								title={portal.title}
								description={portal.description}
								icon={portal.icon}
								color={portal.color}
								iconColor={portal.iconColor}
								image={portal.image}
							/>
						))}
					</div>
				</div>

				{/* Right Section: Image */}
				<div className="hidden md:block lg:block lg:w-1/2 relative max-h-[40vh]">
					<div className="relative rounded-lg overflow-hidden shadow-xl">
						<Image
							src={IMAGES.portal}
							alt="Team discussing benefits"
							width={600}
							height={800}
							className="rounded-lg"
						/>
					</div>
				</div>
			</div>
		</section>
	);
}
