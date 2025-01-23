"use client";

import { motion } from "framer-motion";
import { Heart } from "lucide-react";

const features = [
	{
		title: "Comprehensive Coverage",
		description:
			"Health plans designed to meet the needs of families, individuals, employees, and organizations.",
	},
	{
		title: "Advanced Technology",
		description:
			"We integrate telemedicine and AI to improve patient outcomes and access to care.",
	},
	{
		title: "Network of Trusted Providers",
		description:
			"Collaborations with leading hospitals and clinics across Ethiopia.",
	},
	{
		title: "Seamless Experience",
		description:
			"Tailored healthcare services with clear communication and easy access for patients and their loved ones.",
	},
];

export function WhyChooseSection() {
	return (
		<section className="py-20">
			<div className="container mx-auto px-4">
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					className="text-center mb-12"
				>
					<h3 className="text-sm font-semibold text-primary mb-4">
						{">>"} Why Choose US {"<<"}
					</h3>
					<h2 className="text-4xl font-bold mb-6">Why Choose Tilla Health?</h2>
					<p className="max-w-3xl mx-auto text-gray-600">
						Whether you&apos;re a federal employee, NGO worker, or a family
						supported by diaspora members, we ensure that you receive
						exceptional healthcare through the use of cutting-edge technologies
						like telemedicine and AI.
					</p>
				</motion.div>
				<div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
					{features.map((feature, index) => (
						<motion.div
							key={feature.title}
							initial={{ opacity: 0, y: 20 }}
							whileInView={{ opacity: 1, y: 0 }}
							viewport={{ once: true }}
							transition={{ delay: index * 0.2 }}
							className="text-center"
						>
							<div className="inline-flex items-center justify-center w-16 h-16 rounded-full border-2 border-[#CC1D48] mb-4">
								<Heart className="w-8 h-8 text-[#CC1D48]" />
							</div>
							<h3 className="text-xl font-semibold mb-4">{feature.title}</h3>
							<p className="text-gray-600">{feature.description}</p>
						</motion.div>
					))}
				</div>
			</div>
		</section>
	);
}
