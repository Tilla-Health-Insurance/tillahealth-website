"use client";

import { motion } from "framer-motion";
import { Mail, MessageCircle, Phone } from "lucide-react";

import { AboutSection } from "@/components/module/home/about";
import { TitleUnderLine } from "@/components/shared/Decorations/TitleUnderLine";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { IMAGES } from "@/constants/files";

interface TimelineItem {
	year: string;
	title: string;
	description: string;
}

interface ContactItem {
	icon: React.ElementType;
	title: string;
	content: string;
}

const aboutContent = {
	title: "About Us",
	description: "Get to know Tilla Health",
	subDescription:
		"We are committed to making health care insurance easy, affordable, and attainable for all.",
	image: IMAGES.privateHero,
} as const;

const timelineItems: TimelineItem[] = [
	{
		year: "2020",
		title: "Foundation",
		description:
			"Tilla Health was established with a vision to transform healthcare accessibility in Ethiopia.",
	},
	{
		year: "2021",
		title: "Network Expansion",
		description:
			"Expanded our provider network to cover major cities across Ethiopia.",
	},
	{
		year: "2022",
		title: "Digital Transformation",
		description:
			"Launched our digital platform for seamless healthcare access.",
	},
];

export default function AboutPage() {
	const fadeInUp = {
		initial: { opacity: 0, y: 20 },
		animate: { opacity: 1, y: 0 },
		transition: { duration: 0.6 },
	};

	const staggerChildren = {
		animate: {
			transition: {
				staggerChildren: 0.1,
			},
		},
	};
	return (
		<main className="min-h-screen relative isolate overflow-hidden">
			{/* Content */}
			<div className="relative z-10">
				{/* Hero Section */}
				<section className="relative min-h-[60vh] mt-12 flex items-center justify-center overflow-hidden">
					{/* Enhanced Gradient Background */}
					<div className="absolute inset-0">
						<div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary/20 via-background to-background" />
						{/* Animated Gradient Orbs */}
						<motion.div
							className="absolute top-0 left-0 w-[600px] h-[600px] bg-gradient-to-br from-primary/30 to-primary/5 rounded-full blur-3xl"
							animate={{
								scale: [1, 1.2, 1],
								x: [-200, 0, -200],
								y: [-50, 50, -50],
								opacity: [0.3, 0.5, 0.3],
							}}
							transition={{
								duration: 15,
								repeat: Infinity,
								repeatType: "mirror",
								ease: "easeInOut",
							}}
						/>
						<motion.div
							className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-gradient-to-bl from-primary/20 to-primary/5 rounded-full blur-3xl"
							animate={{
								scale: [1.2, 1, 1.2],
								x: [100, -50, 100],
								y: [50, -50, 50],
								opacity: [0.4, 0.6, 0.4],
							}}
							transition={{
								duration: 12,
								repeat: Infinity,
								repeatType: "mirror",
								ease: "easeInOut",
							}}
						/>
						{/* Additional Decorative Elements */}
						<div className="absolute inset-0 bg-[url('/noise.png')] opacity-[0.02] mix-blend-overlay" />
					</div>

					{/* Content */}
					<div className="relative z-10 container mx-auto px-4">
						<motion.div
							className="text-center max-w-4xl mx-auto"
							initial={{ opacity: 0, y: 20 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.8 }}
						>
							{/* Accent Line */}
							<motion.div
								className="flex items-center justify-center gap-4 mb-8"
								initial={{ opacity: 0, y: 20 }}
								animate={{ opacity: 1, y: 0 }}
								transition={{ delay: 0.2 }}
							>
								<motion.div
									className="h-[2px] w-12 bg-gradient-to-r from-transparent via-primary to-transparent"
									initial={{ width: 0 }}
									animate={{ width: 48 }}
									transition={{ duration: 1, delay: 0.4 }}
								/>
								<span className="text-primary/80 font-medium tracking-wider uppercase text-sm">
									About Us
								</span>
								<motion.div
									className="h-[2px] w-12 bg-gradient-to-r from-transparent via-primary to-transparent"
									initial={{ width: 0 }}
									animate={{ width: 48 }}
									transition={{ duration: 1, delay: 0.4 }}
								/>
							</motion.div>

							{/* Title Group */}
							<motion.div
								className="relative inline-block mb-8"
								initial={{ opacity: 0 }}
								animate={{ opacity: 1 }}
								transition={{ duration: 0.8, delay: 0.4 }}
							>
								{/* Glowing Background Effect */}
								<motion.div
									className="absolute -inset-x-20 -inset-y-10 bg-gradient-to-r from-primary/10 via-primary/5 to-transparent rounded-full blur-2xl"
									animate={{
										opacity: [0.3, 0.5, 0.3],
										scale: [0.9, 1.1, 0.9],
									}}
									transition={{
										duration: 4,
										repeat: Infinity,
										repeatType: "reverse",
									}}
								/>

								{/* Main Title */}
								<div className="relative space-y-4">
									<h1 className="text-5xl md:text-6xl lg:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-foreground via-foreground/90 to-foreground/80 leading-tight">
										{aboutContent.title}
									</h1>
									<TitleUnderLine className="mb-6" />
								</div>
							</motion.div>

							{/* Description */}
							<motion.div
								className="relative"
								initial={{ opacity: 0, y: 20 }}
								animate={{ opacity: 1, y: 0 }}
								transition={{ delay: 0.6 }}
							>
								<p className="text-xl md:text-2xl text-muted-foreground/90 leading-relaxed max-w-3xl mx-auto mb-12">
									{aboutContent.subDescription}
								</p>

								{/* Stats or Key Points */}
								<div className="grid grid-cols-3 gap-8 max-w-2xl mx-auto">
									{[
										{ number: "24/7", label: "Support" },
										{ number: "100+", label: "Healthcare Partners" },
										{ number: "2", label: "Country Locations" },
									].map((stat, index) => (
										<motion.div
											key={stat.label}
											className="text-center"
											initial={{ opacity: 0, y: 20 }}
											animate={{ opacity: 1, y: 0 }}
											transition={{ delay: 0.8 + index * 0.1 }}
										>
											<div className="text-2xl md:text-3xl font-bold text-primary mb-2">
												{stat.number}
											</div>
											<div className="text-sm text-muted-foreground/70">
												{stat.label}
											</div>
										</motion.div>
									))}
								</div>
							</motion.div>

							{/* Scroll Indicator */}
							<motion.div
								className="absolute left-1/2 bottom-0 flex flex-col items-center gap-2"
								initial={{ opacity: 0 }}
								animate={{ opacity: 1 }}
								transition={{ delay: 1.2 }}
							>
								<motion.div
									className="w-1 h-16 bg-gradient-to-b from-primary/40 via-primary/20 to-transparent rounded-full"
									animate={{
										height: [40, 64, 40],
										opacity: [0.3, 0.6, 0.3],
									}}
									transition={{
										duration: 2,
										repeat: Infinity,
										repeatType: "reverse",
									}}
								/>
							</motion.div>
						</motion.div>
					</div>
				</section>

				{/* Who We Are Section */}
				<section className="py-24 lg:py-32 relative">
					{/* Background Elements */}
					<div className="absolute inset-0">
						<div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary/5 via-transparent to-transparent" />
						<div className="absolute w-full h-full bg-[linear-gradient(to_right,rgba(var(--primary-rgb),0.05)_1px,transparent_1px),linear-gradient(to_bottom,rgba(var(--primary-rgb),0.05)_1px,transparent_1px)] bg-[size:4rem_4rem]" />
					</div>

					<div className="container mx-auto px-4 relative">
						<motion.div
							className="max-w-5xl mx-auto"
							initial={{ opacity: 0, y: 20 }}
							whileInView={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.6 }}
							viewport={{ once: true }}
						>
							{/* Section Header */}
							<div className="text-center mb-20">
								<motion.h2
									className="text-4xl md:text-5xl font-bold relative inline-block"
									initial={{ opacity: 0, y: 20 }}
									whileInView={{ opacity: 1, y: 0 }}
									viewport={{ once: true }}
								>
									Who We Are
									<TitleUnderLine />
								</motion.h2>
							</div>

							{/* Content */}
							<div className="grid md:grid-cols-3 gap-6 text-lg">
								{[
									{
										title: "Our Identity",
										content:
											"Tilla Health is a Managed Care Organization (MCO) dedicated to bridging the gap between healthcare accessibility and quality. Since our inception, we have been driven by a commitment to deliver trusted, reliable, and comprehensive health solutions to our members.",
										icon: "🏥",
										color: "from-blue-500/20 to-primary/20",
									},
									{
										title: "Our Approach",
										content:
											"Rooted in the principles of innovation and care, Tilla Health collaborates with healthcare providers to ensure our members receive the best possible services tailored to their unique needs.",
										icon: "🤝",
										color: "from-primary/20 to-purple-500/20",
									},
									{
										title: "Our Promise",
										content:
											"Our mission is to empower individuals and families with access to high-quality, dependable healthcare while fostering seamless connection between members and providers.",
										icon: "⭐",
										color: "from-primary/20 to-emerald-500/20",
									},
								].map((item, index) => (
									<motion.div
										key={item.title}
										className="group relative"
										initial={{ opacity: 0, y: 20 }}
										whileInView={{ opacity: 1, y: 0 }}
										transition={{ delay: index * 0.1 }}
										viewport={{ once: true }}
									>
										<div
											className={`absolute inset-0 bg-gradient-to-b ${item.color} rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
										/>
										<div className="relative h-full p-8 rounded-3xl bg-gradient-to-b from-background/80 to-background border border-primary/10 backdrop-blur-sm hover:border-primary/20 transition-all duration-300">
											{/* Icon */}
											<div className="mb-6 inline-flex items-center justify-center w-12 h-12 rounded-2xl bg-primary/10 text-2xl">
												{item.icon}
											</div>

											{/* Title */}
											<h3 className="text-xl font-semibold text-foreground mb-4 group-hover:text-primary transition-colors duration-300">
												{item.title}
											</h3>

											{/* Content */}
											<p className="text-muted-foreground leading-relaxed group-hover:text-foreground/80 transition-colors duration-300">
												{item.content}
											</p>

											{/* Hover Effect */}
											<motion.div
												className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-primary/50 to-transparent"
												initial={{ scaleX: 0 }}
												whileHover={{ scaleX: 1 }}
												transition={{ duration: 0.3 }}
											/>
										</div>
									</motion.div>
								))}
							</div>
						</motion.div>
					</div>
				</section>

				{/* About Section */}
				<AboutSection />

				{/* Vision, Mission, Core Values Section */}
				<section className="py-24 lg:py-32 relative overflow-hidden">
					{/* Decorative Background */}
					<div className="absolute inset-0 bg-[linear-gradient(45deg,rgba(var(--primary-rgb),0.03)_1px,transparent_1px),linear-gradient(-45deg,rgba(var(--primary-rgb),0.03)_1px,transparent_1px)] bg-[size:40px_40px]" />
					<div className="absolute inset-0 bg-gradient-to-b from-background via-transparent to-background" />

					<div className="container mx-auto px-4 relative">
						<motion.div
							initial={{ opacity: 0, y: 20 }}
							whileInView={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.6 }}
							viewport={{ once: true }}
							className="text-center"
						>
							{/* Section Header */}

							<h2 className="text-4xl md:text-5xl font-bold mb-24 relative inline-block">
								Our Vision, Mission and Core Values
								<TitleUnderLine width="20%" />
							</h2>

							<motion.div
								className="grid md:grid-cols-3 gap-8 mx-auto max-w-6xl"
								variants={staggerChildren}
							>
								{[
									{
										title: "Our Vision",
										content:
											"Our vision is to become Ethiopia's most trusted healthcare provider, making high-quality healthcare accessible to all, regardless of location or financial status. By leveraging advanced technologies and fostering strong partnerships with healthcare providers, we aim to reshape the future of healthcare in Ethiopia.",
										icon: "🔭",
										gradient:
											"from-blue-500/20 via-primary/20 to-purple-500/20",
									},
									{
										title: "Our Mission",
										content:
											"At Tilla Health Insurance, our mission is to deliver exceptional healthcare services through innovative medical solutions. We aim to improve health outcomes, ensure the well-being of our clients and provide peace of mind for those living both in Ethiopia and abroad.",
										icon: "🎯",
										gradient:
											"from-primary/20 via-purple-500/20 to-pink-500/20",
									},
									{
										title: "Core Values",
										content:
											"At Tilla Health Insurance, our key objectives are encapsulated in the acronym 'CUPMSC,' reflecting our commitment to delivering comprehensive healthcare services across different sectors.",
										icon: "💫",
										gradient:
											"from-emerald-500/20 via-primary/20 to-blue-500/20",
									},
								].map((item, index) => (
									<motion.div
										key={item.title}
										variants={fadeInUp}
										initial={{ opacity: 0, y: 20 }}
										whileInView={{ opacity: 1, y: 0 }}
										transition={{ delay: index * 0.1 }}
										viewport={{ once: true }}
										className="group relative"
									>
										{/* Card Background with Gradient */}
										<div
											className="absolute inset-0 rounded-3xl bg-gradient-to-br opacity-0 group-hover:opacity-100 transition-all duration-500 blur-xl"
											style={{
												background: `linear-gradient(120deg, ${item.gradient})`,
											}}
										/>

										{/* Card Content */}
										<div className="relative h-full p-8 rounded-3xl bg-gradient-to-b from-background/90 to-background border border-primary/10 backdrop-blur-sm group-hover:border-primary/20 transition-all duration-300">
											{/* Icon */}
											<div className="mb-6 inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-primary/10 to-primary/5 text-3xl transform group-hover:scale-110 transition-transform duration-300">
												{item.icon}
											</div>

											{/* Title */}
											<h3 className="text-2xl font-bold mb-6 bg-gradient-to-r from-foreground to-foreground/80 bg-clip-text  group-hover:from-primary group-hover:text-primary group-hover:to-primary/80 transition-all duration-300">
												{item.title}
											</h3>

											{/* Content */}
											<p className="text-muted-foreground leading-relaxed group-hover:text-foreground/80 transition-colors duration-300">
												{item.content}
											</p>

											{/* Bottom Highlight */}
											<motion.div
												className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-primary/50 to-transparent"
												initial={{ scaleX: 0 }}
												whileHover={{ scaleX: 1 }}
												transition={{ duration: 0.3 }}
											/>
										</div>
									</motion.div>
								))}
							</motion.div>
						</motion.div>
					</div>
				</section>

				{/* History Section */}
				<section className="pb-24 lg:pb-32 relative overflow-hidden">
					{/* Enhanced Background Effects */}
					<div className="absolute inset-0">
						<div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,_var(--tw-gradient-stops))] from-primary/20 via-background to-background" />
						<motion.div
							className="absolute left-0 top-1/4 w-[600px] h-[600px] bg-primary/10 rounded-full blur-[180px]"
							animate={{
								scale: [1, 1.2, 1],
								opacity: [0.3, 0.5, 0.3],
							}}
							transition={{
								duration: 15,
								repeat: Infinity,
								repeatType: "reverse",
							}}
						/>
						<motion.div
							className="absolute right-0 bottom-1/4 w-[500px] h-[500px] bg-primary/10 rounded-full blur-[150px]"
							animate={{
								scale: [1.2, 1, 1.2],
								opacity: [0.4, 0.6, 0.4],
							}}
							transition={{
								duration: 12,
								repeat: Infinity,
								repeatType: "reverse",
							}}
						/>
					</div>

					<div className="container relative z-10 mx-auto px-4">
						<motion.div
							initial={{ opacity: 0, y: 20 }}
							whileInView={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.6 }}
							viewport={{ once: true }}
						>
							{/* Enhanced Section Header */}
							<div className="text-center mb-16">
								<h2 className="text-4xl md:text-5xl font-bold mb-6 relative inline-block">
									Our History
									<TitleUnderLine />
								</h2>
							</div>

							<div className="max-w-6xl mx-auto">
								<div className="relative space-y-12">
									{/* Central Timeline Line */}
									<div className="absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-primary/30 via-primary/20 to-transparent hidden md:block" />

									<div className="space-y-12">
										{timelineItems.map((item, index) => (
											<motion.div
												key={item.year}
												className="relative md:grid md:grid-cols-2 gap-6 md:gap-8"
												initial={{ opacity: 0, y: 20 }}
												whileInView={{ opacity: 1, y: 0 }}
												viewport={{ once: true }}
												transition={{ duration: 0.8, delay: index * 0.2 }}
											>
												{/* Timeline Node */}
												<motion.div
													className="absolute left-1/2 top-0 w-3 h-3 -ml-1.5 hidden md:block"
													initial={{ scale: 0 }}
													whileInView={{ scale: 1 }}
													viewport={{ once: true }}
												>
													<span className="block w-full h-full rounded-full bg-primary/20 group-hover:bg-primary/30 transition-colors">
														<span className="absolute inset-0.5 rounded-full bg-primary animate-pulse" />
													</span>
												</motion.div>

												{/* Content */}
												<div
													className={`relative backdrop-blur-xl rounded-2xl border border-primary/10 bg-background/30 p-6 group hover:border-primary/30 transition-all duration-300 ${
														index % 2 === 0 ? "md:text-right" : "md:col-start-2"
													}`}
												>
													{/* Decorative Elements */}
													<div className="absolute -inset-px rounded-2xl bg-gradient-to-br from-primary/20 via-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

													<div
														className={`absolute ${
															index % 2 === 0 ? "-right-4" : "-left-4"
														} top-1/2 -translate-y-1/2 w-16 h-16 bg-primary/20 rounded-full blur-2xl group-hover:bg-primary/30 transition-all duration-300`}
													/>

													<div className="relative space-y-2">
														{/* Year */}
														<motion.div
															className="text-md font-bold text-primary group-hover:text-foreground"
															initial={{ opacity: 0 }}
															whileInView={{ opacity: 1 }}
															viewport={{ once: true }}
														>
															{item.year}
														</motion.div>

														{/* Title and Description */}
														<motion.h3
															className="text-xl font-bold group-hover:text-primary transition-colors"
															whileHover={{ x: index % 2 === 0 ? -10 : 10 }}
															transition={{ type: "spring", stiffness: 400 }}
														>
															{item.title}
														</motion.h3>
														<motion.p
															className="text-muted-foreground text-base leading-relaxed"
															initial={{ opacity: 0.8 }}
															whileHover={{ opacity: 1 }}
														>
															{item.description}
														</motion.p>
													</div>
												</div>
											</motion.div>
										))}
									</div>
								</div>
							</div>
						</motion.div>
					</div>
				</section>

				{/* Need Additional Help Section */}
				<section className="relative py-20">
					{/* Background Effects */}
					<div className="absolute inset-0">
						<div className="absolute inset-0 bg-gradient-to-b from-background via-primary/5 to-background" />
						<motion.div
							className="absolute right-0 top-1/2 -translate-y-1/2 w-72 h-72 bg-primary/10 rounded-full blur-[100px]"
							animate={{
								scale: [1, 1.2, 1],
								opacity: [0.3, 0.5, 0.3],
							}}
							transition={{
								duration: 8,
								repeat: Infinity,
								repeatType: "reverse",
							}}
						/>
					</div>

					<div className="container relative z-10 px-4">
						<motion.div
							className="max-w-4xl mx-auto"
							initial={{ opacity: 0, y: 20 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.8 }}
						>
							{/* Content Card */}
							<div className="relative backdrop-blur-sm rounded-3xl border border-primary/10 bg-background/30 p-8 md:p-12">
								{/* Decorative Corner */}
								<div className="absolute -top-6 -right-6">
									<motion.div
										className="w-12 h-12 rounded-full bg-primary/20"
										animate={{
											scale: [1, 1.2, 1],
											opacity: [0.5, 0.8, 0.5],
										}}
										transition={{
											duration: 4,
											repeat: Infinity,
											repeatType: "reverse",
										}}
									/>
								</div>

								{/* Title Group */}
								<div className="text-center mb-8">
									<motion.div
										className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 mb-4"
										initial={{ scale: 0.9, opacity: 0 }}
										animate={{ scale: 1, opacity: 1 }}
										transition={{ delay: 0.2 }}
									>
										<span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
										<span className="text-sm font-medium text-primary">
											24/7 Support
										</span>
									</motion.div>

									<motion.h2
										className="text-3xl md:text-4xl font-bold mb-4"
										initial={{ y: 20, opacity: 0 }}
										animate={{ y: 0, opacity: 1 }}
										transition={{ delay: 0.3 }}
									>
										Need Additional Help?
									</motion.h2>
								</div>

								{/* Contact Options Grid */}
								<motion.div
									className="grid grid-cols-1 md:grid-cols-3 gap-6"
									initial={{ opacity: 0 }}
									animate={{ opacity: 1 }}
									transition={{ delay: 0.5 }}
								>
									{/* Email Support */}
									<motion.div
										className="group relative flex flex-col items-center p-6 rounded-2xl border border-primary/10 bg-background/50 hover:bg-primary/5 transition-all duration-300"
										whileHover={{ scale: 1.02 }}
										whileTap={{ scale: 0.98 }}
									>
										<div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
											<Mail className="w-6 h-6 text-primary" />
										</div>
										<h3 className="font-semibold mb-2">Email Support</h3>
										<p className="text-sm text-muted-foreground mb-1">
											Response within 24 hours
										</p>
										<a
											href="mailto:Support@tillahealth.com"
											className="text-sm text-primary hover:text-primary/80 transition-colors"
										>
											Support@tillahealth.com
										</a>
										<a
											href="mailto:Admin@tillahealth.com"
											className="text-sm text-primary hover:text-primary/80 transition-colors"
										>
											Admin@tillahealth.com
										</a>
									</motion.div>

									{/* Phone Support */}
									<motion.div
										className="group relative flex flex-col items-center p-6 rounded-2xl border border-primary/10 bg-background/50 hover:bg-primary/5 transition-all duration-300"
										whileHover={{ scale: 1.02 }}
										whileTap={{ scale: 0.98 }}
									>
										<div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
											<Phone className="w-6 h-6 text-primary" />
										</div>
										<h3 className="font-semibold mb-2">Call Us</h3>
										<p className="text-sm text-muted-foreground mb-1">
											24/7 Member Services
										</p>
										<a
											href="tel:+12029755013"
											className="text-sm text-primary hover:text-primary/80 transition-colors"
										>
											+1 (202)-975-5013
										</a>
										<a
											href="tel:+251968658292"
											className="text-sm text-primary hover:text-primary/80 transition-colors"
										>
											+251 96-865-8292
										</a>
									</motion.div>

									{/* Location */}
									<motion.div
										className="group relative flex flex-col items-center p-6 rounded-2xl border border-primary/10 bg-background/50 hover:bg-primary/5 transition-all duration-300"
										whileHover={{ scale: 1.02 }}
										whileTap={{ scale: 0.98 }}
									>
										<div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
											<MessageCircle className="w-6 h-6 text-primary" />
										</div>
										<h3 className="font-semibold mb-2">Location</h3>
										<p className="text-sm text-muted-foreground mb-1">
											Available 9AM-5PM EST
										</p>
										<span className="text-sm text-primary">MD, USA</span>
										<span className="text-sm text-primary">
											Addis Ababa, Ethiopia
										</span>
									</motion.div>
								</motion.div>
							</div>
						</motion.div>
					</div>
				</section>

				{/* Newsletter Section */}
				<section className="py-12 lg:py-12 bg-primary text-white">
					<motion.div
						className="container mx-auto px-4"
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.6 }}
						viewport={{ once: true }}
					>
						<div className="max-w-xl mx-auto text-center">
							<h2 className="text-4xl font-bold mb-8 relative inline-block tracking-tight">
								Stay Updated
							</h2>
							<p className="mb-12 text-white/80 text-lg font-light tracking-wide leading-loose max-w-lg mx-auto">
								Subscribe to our newsletter for the latest updates on healthcare
								services and company news.
							</p>
							<form className="relative group max-w-xl mx-auto">
								<div className="absolute -inset-2 rounded-2xl bg-gradient-to-r from-white/20 via-white/10 to-white/20 blur-xl group-hover:opacity-100 transition duration-500 group-hover:duration-200 opacity-0" />
								<div className="relative flex gap-4">
									<Input
										type="email"
										placeholder="Enter your email"
										className="h-16 px-8 bg-white backdrop-blur-xl border-white/20 text-foreground placeholder:text- focus:border-white/40 focus:ring-white/20 rounded-2xl transition-all duration-300 text-lg tracking-wide flex-1"
									/>
									<Button
										type="submit"
										variant="secondary"
										className="h-16 px-10 rounded-2xl text-primary bg-background whitespace-nowrap hover:bg-foreground hover:text-background font-medium transition-all duration-300 shadow-xl hover:shadow-white/20 text-lg tracking-wide"
									>
										Subscribe
									</Button>
								</div>
							</form>
						</div>
					</motion.div>
				</section>
			</div>
		</main>
	);
}
