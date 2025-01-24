"use client";

import Image from "next/image";
import { useState } from "react";

import { AnimatePresence, motion } from "framer-motion";
import { ChevronDown } from "lucide-react";

import { cn } from "@/lib/utils";

interface HealthPlan {
	title: string;
	description: string;
	image: any;
	icon: React.ElementType;
	eligibility: any;
	features: any;
}

interface HealthPlanCardProps {
	plan: HealthPlan;
	isExpanded: boolean;
	onToggle: () => void;
	className?: string;
}

export function HealthPlanCard({
	plan,
	isExpanded,
	onToggle,
	className,
}: HealthPlanCardProps) {
	const [isHovered, setIsHovered] = useState(false);

	return (
		<div className={cn("flex flex-col", className)}>
			<motion.div
				className="relative rounded-xl overflow-hidden bg-white shadow-lg transition-all duration-300 cursor-pointer"
				whileHover={{ y: -5 }}
				onHoverStart={() => setIsHovered(true)}
				onHoverEnd={() => setIsHovered(false)}
				onClick={onToggle}
			>
				<div className="relative h-64">
					<Image
						src={plan.image || "/placeholder.svg"}
						alt={plan.title}
						fill
						className="object-cover transition-all duration-500"
						sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
					/>
					<div
						className={cn(
							"absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent transition-opacity duration-300",
							isHovered ? "opacity-100" : "opacity-60"
						)}
					/>
					<div className="absolute inset-x-0 bottom-0 p-6 text-white">
						<div className="flex items-center gap-3 mb-3">
							<div className="bg-primary  rounded-2xl p-2.5">
								<plan.icon className="w-6 h-6" />
							</div>
							<h3 className="text-xl font-semibold">{plan.title}</h3>
						</div>
						{!isExpanded && (
							<p className="text-sm text-white/90 line-clamp-2">
								{plan.description}
							</p>
						)}
					</div>
				</div>
				<div
					className={cn(
						"absolute right-4 bottom-4 rounded-full bg-white/20 backdrop-blur-sm p-2 transition-transform duration-300",
						isExpanded ? "rotate-180" : ""
					)}
				>
					<ChevronDown className="w-4 h-4 text-white" />
				</div>
			</motion.div>

			<AnimatePresence>
				{isExpanded && (
					<motion.div
						initial={{ opacity: 0, height: 0 }}
						animate={{ opacity: 1, height: "auto" }}
						exit={{ opacity: 0, height: 0 }}
						transition={{ duration: 0.3 }}
						className="overflow-hidden"
					>
						<div className="bg-white mt-4 p-6 rounded-xl shadow-lg space-y-6">
							<p className="text-muted-foreground ">{plan.description}</p>
							<div>
								<h4 className="text-lg font-semibold text-primary mb-2">
									Eligibility
								</h4>
								<p className="text-muted-foreground ">{plan.eligibility}</p>
							</div>
							<div>
								<h4 className="text-lg font-semibold text-primary mb-2">
									Key Features
								</h4>
								<p className="text-muted-foreground ">{plan.features}</p>
							</div>
						</div>
					</motion.div>
				)}
			</AnimatePresence>
		</div>
	);
}
