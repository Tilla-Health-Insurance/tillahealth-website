"use client";

import { useState } from "react";

import { Mail, Map, Phone, Search } from "lucide-react";

import {
	Accordion,
	AccordionContent,
	AccordionItem,
	AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const faqData = {
	coverage: [
		{
			question: "What does my health insurance plan cover?",
			answer:
				"Our health insurance plans typically cover preventive care, doctor visits, hospital stays, prescription drugs, and emergency services. Preventive services like annual check-ups, vaccinations, and screenings are often covered at 100%. Specific coverage details vary by plan type and level.",
		},
		{
			question: "Do you cover pre-existing conditions?",
			answer:
				"Yes, under current healthcare laws, we cover pre-existing conditions. You cannot be denied coverage or charged more based on your health history. All our plans provide coverage regardless of any pre-existing medical conditions.",
		},
		{
			question: "How do I find out if my doctor is in-network?",
			answer:
				"You can check if your doctor is in-network by using our provider directory on our website, mobile app, or by calling our member services. We recommend verifying your doctor's network status before each visit as networks can change.",
		},
	],
	costs: [
		{
			question: "What's the difference between copays and coinsurance?",
			answer:
				"A copay is a fixed amount you pay for a service (e.g., $25 for a doctor visit). Coinsurance is a percentage of the cost you pay after meeting your deductible (e.g., 20% of the service cost). Both are forms of cost-sharing between you and the insurance plan.",
		},
		{
			question: "How does my deductible work?",
			answer:
				"Your deductible is the amount you pay for covered health services before your insurance begins to pay. For example, with a $1,000 deductible, you pay the first $1,000 of covered services. After that, you only pay copays or coinsurance, and your insurance covers the rest.",
		},
		{
			question: "What is an out-of-pocket maximum?",
			answer:
				"The out-of-pocket maximum is the most you have to pay for covered services in a plan year. After you reach this amount, the insurance plan pays 100% of covered services. This provides financial protection against high medical costs.",
		},
	],
	prescriptions: [
		{
			question: "How do I find out if my prescription is covered?",
			answer:
				"You can check our formulary (drug list) on our website or member portal. The formulary shows which drugs are covered and their tier level, which determines your cost. You can also call our pharmacy services for assistance.",
		},
		{
			question: "Can I get my prescriptions delivered?",
			answer:
				"Yes, we offer mail-order pharmacy services for maintenance medications. You can typically get a 90-day supply delivered to your home, often at a lower cost than monthly refills at retail pharmacies.",
		},
	],
	claims: [
		{
			question: "How do I submit a claim?",
			answer:
				"Most in-network providers submit claims directly to us. If you need to submit a claim, you can do so through our member portal, mobile app, or by mail. Include your itemized bill and completed claim form. We process most claims within 30 days.",
		},
		{
			question: "What if my claim is denied?",
			answer:
				"If your claim is denied, you'll receive an explanation of benefits (EOB) explaining why. You have the right to appeal the decision. Contact our member services for help understanding the denial and guidance on the appeals process.",
		},
	],
};

export default function FAQPage() {
	const [searchQuery, setSearchQuery] = useState("");

	const filterQuestions = (
		questions: (typeof faqData)[keyof typeof faqData]
	) => {
		return questions.filter(
			(item) =>
				item.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
				item.answer.toLowerCase().includes(searchQuery.toLowerCase())
		);
	};

	return (
		<div className="min-h-screen py-12">
			<div className="container mx-auto px-4 max-w-4xl">
				<div className="text-center mb-12">
					<h1 className="text-4xl font-bold  mb-4">
						TillaHealth Insurance FAQ
					</h1>
					<p className="text-lg text-slate-600 mb-8">
						Find answers to common questions about your health insurance
						coverage and benefits
					</p>

					<div className="relative max-w-xl mx-auto">
						<Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400 h-5 w-5" />
						<Input
							type="search"
							placeholder="Search frequently asked questions..."
							className="pl-10"
							value={searchQuery}
							onChange={(e) => setSearchQuery(e.target.value)}
						/>
					</div>
				</div>

				<div className="space-y-8">
					{/* Coverage Questions */}
					<section>
						<h2 className="text-2xl font-semibold  mb-4">
							Coverage & Benefits
						</h2>
						<Accordion
							type="single"
							collapsible
							className="bg-card rounded-lg shadow"
						>
							{filterQuestions(faqData.coverage).map((item, index) => (
								<AccordionItem key={index} value={`coverage-${index}`}>
									<AccordionTrigger className="px-4 hover:no-underline">
										{item.question}
									</AccordionTrigger>
									<AccordionContent className="px-4 text-slate-600">
										{item.answer}
									</AccordionContent>
								</AccordionItem>
							))}
						</Accordion>
					</section>

					{/* Costs & Payments */}
					<section>
						<h2 className="text-2xl font-semibold  mb-4">Costs & Payments</h2>
						<Accordion
							type="single"
							collapsible
							className="bg-card rounded-lg shadow"
						>
							{filterQuestions(faqData.costs).map((item, index) => (
								<AccordionItem key={index} value={`costs-${index}`}>
									<AccordionTrigger className="px-4 hover:no-underline">
										{item.question}
									</AccordionTrigger>
									<AccordionContent className="px-4 text-slate-600">
										{item.answer}
									</AccordionContent>
								</AccordionItem>
							))}
						</Accordion>
					</section>

					{/* Prescriptions */}
					<section>
						<h2 className="text-2xl font-semibold  mb-4">
							Prescription Coverage
						</h2>
						<Accordion
							type="single"
							collapsible
							className="bg-card rounded-lg shadow"
						>
							{filterQuestions(faqData.prescriptions).map((item, index) => (
								<AccordionItem key={index} value={`prescriptions-${index}`}>
									<AccordionTrigger className="px-4 hover:no-underline">
										{item.question}
									</AccordionTrigger>
									<AccordionContent className="px-4 text-slate-600">
										{item.answer}
									</AccordionContent>
								</AccordionItem>
							))}
						</Accordion>
					</section>

					{/* Claims */}
					<section>
						<h2 className="text-2xl font-semibold  mb-4">
							Claims & Reimbursement
						</h2>
						<Accordion
							type="single"
							collapsible
							className="bg-card rounded-lg shadow"
						>
							{filterQuestions(faqData.claims).map((item, index) => (
								<AccordionItem key={index} value={`claims-${index}`}>
									<AccordionTrigger className="px-4 hover:no-underline">
										{item.question}
									</AccordionTrigger>
									<AccordionContent className="px-4 text-slate-600">
										{item.answer}
									</AccordionContent>
								</AccordionItem>
							))}
						</Accordion>
					</section>
				</div>

				{/* Contact Section */}
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
		</div>
	);
}
