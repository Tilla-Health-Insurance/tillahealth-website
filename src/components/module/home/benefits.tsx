import {
	ClipboardCheck,
	Clock,
	DollarSign,
	Globe,
	Link,
	Shield,
	Truck,
	Users,
} from "lucide-react";

import { Card, CardContent } from "@/components/ui/card";

import { SectionHeading } from "./section-heading";

const benefits = [
	{
		title: "Access Made Easy",
		description:
			"Delivering care through telemedicine and a robust provider network.",
		icon: ClipboardCheck, // Represents easy access and organization
	},
	{
		title: "Tailored Solutions",
		description:
			"Plans designed for individuals, families, NGOs, and businesses.",
		icon: Users, // Represents personalized solutions for different groups
	},
	{
		title: "Quality Care",
		description:
			"Combining global expertise and advanced technology to deliver top-tier services.",
		icon: Globe, // Represents global expertise and quality
	},
	{
		title: "Cost Efficiency",
		description:
			"Minimizing expenses through preventive care and reduced travel.",
		icon: DollarSign, // Represents cost-saving and financial efficiency
	},
	{
		title: "Timely Interventions",
		description:
			"Early detection and rapid treatment with digital diagnostic tools.",
		icon: Clock, // Represents timely action and quick response
	},
	{
		title: "Empowered Communities",
		description:
			"Tools and resources to improve care delivery and health management.",
		icon: Shield, // Represents strength and community support
	},
	{
		title: "Safe Transport",
		description:
			"Reliable medical transportation with follow-up care until recovery.",
		icon: Truck, // Represents transportation and logistics
	},
	{
		title: "Sustainable Systems",
		description:
			"Resilient infrastructure to address Ethiopia’s evolving healthcare needs.",
		icon: Link, // Represents connection and sustainability
	},
	{
		title: "Global Connections",
		description:
			"Bridging local communities with diaspora and international expertise for impactful solutions.",
		icon: Globe, // Represents global networking and connections
	},
];
export function BenefitsSection() {
	return (
		<section className="py-24 bg-background">
			<div className="container px-4 md:px-6">
				<h3 className="text-sm font-semibold text-primary mb-4 text-center">
					{">>"} Why Choose Us {"<<"}
				</h3>
				<SectionHeading
					title="Why Choose Tilla Health"
					description="Transforming healthcare delivery with innovation and accessibility"
					className="text-center mb-12"
				/>
				<div className="grid gap-6 grid-cols-1 lg:grid-cols-3 md:max-w-6xl mx-auto">
					{benefits.map((benefit) => (
						<Card
							key={benefit.title}
							className="relative overflow-hidden transition-transform transform hover:scale-105 shadow-lg rounded-lg border border-gray-200"
						>
							<CardContent className="p-6">
								<div className="md:flex gap-4">
									<div className="my-4  rounded-2xl p-2 bg-primary shadow-md">
										<benefit.icon className="w-6 h-6 text-card" />
									</div>
									<div>
										<h3 className="font-semibold mb-2 text-lg text-gray-800">
											{benefit.title}
										</h3>
										<p className="text-sm text-muted-foreground ">
											{benefit.description}
										</p>
									</div>
								</div>
							</CardContent>
						</Card>
					))}
				</div>
			</div>
		</section>
	);
}
