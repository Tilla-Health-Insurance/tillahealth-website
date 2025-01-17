"use client";

import { GearIcon } from "@radix-ui/react-icons";
import { motion } from "framer-motion";
import {
	Handshake,
	HeartHandshake,
	Mail,
	Map,
	MapPin,
	Network,
	Phone,
	Shield,
	Users,
} from "lucide-react";

import { ServicesSection } from "@/components/module/Services";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

interface ServiceItem {
	icon: any;
	title: string;
	description: string;
	href: string;
}

interface ContactItem {
	icon: React.ElementType;
	title: string;
	content: string;
}

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

const contactItems: ContactItem[] = [
	{ icon: Mail, title: "Email", content: "info@tillahealth.com" },
	{ icon: Phone, title: "Phone", content: "+251 (900) 034-848" },
	{ icon: MapPin, title: "Location", content: "Addis Ababa, Ethiopia" },
];

export default function WhatWeDoPage() {
	return (
		<div className="min-h-screen">
			{/* Hero Section */}
			<section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden">
				<motion.div
					className="absolute inset-0 bg-primary"
					initial={{ scale: 1.2 }}
					animate={{ scale: 1 }}
					transition={{ duration: 1.5 }}
				>
					<motion.div
						className="absolute inset-0 bg-[url('/placeholder.svg')] bg-cover bg-center opacity-10"
						initial={{ scale: 1.2 }}
						animate={{
							scale: [1.2, 1.3, 1.2],
						}}
						transition={{
							duration: 20,
							repeat: Infinity,
							repeatType: "reverse",
						}}
					/>
				</motion.div>
				<motion.div
					className="relative z-10 container mx-auto px-4 text-center text-white"
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.8, delay: 0.2 }}
				>
					<motion.h1
						className="text-5xl md:text-7xl font-bold mb-6"
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.8, delay: 0.3 }}
					>
						{heroContent.title}
					</motion.h1>
					<motion.p
						className="text-xl md:text-2xl max-w-3xl mx-auto text-white/90"
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.8, delay: 0.4 }}
					>
						{heroContent.description}
					</motion.p>
				</motion.div>
			</section>

			{/* Services Section */}
			<motion.div
				initial={{ opacity: 0 }}
				whileInView={{ opacity: 1 }}
				transition={{ duration: 0.8 }}
				viewport={{ once: true }}
				className="py-24 lg:py-32"
			>
				<ServicesSection
					services={services}
					title="Our Key Services"
					description=""
					haveReadMore={false}
				/>
			</motion.div>

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
		</div>
	);
}
