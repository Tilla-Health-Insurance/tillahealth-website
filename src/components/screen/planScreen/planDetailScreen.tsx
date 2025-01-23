"use client";

import { useRouter } from "next/navigation";

import PlanTable from "@/components/module/PlanTable";
import { ServicesSection } from "@/components/module/Services";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

import HealthConnectSection from "../../module/HealthConnect";

interface Plan {
	title: string;
	desc: string;
	defaultValue?: any;
	services?: ServiceItem[];
	healthConnectData?: HealthConnectData;
	plantype?: string;
}
interface PlanProps {
	details: Plan;
}
interface ServiceItem {
	icon: any;
	title: string;
	description: string;
	href: string;
}
export interface PlanTier {
	name: string;
	description: string;
}

export interface CoverageDetails {
	intro: string;
}

export interface Description {
	intro: string[];
	planTiers?: PlanTier[];
}
interface HealthConnectData {
	title: string;
	subtitle: string;
	coverageDetails: CoverageDetails;
	description: Description;
}

const orgplans = [
	{
		planTier: "Basic Plan",
		primaryCare: "Routine check-ups",
		specialtyCare: "Limited access",
		emergencyCare: "Emergency visits only",
		hospitalization: "Partial coverage for hospital stays",
		chronicDiseaseManagement: "Not covered",
		mentalHealthServices: "Not covered",
		telehealthServices: "Not included",
		additionalCoverage: "None",
	},
	{
		planTier: "Standard Plan",
		primaryCare: "All Basic services",
		specialtyCare: "Access to specialists for common needs",
		emergencyCare: "Emergency and urgent care visits",
		hospitalization: "Full coverage for planned hospitalizations",
		chronicDiseaseManagement: "Basic coverage for chronic conditions",
		mentalHealthServices: "Basic counseling services",
		telehealthServices: "Telemedicine consultations",
		additionalCoverage: "Care coordination for treatments",
	},
	{
		planTier: "Comprehensive Plan",
		primaryCare: "All Standard services",
		specialtyCare: "Full access to specialists",
		emergencyCare: "Full emergency and urgent care",
		hospitalization: "Full coverage for planned and emergency hospitalizations",
		chronicDiseaseManagement: "Comprehensive chronic management",
		mentalHealthServices: "Comprehensive mental health services",
		telehealthServices: "Full telemedicine access",
		additionalCoverage: "Second opinions, international care options",
	},
];
// planData.js
export const planData = [
	{
		planTier: "Basic Plan",
		primaryCare: "Routine check-ups, vaccinations, preventive care",
		specialtyCare: "Limited access to specialists",
		emergencyCare: "Emergency visits only",
		hospitalization: "Partial coverage for hospital stays",
		chronicDiseaseManagement: "Not covered",
		maternityCare: "Not covered",
		mentalHealthServices: "Not covered",
		telehealthServices: "Not included",
		additionalCoverage: "None",
	},
	{
		planTier: "Standard Plan",
		primaryCare: "All Basic Plan services + access to general practitioners",
		specialtyCare: "Access to specialists for common conditions",
		emergencyCare: "Emergency and urgent care visits",
		hospitalization: "Full coverage for planned hospitalizations",
		chronicDiseaseManagement: "Basic coverage for common chronic conditions",
		maternityCare: "Partial coverage for prenatal care and delivery",
		mentalHealthServices: "Basic counseling services",
		telehealthServices: "Telemedicine consultations for general health issues",
		additionalCoverage: "Care coordination for managing treatments",
	},
	{
		planTier: "Comprehensive Plan",
		primaryCare: "All Standard Plan services + comprehensive diagnostics",
		specialtyCare: "Full access to a wide range of specialists",
		emergencyCare:
			"Full coverage for emergency, urgent care, and ambulance services",
		hospitalization:
			"Full coverage for both planned and emergency hospitalizations",
		chronicDiseaseManagement:
			"Comprehensive management for all chronic conditions",
		maternityCare: "Full coverage for prenatal, delivery, and postnatal care",
		mentalHealthServices: "Comprehensive mental health services",
		telehealthServices:
			"Full telemedicine access for general and specialty consultations",
		additionalCoverage: "Second opinion services, international care options",
	},
	{
		planTier: "Family Plan",
		primaryCare: "Comprehensive care for all family members",
		specialtyCare: "Full access to specialists for all family members",
		emergencyCare: "Comprehensive coverage for emergency and urgent care",
		hospitalization: "Full hospitalization coverage for all family members",
		chronicDiseaseManagement:
			"Comprehensive management for all chronic conditions",
		maternityCare: "Full maternity and newborn care coverage",
		mentalHealthServices: "Mental health services for all family members",
		telehealthServices: "Telehealth services for the whole family",
		additionalCoverage: "Full care coordination and international care",
	},
];

