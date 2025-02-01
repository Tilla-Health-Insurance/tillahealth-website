"use client";

import Link from "next/link";

import { motion } from "framer-motion";

import { Card, CardContent } from "@/components/ui/card";

interface Services {
	icon: any;
	title: string;
	description: string;
	href: string;
}

interface ServiceProps {
	title: string;
	description: string;
	services?: Services[];
	haveReadMore: boolean;
}

export function ServicesSection({
	services,
	title,
	description,
	haveReadMore,
}: ServiceProps) {
	return (
		<section className="py-16">
			<div className="container mx-auto px-4 lg:px-14">
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					className="text-center mb-12 mt-12 relative"
				>
					<div className="absolute inset-0 bg-gradient-to-r from-primary/10 via-transparent to-primary/10 blur-3xl -z-10" />
					<div className="relative inline-block">
						<h2 className="text-4xl font-bold mb-4">{title}</h2>
						<div className="relative h-1">
							<motion.div
								className="absolute left-1/2 h-full bg-primary rounded-full"
								initial={{ width: 0, x: "-50%" }}
								animate={{ width: "40%", x: "-50%" }}
								transition={{
									duration: 1,
									delay: 0.5,
									ease: "easeOut",
								}}
							/>
							<motion.div
								className="absolute left-1/2 h-full bg-primary/30 rounded-full"
								initial={{ width: 0, x: "-50%" }}
								animate={{ width: "60%", x: "-50%" }}
								transition={{
									duration: 1.2,
									delay: 0.3,
									ease: "easeOut",
								}}
							/>
						</div>
					</div>
					<p className="max-w-2xl mx-auto text-lg text-muted-foreground leading-relaxed font-light tracking-wide mt-6">
						{description}
					</p>
					<div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
				</motion.div>
				<div className="grid md:grid-cols-2 gap-6 p-2">
					{services?.map((service, index) => (
						<motion.div
							key={service.title}
							initial={{ opacity: 0, x: index === 0 ? -20 : 20 }}
							whileInView={{ opacity: 1, x: 0 }}
							viewport={{ once: true }}
							transition={{ delay: index * 0.2 }}
							className="h-full"
						>
							<Card className="group h-full flex flex-col overflow-hidden transition-all duration-300 hover:shadow-xl hover:scale-[1.02] bg-gradient-to-br from-white via-white to-primary/5 border-none backdrop-blur-sm">
								<CardContent className="p-6 relative flex flex-col flex-grow">
									{/* Animated gradient orbs */}
									<div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-primary/10 to-primary/20 rounded-full blur-2xl transform group-hover:scale-150 transition-transform duration-500" />
									<div className="absolute bottom-0 left-0 w-20 h-20 bg-gradient-to-tr from-primary/20 to-primary/10 rounded-full blur-2xl transform group-hover:scale-150 transition-transform duration-500" />

									<div className="relative z-10 flex flex-col flex-grow">
										<div className="flex items-center mb-4">
											<div className="p-2 rounded-xl bg-gradient-to-br from-primary/10 to-primary/5 backdrop-blur-sm">
												<service.icon className="w-8 h-8 text-primary" />
											</div>
										</div>

										<h3 className="text-xl font-bold mb-3 text-primary bg-clip-text ">
											{service.title}
										</h3>

										<p className="text-muted-foreground text-base mb-4 leading-relaxed flex-grow">
											{service.description}
										</p>

										{haveReadMore && (
											<Link
												href={service.href as any}
												className="inline-flex items-center text-primary font-semibold text-base hover:text-primary/80 transition-colors duration-300 mt-auto"
											>
												<span className="relative after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-primary after:scale-x-0 after:origin-right after:transition-transform hover:after:scale-x-100 hover:after:origin-left">
													Read More
												</span>
												<svg
													className="w-4 h-4 ml-2 transform group-hover:translate-x-2 transition-transform duration-300"
													fill="none"
													stroke="currentColor"
													viewBox="0 0 24 24"
												>
													<path
														strokeLinecap="round"
														strokeLinejoin="round"
														strokeWidth={2}
														d="M17 8l4 4m0 0l-4 4m4-4H3"
													/>
												</svg>
											</Link>
										)}
									</div>
								</CardContent>
							</Card>
						</motion.div>
					))}
				</div>
			</div>
		</section>
	);
}
