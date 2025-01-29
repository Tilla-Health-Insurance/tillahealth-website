"use client";

import Image from "next/image";
import { useState } from "react";

import { AnimatePresence, motion } from "framer-motion";
import { ChevronDown, X } from "lucide-react";

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
	const [showModal, setShowModal] = useState(false);

	// Handle click based on screen size
	const handleClick = () => {
		if (window.innerWidth >= 768) {
			setShowModal(true);
		} else {
			onToggle();
		}
	};

	return (
		<>
			<div className={cn("flex flex-col", className)}>
				<motion.div
					className="relative rounded-xl overflow-hidden bg-white shadow-lg transition-all duration-300 cursor-pointer"
					whileHover={{ y: -5 }}
					onHoverStart={() => setIsHovered(true)}
					onHoverEnd={() => setIsHovered(false)}
					onClick={handleClick}
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

				{/* Mobile expansion - only show below md breakpoint */}
				<div className="md:hidden">
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
									<div className="bg-gray-50 rounded-lg p-4">
										<p className="text-muted-foreground leading-relaxed">
											{plan.description}
										</p>
									</div>

									<div className="bg-gray-50 rounded-lg p-4">
										<h4 className="text-lg font-semibold text-primary mb-3 flex items-center gap-2">
											<span className="w-1.5 h-1.5 bg-primary rounded-full"></span>
											Eligibility
										</h4>
										<p className="text-muted-foreground leading-relaxed">
											{plan.eligibility}
										</p>
									</div>

									<div className="bg-gray-50 rounded-lg p-4">
										<h4 className="text-lg font-semibold text-primary mb-3 flex items-center gap-2">
											<span className="w-1.5 h-1.5 bg-primary rounded-full"></span>
											Key Features
										</h4>
										<p className="text-muted-foreground leading-relaxed">
											{plan.features}
										</p>
									</div>
								</div>
							</motion.div>
						)}
					</AnimatePresence>
				</div>
			</div>

			{/* Desktop Modal */}
			<AnimatePresence>
				{showModal && (
					<>
						<motion.div
							initial={{ opacity: 0 }}
							animate={{ opacity: 1 }}
							exit={{ opacity: 0 }}
							transition={{ duration: 0.2 }}
							className="fixed inset-0 bg-black/60 backdrop-blur-[2px] z-[100] hidden md:block"
							onClick={() => setShowModal(false)}
						/>
						<div className="fixed inset-0 z-[101] hidden md:block">
							<div className="min-h-screen px-4 text-center pt-[5vh]">
								<div className="inline-block h-screen align-middle">
									&#8203;
								</div>

								<motion.div
									initial={{ scale: 0.9, opacity: 0 }}
									animate={{ scale: 1, opacity: 1 }}
									exit={{ scale: 0.9, opacity: 0 }}
									transition={{
										type: "spring",
										stiffness: 300,
										damping: 25,
									}}
									className="relative inline-block w-full max-w-4xl overflow-hidden align-middle rounded-2xl"
								>
									<div className="relative w-full aspect-[16/9]">
										<Image
											src={plan.image || "/placeholder.svg"}
											alt={plan.title}
											fill
											className="object-cover blur-[2px]"
											sizes="(max-width: 1200px) 100vw, 50vw"
										/>
										<div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/70 to-black/30" />

										{/* Content overlay */}
										<div className="absolute inset-0 p-8 text-white">
											{/* Close button */}
											<motion.button
												whileHover={{ scale: 1.1 }}
												whileTap={{ scale: 0.9 }}
												onClick={() => setShowModal(false)}
												className="absolute right-4 top-4 p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors backdrop-blur-sm"
											>
												<X className="w-5 h-5" />
											</motion.button>

											<motion.div
												initial={{ y: 20, opacity: 0 }}
												animate={{ y: 0, opacity: 1 }}
												transition={{ delay: 0.2 }}
												className="h-full flex flex-col"
											>
												<div className="flex items-center gap-3 mb-4">
													<motion.div
														whileHover={{ scale: 1.1 }}
														className="bg-primary/80 backdrop-blur-sm rounded-xl p-3"
													>
														<plan.icon className="w-6 h-6" />
													</motion.div>
													<h3 className="text-3xl font-bold">{plan.title}</h3>
												</div>
												<motion.div
													initial={{ y: 20, opacity: 0 }}
													animate={{ y: 0, opacity: 1 }}
													transition={{ delay: 0.3 }}
													className="bg-white/10 backdrop-blur-lg rounded-xl p-6 mb-4"
												>
													<p className="text-white/90 text-sm leading-relaxed">
														{plan.description}
													</p>
												</motion.div>

												<div className="grid grid-cols-1 md:grid-cols-2 gap-4">
													<motion.div
														initial={{ y: 20, opacity: 0 }}
														animate={{ y: 0, opacity: 1 }}
														transition={{ delay: 0.4 }}
														className="bg-white/10 backdrop-blur-lg rounded-xl p-6"
													>
														<h4 className="text-sm font-semibold mb-3 flex items-center gap-2">
															<span className="w-2 h-2 bg-primary rounded-full"></span>
															Eligibility
														</h4>
														<p className="text-white/90 text-sm leading-relaxed text-left">
															{plan.eligibility}
														</p>
													</motion.div>

													<motion.div
														initial={{ y: 20, opacity: 0 }}
														animate={{ y: 0, opacity: 1 }}
														transition={{ delay: 0.5 }}
														className="bg-white/10 backdrop-blur-lg rounded-xl p-6"
													>
														<h4 className="text-sm font-semibold mb-3 flex items-center gap-2">
															<span className="w-2 h-2 bg-primary rounded-full"></span>
															Key Features
														</h4>
														<p className="text-white/90 text-sm leading-relaxed text-left">
															{plan.features}
														</p>
													</motion.div>
												</div>
											</motion.div>
										</div>
									</div>
								</motion.div>
							</div>
						</div>
					</>
				)}
			</AnimatePresence>
		</>
	);
}
