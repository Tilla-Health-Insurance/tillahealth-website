"use client";

import Image from "next/image";

import { motion } from "framer-motion";
import { Mail, Map, MapPin, Phone } from "lucide-react";

import { AboutSection } from "@/components/module/home/about";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
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
			{/* Animated Background */}
			<motion.div
				className="fixed inset-0 -z-10"
				initial={{ scale: 1.1 }}
				animate={{
					scale: [1.1, 1.15, 1.1],
				}}
				transition={{
					duration: 20,
					repeat: Infinity,
					repeatType: "reverse",
					ease: "linear",
				}}
			>
				<Image
					src={IMAGES.bg}
					alt="Background"
					fill
					className="object-cover"
					priority
				/>
				<div className="absolute inset-0 bg-gradient-to-b from-background/95 via-background/80 to-background/95" />
			</motion.div>

			{/* Content */}
			<div className="relative z-10">
				{/* Hero Section */}
				<section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden">
					<motion.div
						className="absolute inset-0 bg-primary"
						initial={{ scale: 1.1, opacity: 0.5 }}
						animate={{ scale: 1, opacity: 1 }}
						transition={{ duration: 1.5 }}
					/>
					<motion.div
						className="relative z-10 container mx-auto px-4 text-center text-white"
						variants={fadeInUp}
						initial="initial"
						animate="animate"
					>
						<motion.h1
							className="text-5xl md:text-7xl font-bold mb-6 bg-clip-text"
							variants={fadeInUp}
						>
							{aboutContent.title}
						</motion.h1>
						<motion.p
							className="text-xl md:text-2xl max-w-3xl mx-auto text-white/90"
							variants={fadeInUp}
						>
							{aboutContent.subDescription}
						</motion.p>
					</motion.div>
				</section>

				{/* Who We Are Section */}
				<section className="py-24 lg:py-32">
					<div className="container mx-auto px-4">
						<motion.div
							className="max-w-3xl mx-auto"
							initial={{ opacity: 0, y: 20 }}
							whileInView={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.6 }}
							viewport={{ once: true }}
						>
							<h2 className="text-4xl font-bold text-center mb-16">
								Who We Are
							</h2>
							<div className="space-y-8 text-muted-foreground text-center text-lg">
								<motion.p className="leading-relaxed" variants={fadeInUp}>
									Tilla Health is a Managed Care Organization (MCO) dedicated to
									bridging the gap between healthcare accessibility and quality.
									Since our inception, we have been driven by a commitment to
									deliver trusted, reliable, and comprehensive health solutions
									to our members.
								</motion.p>
								<motion.p className="leading-relaxed" variants={fadeInUp}>
									Rooted in the principles of innovation and care, Tilla Health
									collaborates with healthcare providers to ensure our members
									receive the best possible services tailored to their unique
									needs.
								</motion.p>
								<motion.p className="leading-relaxed" variants={fadeInUp}>
									Our mission is to empower individuals and families with access
									to high-quality, dependable healthcare while fostering
									seamless connection between members and providers.
								</motion.p>
							</div>
						</motion.div>
					</div>
				</section>

				{/* About Section */}
				<AboutSection />

				{/* Vision, Mission, Core Values Section */}
				<section className="py-24 lg:py-32 bg-muted">
					<div className="container mx-auto px-4">
						<motion.div
							initial={{ opacity: 0, y: 20 }}
							whileInView={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.6 }}
							viewport={{ once: true }}
							className="text-center mb-16"
						>
							<h2 className="text-4xl font-bold mb-24">
								Our Vision, Mission and Core Values
							</h2>
							<motion.div
								className="grid md:grid-cols-3 gap-8"
								variants={staggerChildren}
							>
								{[
									{
										title: "Our Vision",
										content:
											"Our vision is to become Ethiopia's most trusted healthcare provider, making high-quality healthcare accessible to all, regardless of location or financial status. By leveraging advanced technologies and fostering strong partnerships with healthcare providers, we aim to reshape the future of healthcare in Ethiopia.",
									},
									{
										title: "Our Mission",
										content:
											"At Tilla Health Insurance, our mission is to deliver exceptional healthcare services through innovative medical solutions. We aim to improve health outcomes, ensure the well-being of our clients and provide peace of mind for those living both in Ethiopia and abroad.",
									},
									{
										title: "Core Values",
										content:
											"At Tilla Health Insurance, our key objectives are encapsulated in the acronym 'CUPMSC,' reflecting our commitment to delivering comprehensive healthcare services across different sectors.",
									},
								].map((item, index) => (
									<motion.div
										key={item.title}
										variants={fadeInUp}
										whileHover={{ y: -5 }}
										transition={{ duration: 0.2 }}
									>
										<Card className="h-full hover:shadow-lg transition-all duration-300">
											<CardContent className="p-8">
												<h3 className="text-2xl font-bold mb-6 text-primary">
													{item.title}
												</h3>
												<p className="text-muted-foreground leading-relaxed">
													{item.content}
												</p>
											</CardContent>
										</Card>
									</motion.div>
								))}
							</motion.div>
						</motion.div>
					</div>
				</section>

				{/* History Section */}
				<section className="py-24 lg:py-32">
					<div className="container mx-auto px-4">
						<motion.div
							initial={{ opacity: 0, y: 20 }}
							whileInView={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.6 }}
							viewport={{ once: true }}
						>
							<h2 className="text-4xl font-bold text-center mb-24">
								Our History
							</h2>
							<div className="max-w-3xl mx-auto">
								<div className="space-y-16">
									{timelineItems.map((item, index) => (
										<motion.div
											key={item.year}
											className="flex gap-8 items-start group"
											initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
											whileInView={{ opacity: 1, x: 0 }}
											transition={{ duration: 0.6, delay: index * 0.1 }}
											viewport={{ once: true }}
										>
											<div className="w-24 shrink-0 text-primary font-bold text-2xl">
												{item.year}
											</div>
											<div className="flex-1">
												<h3 className="text-2xl font-bold mb-4 group-hover:text-primary transition-colors">
													{item.title}
												</h3>
												<p className="text-muted-foreground text-lg">
													{item.description}
												</p>
											</div>
										</motion.div>
									))}
								</div>
							</div>
						</motion.div>
					</div>
				</section>

				{/* Contact Information */}
				<div className="mt-12 bg-card p-8 rounded-lg shadow-lg">
					<h2 className="text-2xl font-semibold  mb-6 text-center">
						Need Additional Help?
					</h2>
					<div className="grid md:grid-cols-3 gap-6">
						<div className="text-center p-4">
							<Phone className="mx-auto h-6 w-6 text-primary mb-2" />
							<h3 className="font-semibold mb-2">Call Us</h3>
							<p className="text-slate-600">24/7 Member Services</p>
							<Button variant="link" className="text-primary">
								+1 (202)-975-5013
							</Button>
							<Button variant="link" className="text-primary">
								+251 96-865-8292
							</Button>
						</div>
						<div className="text-center p-4">
							<Mail className="mx-auto h-6 w-6 text-primary mb-2" />
							<h3 className="font-semibold mb-2">Email Support</h3>
							<p className="text-slate-600">Response within 24 hours</p>
							<Button variant="link" className="text-primary">
								Support@tillahealth.com
							</Button>
							<Button variant="link" className="text-primary">
								Admin@tillahealth.com
							</Button>
						</div>
						<div className="text-center p-4">
							<Map className="mx-auto h-6 w-6 text-primary mb-2" />
							<h3 className="font-semibold mb-2">Location</h3>
							<p className="text-slate-600">Available 9AM-5PM EST</p>
							<Button variant="link" className="text-primary">
								MD, USA
							</Button>
							<Button variant="link" className="text-primary">
								Addis Ababa, Ethiopia
							</Button>
						</div>
					</div>
				</div>

				{/* Newsletter Section */}
				<section className="py-24 lg:py-32 bg-primary text-white">
					<motion.div
						className="container mx-auto px-4"
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.6 }}
						viewport={{ once: true }}
					>
						<div className="max-w-xl mx-auto text-center">
							<h2 className="text-4xl font-bold mb-8">Stay Updated</h2>
							<p className="mb-12 text-white/90 text-lg">
								Subscribe to our newsletter for the latest updates on healthcare
								services and company news.
							</p>
							<form className="flex gap-4 max-w-md mx-auto">
								<Input
									type="email"
									placeholder="Enter your email"
									className="bg-white/10 border-white/20 text-white placeholder:text-white/60"
								/>
								<Button
									type="submit"
									variant="secondary"
									className="whitespace-nowrap hover:bg-white hover:text-primary transition-all duration-300"
								>
									Subscribe
								</Button>
							</form>
						</div>
					</motion.div>
				</section>
			</div>
		</main>
	);
}
