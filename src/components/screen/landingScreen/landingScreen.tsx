"use client";

import Image from "next/image";

import { motion } from "framer-motion";
import {
	Building,
	Building2,
	Globe,
	HomeIcon as House,
	Luggage,
	User,
	Users,
} from "lucide-react";

import CTA from "@/components/module/CTA";
import { PartnerSlider } from "@/components/module/PartnerSlider";
import { BlogsSection } from "@/components/module/home/Blogs";
import News from "@/components/module/home/News";
import { AboutSection } from "@/components/module/home/about";
import { BenefitsSection } from "@/components/module/home/benefits";
import Hero from "@/components/module/home/hero";
import { InnovationsSection } from "@/components/module/home/innovations";
import { PortalsSection } from "@/components/module/home/portal-section";
import HealthPlans from "@/components/module/home/servicestest";
import TextSection from "@/components/module/home/text-section";
import { IMAGES } from "@/constants/files";

export default function HomeScreen() {
	const partner = [
		{ name: "blacklionlogo", logo: IMAGES.blackLion },
		{ name: "who", logo: IMAGES.whoLogo },
		{ name: "moh", logo: IMAGES.mohLogo },
		{ name: "paulos", logo: IMAGES.paulosLog },
		{ name: "redcrosslogo", logo: IMAGES.redCrossLog },
		{ name: "pauloslogo", logo: IMAGES.paulosLog },
		{ name: "mohlogo", logo: IMAGES.mohLogo },
		{ name: "who", logo: IMAGES.whoLogo },
	];
	const services = [
		{
			icon: Luggage,
			title: "Diaspora Health Connect",
			description:
				"A dedicated healthcare plan for Ethiopian diaspora members who wish to support their families back home. This plan offers full coverage for children, spouses, and elderly parents, with access to preventive care, chronic disease management, and telemedicine services.",
			href: "/plan/diaspora-health-connect",
		},
		{
			icon: House,
			title: "Family Health Plan",
			description:
				"Comprehensive health coverage for families, including children, spouses, and elderly parents. Options include preventive care, maternity services, pediatric and geriatric care, as well as chronic disease management.",
			href: "/plan/family-individual-health-plan",
		},
		{
			icon: User,
			title: "Individual Health Plan",
			description:
				"Flexible healthcare coverage for individuals seeking personal healthcare solutions. Includes options for primary care, specialized treatment, mental health support, and chronic disease management.",
			href: "/plan/family-individual-health-plan",
		},
		{
			icon: Globe,
			title: "International Health Plan",
			description:
				"Flexible healthcare coverage for individuals seeking personal healthcare solutions. Includes options for primary care, specialized treatment, mental health support, and chronic disease management.",
			href: "/plan/international-plan",
		},
		{
			icon: Users,
			title: "NGO Health Plan",
			description:
				"Specialized health coverage for NGO workers, offering remote healthcare access, emergency services, and preventive health programs for those working in remote or high-risk areas.",
			href: "/plan/ngo-health-plan",
		},
		{
			icon: Building,
			title: "Private Sector Health Plan",
			description:
				"Custom health plans designed for employees of private companies. This plan focuses on workplace wellness programs, mental health support, chronic disease management, and access to both remote and urban healthcare.",
			href: "/plan/private-sector-health-plan",
		},
		{
			icon: Building2,
			title: "Federal Employee Program (FEP)",
			description:
				"Tailored healthcare plans for federal government employees, providing comprehensive preventive care, chronic disease management, mental health services, and workplace wellness programs",
			href: "/plan/federal-employee-program",
		},
	];

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
				<Hero />
				{/* <HeroCarousel/> */}
				<PartnerSlider partners={partner} />

				<TextSection />
				{/* About Section */}
				<AboutSection />

				<InnovationsSection />

				<BenefitsSection />
				<PortalsSection />
				{/* Services Section */}
				<HealthPlans />
				<BlogsSection />
				<News />
				{/* Why Choose Section */}
				{/* <Features /> */}
				<CTA
					text="Choose Your Plan Types"
					link="https://register.tillahealth.com/"
					description={[
						"If you're a new member , complete the form with your details, and create your secure login.",
						// "If you are an existing member with a registered portal account, please click here",
					]}
					btnText="Register Here!!"
					registerLink="https://register.tillahealth.com/"
				/>
			</div>
		</main>
	);
}