export default function PlanDetailScreen({ details }: PlanProps) {
	const router = useRouter();
	let tableData: any;

	tableData = planData;

	return (
		<div className="min-h-screen flex flex-col">
			<main>
				<section className="bg-primary text-white flex flex-col md:flex-row items-center justify-center h-[20rem]">
					{/* <HeroHighlight className="flex flex-col md:flex-row items-center justify-center h-[30rem]"> */}
					<div className="container text-center  ">
						<h1 className="text-4xl md:text-6xl font-bold mb-12">
							{details.title}
						</h1>
					</div>
					{/* </HeroHighlight> */}
				</section>
				<section className="py-16 ">
					<Tabs defaultValue={details?.defaultValue} className="">
						<div className=" text-center">
							<TabsList className="h-auto  flex-col md:flex-row gap-2 bg-muted p-4 rounded-lg">
								<TabsTrigger
									value="insurance"
									className="w-full md:w-auto px-8 py-4 text-sm font-semibold rounded-lg  transition-all  data-[state=active]:bg-white data-[state=active]:text-primary data-[state=active]:border-b-primary data-[state=active]:border-2"
								>
									OUR HEALTH INSURANCE PLAN
								</TabsTrigger>
								<TabsTrigger
									value="different"
									className="w-full md:w-auto px-8 py-4 text-sm font-semibold rounded-lg  transition-all  data-[state=active]:bg-white data-[state=active]:text-primary data-[state=active]:border-b-primary data-[state=active]:border-2"
								>
									WHAT MAKES US DIFFERENT
								</TabsTrigger>
								<TabsTrigger
									value="member"
									className="w-full md:w-auto px-8 py-4 text-sm font-semibold rounded-lg  transition-all  data-[state=active]:bg-white data-[state=active]:text-primary data-[state=active]:border-b-primary data-[state=active]:border-2"
								>
									BECOME A MEMBER
								</TabsTrigger>
							</TabsList>
						</div>
						<TabsContent value="insurance" className="mt-6 md:p-6">
							<Card className="shadow-lg bg-muted ">
								<HealthConnectSection
									healthConnectData={details.healthConnectData}
								/>
								<section className="py-16 bg-gray-50">
									<div className="container text-center">
										<h2 className="text-3xl font-bold mb-8">Benefits</h2>
										<p className="text-gray-600 mb-8">
											See your benefit listed together in one space. See Benefit
											at a glance Brochure
										</p>
										<div className="flex flex-col md:flex-row justify-center gap-4">
											<Button
												variant="default"
												size="lg"
												onClick={() =>
													router.push("/plan/details/diaspora-benefits" as any)
												}
												className="hover:bg-primary"
											>
												BENEFIT AT A GLANCE
											</Button>
											<Button
												variant="default"
												size="lg"
												onClick={() => router.push("/plan/wellness" as any)}
												className="hover:bg-primary"
											>
												WELLNESS CHECKUP PACKAGE
											</Button>
										</div>
									</div>
								</section>
							</Card>
						</TabsContent>
						<TabsContent value="different" className="mt-6 p-6">
							<Card className="shadow-lg bg-muted">
								<ServicesSection
									services={details.services}
									title="What Makes Us different?"
									description=""
									haveReadMore={false}
								/>
							</Card>
						</TabsContent>
						<TabsContent value="member" className="mt-6 p-6">
							<Card className="bg-muted p-20 rounded-lg shadow-sm text-center items-center">
								<h3 className="text-2xl font-bold mb-4">Become a Member</h3>
								<p className="text-muted-foreground">
									Join our healthcare community today. Simple enrollment
									process, flexible payment options, and immediate access to our
									comprehensive network of healthcare providers.
								</p>
								<div className="flex justify-center mt-8">
									<Button
										variant="default"
										size="lg"
										className="bg-primary hover:bg-primary text-center px-6 py-3 text-sm md:text-base rounded-md transition-all duration-300"
										onClick={() =>
											router.push("https://register.tillahealth.com/" as any)
										}
									>
										GO TO MEMBER REGISTRATION
									</Button>
								</div>
							</Card>
						</TabsContent>
					</Tabs>
				</section>

				<PlanTable table={tableData} />
				{/* Contact Button */}
			</main>
		</div>
	);
}
