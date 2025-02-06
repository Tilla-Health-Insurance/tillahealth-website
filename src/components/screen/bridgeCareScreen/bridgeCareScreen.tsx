"use client";

import Image from "next/image";

import { motion } from "framer-motion";
import {
	Globe,
	Heart,
	Sparkles,
	Stethoscope,
	Users,
	Video,
} from "lucide-react";

import { TitleUnderLine } from "@/components/shared/Decorations/TitleUnderLine";
import { FAQ } from "@/components/shared/FAQ/FAQ";
import { ContactUs } from "@/components/shared/contactUs/contactUs";
import { Button } from "@/components/ui/button";
import { ContentCard } from "@/components/ui/custom/contentCard";
import HowItWorks from "@/components/ui/custom/howItWorks";
import { MemberStories } from "@/components/ui/custom/memeberStories";
import { IMAGES } from "@/constants/files";

interface ServiceFeature {
	title: string;
	description: string[];
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
		title: "Access to Renowned USA-Based Specialists",
		description: [
			"Connect with leading doctors and specialists across various fields such as cardiology, oncology, neurology, and pediatrics",
			"Receive expert second opinions and advanced treatment recommendations for complex health conditions",
		],
		icon: Globe,
	},
	{
		title: "24/7 Virtual Consultations",
		description: [
			"Schedule consultations at your convenience, anytime, anywhere",
			"High-quality, secure video conferencing ensures a seamless telemedicine experience",
		],
		icon: Video,
	},
	{
		title: "Integrated Local Support",
		description: [
			"In addition to global expertise, Tilla Health's local network provides access to top hospitals and specialists within Ethiopia for follow-up care",
			"Members can easily transition between local and international healthcare services",
		],
		icon: Users,
	},
	{
		title: "Comprehensive Medical Records Access",
		description: [
			"Centralized access to medical records through the Tilla Health Member Portal",
			"Share medical histories, test results, and imaging files with USA-based specialists for a more personalized consultation",
		],
		icon: Heart,
	},
	{
		title: "Multilingual Support",
		description: [
			"Bridge language barriers with interpretation services for consultations in both Amharic and English",
		],
		icon: Globe,
	},
	{
		title: "Specialized Telemedicine Services",
		description: [
			"Chronic disease management, prenatal and postnatal care, mental health services, and more tailored to members' specific needs",
		],
		icon: Stethoscope,
	},
];

const testimonials: Testimonial[] = [
	{
		quote:
			"As someone living outside Addis Ababa, Tilla Health's coordinated transportation and access to top city hospitals has been invaluable for my family's healthcare needs.",
		author: "Abebe K.",
		role: "Rural Member",
	},
	{
		quote:
			"The transportation support for my elderly mother's medical appointments has been a blessing. Safe, reliable, and stress-free.",
		author: "Tigist H.",
		role: "Caregiver",
	},
];

