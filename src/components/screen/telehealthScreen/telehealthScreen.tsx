"use client";

import Image, { StaticImageData } from "next/image";

import { motion } from "framer-motion";
import {
	Brain,
	Globe,
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
	description: string;
	icon: React.ElementType;
}

interface Testimonial {
	quote: string;
	author: string;
	role: string;
	image?: StaticImageData;
}

interface FAQData {
	question: string;
	answer: string;
}

const serviceFeatures: ServiceFeature[] = [
	{
		title: "World-Class Care Access",
		description:
			"Connect with top local doctors in Ethiopia and USA-based specialists via telemedicine for expert consultations and second opinions",
		icon: Globe,
	},
	{
		title: "Convenience & Flexibility",
		description:
			"Schedule virtual consultations 24/7 from home using our Member Portal, with seamless access for routine check-ups and specialized care",
		icon: Sparkles,
	},
	{
		title: "Comprehensive Support",
		description:
			"Reliable medical transportation services and personalized care plans tailored to meet individual and family needs",
		icon: Users,
	},
	{
		title: "Affordable Plans",
		description:
			"Flexible, transparent pricing options for individuals and families, with affordable telemedicine services and no hidden costs",
		icon: Brain,
	},
];

const providerFeatures: ServiceFeature[] = [
	{
		title: "Increased Patient Reach",
		description:
			"Expand your practice by connecting with members across Ethiopia and internationally through telemedicine consultations",
		icon: Globe,
	},
	{
		title: "Streamlined Workflow",
		description:
			"Manage patient records and appointments through our secure Provider Portal with AI-powered clinical documentation",
		icon: Brain,
	},
	{
		title: "Enhanced Revenue",
		description:
			"Access a growing patient base and optimize financial operations with streamlined billing and revenue cycle management",
		icon: Sparkles,
	},
	{
		title: "Advanced Telemedicine",
		description:
			"Utilize our HIPAA-compliant platform for secure virtual consultations and international specialist collaboration",
		icon: Video,
	},
	{
		title: "Comprehensive Support",
		description:
			"Access training resources and ongoing support to ensure seamless telehealth experience for you and your patients",
		icon: Users,
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
						src={IMAGES.telemedicine}
						alt="Telehealth Consultation"
						fill
						className="object-cover object-center scale-105 transform hover:scale-110 transition-transform duration-1000"
						priority
						quality={100}
						sizes="100vw"
						style={{
							objectFit: "cover",
							objectPosition: "center",
							imageRendering: "crisp-edges",
						}}
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
							Tilla Telehealth
							<TitleUnderLine width="20%" />
						</motion.h1>

						<motion.p
							className="text-xl md:text-2xl text-white/90 leading-relaxed mb-12 drop-shadow-md"
							initial={{ opacity: 0, y: 20 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ delay: 0.6 }}
						>
							Empowering Healthcare Through AI and Telehealth
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
				title="Tilla Health is bridging the gap with cutting-edge
										telehealth solutions powered by AI"
				description="	—designed to empower members and providers alike. Whether it's
									improving access to care for members or streamlining workflows
									for providers, Tilla Health leverages advanced tools and
									technology to transform the healthcare experience."
				imageSrc={IMAGES.telehealth}
				imageAlt="Telehealth Consultation"
				highlights={[]}
			/>

			{/* Features Section - For Members */}
			<section className="py-16 lg:py-24 relative overflow-hidden">
				{/* Background for Members section */}
				<div className="absolute inset-0">
					<Image
						src={IMAGES.medicalPattern}
						alt="Members Benefits Background"
						fill
						className="object-cover object-center opacity-30"
						quality={90}
						sizes="100vw"
					/>
					<div className="absolute inset-0 bg-gradient-to-r from-background/80 via-background/60 to-background/40" />
					<div className="absolute inset-0 bg-gradient-to-b from-background/30 via-background/20 to-background/80" />
					<div className="absolute inset-0 bg-[radial-gradient(circle_800px_at_100%_200px,rgba(var(--primary-rgb),0.2),transparent)]" />
				</div>

				<div className="container relative z-10 mx-auto px-6">
					{/* Members content */}
					<div className="relative">
						<div className="flex flex-col items-center text-center mb-20">
							<motion.div
								className="relative z-10"
								initial={{ opacity: 0, x: -20 }}
								whileInView={{ opacity: 1, x: 0 }}
								viewport={{ once: true }}
							>
								<h2 className="text-4xl md:text-5xl font-bold mt-4 relative">
									Key Benefits
									<TitleUnderLine width="20%" />
								</h2>
								<div className="mt-6 space-y-4">
									<h3 className="text-xl font-semibold text-primary">
										Why It Matters for Members
									</h3>
									<div className="relative max-w-3xl mx-auto">
										<p className="text-md relative">
											<span className="relative block p-8 bg-background/95 rounded-2xl border border-border/50">
												Tilla Health ensures that members receive world-class
												healthcare through innovative telehealth solutions,
												eliminating barriers to care and making quality services
												accessible to everyone.
											</span>
										</p>
									</div>
								</div>
							</motion.div>
						</div>

						{/* Members Features Grid */}
						<div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 relative">
							{serviceFeatures.map((feature, index) => (
								<motion.div
									key={feature.title}
									initial={{ opacity: 0, y: 20 }}
									whileInView={{ opacity: 1, y: 0 }}
									viewport={{ once: true }}
									transition={{ delay: index * 0.1 }}
									className="group relative"
								>
									<div
										className="relative bg-background/50 backdrop-blur-sm rounded-xl p-8 border border-border/50 
												hover:border-primary/20 transition-all duration-300 h-full 
												hover:shadow-[0_8px_30px_rgb(0,0,0,0.12)] hover:-translate-y-1"
									>
										{/* Accent corner */}
										<div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-primary/10 via-primary/5 to-transparent rounded-tr-xl" />

										{/* Icon */}
										<div className="relative mb-6">
											<div
												className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center 
														transform-gpu transition-all duration-300 group-hover:scale-110 group-hover:bg-primary/15"
											>
												<feature.icon className="w-7 h-7 text-primary" />
											</div>
											{/* Decorative dot */}
											<div className="absolute -right-1 -top-1 w-3 h-3 rounded-full bg-primary/20" />
										</div>

										{/* Content */}
										<h3 className="text-xl font-semibold mb-3 text-foreground group-hover:text-primary transition-colors duration-300">
											{feature.title}
										</h3>
										<p className="text-muted-foreground leading-relaxed">
											{feature.description}
										</p>

										{/* Hover indicator */}
										<div
											className="absolute bottom-4 right-4 w-8 h-8 rounded-full border-2 border-primary/20 
															flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300"
										>
											<div className="w-4 h-4 rounded-full bg-primary/20" />
										</div>
									</div>
								</motion.div>
							))}
						</div>
					</div>
				</div>
			</section>

			{/* Features Section - For Providers */}
			<section className="pb-16 lg:pb-24 relative overflow-hidden">
				{/* Background for Providers section */}
				<div className="absolute inset-0">
					<Image
						src={IMAGES.medicalPattern}
						alt="Providers Benefits Background"
						fill
						className="object-cover object-center opacity-30"
						quality={90}
						sizes="100vw"
					/>
					<div className="absolute inset-0 bg-gradient-to-r from-background/80 via-background/60 to-background/40" />
					<div className="absolute inset-0 bg-gradient-to-b from-background/30 via-background/20 to-background/80" />
					<div className="absolute inset-0 bg-[radial-gradient(circle_800px_at_100%_200px,rgba(var(--primary-rgb),0.2),transparent)]" />
				</div>

				<div className="container relative z-10 mx-auto px-6">
					{/* Providers content */}
					<motion.div
						className="text-center mb-20"
						initial={{ opacity: 0, x: -20 }}
						whileInView={{ opacity: 1, x: 0 }}
						viewport={{ once: true }}
					>
						<h3 className="text-xl font-semibold text-primary">
							Why It Matters for Providers
						</h3>
						<div className="relative max-w-3xl mx-auto mt-4">
							<p className="text-md  relative">
								<span className="relative block p-8 bg-background/95 rounded-2xl border border-border/50">
									Independent practices are essential to delivering personalized
									care, but they face challenges like administrative burdens and
									financial pressures. Tilla Health is here to support providers
									with tools that enhance efficiency, streamline operations, and
									expand patient reach.
								</span>
							</p>
						</div>
					</motion.div>

					{/* Provider Features Grid */}
					<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 relative">
						{providerFeatures.map((feature, index) => (
							<motion.div
								key={feature.title}
								initial={{ opacity: 0, y: 20 }}
								whileInView={{ opacity: 1, y: 0 }}
								viewport={{ once: true }}
								transition={{ delay: index * 0.1 }}
								className="group relative"
							>
								<div
									className="relative bg-background/50 backdrop-blur-sm rounded-xl p-8 border border-border/50 
										hover:border-primary/20 transition-all duration-300 h-full 
										hover:shadow-[0_8px_30px_rgb(0,0,0,0.12)] hover:-translate-y-1"
								>
									{/* Accent corner */}
									<div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-primary/10 via-primary/5 to-transparent rounded-tr-xl" />

									{/* Icon */}
									<div className="relative mb-6">
										<div
											className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center 
												transform-gpu transition-all duration-300 group-hover:scale-110 group-hover:bg-primary/15"
										>
											<feature.icon className="w-7 h-7 text-primary" />
										</div>
										{/* Decorative dot */}
										<div className="absolute -right-1 -top-1 w-3 h-3 rounded-full bg-primary/20" />
									</div>

									{/* Content */}
									<h3 className="text-xl font-semibold mb-3 text-foreground group-hover:text-primary transition-colors duration-300">
										{feature.title}
									</h3>
									<p className="text-muted-foreground leading-relaxed">
										{feature.description}
									</p>

									{/* Hover indicator */}
									<div
										className="absolute bottom-4 right-4 w-8 h-8 rounded-full border-2 border-primary/20 
											flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300"
									>
										<div className="w-4 h-4 rounded-full bg-primary/20" />
									</div>
								</div>
							</motion.div>
						))}
					</div>
				</div>
			</section>

			<HowItWorks steps={howItWorksSteps} />

			{/* Why Choose Tilla Health Section */}
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
							Why Choose Tilla Health Telehealth?
							<TitleUnderLine width="20%" />
						</h2>
					</motion.div>

					<div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
						{[
							{
								title: "Advanced AI Solutions",
								description:
									"Deliver seamless telehealth experiences for both members and providers.",
								icon: Brain,
							},
							{
								title: "Enhanced Accessibility",
								description:
									"Break down barriers to care with 24/7 telehealth consultations and multilingual support.",
								icon: Globe,
							},
							{
								title: "Comprehensive Benefits",
								description:
									"Empower members with world-class care and support providers to thrive in a competitive healthcare landscape.",
								icon: Sparkles,
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
			<ContactUs />
		</main>
	);
}
