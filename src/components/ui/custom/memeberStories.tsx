"use client";

import Image from "next/image";

import { motion } from "framer-motion";
import { User } from "lucide-react";

import { IMAGES } from "@/constants/files";

interface Testimonial {
	quote: string;
	author: string;
	role: string;
	image?: any;
}

interface MemberStoriesProps {
	testimonials: Testimonial[];
}

export function MemberStories({ testimonials }: MemberStoriesProps) {
	return (
		<section className="py-24 lg:py-32 relative overflow-hidden bg-black/5">
			<div className="absolute inset-0">
				<Image
					src={IMAGES.diasporaconnect1}
					alt="Workspace background"
					fill
					className="object-cover opacity-50"
					quality={90}
					sizes="100vw"
				/>
				<div className="absolute inset-0 bg-gradient-to-b from-background/60 to-background/85" />
			</div>

			<div className="container mx-auto px-4 relative">
				<motion.div
					className="text-center mb-20"
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
				>
					<h2 className="text-4xl md:text-5xl font-bold">
						What our clients say
						<div className="mt-4 flex justify-center">
							<div className="w-20 h-1 bg-primary rounded-full" />
						</div>
					</h2>
				</motion.div>

				<div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
					{testimonials.map((testimonial, index) => (
						<motion.div
							key={index}
							className="flex items-start gap-4"
							initial={{ opacity: 0, y: 20 }}
							whileInView={{ opacity: 1, y: 0 }}
							viewport={{ once: true }}
							transition={{ delay: index * 0.2 }}
						>
							{/* Profile Image */}
							<div className="relative flex-shrink-0">
								<div className="w-16 h-16 rounded-full bg-muted flex items-center justify-center">
									{testimonial.image ? (
										<Image
											src={testimonial.image}
											alt={testimonial.author}
											width={64}
											height={64}
											className="rounded-full object-cover"
										/>
									) : (
										<User className="w-8 h-8 text-muted-foreground" />
									)}
								</div>
							</div>

							{/* Testimonial Content */}
							<div className="flex-1">
								<div className="relative bg-background p-6 rounded-2xl shadow-lg">
									{/* Speech bubble pointer */}
									<div className="absolute w-4 h-4 bg-background transform rotate-45 -left-2 top-8" />

									<p className="text-foreground/80 mb-4 leading-relaxed">
										&quot;{testimonial.quote}&quot;
									</p>

									<div className="font-semibold text-foreground">
										- {testimonial.author}
									</div>
									<div className="text-sm text-muted-foreground">
										{testimonial.role}
									</div>
								</div>
							</div>
						</motion.div>
					))}
				</div>
			</div>
		</section>
	);
}
