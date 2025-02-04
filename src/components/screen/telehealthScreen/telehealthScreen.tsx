"use client";

import Image from "next/image";

import { motion } from "framer-motion";
import { Car, Globe, Heart, Stethoscope, Users, Video } from "lucide-react";

import { TitleUnderLine } from "@/components/shared/Decorations/TitleUnderLine";
import { FAQ } from "@/components/shared/FAQ/FAQ";
import { ContactUs } from "@/components/shared/contactUs/contactUs";
import { Button } from "@/components/ui/button";
import { IMAGES } from "@/constants/files";

interface ServiceFeature {
	title: string;
	description: string;
	icon: React.ElementType;
}

interface Testimonial {
	quote: string;
	author: string;
	role: string;
}

interface FAQData {
	question: string;
	answer: string;
}

const serviceFeatures: ServiceFeature[] = [
	{
		title: "Global Specialist Access",
		description:
			"Direct access to world-class healthcare specialists and medical centers across the USA",
		icon: Globe,
	},
	{
		title: "Safe Transportation",
		description:
			"Reliable and comfortable medical transport services for patients when needed",
		icon: Car,
	},
	{
		title: "Quality Medical Care",
		description:
			"Expert medical consultations and treatment from experienced healthcare professionals",
		icon: Stethoscope,
	},
];

const testimonials: Testimonial[] = [
	{
		quote:
			"Tilla Health helped me get a second opinion for my father's condition from a leading USA specialist. The advice changed our treatment plan for the better!",
		author: "Sarah M.",
		role: "Family Member",
	},
	// Add more testimonials...
];

const faqs: FAQData[] = [
	{
		question: "How do I schedule a consultation?",
		answer:
			"Log in to the Member Portal, click on 'Telemedicine Consultation,' and select your preferred specialist and appointment time.",
	},
	{
		question: "What types of specialists are available?",
		answer:
			"We offer access to a wide range of USA-based specialists including cardiologists, neurologists, oncologists, and more.",
	},
	{
		question: "Is the platform secure?",
		answer:
			"Yes, our platform is HIPAA-compliant, ensuring the highest level of security and privacy for your medical consultations.",
	},
	{
		question: "What do I need for a virtual consultation?",
		answer:
			"You'll need a stable internet connection, a device with a camera (smartphone, tablet, or computer), and a quiet, private space.",
	},
];

const howItWorksSteps = [
	{
		title: "Log in to the Member Portal",
		description: "Access your secure account through our member portal",
		icon: Users,
	},
	{
		title: "Select Telemedicine Consultation",
		description: "Choose the virtual consultation option from our services",
		icon: Video,
	},
	{
		title: "Choose a Specialist",
		description: "Browse and select from our network of USA-based specialists",
		icon: Stethoscope,
	},
	{
		title: "Attend Virtual Consultation",
		description: "Connect with your specialist through our secure platform",
		icon: Globe,
	},
];

