import { motion } from "framer-motion";
import { CheckCircle, Handshake, Rocket, Umbrella } from "lucide-react";

import {
	Card,
	CardDescription,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";

const features = [
	{
		icon: Umbrella,
		title: "Comprehensive Coverage",
		description:
			"Health plans designed to meet the needs of families, individuals, employees, and organizations.",
	},
	{
		icon: Rocket,
		title: "Advanced Technology",
		description:
			"We integrate telemedicine and AI to improve patient outcomes and access to care.",
	},
	{
		icon: Handshake,
		title: "Network of Trusted Providers",
		description:
			"Collaborations with leading hospitals and clinics across Ethiopia.",
	},
	{
		icon: CheckCircle,
		title: "Seamless Experience",
		description:
			"Tailored healthcare services with clear communication and easy access for patients and their loved ones.",
	},
];

export default function Features() {
	return (
		<section id="features" className="relative py-12 md:py-20 bg-muted">
			<div className="container mx-auto px-4  flex flex-col items-center justify-center  mb-10">
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					className="text-center mb-12"
				>
					<h2 className="text-4xl font-bold mb-6">Why Choose Tilla Health?</h2>
					<p className="max-w-3xl mx-auto text-gray-600">
						Whether you&apos;re a federal employee, NGO worker, or a family
						supported by diaspora members, we ensure that you receive
						exceptional healthcare through the use of cutting-edge technologies
						like telemedicine and AI.
					</p>
				</motion.div>
				<div className="grid grid-cols-1  md:grid-cols-4 gap-8">
					{features.map((feature, index) => (
						<Card
							key={index}
							className="animate-fade-in border-2 border-primary"
						>
							<CardHeader>
								<feature.icon className="w-12 h-12 text-primary mb-4" />
								<CardTitle>{feature.title}</CardTitle>
								<CardDescription>{feature.description}</CardDescription>
							</CardHeader>
						</Card>
					))}
				</div>
			</div>
		</section>
	);
}
