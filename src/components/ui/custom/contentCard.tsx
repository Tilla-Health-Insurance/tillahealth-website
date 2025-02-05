import Image, { StaticImageData } from "next/image";

import { motion } from "framer-motion";
import { Brain, Sparkles, Users } from "lucide-react";

interface ContentCardProps {
	imageSrc: StaticImageData;
	imageAlt: string;
	title: string;
	description: string;
	highlights: Array<{
		text: string;
		icon: any;
	}>;
}

export function ContentCard({
	imageSrc,
	imageAlt,
	title,
	description,
	highlights = [
		{ text: "AI-Powered", icon: Brain },
		{ text: "Accessible", icon: Users },
		{ text: "Transformative", icon: Sparkles },
	],
}: ContentCardProps) {
	return (
		<section className="py-24 relative overflow-hidden">
			{/* Background image with creative treatment */}
			<div className="absolute inset-0">
				<Image
					src={imageSrc}
					alt={imageAlt}
					fill
					className="object-cover object-center scale-105 transform transition-transform duration-[2s]"
					quality={100}
					sizes="100vw"
				/>
				{/* Gradient overlays for depth and text readability */}
				<div className="absolute inset-0 bg-gradient-to-r from-background via-background/95 to-background/30" />
				<div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />

				{/* Animated pattern overlay */}
				<div className="absolute inset-0 bg-[radial-gradient(circle_800px_at_100%_200px,rgba(var(--primary-rgb),0.1),transparent)]" />
			</div>

			<div className="container mx-auto px-4 relative">
				<motion.div
					className="max-w-4xl mx-auto relative"
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
				>
					{/* Decorative geometric shapes */}
					<div className="absolute -left-8 -top-8 w-16 h-16 border-2 border-primary/20 rounded-lg transform rotate-45" />
					<div className="absolute -right-8 -bottom-8 w-16 h-16 border-2 border-primary/20 rounded-full" />
					<div className="absolute right-1/4 -top-4 w-8 h-8 bg-primary/10 rounded-full" />

					<div className="bg-card/30 backdrop-blur-md rounded-2xl p-8 shadow-2xl border border-border/50">
						<div className="relative">
							{/* Decorative line */}
							<motion.div
								className="absolute -left-4 top-0 w-1 h-full bg-primary"
								initial={{ height: 0 }}
								whileInView={{ height: "100%" }}
								viewport={{ once: true }}
								transition={{ duration: 0.8 }}
							/>

							<motion.p
								className="text-md md:text-lg leading-relaxed text-muted-foreground"
								initial={{ opacity: 0, x: -20 }}
								whileInView={{ opacity: 1, x: 0 }}
								viewport={{ once: true }}
								transition={{ delay: 0.4 }}
							>
								<span className="font-semibold text-foreground">{title}</span>{" "}
								{description}
							</motion.p>
						</div>

						{/* Animated highlights */}
						<div className="mt-8 grid grid-cols-3 gap-4">
							{highlights.map(({ text, icon: Icon }, index) => (
								<motion.div
									key={text}
									className="bg-background/50 backdrop-blur-sm rounded-lg p-4 text-center group 
                      hover:bg-primary/10 transition-colors duration-300 border border-border/50"
									initial={{ opacity: 0, y: 20 }}
									whileInView={{ opacity: 1, y: 0 }}
									viewport={{ once: true }}
									transition={{ delay: 0.2 * (index + 1) }}
								>
									<motion.div
										className="mb-2 w-8 h-8 mx-auto bg-primary/10 rounded-lg flex items-center justify-center"
										whileHover={{ scale: 1.1, rotate: 5 }}
										transition={{
											type: "spring",
											stiffness: 400,
											damping: 10,
										}}
									>
										<Icon className="w-5 h-5 text-primary group-hover:text-primary/80" />
									</motion.div>
									<span className="font-semibold text-muted-foreground text-sm">
										{text}
									</span>
								</motion.div>
							))}
						</div>
					</div>

					{/* Floating elements */}
					<motion.div
						className="absolute -right-12 -top-12 w-24 h-24 bg-primary/5 rounded-full"
						animate={{
							y: [0, 10, 0],
							rotate: [0, 5, 0],
						}}
						transition={{
							duration: 5,
							repeat: Infinity,
							ease: "easeInOut",
						}}
					/>
					<motion.div
						className="absolute -left-8 -bottom-8 w-16 h-16 bg-primary/5 rounded-full"
						animate={{
							y: [0, -10, 0],
							rotate: [0, -5, 0],
						}}
						transition={{
							duration: 4,
							repeat: Infinity,
							ease: "easeInOut",
						}}
					/>
				</motion.div>
			</div>
		</section>
	);
}
