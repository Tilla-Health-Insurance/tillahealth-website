"use client";

import Image from "next/image";
import { notFound } from "next/navigation";

import { motion } from "framer-motion";
import { CheckCircle } from "lucide-react";

import PlanScreen from "@/components/screen/planScreen/planScreen";
import { Card, CardContent, CardTitle } from "@/components/ui/card";
import { IMAGES } from "@/constants/files";

// This would typically come from a database or CMS
type PlanKey =
	| "diaspora-health-connect"
	| "ngo-health-plan"
	| "family-individual-health-plan"
	| "private-sector-health-plan"
	| "federal-employee-program"
	| "international-plan";

interface Plan {
	title: string;
	description: string;
	whychoosetitle?: string;
	whychoose?: string[];
	whychoosedesc?: any;
	image: any;
	image2: any;
	quoteLnk: string;
}
const fadeIn = {
	initial: { opacity: 0, y: 20 },
	animate: { opacity: 1, y: 0 },
	transition: { duration: 0.5 },
};

const plans: Record<PlanKey, Plan> = {
	"diaspora-health-connect": {
		title: "DIASPORA HEALTH PLAN",
		description:
			"A health coverage solution designed for expatriates with family members in Ethiopia, providing access to quality healthcare services, preventive care, and emergency support for their loved ones back home",
		whychoosetitle: "Why Choose Diaspora Health Connect?",
		// whychoose: [
		// 	"At Diaspora Health Connect, we understand the concerns expatriates have about the well-being of their loved ones living in Ethiopia. Our Diaspora Health Plan is specifically crafted to provide peace of mind by ensuring family members, whether they are elderly parents, children, or spouses, have access to high-quality healthcare services in Ethiopia.",
		// 	"Our plan offers comprehensive coverage, connecting your loved ones to a wide network of healthcare providers across urban and rural areas in Ethiopia. From preventive care to emergency services, we are committed to keeping your family safe and healthy, no matter where you are. Whether you’re looking to secure the health of your children, spouse, or elderly parents, Diaspora Health Connect ensures that they receive the care they deserve.",
		// ],
		whychoosedesc: (
			<div className="container mx-auto pb-16">
				<div className="grid grid-cols-1 lg:grid-cols-[400px_1fr] gap-12">
					{/* Images Column */}
					<div className="space-y-6">
						<motion.div className="relative aspect-[4/3] overflow-hidden">
							<Image
								src={IMAGES.diasporaconnect2}
								alt="Healthcare professional"
								fill
								className="object-cover hover:scale-105 transition-transform duration-500"
							/>
						</motion.div>
						<motion.div className="relative aspect-[4/3] overflow-hidden ">
							<Image
								src={IMAGES.diasporaconnect1}
								alt="Medical facility"
								fill
								className="object-cover hover:scale-105 transition-transform duration-500"
							/>
						</motion.div>
					</div>

					{/* Content Column */}
					<div className="space-y-12">
						<motion.section {...fadeIn} className="space-y-8">
							<h1 className="text-xl font-bold tracking-tight lg:text-3xl xl:text-4xl">
								Our Diaspora Health Connect Plan
							</h1>

							<div className="prose prose-lg dark:prose-invert max-w-none space-y-6">
								<p className=" leading-relaxed">
									At{" "}
									<span className="text-primary font-semibold">
										Diaspora Health Connect
									</span>
									, we understand the deep concerns of expatriates about the
									well-being of their loved ones in Ethiopia. Our{" "}
									<span className="text-primary font-semibold">
										Diaspora Health Plan
									</span>{" "}
									provides ultimate peace of mind by guaranteeing access to
									high-quality healthcare for your loved ones—whether they are
									elderly parents, children, or spouses.
								</p>

								<div className="rounded-xl bg-muted/50 p-6 backdrop-blur">
									<h2 className="text-lg font-bold text-primary mb-4">
										Comprehensive Healthcare Coverage
									</h2>
									<p className="text-muted-foreground">
										Our plan is tailored to meet the diverse healthcare needs of
										families in Ethiopia, offering extensive coverage that spans
										a wide network of healthcare providers. Whether your loved
										ones are in bustling urban centers or more remote rural
										communities, our network ensures they can access essential
										services, from preventive care and chronic disease
										management to emergency services and specialist
										consultations.
									</p>
								</div>

								<div className="rounded-xl bg-muted/50 p-6 backdrop-blur">
									<h2 className="text-lg font-bold text-primary mb-4">
										Care for All Generations
									</h2>
									<p className="text-muted-foreground">
										Whether you’re looking to safeguard the health of your
										elderly parents, provide comprehensive care for your
										children, or support your spouse, Diaspora Health Connect
										ensures they receive the attention and medical expertise
										they need. We prioritize their well-being with solutions
										tailored to all stages of life, ensuring they remain safe
										and healthy.
									</p>
								</div>
							</div>
						</motion.section>
					</div>
				</div>
				<motion.div
					className="grid gap-6 mt-10"
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.5, delay: 0.2 }}
				>
					<div className="">
						<CardContent className="pt-6">
							<CardTitle className="text-lg font-bold text-primary mb-6">
								Features and Benefits
							</CardTitle>
							<div className="grid gap-4 sm:grid-cols-2">
								{[
									{
										title: "Preventive Care",
										description:
											"Regular check-ups, vaccinations, and screenings to keep your loved ones healthy and detect potential health issues early.",
									},
									{
										title: "Emergency and Urgent Care",
										description:
											"Quick access to quality healthcare services during critical times, ensuring timely interventions.",
									},
									{
										title: "Specialized Care",
										description:
											"Access to specialists for chronic disease management, maternity care, mental health support, and more.",
									},
									{
										title: "Telemedicine",
										description:
											"Virtual consultations with experienced healthcare providers, including diaspora-based professionals, for convenient and culturally competent care.",
									},
									{
										title: "Additional Medical Consultations",
										description:
											"Tilla Health ensures members can connect with diaspora healthcare professionals and doctors for second opinions and specialized consultations, offering a global perspective and expertise in their care.",
									},
									{
										title: "Nationwide Provider Network",
										description:
											"A robust network that connects patients to trusted hospitals, clinics, and medical professionals across Ethiopia, regardless of location.",
									},
									{
										title: "Peace of Mind",
										description:
											"Knowing your family has reliable healthcare coverage lets you focus on your life abroad with confidence and ease.",
									},
								].map((item, index) => (
									<Card
										key={index}
										className="border-none bg-white shadow-md p-4"
									>
										<div className="flex items-start gap-3">
											<CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-1" />
											<div>
												<p className="font-semibold">{item.title}</p>
												<p className="text-sm text-muted-foreground">
													{item.description}
												</p>
											</div>
										</div>
									</Card>
								))}
							</div>
						</CardContent>
					</div>

					<div className="">
						<CardContent className="pt-6">
							<CardTitle className="text-lg font-bold text-primary mb-6">
								Why Choose Us?
							</CardTitle>
							<div className="grid gap-4 sm:grid-cols-2">
								{[
									{
										title: "Commitment to Excellence",
										description:
											"Our plans are designed to deliver superior healthcare outcomes for your family.",
									},
									{
										title: "Tailored Solutions",
										description:
											"We recognize that every family is unique, and our plans reflect the personalized care your loved ones deserve.",
									},
									{
										title: "Diaspora-Driven Innovation",
										description:
											"By leveraging the expertise of Ethiopian medical professionals in the diaspora, we ensure the highest quality of care and global best practices.",
									},
									{
										title: "Reliable Support",
										description:
											"From enrollment to care coordination, our dedicated team is with you every step of the way.",
									},
								].map((item, index) => (
									<Card
										key={index}
										className="border-none bg-white shadow-md p-4"
									>
										<div className="flex items-start gap-3">
											<CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-1" />
											<div>
												<p className="font-semibold">{item.title}</p>
												<p className="text-sm text-muted-foreground">
													{item.description}
												</p>
											</div>
										</div>
									</Card>
								))}
							</div>
						</CardContent>
					</div>
				</motion.div>
				<motion.footer
					className="rounded-xl  p-6 text-center space-y-4 backdrop-blur mt-10"
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					transition={{ duration: 0.5, delay: 0.4 }}
				>
					<p className="font-bold text-2xl text-primary">
						Your Family&apos;s Health, Our Priority
					</p>
					<p className="text-muted-foreground">
						Diaspora Health Connect bridges the gap between loved ones at home
						and their families abroad. Choose our plans to invest in their
						health and strengthen your family bonds.
					</p>
				</motion.footer>
			</div>
		),
		image: IMAGES.diasporahero2,
		image2: IMAGES.diaspora,
		quoteLnk: "/plan/details/our-health-insurance-plan-diaspora",
	},
	"ngo-health-plan": {
		title: "NGO Health Plan",
		description:
			"Specialized health coverage for NGO workers, offering remote healthcare access, emergency services, and preventive health programs for those working in remote or high-risk areas.",
		whychoosetitle: "Why Choose a Health Insurance Plan Specifically for NGOs?",
		whychoose: [
			"At Tilla Health Insurance, we have a dedicated health plan specifically designed for the unique challenges faced by NGO workers. Our approach and services are aligned with the special needs of those working in the humanitarian sector, where emergency situations, remote environments, and unpredictable challenges are part of everyday life. To support NGO workers, we have built a network of doctors and hospitals across both urban and remote regions in Ethiopia, ensuring access to care wherever it’s needed most.",
			"Our solutions are designed to give NGO staff members peace of mind and confidence that their health and well-being are supported wherever they are living and working.",
		],
		image: IMAGES.ngohero,
		image2: IMAGES.ngo,
		quoteLnk: "/plan/details/our-health-insurance-plan-ngo",
	},
	"family-individual-health-plan": {
		title: "Family and Individual Health Plan",
		description:
			"At Tilla Health Insurance, we understand that families and individuals have unique healthcare needs. That’s why we’ve designed health insurance plans that offer comprehensive, flexible coverage tailored to your lifestyle. Whether you are seeking coverage for yourself or your entire family, our plans are structured to ensure you get the best care, wherever you are. With a variety of coverage options, our plans offer peace of mind, knowing that you and your loved ones have access to quality healthcare.",
		whychoosetitle: "Our Health Insurance Plan",
		whychoose: [
			"Our Family and Individual Health Plans provide customized coverage designed to meet a range of healthcare needs, from preventive services to specialized treatments. We offer three key tiers to ensure there is a plan that fits your budget and health priorities:",
			"Basic Plan: Ideal for individuals seeking essential healthcare services, including preventive care and primary care.",
			"Standard Plan: Designed for individuals and families who need broader coverage, including specialist visits, diagnostic tests, and more.",
			"Comprehensive Plan: A top-tier plan offering full coverage for families, with access to a wide range of services, including hospitalization, chronic disease management, and specialized care.",
			"At Diaspora Health Connect, we understand the concerns expatriates have about the well-being of their loved ones living in Ethiopia.",
		],
		image: IMAGES.familyhero,
		image2: IMAGES.family,
		quoteLnk: "/plan/details/our-health-insurance-plan-fam",
	},
	"private-sector-health-plan": {
		title: "Private Sector Health Plan",
		description:
			"At Tilla Health Insurance, we recognize the importance of keeping your workforce healthy, productive, and engaged. Our Private Sector Health Plans are tailored to meet the diverse healthcare needs of businesses, offering comprehensive coverage for employees and their families. Whether you’re managing a small business or a large corporation, Tilla Health provides flexible and affordable health insurance solutions designed to support your organization’s goals.With a wide range of plans and access to an extensive provider network, Tilla Health ensures that your employees receive quality healthcare when they need it most.",
		whychoosetitle: "Why Choose Tilla Health?",
		whychoose: [
			"Customized Plans: Tailored health insurance solutions for organizations of all sizes, from startups to multinational corporations.",
			"Affordable Pricing: Flexible pricing options that fit your budget without compromising on quality.",
			"Extensive Provider Network: Access to trusted healthcare providers, including hospitals, clinics, and specialists.",
			"Digital Tools and Resources: Simplify plan management with our user-friendly digital platform for claims, enrollment, and employee engagement.",
			"Employee Satisfaction: Boost morale and productivity by offering comprehensive health benefits that prioritize employee well-being.",
			"Preventive Care Focus: Encourage healthier lifestyles with coverage for routine check-ups, vaccinations, and wellness programs.",
			"At Diaspora Health Connect, we understand the concerns expatriates have about the well-being of their loved ones living in Ethiopia. Our Diaspora Health Plan is specifically crafted to provide peace of mind by ensuring family members, whether they are elderly parents, children, or spouses, have access to high-quality healthcare services in Ethiopia.",
		],
		image: IMAGES.privateHero,
		image2: IMAGES.privateSector,
		quoteLnk: "/plan/details/our-health-insurance-plan-pri",
	},
	"federal-employee-program": {
		title: "Federal Employee Program (FEP)",
		description:
			"At Tilla Health Insurance, we understand the critical role federal employees play in supporting national goals and delivering essential services. That’s why we’ve developed the Federal Employee Program (FEP) Health Plan—a comprehensive and flexible insurance plan designed to meet the unique healthcare needs of federal employees and their families. Our plans prioritize access to quality healthcare, affordability, and peace of mind, ensuring that those who serve their nation can focus on their responsibilities with confidence.",
		whychoosetitle: "Why Choose the FEP Health Plan?",
		whychoose: [
			"Customized Plans: Tailored health insurance solutions for organizations of all sizes, from startups to multinational corporations.",
			"Affordable Pricing: Flexible pricing options that fit your budget without compromising on quality.",
			"Extensive Provider Network: Access to trusted healthcare providers, including hospitals, clinics, and specialists.",
			"Digital Tools and Resources: Simplify plan management with our user-friendly digital platform for claims, enrollment, and employee engagement.",
			"Employee Satisfaction: Boost morale and productivity by offering comprehensive health benefits that prioritize employee well-being.",
			"Preventive Care Focus: Encourage healthier lifestyles with coverage for routine check-ups, vaccinations, and wellness programs.",
			"At Diaspora Health Connect, we understand the concerns expatriates have about the well-being of their loved ones living in Ethiopia. Our Diaspora Health Plan is specifically crafted to provide peace of mind by ensuring family members, whether they are elderly parents, children, or spouses, have access to high-quality healthcare services in Ethiopia.",
		],
		image: IMAGES.feredalHero,
		image2: IMAGES.federal,
		quoteLnk: "/plan/details/our-health-insurance-plan-fep",
	},
	"international-plan": {
		title: "International Plan",
		description:
			"Exclusively Designed for the International Community Living and Working in Ethiopia Tilla Health Insurance is proud to introduce our International Plan, specially tailored to meet the needs of expatriates, diplomats, international business professionals, and their families living in Ethiopia. This comprehensive plan offers peace of mind by ensuring seamless access to healthcare that meets global standards, all while providing local support in Ethiopia. Our International Plan is designed to offer unmatched flexibility and coverage to international clients, ensuring they receive the highest quality healthcare, both locally and internationally, when needed.",
		whychoosetitle: "Why Choose the International Plan?",
		whychoose: [
			"Customized Plans: Tailored health insurance solutions for organizations of all sizes, from startups to multinational corporations.",
			"Affordable Pricing: Flexible pricing options that fit your budget without compromising on quality.",
			"Extensive Provider Network: Access to trusted healthcare providers, including hospitals, clinics, and specialists.",
			"Digital Tools and Resources: Simplify plan management with our user-friendly digital platform for claims, enrollment, and employee engagement.",
			"Employee Satisfaction: Boost morale and productivity by offering comprehensive health benefits that prioritize employee well-being.",
			"Preventive Care Focus: Encourage healthier lifestyles with coverage for routine check-ups, vaccinations, and wellness programs.",
			"At Diaspora Health Connect, we understand the concerns expatriates have about the well-being of their loved ones living in Ethiopia. Our Diaspora Health Plan is specifically crafted to provide peace of mind by ensuring family members, whether they are elderly parents, children, or spouses, have access to high-quality healthcare services in Ethiopia.",
		],
		image: IMAGES.interHero,
		image2: IMAGES.diasporahero,
		quoteLnk: "/plan/details/our-health-insurance-plan-int",
	},
};
export default function PlanPage({ params }: { params: { plan: PlanKey } }) {
	const plan = plans[params.plan];

	if (!plan) {
		notFound();
	}

	return (
		<div>
			<PlanScreen plan={plan} />
		</div>
	);
}
