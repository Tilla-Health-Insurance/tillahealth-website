"use client";

import { GearIcon } from "@radix-ui/react-icons";
import { motion } from "framer-motion";
import {
	Handshake,
	HeartHandshake,
	Mail,
	MessageCircle,
	Network,
	Phone,
	Shield,
	Users,
} from "lucide-react";

import { ServicesSection } from "@/components/module/Services";

interface ServiceItem {
	icon: any;
	title: string;
	description: string;
	href: string;
}

// interface ContactItem {
// 	icon: React.ElementType;
// 	title: string;
// 	content: string;
// }

const heroContent = {
	title: "What We Do",
	description:
		"At Tilla Health, we take a holistic approach to managed care by offering services that address both medical and operational needs.",
} as const;

const services: ServiceItem[] = [
	{
		icon: Shield,
		title: "Quality and Trusted Care for Members",
		description:
			"We help members access trusted healthcare providers and receive the care they deserve. Through our robust network of providers, we ensure high standards of healthcare delivery. Our focus on quality ensures that members receive timely and effective care for both routine and specialized needs.",
		href: "/plan/federal-employee-program",
	},
	{
		icon: Handshake,
		title: "Provider Partnerships for Enhanced Care",
		description:
			"We work closely with healthcare providers to enhance the quality of care delivered to our members, ensuring a collaborative approach that prioritizes patient well-being. By building strong relationships with providers, we create a seamless care experience that benefits both members and providers.",
		href: "/plan/federal-employee-program",
	},
	{
		icon: Users,
		title: "Community-Centered Healthcare Solutions",
		description:
			"At Tilla Health, we understand and address the unique needs of the communities we serve. Our personalized approach ensures that our members receive care tailored to their local environment while maintaining affordability and accessibility. We actively engage with communities to identify and address specific health challenges.",
		href: "/plan/federal-employee-program",
	},
	{
		icon: Network,
		title: "Wide Network of Providers",
		description:
			"Tilla Health collaborates with a broad network of trusted doctors, hospitals, and healthcare facilities, ensuring members receive comprehensive care wherever they are. Our expansive network is designed to provide members with access to the care they need without unnecessary delays or barriers.",
		href: "/plan/federal-employee-program",
	},
	{
		icon: HeartHandshake,
		title: "Comprehensive Preventive Care",
		description:
			"We emphasize preventive care to help members maintain their health and well-being. From routine check-ups to health screenings, we ensure that members can proactively manage their health.",
		href: "/plan/federal-employee-program",
	},
	{
		icon: GearIcon,
		title: "A Legacy of Service",
		description:
			"Inspired by the foundational values of established healthcare leaders, Tilla Health is dedicated to providing healthcare solutions that allow members to live free of worry and fear. Our focus remains on delivering quality care, building partnerships,and fostering healthier communities.",
		href: "/plan/federal-employee-program",
	},
];

// const contactItems: ContactItem[] = [
// 	{ icon: Mail, title: "Email", content: "info@tillahealth.com" },
// 	{ icon: Phone, title: "Phone", content: "+251 (900) 034-848" },
// 	{ icon: MapPin, title: "Location", content: "Addis Ababa, Ethiopia" },
// ];

export default function WhatWeDoPage() {
	return (
		<div className="min-h-screen">
			{/* Hero Section */}
			<section className="relative min-h-[25vh] mt-24 flex items-center justify-center overflow-hidden">
				{/* Dynamic Background */}
				<motion.div
					className="absolute inset-0 bg-gradient-to-br from-primary via-primary/90 to-primary/80"
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					transition={{ duration: 1.5 }}
				>
					{/* Animated Patterns */}
					{/* <motion.div
						className="absolute inset-0"
						style={{
							backgroundImage: `url("data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%23ffffff" fill-opacity="0.05"%3E%3Cpath d="M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
						}}
					/> */}

					{/* Floating Gradient Orbs */}
					<motion.div
						className="absolute top-1/4 left-1/4 w-96 h-96 bg-white/10 rounded-full blur-3xl"
						animate={{
							scale: [1, 1.2, 1],
							x: [-10, 10, -10],
							y: [-10, 10, -10],
						}}
						transition={{
							duration: 8,
							repeat: Infinity,
							repeatType: "reverse",
						}}
					/>
					<motion.div
						className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-white/10 rounded-full blur-3xl"
						animate={{
							scale: [1.2, 1, 1.2],
							x: [10, -10, 10],
							y: [10, -10, 10],
						}}
						transition={{
							duration: 8,
							repeat: Infinity,
							repeatType: "reverse",
							delay: 1,
						}}
					/>
				</motion.div>

				{/* Content Container */}
				<motion.div
					className="relative z-10 container mx-auto px-4 text-center"
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.8, delay: 0.2 }}
				>
					{/* Title */}
					<motion.div
						className="relative inline-block mb-6"
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						transition={{ duration: 0.8, delay: 0.3 }}
					>
						<motion.span
							className="absolute -inset-1 rounded-lg bg-white/20 blur"
							animate={{
								opacity: [0.5, 0.8, 0.5],
							}}
							transition={{
								duration: 2,
								repeat: Infinity,
								repeatType: "reverse",
							}}
						/>
						<h1 className="relative text-3xl md:text-5xl font-bold ">
							{heroContent.title}
						</h1>
						<div className="relative h-1 mt-4">
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
					</motion.div>

					{/* Description */}
					<motion.div
						className="max-w-3xl mx-auto relative"
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.8, delay: 0.4 }}
					>
						<motion.div
							className="absolute -inset-4 rounded-xl bg-white/5 blur-xl"
							animate={{
								opacity: [0.3, 0.5, 0.3],
							}}
							transition={{
								duration: 3,
								repeat: Infinity,
								repeatType: "reverse",
							}}
						/>
						<p className="relative text-lg md:text-xl text-muted-foreground leading-relaxed">
							{heroContent.description}
						</p>
					</motion.div>

					{/* Scroll Indicator */}
					<motion.div
						className="absolute bottom-8 left-1/2 -translate-x-1/2"
						initial={{ opacity: 0, y: -20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ delay: 1 }}
					>
						<motion.div
							className="w-1 h-16 rounded-full bg-gradient-to-b from-white/0 via-white/50 to-white/0"
							animate={{ scaleY: [1, 0.8, 1] }}
							transition={{
								duration: 1.5,
								repeat: Infinity,
								repeatType: "reverse",
							}}
						/>
					</motion.div>
				</motion.div>
			</section>

			{/* Services Section */}
			<motion.div
				initial={{ opacity: 0 }}
				whileInView={{ opacity: 1 }}
				transition={{ duration: 0.8 }}
				viewport={{ once: true }}
				className="py-4 lg:py-8"
			>
				<ServicesSection
					services={services}
					title="Our Key Services"
					description="
					At Tilla Health , we are committed to providing accessible,
					affordable, and comprehensive healthcare coverage to individuals and
					families living across Ethiopia. Whether you're part of the local
					community, an employee, or a government worker, our health plans are
					tailored to meet your specific healthcare needs.
				"
					haveReadMore={false}
				/>
			</motion.div>

			{/* Contact Information */}
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

								<motion.p
									className="text-lg text-muted-foreground max-w-2xl mx-auto"
									initial={{ y: 20, opacity: 0 }}
									animate={{ y: 0, opacity: 1 }}
									transition={{ delay: 0.4 }}
								>
									Our dedicated support team is here to assist you. Reach out
									through any of these channels:
								</motion.p>
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
		</div>
	);
}