export default function TelehealthScreen() {
	return (
		<main className="min-h-screen relative isolate overflow-hidden">
			{/* Hero Section */}
			<section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden">
				{/* Background Effects */}
				<div className="absolute inset-0">
					<Image
						src={IMAGES.telehealth}
						alt="Telehealth Consultation"
						fill
						className="object-cover object-center scale-105 transform hover:scale-110 transition-transform duration-1000"
						priority
					/>
					<div className="absolute inset-0 bg-gradient-to-r from-black/50 to-transparent" />
					<div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/10 to-black/40" />

					{/* Animated decorative element */}
					<motion.div
						className="absolute top-0 left-0 w-[800px] h-[800px] bg-gradient-to-br from-primary/20 to-transparent rounded-full blur-3xl"
						animate={{
							scale: [1, 1.2, 1],
							x: [-200, 0, -200],
							y: [-50, 50, -50],
							opacity: [0.2, 0.3, 0.2],
						}}
						transition={{
							duration: 20,
							repeat: Infinity,
							repeatType: "mirror",
							ease: "easeInOut",
						}}
					/>
				</div>

				{/* Content */}
				<div className="relative z-10 container mx-auto px-4">
					<motion.div
						className="text-center max-w-3xl mx-auto"
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.8 }}
					>
						<motion.h1
							className="text-2xl md:text-3xl lg:text-4xl font-bold text-white leading-tight mb-6 drop-shadow-lg"
							initial={{ opacity: 0 }}
							animate={{ opacity: 1 }}
							transition={{ duration: 0.8, delay: 0.4 }}
						>
							Tilla Telehealth
							<TitleUnderLine width="20%" />
						</motion.h1>

						<motion.p
							className="text-xl md:text-2xl text-white/90 leading-relaxed mb-12 drop-shadow-md"
							initial={{ opacity: 0, y: 20 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ delay: 0.6 }}
						>
							Connecting Ethiopia to World-Class Healthcare Solutions
						</motion.p>

						<motion.div
							className="flex flex-col sm:flex-row gap-4 justify-center"
							initial={{ opacity: 0, y: 20 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ delay: 0.8 }}
						>
							<Button
								size="lg"
								className="bg-primary text-primary-foreground hover:bg-white hover:text-black text-lg px-8 py-6"
							>
								Schedule Consultation
							</Button>
							<Button
								size="lg"
								variant="outline"
								className="border-white hover:bg-white hover:text-primary text-lg px-8 py-6"
							>
								Learn More
							</Button>
						</motion.div>
					</motion.div>
				</div>
			</section>

			{/* Features Section - Modern Card Design */}
			<section className="py-24 lg:py-32 relative">
				<div className="container relative z-10 mx-auto px-6">
					<motion.div
						className="text-center mb-20"
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true }}
					>
						<h2 className="text-4xl md:text-5xl font-bold relative inline-block">
							Key Benefits
							<TitleUnderLine />
						</h2>
						<p className="mt-6 text-xl text-muted-foreground max-w-3xl mx-auto">
							Comprehensive healthcare solutions bridging Ethiopia and USA
							expertise
						</p>
					</motion.div>

					<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
						{serviceFeatures.map((feature, index) => (
							<motion.div
								key={feature.title}
								initial={{ opacity: 0, y: 20 }}
								whileInView={{ opacity: 1, y: 0 }}
								viewport={{ once: true }}
								transition={{ delay: index * 0.1 }}
								className="group"
							>
								<div
									className="relative bg-card rounded-xl p-6 shadow-[0_2px_8px_rgba(0,0,0,0.08)] 
											  hover:shadow-[0_4px_16px_rgba(0,0,0,0.12)] transition-all duration-300 
											  hover:-translate-y-1 h-full border border-border/50 flex flex-col items-center text-center"
								>
									{/* Icon */}
									<div className="mb-6">
										<div
											className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center 
												 transform-gpu transition-all duration-300 ease-out
												 group-hover:bg-primary/15"
										>
											<feature.icon className="w-6 h-6 text-primary" />
										</div>
									</div>
									{/* Content */}

									<div className="space-y-4">
										<h3
											className="text-lg font-semibold tracking-tight text-foreground/90
             group-hover:text-primary transition-colors duration-300"
										>
											{feature.title}
										</h3>

										<ul className="space-y-3 list-disc marker:text-primary">
											<p className="text-sm text-muted-foreground">
												{feature.description}
											</p>
										</ul>
									</div>
								</div>
							</motion.div>
						))}
					</div>
				</div>
			</section>

			{/* How It Works Section */}
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
							{howItWorksSteps.map((step, index) => (
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

										{/* {index < howItWorksSteps.length - 1 && (
											<ArrowRight className="hidden lg:block absolute -right-3 top-1/2 text-white/70 w-6 h-6 transform -translate-y-1/2 animate-pulse" />
										)} */}
									</div>
								</motion.div>
							))}
						</div>
					</div>
				</div>
			</section>

			{/* Testimonials Section */}
			<section className="py-24 lg:py-32 relative">
				<div className="container mx-auto px-4">
					<motion.div
						className="text-center mb-16"
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true }}
					>
						<h2 className="text-4xl md:text-5xl font-bold relative inline-block">
							Member Stories
							<TitleUnderLine />
						</h2>
						<p className="mt-6 text-xl text-muted-foreground max-w-3xl mx-auto">
							Real experiences from our members
						</p>
					</motion.div>

					<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
						{testimonials.map((testimonial, index) => (
							<motion.div
								key={index}
								className="group relative bg-card hover:bg-gradient-to-br from-primary/5 via-background to-transparent rounded-3xl p-8 transition-all duration-300 hover:shadow-lg hover:shadow-primary/5"
								initial={{ opacity: 0, y: 20 }}
								whileInView={{ opacity: 1, y: 0 }}
								viewport={{ once: true }}
								transition={{ delay: index * 0.2 }}
							>
								{/* Decorative elements */}
								<div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-primary/10 to-transparent rounded-tr-3xl rounded-bl-full -z-10" />
								<div className="absolute bottom-0 left-0 w-32 h-32 bg-gradient-to-tr from-primary/10 to-transparent rounded-bl-3xl rounded-tr-full -z-10" />

								{/* Quote icon */}
								<div className="mb-6">
									<div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center transform -rotate-6 group-hover:rotate-0 transition-transform duration-300">
										<Heart className="w-6 h-6 text-primary" />
									</div>
								</div>

								{/* Quote content */}
								<blockquote className="relative mb-6">
									<p className="text-lg leading-relaxed italic text-foreground/90">
										&quot;{testimonial.quote}&quot;
									</p>
								</blockquote>

								{/* Author info */}
								<div className="flex items-center mt-8 pt-6 border-t border-primary/10">
									<div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center mr-4">
										<Users className="w-6 h-6 text-primary" />
									</div>
									<div>
										<div className="font-semibold text-foreground">
											{testimonial.author}
										</div>
										<div className="text-sm text-muted-foreground">
											{testimonial.role}
										</div>
									</div>
								</div>

								{/* Hover effect border */}
								<div className="absolute inset-0 border border-primary/10 rounded-3xl group-hover:border-primary/20 transition-colors duration-300" />
							</motion.div>
						))}
					</div>
				</div>
			</section>

			<FAQ faqs={faqs} />

			{/* Keep existing ContactUs section */}
			<ContactUs />
		</main>
	);
}
