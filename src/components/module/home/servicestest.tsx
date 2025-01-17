"use client";

import Image from "next/image";
import { useState } from "react";

import { motion } from "framer-motion";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { IMAGES } from "@/constants/files";

// Adjust the path based on your project structure
const healthPlansData = [
	{
		title: "Diaspora Health Connect",
		description:
			"A dedicated healthcare plan for Ethiopian diaspora members who wish to support their families back home. This plan offers full coverage for children, spouses, and elderly parents, with access to preventive care, chronic disease management, and telemedicine services.",
		eligibility: (
			<>
				<ul className="list-disc list-inside ml-5">
					<li>
						Main members and dependents are eligible from birth (for term babies
						of 38 weeks) up to 64 years of age. <br />
					</li>
					<li>
						Includes maternity benefits and last expense coverage.
						<br />
					</li>
					<li>
						No health check-up required for enrollment. <br />
					</li>
					<li>
						Minimal waiting periods for benefits.
						<br />
					</li>
				</ul>
			</>
		),
		features: (
			<>
				<ul className="list-disc list-inside ml-5">
					<li>
						Designed for the Ethiopian diaspora community.
						<br />
					</li>
					<li>
						Seamless coverage for family health needs. <br />
					</li>
					<li>Easy access to health services while abroad or in Ethiopia.</li>
				</ul>
			</>
		),
		image: IMAGES.diaspora, // Update to your actual image path
	},
	{
		title: "Family Health Plan",
		description:
			"Comprehensive health coverage for families, including children, spouses, and elderly parents. Options include preventive care, maternity services, pediatric and geriatric care, as well as chronic disease management.",
		eligibility: (
			<>
				<ul className="list-disc list-inside ml-5">
					<li>
						Main members and dependents are eligible from birth (for term babies
						of 38 weeks) up to 64 years of age.
						<br />
					</li>
				</ul>
			</>
		),
		features: (
			<>
				<ul className="list-disc list-inside ml-5">
					<li>
						Comprehensive annual check-ups for the entire family.
						<br />
					</li>
					<li>
						Inpatient and outpatient services tailored to family health needs.
						<br />
					</li>
					<li>Pediatric care and immunizations for dependents.</li>
					<li>
						24/7 telemedicine consultations to address family health concerns
						anytime.
						<br />
					</li>
				</ul>
			</>
		),
		image: IMAGES.family, // Update to your actual image path
	},
	{
		title: "Individual Health Plan",
		description:
			"Flexible healthcare coverage for individuals seeking personal healthcare solutions. Includes options for primary care, specialized treatment, mental health support, and chronic disease management.",
		eligibility: (
			<>
				<ul className="list-disc list-inside ml-5">
					<li>
						Members aged 18 to 60 years. Eligibility can be extended to 65 years
						for existing members.
						<br />
					</li>
				</ul>
			</>
		),
		features: (
			<>
				<ul className="list-disc list-inside ml-5">
					<li>
						Annual check-ups to promote preventive health.
						<br />
					</li>
					<li>
						Comprehensive inpatient and outpatient coverage. <br />
					</li>
					<li>Immunizations and pediatric visits for dependents.</li>
					<li>24/7 telemedicine consultations for immediate access to care.</li>
				</ul>
			</>
		),
		image: IMAGES.individual, // Update to your actual image path
	},
	{
		title: "International Health Plan",
		description:
			"Flexible healthcare coverage for individuals seeking personal healthcare solutions. Includes options for primary care, specialized treatment, mental health support, and chronic disease management.",
		eligibility: (
			<>
				<ul className="list-disc list-inside ml-5">
					<li>
						Main members and dependents are eligible from birth (for term babies
						of 38 weeks) up to 64 years of age.
						<br />
					</li>
				</ul>
			</>
		),
		features: (
			<>
				<ul className="list-disc list-inside ml-5">
					<li>
						Access to a vast network of hospitals and expert physicians across
						183 countries, including Africa, India, the Middle East, Europe,
						Asia, and South America.
						<br />
					</li>
				</ul>
			</>
		),
		image: IMAGES.internationalGlob, // Update to your actual image path
	},
	{
		title: "NGO Health Plan",
		description:
			"Specialized health coverage for NGO workers, offering remote healthcare access, emergency services, and preventive health programs for those working in remote or high-risk areas.",
		eligibility: (
			<>
				<ul className="list-disc list-inside ml-5">
					<li>
						Main members and dependents are eligible from birth (for term babies
						of 38 weeks) up to 64 years of age.
						<br />
					</li>
				</ul>
			</>
		),
		features: (
			<>
				<ul className="list-disc list-inside ml-5">
					<li>
						Customizable plans for NGO employees and their dependents.
						<br />
					</li>
					<li>
						Focus on preventive care and wellness programs. <br />
					</li>
					<li>Access to specialized healthcare providers.</li>
				</ul>
			</>
		),
		image: IMAGES.ngo, // Update to your actual image path
	},
	{
		title: "Private Sector Health Plan",
		description:
			"Custom health plans designed for employees of private companies. This plan focuses on workplace wellness programs, mental health support, chronic disease management, and access to both remote and urban healthcare.",
		eligibility: (
			<>
				<ul className="list-disc list-inside ml-5">
					<li>
						Main members and dependents are eligible from birth (for term babies
						of 38 weeks) up to 64 years of age.
						<br />
					</li>
				</ul>
			</>
		),
		features: (
			<>
				<ul className="list-disc list-inside ml-5">
					<li>
						Tailored to private sector employees and their families.
						<br />
					</li>
					<li>
						Access to a wide network of healthcare providers.
						<br />
					</li>
					<li>Preventive care and regular health monitoring.</li>
				</ul>
			</>
		),
		image: IMAGES.privateSector, // Update to your actual image path
	},
	{
		title: "Federal Employee Program (FEP)",
		description:
			"Tailored healthcare plans for federal government employees, providing comprehensive preventive care, chronic disease management, mental health services, and workplace wellness programs.",
		eligibility: (
			<>
				<ul className="list-disc list-inside ml-5">
					<li>
						Main members and dependents are eligible from birth (for term babies
						of 38 weeks) up to 64 years of age.
						<br />
					</li>
				</ul>
			</>
		),
		features: (
			<>
				<ul className="list-disc list-inside ml-5">
					<li>
						Comprehensive coverage designed for federal employees and their
						families.
						<br />
					</li>
					<li>
						Includes preventive care, inpatient and outpatient services. <br />
					</li>
					<li>Seamless access to a wide range of healthcare providers.</li>
				</ul>
			</>
		),
		image: IMAGES.federal, // Update to your actual image path
	},
];
export default function HealthPlans() {
	const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

	const handleCardClick = (index: number) => {
		setExpandedIndex(expandedIndex === index ? null : index);
	};

	return (
		<div className="py-20 relative">
			<motion.div
				initial={{ opacity: 0, y: 20 }}
				whileInView={{ opacity: 1, y: 0 }}
				viewport={{ once: true }}
				className="text-center mb-12"
			>
				<h2 className="text-4xl font-bold mb-6">Tilla Health Services</h2>
				<p className="max-w-3xl mx-auto text-gray-600">
					Tilla Health offers a comprehensive range of healthcare plans to cater
					to various sectors and needs. Our services are designed to provide
					flexible, affordable, and accessible healthcare to everyone from
					federal employees to individuals and families.
				</p>
			</motion.div>
			<div className="grid gap-6 md:grid-cols-2 max-w-7xl mx-auto p-6">
				{healthPlansData.map((plan, index) => (
					<Card className="hover:shadow-lg  border-4" key={index}>
						<CardHeader className="space-y-4">
							<motion.div initial={{ scale: 1 }} whileHover={{ scale: 1.1 }}>
								<div className="w-12 h-12 flex items-center justify-center">
									<Image
										src={plan.image as any}
										alt={plan.title}
										className="w-8 h-8"
									/>
									{/* Replace icon with image */}
								</div>
							</motion.div>
							<CardTitle className="text-xl font-bold">{plan.title}</CardTitle>
						</CardHeader>
						<CardContent className="space-y-4">
							<p className="text-gray-600">{plan.description}</p>
							<div className="space-y-4">
								<Button
									variant="ghost"
									className="w-full flex items-center justify-between text-primary border-2"
									onClick={() => handleCardClick(index)}
								>
									Read More
									<span className="ml-2">
										{expandedIndex === index ? "−" : "+"}
									</span>
								</Button>
								{expandedIndex === index && (
									<div className="space-y-4 pt-4">
										<div>
											<h3 className="font-semibold mb-2">Eligibility:</h3>
											<p className="text-gray-600">{plan.eligibility}</p>
										</div>
										<div>
											<h3 className="font-semibold mb-2">Key Features:</h3>
											<p className="text-gray-600">{plan.features}</p>
										</div>
									</div>
								)}
							</div>
						</CardContent>
					</Card>
				))}
			</div>
		</div>
	);
}
