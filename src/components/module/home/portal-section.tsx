"use client";

import Image from "next/image";
import { useState } from "react";

import { AnimatePresence, motion } from "framer-motion";
import { BriefcaseMedical, Hospital, Users } from "lucide-react";

import { IMAGES } from "@/constants/files";
import { cn } from "@/lib/utils";

const portals = [
	{
		title: "Member Portal",
		description:
			"Designed for individuals and families to manage health plans, schedule appointments, view medical history, and request services such as telemedicine or medical transportation.",
		icon: Users,
	},
	{
		title: "Provider Portal",
		description:
			"Equipping healthcare providers with tools to manage patient care, track referrals, access medical records, and collaborate within the Tilla Health network for efficient service delivery.",
		icon: Hospital,
	},
	{
		title: "Broker Portal",
		description:
			"Supporting brokers with resources to manage client accounts, track commissions, and access tools to simplify insurance enrollment and administration.",
		icon: BriefcaseMedical,
	},
];

function FeatureCard({
	title,
	description,
	icon: Icon,
}: {
	title: string;
	description: string;
	icon: React.ElementType;
}) {
	const [isOpen, setIsOpen] = useState(false);

	return (
		<motion.div
			layout
			className="group rounded-xl bg-card border border-primary p-4"
		>
			<motion.button
				layout
				onClick={() => setIsOpen(!isOpen)}
				className={cn(
					"w-full rounded-lg p-4 text-left transition-colors hover:bg-muted/50",
					isOpen && "bg-muted"
				)}
			>
				<motion.div
					layout
					className="flex flex-col items-center justify-center gap-3 p-4"
				>
					<Icon className="h-7 w-7 text-primary" />
					<h3 className="font-semibold text-primary text-center">{title}</h3>
				</motion.div>
				<AnimatePresence>
					<motion.div
						initial={{ opacity: 0, height: 0 }}
						animate={{ opacity: 1, height: "auto" }}
						exit={{ opacity: 0, height: 0 }}
						transition={{ duration: 0.2 }}
						className="overflow-hidden"
					>
						<p className="mt-4 text-sm text-muted-foreground">{description}</p>
					</motion.div>
				</AnimatePresence>
			</motion.button>
		</motion.div>
	);
}

export function PortalsSection() {
	return (
		<section className="pb-24">
			<div className="">
				<div className="mx-auto  space-y-12">
					<div className="relative mx-auto" style={{ height: "35rem" }}>
						<Image
							src={IMAGES.portal}
							alt="TillaHealth Portals Overview"
							fill
							className="object-cover top-0 left-0"
							priority
						/>
						{/* Gradient overlay */}
						<div className="absolute inset-0 bg-gradient-to-t from-black/80 to-background/0" />
						<div className="absolute bottom-1/3 left-0 right-0 p-6 text-center space-y-4 container text-primary">
							<h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
								Dedicated TillaHealth Portals
							</h2>
							<p className="mx-auto max-w-[700px] text-white">
								Tilla Health offers dedicated portals to empower all
								stakeholders in our healthcare ecosystem
							</p>
						</div>
						<motion.div
							initial={{ opacity: 0, y: 20 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.5 }}
							className={cn(
								"hidden md:grid  gap-4 md:grid-cols-3 lg:grid-cols-3 container md:absolute md:-bottom-20 z-10"
								// isOpen && "-bottom-10"
							)}
						>
							{portals.map((portal) => (
								<FeatureCard
									key={portal.title}
									title={portal.title}
									description={portal.description}
									icon={portal.icon}
								/>
							))}
						</motion.div>
					</div>
					{/* <div className="text-center space-y-4 container">
						<h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
							Dedicated TillaHealth Portals
						</h2>
						<p className="mx-auto max-w-[700px] text-muted-foreground">
							Tilla Health offers dedicated portals to empower all stakeholders
							in our healthcare ecosystem
						</p>
					</div> */}
					<motion.div
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.5 }}
						className={cn(
							"md:hidden lg:hidden gap-4 md:grid-cols-2 lg:grid-cols-3 container z-10"
							// isOpen && "-bottom-10"
						)}
					>
						{portals.map((portal) => (
							<FeatureCard
								key={portal.title}
								title={portal.title}
								description={portal.description}
								icon={portal.icon}
							/>
						))}
					</motion.div>
				</div>
			</div>
		</section>
	);
}
