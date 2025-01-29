"use client";

import { motion } from "framer-motion";

export default function TextSection() {
	return (
		<section className="relative w-full overflow-hidden py-20 lg:py-20">
			{/* <div className="absolute inset-0 bg-grid-slate-100 bg-opacity-30 bg-[size:60px_60px]" /> */}
			{/* <div
				className="absolute inset-y-0 right-0 w-[300px] bg-gradient-to-l from-primary/10 to-transparent"
				style={{ clipPath: "polygon(100% 0, 100% 100%, 0 100%, 30% 0)" }}
			/> */}
			<div className="container relative px-4 md:px-6 text-center">
				<div className="mx-auto max-w-4xl">
					<motion.div
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.5 }}
					>
						<h3 className="text-sm font-semibold text-primary mb-4">
							{">>"} Our Company {"<<"}
						</h3>
						<h1 className="text-xl font-bold tracking-tight md:text-3xl ">
							Revolutionizing Healthcare in Ethiopia with Tilla Health
						</h1>
					</motion.div>
					<motion.div
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.5, delay: 0.2 }}
						className="mt-8 space-y-6"
					>
						<p className="text-md leading-relaxed text-muted-foreground">
							Tilla Health leads Ethiopia&apos;s Digital Health Initiative with
							innovative programs addressing preventive care, disease
							management, and telehealth services, ensuring equitable access to
							quality care. From Hawassa and Bahir Dar to Addis Ababa, we are
							transforming healthcare delivery for individuals, families, NGOs,
							businesses, and the diaspora community.
						</p>
						<p className="text-md leading-relaxed text-muted-foreground ">
							Leveraging Ethiopia&apos;s growing digital infrastructure, Tilla
							Health creates a connected healthcare ecosystem, bridging gaps,
							reducing travel, and delivering care where it&apos;s needed most.
						</p>
					</motion.div>
				</div>
			</div>
		</section>
	);
}