const faqs: FAQData[] = [
	{
		question: "How does BridgeCare USA work with local hospitals?",
		answer:
			"BridgeCare USA integrates seamlessly with top Ethiopian hospitals while providing access to USA specialists. This combination ensures you receive comprehensive care that leverages both local and international medical expertise.",
	},
	{
		question: "What support is available for members outside Addis Ababa?",
		answer:
			"We provide coordinated transportation to top hospitals in Addis Ababa, along with virtual consultations with USA doctors for diagnosis verification and treatment guidance. This ensures members across Ethiopia have access to quality healthcare.",
	},
	{
		question: "Who can benefit from the transportation support service?",
		answer:
			"Our transportation service primarily supports elderly members and pregnant women in Addis Ababa and surrounding areas, ensuring safe and reliable transport to healthcare facilities for appointments and check-ups.",
	},
	{
		question:
			"What specialist services are available through USA consultations?",
		answer:
			"Members can access USA-based specialists in various fields including cardiology, oncology, pediatrics, and more. These consultations can be for primary care or second opinions on complex cases.",
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

export default function BridgecareScreen() {
	return (
		<main className="min-h-screen relative isolate overflow-hidden">
			{/* Hero Section */}
			<section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden">
				{/* Background Effects */}
				<div className="absolute inset-0">
					<Image
						src={IMAGES.bridgeCare}
						alt="BridgeCare USA"
						fill
						className="object-cover object-center scale-105 transform hover:scale-110 transition-transform duration-1000"
						priority
					/>
					<div className="absolute inset-0 bg-gradient-to-r from-black/60 to-transparent" />
					<div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/20 to-black/50" />

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
							BridgeCare USA
							<TitleUnderLine width="20%" />
						</motion.h1>

						<motion.p
							className="text-xl md:text-2xl text-white/90 leading-relaxed mb-12 drop-shadow-md"
							initial={{ opacity: 0, y: 20 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ delay: 0.6 }}
						>
							Premium telemedicine connecting Ethiopia to USA healthcare
							expertise, with comprehensive local support
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

			{/* Vision Statement Section */}
			<ContentCard
				title="BridgeCare USA is a premium telemedicine service that bridges the gap between Ethiopia and the USA's world-class healthcare expertise. "
				description="This innovative solution combines advanced telemedicine technology with the support of Tilla Health's comprehensive local healthcare network, ensuring members have access to the best medical care both locally and internationally."
				imageSrc={IMAGES.portal}
				imageAlt="BridgeCare USA"
				highlights={[]}
			/>

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
							Key Features
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
									className="relative bg-gradient-to-br from-background via-card to-background rounded-2xl p-8 
											  shadow-[0_4px_20px_rgba(0,0,0,0.05)] hover:shadow-[0_8px_30px_rgba(0,0,0,0.12)] 
											  transition-all duration-500 hover:-translate-y-1 h-full border border-border/50
											  overflow-hidden"
								>
									{/* Animated gradient background */}
									<div
										className="absolute inset-0 bg-gradient-to-r from-primary/5 via-primary/10 to-primary/5 
												  opacity-0 group-hover:opacity-100 transition-opacity duration-500 
												  blur-xl -z-10"
									/>

									{/* Decorative elements */}
									<div
										className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-primary/10 
												  to-transparent rounded-full blur-3xl -z-10 opacity-0 group-hover:opacity-100 
												  transition-opacity duration-500"
									/>

									{/* Icon */}
									<div className="mb-8 relative">
										<div
											className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary/10 to-primary/5 
													  flex items-center justify-center transform-gpu transition-all duration-500 
													  ease-out group-hover:scale-110 group-hover:rotate-3"
										>
											<feature.icon
												className="w-8 h-8 text-primary transform transition-all duration-500 
																  group-hover:scale-110"
											/>
										</div>
										{/* Decorative ring */}
										<div
											className="absolute inset-0 border-2 border-primary/20 rounded-2xl scale-0 
														  group-hover:scale-100 transition-transform duration-500 ease-out"
										/>
									</div>

									{/* Content */}
									<div className="space-y-4">
										<h3
											className="text-xl font-semibold tracking-tight text-foreground/90
													 group-hover:text-primary transition-colors duration-300"
										>
											{feature.title}
										</h3>

										<ul className="space-y-3">
											{feature.description.map((desc, i) => (
												<li
													key={i}
													className="flex items-start space-x-3 text-muted-foreground 
																 group-hover:text-foreground/80 transition-colors duration-300"
												>
													<span className="w-1.5 h-1.5 mt-2 rounded-full bg-primary/70 flex-shrink-0" />
													<span className="text-sm leading-relaxed">
														{desc}
													</span>
												</li>
											))}
										</ul>
									</div>

									{/* Bottom accent line */}
									<div
										className="absolute bottom-0 left-0 h-1 bg-gradient-to-r from-primary/50 to-primary/20 
												  w-0 group-hover:w-full transition-all duration-500 ease-out"
									/>
								</div>
							</motion.div>
						))}
					</div>
				</div>
			</section>

			{/* Who Can Benefit Section - Split Cards with Accent */}
			<section className="py-24 lg:py-32 relative bg-primary/5">
				<div className="container relative z-10 mx-auto px-6">
					<motion.div
						className="text-center mb-20"
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true }}
					>
						<h2 className="text-4xl md:text-5xl font-bold relative inline-block">
							Who Can Benefit?
							<TitleUnderLine />
						</h2>
						<p className="mt-6 text-xl text-muted-foreground max-w-3xl mx-auto">
							Our services are designed to help various individuals and families
						</p>
					</motion.div>

					<div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
						{[
							{
								title: "Members",
								description:
									"Members seeking advanced medical consultations or second opinions from leading healthcare experts.",
								icon: Stethoscope,
								accentColor: "from-blue-500 to-purple-500",
							},
							{
								title: "Individuals",
								description:
									"Individuals with complex health conditions requiring expertise not readily available locally.",
								icon: Users,
								accentColor: "from-emerald-500 to-teal-500",
							},
							{
								title: "Families",
								description:
									"Families who want the assurance of global healthcare access for their loved ones.",
								icon: Heart,
								accentColor: "from-rose-500 to-pink-500",
							},
						].map((item, index) => (
							<motion.div
								key={item.title}
								className="group relative"
								initial={{ opacity: 0, y: 20 }}
								whileInView={{ opacity: 1, y: 0 }}
								viewport={{ once: true }}
								transition={{ delay: index * 0.2 }}
							>
								<div className="relative h-full overflow-hidden">
									{/* Top accent bar */}
									<div
										className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${item.accentColor}`}
									/>

									{/* Main card content */}
									<div className="relative bg-card p-8 pt-12">
										{/* Icon with sliding background */}
										<div className="relative w-16 h-16 mb-6 overflow-hidden rounded-xl">
											<div
												className={`absolute inset-0 bg-gradient-to-r ${item.accentColor} opacity-20 group-hover:translate-x-full transition-transform duration-700`}
											/>
											<div className="relative flex items-center justify-center h-full">
												<item.icon className="w-8 h-8 text-primary" />
											</div>
										</div>

										<h3 className="text-2xl font-semibold mb-4">
											{item.title}
										</h3>
										<p className="text-muted-foreground leading-relaxed">
											{item.description}
										</p>
									</div>

									{/* Bottom reveal border */}
									<div
										className={`absolute bottom-0 left-1/2 w-0 h-1 bg-gradient-to-r ${item.accentColor} group-hover:w-full group-hover:left-0 transition-all duration-500`}
									/>
								</div>
							</motion.div>
						))}
					</div>
				</div>
			</section>
			<HowItWorks steps={howItWorksSteps} />
			<section className="py-24 relative overflow-hidden">
				<div className="absolute inset-0">
					<div className="absolute inset-0 bg-gradient-to-r from-background via-background/95 to-background/90" />
					<div className="absolute inset-0 bg-[radial-gradient(circle_800px_at_100%_200px,rgba(var(--primary-rgb),0.1),transparent)]" />
				</div>

				<div className="container mx-auto px-4 relative">
					<motion.div
						className="text-center mb-16"
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true }}
					>
						<h2 className="text-4xl md:text-5xl font-bold">
							Why Choose BridgeCare USA?
							<TitleUnderLine width="20%" />
						</h2>
					</motion.div>

					<div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
						{[
							{
								title: "Global Expertise at Your Fingertips",
								description:
									"Gain access to renowned healthcare professionals in the USA without leaving Ethiopia.",
								icon: Globe,
							},
							{
								title: "Convenient and Cost-Effective",
								description:
									"Save time and money by eliminating the need for international travel while receiving world-class medical advice.",
								icon: Sparkles,
							},
							{
								title: "Seamless Local and International Care",
								description:
									"Enjoy an integrated healthcare journey, supported by local providers and international specialists.",
								icon: Users,
							},
						].map((item, index) => (
							<motion.div
								key={item.title}
								initial={{ opacity: 0, y: 20 }}
								whileInView={{ opacity: 1, y: 0 }}
								viewport={{ once: true }}
								transition={{ delay: index * 0.2 }}
								className="group"
							>
								<div
									className="bg-background/50 backdrop-blur-sm rounded-xl p-8 border border-border/50 
												hover:border-primary/20 transition-all duration-300 h-full 
												hover:shadow-[0_8px_30px_rgb(0,0,0,0.12)] hover:-translate-y-1"
								>
									<div className="relative mb-6">
										<div
											className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center 
													transform-gpu transition-all duration-300 group-hover:scale-110 group-hover:bg-primary/15"
										>
											<item.icon className="w-7 h-7 text-primary" />
										</div>
										<div className="absolute -right-1 -top-1 w-3 h-3 rounded-full bg-primary/20" />
									</div>

									<h3 className="text-xl font-semibold mb-3 text-foreground group-hover:text-primary transition-colors duration-300">
										{item.title}
									</h3>
									<p className="text-muted-foreground leading-relaxed">
										{item.description}
									</p>
								</div>
							</motion.div>
						))}
					</div>
				</div>
			</section>

			<MemberStories testimonials={testimonials} />

			<FAQ faqs={faqs} />

			{/* Keep existing ContactUs section */}
			<ContactUs />

			{/* Add this to your global styles */}
			<style jsx global>{`
				@keyframes spin-slow {
					from {
						transform: rotate(0deg);
					}
					to {
						transform: rotate(360deg);
					}
				}

				.animate-spin-slow {
					animation: spin-slow 8s linear infinite;
				}
			`}</style>
		</main>
	);
}
