"use client";

import { Button } from "@/components/ui/button";
import { ContentCard } from "@/components/ui/custom/contentCard";
import { IMAGES } from "@/constants/files";

const plans = [
	{
		name: "Basic Plan",
		services: [
			"Doctor's Consultation",
			"Hemogram",
			"Random blood sugar",
			"Urine analysis",
			"Stool Analysis",
		],
	},
	{
		name: "Standard Plan",
		services: [
			"Doctor's Consultation",
			"Hemogram",
			"Random blood sugar",
			"Urine analysis",
			"Stool Analysis",
			"HIV1&2(ELISA)",
			"Liver Function Test (LFT)",
			"Pap Smear",
			"Dental Review",
			"Nutrition Review",
			"Mammogram (Breast Ultrasound)",
		],
	},
	{
		name: "Comprehensive Plan",
		services: [
			"Doctor's Consultation",
			"Hemogram",
			"Random blood sugar",
			"Urine analysis",
			"Stool Analysis",
			"HIV1&2(ELISA)",
			"Liver Function Test (LFT)",
			"Pap Smear",
			"Dental Review",
			"Nutrition Review",
			"Mammogram (Breast Ultrasound)",
			"Electrodiogram (ECG)",
			"PSA",
			"LIPIDS Profile",
		],
	},
	{
		name: "Family Plan",
		services: [
			"Doctor's Consultation",
			"Hemogram",
			"Random blood sugar",
			"Urine analysis",
			"Stool Analysis",
			"HIV1&2(ELISA)",
			"Liver Function Test (LFT)",
			"Pap Smear",
			"Dental Review",
			"Nutrition Review",
			"Mammogram (Breast Ultrasound)",
			"Electrodiogram (ECG)",
			"PSA",
			"LIPIDS Profile",
			"Uric Acid",
			"Ultrasound Abdominal Pelvic",
			"Diabetic Screen (Glycated HB/HBA1C)",
		],
	},
];

export default function WellnessPage() {
	return (
		<div className="min-h-screen flex flex-col">
			{/* Header */}

			{/* Hero Section */}
			<section className="bg-primary text-white py-16">
				<div className="container mx-auto px-4 text-center mt-10">
					<h1 className="text-3xl md:text-4xl font-bold mb-8">
						TILLA HEALTH INSURANCE
						<br />
						WELLNESS CHECK-UP PACKAGE
					</h1>
					<p className="max-w-3xl mx-auto text-lg">
						At Tilla Health Insurance, we understand that health is not just
						about treating illnesses but also about preventing them. That&apos;s
						why we are proud to introduce our Wellness Check-up Packages,
						designed to help individuals and families stay proactive about their
						health. These packages cater to diverse health needs, ensuring
						comprehensive care for every stage of life.
					</p>
					<p className="max-w-3xl mx-auto mt-4 text-lg"></p>
				</div>
			</section>

			<ContentCard
				description="you gain access to
						personalized check-ups, detailed diagnostics, and expert
						consultations, all aimed at promoting better health outcomes.
						Whether you`'re looking for basic preventive care or a full
						suite of advanced diagnostics, we have the perfect plan for you and
						your loved ones."
				imageSrc={IMAGES.diasporaconnect1}
				imageAlt="Wellness Check-up Packages"
				title="With Tilla Health's Wellness Packages,"
				highlights={[]}
			/>

			{/* Comparison Table */}
			<section className="py-16 md:px-16">
				<div className="container mx-auto px-4">
					<h2 className="text-3xl font-bold text-center mb-12">
						Tilla Health Insurance Wellness Check-up Package
					</h2>
					<div className="overflow-x-auto">
						<table className="w-full border-collapse">
							<thead>
								<tr>
									{plans.map((plan) => (
										<th
											key={plan.name}
											className="bg-primary text-white p-4 text-left"
										>
											{plan.name}
										</th>
									))}
								</tr>
							</thead>
							<tbody>
								{Array.from({
									length: Math.max(...plans.map((p) => p.services.length)),
								}).map((_, index) => (
									<tr
										key={index}
										className={index % 2 === 0 ? "bg-background" : "bg-muted"}
									>
										{plans.map((plan) => (
											<td
												key={`${plan.name}-${index}`}
												className="p-4 border-b border-gray-200"
											>
												{plan.services[index] || ""}
											</td>
										))}
									</tr>
								))}
							</tbody>
						</table>
					</div>
					<div className="text-center mt-8">
						<Button
							className="bg-primary hover:bg-[#A00D24] text-white px-8 py-3 rounded"
							onClick={() => window.open("https://member.tillahealth.com/")}
						>
							GO TO MEMBER PORTAL
						</Button>
					</div>
				</div>
			</section>
		</div>
	);
}
