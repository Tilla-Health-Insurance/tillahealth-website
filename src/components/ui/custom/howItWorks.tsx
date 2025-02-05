"use client";

import Image from "next/image";

import { motion } from "framer-motion";

import { TitleUnderLine } from "@/components/shared/Decorations/TitleUnderLine";
import { IMAGES } from "@/constants/files";

interface HowItWorksStep {
	title: string;
	description: string;
	icon: React.ElementType;
}

interface HowItWorksProps {
	steps: HowItWorksStep[];
}

export default function HowItWorks({ steps }: HowItWorksProps) {
	return (
		<section className="py-12 lg:py-22 relative bg-primary text-white">
			{/* Background decorative elements */}
			<div className="absolute inset-0 overflow-hidden">
				<motion.div
					className="absolute top-0 left-0 w-[800px] h-[800px] bg-white/5 rounded-full blur-3xl"
					animate={{
						scale: [1, 1.2, 1],
						x: [-200, 0, -200],
						opacity: [0.1, 0.15, 0.1],
					}}
					transition={{
						duration: 15,
						repeat: Infinity,
						repeatType: "reverse",
					}}
				/>
				<Image
					src={IMAGES.tillaRedLine2}
					alt="Decorative line"
					className="absolute left-[-12%] top-[50%] -translate-y-1/2 h-[80%] w-auto opacity-50 invert brightness-0"
				/>
				<Image
					src={IMAGES.tillaRedLine2}
					alt="Decorative line"
					className="absolute left-[-12%] top-[45%] -translate-y-1/2 h-[80%] w-auto opacity-50 "
				/>
			</div>

			<div className="container mx-auto px-4 relative z-10">
				<motion.div
					className="text-center mb-20"
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
				>
					<h2 className="text-4xl md:text-5xl font-bold relative inline-block text-white">
						How It Works
						<TitleUnderLine width="20%" className="bg-white" />
					</h2>
					<p className="mt-6 text-xl text-white/80 max-w-3xl mx-auto">
						Get started with our telemedicine service in four simple steps
					</p>
				</motion.div>

				<div className="relative max-w-5xl mx-auto">
					<div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
						{steps.map((step, index) => (
							<motion.div
								key={step.title}
								className="relative h-full"
								initial={{ opacity: 0, y: 20 }}
								whileInView={{ opacity: 1, y: 0 }}
								viewport={{ once: true }}
								transition={{ delay: index * 0.2 }}
							>
								<div className="flex flex-col items-center text-center group p-6 rounded-2xl bg-white/20 backdrop-blur-md border border-white/20 hover:border-white/40 transition-all duration-300 hover:shadow-lg hover:shadow-white/5 h-full">
									<div className="relative">
										<div className="w-16 h-16 rounded-2xl bg-white/20 backdrop-blur-sm flex items-center justify-center mb-4 transform transition-all duration-300 group-hover:scale-110 group-hover:rotate-3">
											<step.icon className="w-8 h-8 text-white transform transition-all duration-300 group-hover:scale-110" />
										</div>
										<div className="absolute -top-2 -right-2 w-6 h-6 bg-white text-primary rounded-full flex items-center justify-center text-sm font-bold shadow-lg">
											{index + 1}
										</div>
									</div>
									<h3 className="text-lg font-semibold mb-2 text-white group-hover:text-white/90 transition-colors duration-300">
										{step.title}
									</h3>
									<p className="text-sm text-white/80 leading-relaxed">
										{step.description}
									</p>
								</div>
							</motion.div>
						))}
					</div>
				</div>
			</div>
		</section>
	);
}
