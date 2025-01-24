"use client";

import { notFound } from "next/navigation";

import {
	CheckCircle,
	Clipboard,
	Globe,
	Heart,
	Network,
	PhoneCall,
	Shield,
	Users,
} from "lucide-react";

import BenefitsPage from "@/components/screen/planScreen/benefitScreen";
import PlanDetailScreen from "@/components/screen/planScreen/planDetailScreen";

type DetailKey =
	| "our-health-insurance-plan-diaspora"
	| "what-makes-us-different-diaspora"
	| "become-a-member"
	| "diaspora-benefits"
	| "our-health-insurance-plan-ngo"
	| "our-health-insurance-plan-fam"
	| "our-health-insurance-plan-pri"
	| "our-health-insurance-plan-fep"
	| "our-health-insurance-plan-int";

interface Detail {
	title: string;
	desc: string;
	defaultValue?: any;
	services?: ServiceItem[];
	healthConnectData?: HealthConnectData;
	sections?: Sections[];
	plantype?: string;
}
interface Sections {
	title: string;
	items: Item[];
}
interface Item {
	title?: string;
	sub: string[];
	desc?: string;
}
interface ServiceItem {
	icon: any;
	title: string;
	description: string;
	href: string;
}
interface PlanTier {
	name: string;
	description: string;
}

interface CoverageDetails {
	intro: string;
}

interface Description {
	intro: string[];
	planTiers?: PlanTier[];
}
interface HealthConnectData {
	title: string;
	subtitle: string;
	coverageDetails: CoverageDetails;
	description: Description;
}
const details: Record<DetailKey, Detail> = {
	"our-health-insurance-plan-diaspora": {
		title: "HEALTH CARE SOLUTION FOR DIASPORAS",
		plantype: "diaspora",
		defaultValue: "insurance",
		desc: "cvc",
		services: [
			{
				title: "Our Services for Families",
				description:
					"At Diaspora Health Connect, we go beyond basic healthcare to ensure the health and well-being of your loved ones in Ethiopia. Our services are designed to provide not only medical care but also comprehensive support that optimizes their well-being, whether they are facing health challenges or maintaining a healthy lifestyle. We believe in proactive care, ensuring your family members remain healthy and supported, no matter the circumstances.",
				icon: Users,
				href: "#",
			},
			{
				title: "Local Support in Remote Regions",
				description:
					"With Diaspora Health Connect, your family members have access to an extensive network of healthcare providers throughout Ethiopia, covering both urban centers and rural, hard-to-reach regions. Our local case managers and healthcare coordinators offer personalized, hands-on assistance in Ethiopia, ensuring that care is delivered swiftly and effectively in the places it's needed most. Whether it's routine check-ups or emergency services, we ensure your loved ones are always supported.",
				icon: Globe,
				href: "#",
			},
			{
				title: "Extensive Network of Healthcare Providers",
				description:
					"Our network spans over 1,000 healthcare professionals and medical facilities within Ethiopia. We also maintain strong partnerships across Africa, ensuring that high-quality care is readily available. Whether your family members are in Addis Ababa or more remote areas, they will receive top-notch care through our network. Our agreements with healthcare providers guarantee competitive rates, so your loved ones can access the care they need without financial strain.",
				icon: Heart, // Replace with the actual icon component if needed

				href: "#",
			},
			{
				title: "24/7 Compassionate Customer Support",
				description:
					"Health concerns can arise at any time, and your loved ones deserve compassionate support, day or night. Our 24/7 customer service team is available in multiple languages, ready to provide assistance whenever it's needed. Whether they’re seeking medical advice or facing an urgent health issue, our team is dedicated to making sure your family members feel supported and valued at all times.",
				icon: PhoneCall, // Replace with the actual icon component if needed
				href: "#",
			},
			{
				title: "Hassle-Free Direct Payments for Inpatient Care",
				description:
					"We understand that navigating medical payments can be stressful. With Diaspora Health Connect, there’s no need to worry about administrative hurdles or inpatient care costs. We handle payments directly with our partner facilities, so your loved ones can focus solely on their recovery and well-being.",
				icon: Clipboard, // Replace with the actual icon component if needed
				href: "#",
			},
			{
				title: "Comprehensive Wellness and Health Programs",
				description:
					"Our services are designed to support more than just immediate healthcare needs. We offer preventive care, health risk assessments, and wellness programs tailored to the unique needs of your family in Ethiopia. Additionally, our pre-assessment services and ongoing emotional support, including access to counseling and wellness resources, ensure that your loved ones are healthy, both physically and mentally.",
				icon: CheckCircle, // Replace with the actual icon component if needed
				href: "#",
			},
			{
				title: "Preventive Care for Long-Term Well-Being",
				description:
					"Preventive healthcare is essential for long-term health. Diaspora Health Connect offers regular health check-ups, vaccinations, and ongoing wellness assessments to ensure your loved ones remain in optimal health. Our holistic approach aims to address potential health concerns before they become critical, safeguarding the well-being of your family for the long term.",
				icon: Shield, // Replace with the actual icon component if needed
				href: "#",
			},
		],
		healthConnectData: {
			title: "Diaspora Health Connects",
			subtitle: "Tilla Health",
			coverageDetails: {
				intro:
					"At Diaspora Health Connects, we understand that healthcare needs vary across different families and individuals. That's why we offer a range of tailored health plans, each designed to provide comprehensive coverage for your loved ones in Ethiopia. Whether you're seeking basic preventive care or full access to specialists and emergency services, our plans cater to children, spouses, and elderly parents. Explore the details below to find the right level of care and protection for your family's health and well-being.",
			},
			description: {
				intro: [
					"Diaspora Health Connects (DHC) is a health insurance plan designed specifically for members of the Ethiopian diaspora who want to provide quality healthcare for their families back home. DHC offers a variety of plans to meet the healthcare needs of children, spouses, and elderly parents in Ethiopia, ensuring peace of mind for the diaspora community.",
				],
				planTiers: [
					{
						name: "Basic Plan",
						description:
							"Offers essential preventive care with a focus on affordability.",
					},
					{
						name: "Standard Plan",
						description:
							"Expands coverage to include specialist visits, diagnostic services, and more.",
					},
					{
						name: "Comprehensive Plan",
						description:
							"Provides full medical, surgical, and emergency coverage, including chronic disease management.",
					},
					{
						name: "Family Plan",
						description:
							"Complete healthcare coverage for family members of all ages, from children to elderly parents.",
					},
				],
			},
		},
	},
	"what-makes-us-different-diaspora": {
		title: "HEALTH CARE SOLUTION FOR DIASPORAS",
		defaultValue: "different",
		plantype: "diaspora",
		desc: "",
		services: [
			{
				title: "Our Services for Families",
				description:
					"At Diaspora Health Connect, we go beyond basic healthcare to ensure the health and well-being of your loved ones in Ethiopia. Our services are designed to provide not only medical care but also comprehensive support that optimizes their well-being, whether they are facing health challenges or maintaining a healthy lifestyle. We believe in proactive care, ensuring your family members remain healthy and supported, no matter the circumstances.",
				icon: Users,
				href: "#",
			},
			{
				title: "Local Support in Remote Regions",
				description:
					"With Diaspora Health Connect, your family members have access to an extensive network of healthcare providers throughout Ethiopia, covering both urban centers and rural, hard-to-reach regions. Our local case managers and healthcare coordinators offer personalized, hands-on assistance in Ethiopia, ensuring that care is delivered swiftly and effectively in the places it's needed most. Whether it's routine check-ups or emergency services, we ensure your loved ones are always supported.",
				icon: Globe,
				href: "#",
			},
			{
				title: "Extensive Network of Healthcare Providers",
				description:
					"Our network spans over 1,000 healthcare professionals and medical facilities within Ethiopia. We also maintain strong partnerships across Africa, ensuring that high-quality care is readily available. Whether your family members are in Addis Ababa or more remote areas, they will receive top-notch care through our network. Our agreements with healthcare providers guarantee competitive rates, so your loved ones can access the care they need without financial strain.",
				icon: Heart, // Replace with the actual icon component if needed

				href: "#",
			},
			{
				title: "24/7 Compassionate Customer Support",
				description:
					"Health concerns can arise at any time, and your loved ones deserve compassionate support, day or night. Our 24/7 customer service team is available in multiple languages, ready to provide assistance whenever it's needed. Whether they’re seeking medical advice or facing an urgent health issue, our team is dedicated to making sure your family members feel supported and valued at all times.",
				icon: PhoneCall, // Replace with the actual icon component if needed
				href: "#",
			},
			{
				title: "Hassle-Free Direct Payments for Inpatient Care",
				description:
					"We understand that navigating medical payments can be stressful. With Diaspora Health Connect, there’s no need to worry about administrative hurdles or inpatient care costs. We handle payments directly with our partner facilities, so your loved ones can focus solely on their recovery and well-being.",
				icon: Clipboard, // Replace with the actual icon component if needed
				href: "#",
			},
			{
				title: "Comprehensive Wellness and Health Programs",
				description:
					"Our services are designed to support more than just immediate healthcare needs. We offer preventive care, health risk assessments, and wellness programs tailored to the unique needs of your family in Ethiopia. Additionally, our pre-assessment services and ongoing emotional support, including access to counseling and wellness resources, ensure that your loved ones are healthy, both physically and mentally.",
				icon: CheckCircle, // Replace with the actual icon component if needed
				href: "#",
			},
			{
				title: "Preventive Care for Long-Term Well-Being",
				description:
					"Preventive healthcare is essential for long-term health. Diaspora Health Connect offers regular health check-ups, vaccinations, and ongoing wellness assessments to ensure your loved ones remain in optimal health. Our holistic approach aims to address potential health concerns before they become critical, safeguarding the well-being of your family for the long term.",
				icon: Shield, // Replace with the actual icon component if needed
				href: "#",
			},
		],
		healthConnectData: {
			title: "Diaspora Health Connects",
			subtitle: "Tilla Health",
			coverageDetails: {
				intro:
					"At Diaspora Health Connects, we understand that healthcare needs vary across different families and individuals. That's why we offer a range of tailored health plans, each designed to provide comprehensive coverage for your loved ones in Ethiopia. Whether you're seeking basic preventive care or full access to specialists and emergency services, our plans cater to children, spouses, and elderly parents. Explore the details below to find the right level of care and protection for your family's health and well-being.",
			},
			description: {
				intro: [
					"Diaspora Health Connects (DHC) is a health insurance plan designed specifically for members of the Ethiopian diaspora who want to provide quality healthcare for their families back home. DHC offers a variety of plans to meet the healthcare needs of children, spouses, and elderly parents in Ethiopia, ensuring peace of mind for the diaspora community.",
				],
				planTiers: [
					{
						name: "Basic Plan",
						description:
							"Offers essential preventive care with a focus on affordability.",
					},
					{
						name: "Standard Plan",
						description:
							"Expands coverage to include specialist visits, diagnostic services, and more.",
					},
					{
						name: "Comprehensive Plan",
						description:
							"Provides full medical, surgical, and emergency coverage, including chronic disease management.",
					},
					{
						name: "Family Plan",
						description:
							"Complete healthcare coverage for family members of all ages, from children to elderly parents.",
					},
				],
			},
		},
	},
	"become-a-member": {
		title: "HEALTH CARE SOLUTION FOR DIASPORAS",
		defaultValue: "member",
		plantype: "diaspora",
		desc: "",
	},
	"diaspora-benefits": {
		title: "BENEFITS AT-A-GLANCE TILLA",
		defaultValue: "",
		plantype: "diaspora",
		desc: "There is more to health and well-being than just great health care. Our goal is to make sure you have access to the care you need, and still have time to live your life plan. This guide lists some of the benefits you have as a Tilla member. Use it as your go-to resource to get the most from your plan.",
		sections: [
			{
				title: "Health Care Visits",
				items: [
					{
						sub: [
							"Birthing Center Community Behavioral Health Centers (CBHCs)",
							"Convenience Care Clinics",
							"Hospital (Inpatient* and Outpatient)",
							"Virtual doctor visit over the phone or online including Teladoc®",
							"Primary Care Providers (PCP) like Doctors, OB/GYNs, Physician Assistants and Nurse Practitioners",
							"Skilled Nursing Facility* (SNF)",
							"Specialists (e.g., Podiatrist, Neurologist and Oncologist.)",
							"Urgent Care Center",
						],
					},
					{
						title: "Home Health Care",
						sub: [
							"Durable Medical Equipment (DME) – See Medical Supplies",
							"Home Infusion Therapy*",
							"Home Nursing Services* (e.g., Skilled Nursing and Private Duty)",
							"Physical, Occupational, and Speech Therapy*",
						],
					},
					{
						title: "Vision/Eye Care",
						desc: "All pediatric members and adults with Dental, Vision and Fitness plans",
						sub: [
							"Eye Exams (one comprehensive exam per year)",
							"Glasses or Contacts (one per year; selection criteria applies)",
							"Low Vision Evaluation (under 18 years and every five years)",
							"Replacement Glasses or Contacts (one per year for damage only)",
						],
					},
				],
			},
			{
				title: "Preventive and Early Detection Care/Screenings",
				items: [
					{
						sub: [
							"Annual Well Visit (Physical Exam)",
							"Autism Spectrum Disorder",
							"Screening Blood Pressure Screening (Adults)",
							"Breast Cancer Screening (Mammogram)",
							"Cervical and Vaginal Cancer Screening (Pap smear)",
							"Cholesterol Screening (Adults)",
							"Colorectal Cancer Screening",
							"Developmental Screening (Under age 3)",
							"Diabetes Screening",
							"Disease Screening & Treatments (e.g., Hepatitis, HIV and STI/STD)",
							"Domestic/Interpersonal Violence Screening",
							"Glaucoma Screening",
							"Immunizations (e.g., Flu, Pertussis and Hep B shots)",
							"Lung Cancer Screening",
							"Prostate Cancer Screening",
							"Sports Physicals",
						],
					},
					{
						title: "Transportation Services",
						sub: [
							"Emergency (Ambulance, Air Flights, etc.) Non-Emergency Transfers* (Non-Network to Network Facility, Hospital to SNF, etc.)",
						],
					},
					{
						title: "Pharmacy and Medications",
						sub: [
							"Brand, Generic and Specialty* Drugs (Multiple Tiers) Mail Order Drugs",
						],
					},
					{
						title: "Dental",
						desc: "(All pediatric members and adults with Dental, Vision and Fitness plans)",
						sub: [
							"Accidental Dental Services",
							"Dental Exams and Cleanings",
							"Dental X-Rays",
							"Dentures*",
							"Fluoride Treatments (Pediatric Only)",
							"Medically Necessary Orthodontics (Pediatric Only)",
							"* Surgeries and Procedures* (Extractions, Restorations, etc.)",
						],
					},
				],
			},
			{
				title: "Health Condition Management",
				items: [
					{
						sub: [
							"Chemotherapy and Radiation*",
							"Diabetes Education",
							"Diabetes Screening",
							"Diabetic Services and Supplies",
							"Dialysis Treatment",
							"Kidney Disease Services and Supplies",
							"Pulmonary (Lung) Rehabilitation Services*",
						],
					},
					{
						title: "Diagnostics",
						sub: [
							"Blood Work/Lab testing* Scans (e.g., CT, MRI and PET.)* X-Rays",
						],
					},
					{
						title: "Heart",
						sub: [
							"Abdominal Aortic Aneurysm Screening",
							"Cardiac (Heart) Rehabilitation Services*",
							"Electrocardiogram* (ECG/EKG)",
							"Heart Disease Risk Reduction Visit (Therapy for Heart Disease)",
							"Heart Disease Testing",
						],
					},
					{
						title: "Behavioral Health",
						sub: [
							"Inpatient services*",
							"Electroconvulsive Therapy (ECT)*",
							"Family Psychotherapy*",
							"Group Therapy",
							"Individual Psychotherapy*",
							"Intensive Outpatient Program (IOP) Services*",
							"Medication Assisted Treatment (MAT) (Addiction Svcs.)",
							"Partial Hospitalization Program (PHP) Services*",
							"Prescription Management",
							"Psychiatric",
							"Diagnostic Evaluation",
							"Psychiatric Residential Treatment* (PRTF)",
							"Psychological Testing",
							"Substance Use Disorder (SUD)",
							"Residential*",
							"Transcranial Magnetic Stimulation* (TMS)",
						],
					},
				],
			},
			{
				title: "Family Planning and Maternity Services",
				items: [
					{
						sub: [
							"Birth Control and Contraceptive Supplies*",
							"Breastfeeding Support, Supplies and Counseling",
							"Breast Pumps",
							"Folic Acid Supplements",
							"Infertility Services (Diagnosis and Treatment)",
							"Lactation Classes",
							"Maternal Depression Screening",
							"Newborn Screenings (Sickle Cell, PKU, etc.)",
							"Parent Education",
							"Prenatal and Postpartum Doctor and Home Visits",
							"STD/STI Screenings and Treatment",
							"S terilization*",
						],
					},
					{
						title: "Other Care",
						sub: [
							"ABA therapy* (Applied Behavioral Analysis)",
							"Allergy Testing and Treatment",
							"Bereavement Services",
							"Bone Mass Measurements",
							"Diabetes Self-Management Education",
							"Manipulation (Chiropractic) Services*",
							"Hearing Exam and Hearing Aids †",
							"Hospice Care",
							"Inhalation Therapy* (Asthma, Breathing, etc.)",
							"Medical Nutrition Therapy*",
							"Nutritional Counseling",
							"Obesity/BMI Screening and Dietary Counseling",
							"Occupational Therapy*",
							"Pain Management*",
							"Physical Therapy*",
							"Podiatry (Foot) Services",
							"Smoking/Tobacco Cessation (Counseling to quit smoking/tobacco use)",
							"Speech Therapy*",
							"Surgeries* (General, Reconstructive, etc.)",
							"TMJ Services* (Jaw pain or problems with jaw movement)",
							"Transplant Services*",
						],
					},
				],
			},
		],
	},
	"our-health-insurance-plan-ngo": {
		title: "HEALTH CARE SOLUTION FOR NGO",
		defaultValue: "insurance",
		plantype: "ngo",
		desc: "cvc",
		services: [
			{
				title: "Our Services for Employees",
				description:
					"At Tilla Health Insurance, we go beyond basic healthcare. Every day, we support our members through health challenges and crises. However, we do more than just respond to illness. Our goal is to optimize the health and well-being of your employees, ensuring they remain fit and healthy for successful performance, whether at home or abroad.",
				icon: Users,
				href: "#",
			},
			{
				title: "Local Support in Remote Regions",
				description:
					"Tilla Health Insurance provides access to an extensive network of local medical professionals and facilities across Ethiopia and beyond, ensuring care in both urban and remote areas. Our dedicated case managers and healthcare coordinators are based locally to provide personalized assistance where it's needed most.",
				icon: Globe,
				href: "#",
			},
			{
				title: "Extensive Global and Local Network",
				description:
					"Our healthcare network connects employees to over 1,000 local healthcare professionals and facilities, along with our partnerships in Africa. We ensure access to high-quality care at competitive rates through our agreements with healthcare providers.",
				icon: Heart,
				href: "#",
			},
			{
				title: "24/7 Compassionate Customer Support",
				description:
					"Your employees deserve care and compassion, especially in challenging times. We offer round-the-clock customer support in multiple languages. Whether they are in good health or facing medical concerns, they can reach a caring team member any time, ensuring they feel valued and supported.",
				icon: PhoneCall,
				href: "#",
			},
			{
				title: "Hassle-Free Direct Payments for Inpatient Treatment",
				description:
					"With Tilla Health Insurance, there's no need to worry about administration or payment for inpatient care in our provider network. We handle the payments directly so your employees can focus on their health.",
				icon: Clipboard,
				href: "#",
			},
			{
				title: "Comprehensive Health and Well-Being Program",
				description:
					"Our plans include health risk assessments, pre-assignment assistance, and employee support programs to ensure overall well-being. Whether they need advice before a work assignment or emotional support through our Employee Assistance Program, we’ve got them covered.",
				icon: Shield,
				href: "#",
			},
		],
		healthConnectData: {
			title: "Tilla Health Insurance NGO Plan",
			subtitle: "Tilla Health",
			coverageDetails: {
				intro:
					"Our NGO Plan is designed to provide comprehensive healthcare coverage for individuals, couples, and families. Depending on the plan tier, you can access a variety of services that cover both preventive and specialized healthcare needs. Below is a detailed breakdown of the coverage for each plan:",
			},
			description: {
				intro: [
					"At Tilla Health Insurance, we offer a specialized NGO Plan designed to meet the healthcare needs of individuals working in the nonprofit sector. Whether you are single, a couple, or a family with children, our NGO Plan provides flexible and affordable coverage options. With three tiers—Basic, Standard, and Comprehensive—you can choose the level of coverage that best fits your needs, ensuring access to preventive care, primary care, specialist visits, and more.",
					"For couples with children, please note that the premium includes an additional $30 to account for the expanded coverage needs of families with kids. This allows us to provide comprehensive care for your entire family while keeping the cost reasonable.",
					"Explore our pricing options and find the plan that best suits your lifestyle, giving you peace of mind as you focus on the important work you do.",
				],
			},
		},
	},
	"our-health-insurance-plan-fam": {
		title: "Family and Individual Health Plan",
		defaultValue: "insurance",
		plantype: "fam",
		desc: "cvc",
		services: [
			{
				title: "Our Services for Families",
				description:
					"At Diaspora Health Connect, we go beyond basic healthcare to ensure the health and well-being of your loved ones in Ethiopia. Our services are designed to provide not only medical care but also comprehensive support that optimizes their well-being, whether they are facing health challenges or maintaining a healthy lifestyle. We believe in proactive care, ensuring your family members remain healthy and supported, no matter the circumstances.",
				icon: Users,
				href: "#",
			},
			{
				title: "Local Support in Remote Regions",
				description:
					"With Diaspora Health Connect, your family members have access to an extensive network of healthcare providers throughout Ethiopia, covering both urban centers and rural, hard-to-reach regions. Our local case managers and healthcare coordinators offer personalized, hands-on assistance in Ethiopia, ensuring that care is delivered swiftly and effectively in the places it's needed most. Whether it's routine check-ups or emergency services, we ensure your loved ones are always supported.",
				icon: Globe,
				href: "#",
			},
			{
				title: "Extensive Network of Healthcare Providers",
				description:
					"Our network spans over 1,000 healthcare professionals and medical facilities within Ethiopia. We also maintain strong partnerships across Africa, ensuring that high-quality care is readily available. Whether your family members are in Addis Ababa or more remote areas, they will receive top-notch care through our network. Our agreements with healthcare providers guarantee competitive rates, so your loved ones can access the care they need without financial strain.",
				icon: Network, // Replace with the actual icon component if needed

				href: "#",
			},
			{
				title: "24/7 Compassionate Customer Support",
				description:
					"Health concerns can arise at any time, and your loved ones deserve compassionate support, day or night. Our 24/7 customer service team is available in multiple languages, ready to provide assistance whenever it's needed. Whether they’re seeking medical advice or facing an urgent health issue, our team is dedicated to making sure your family members feel supported and valued at all times.",
				icon: PhoneCall, // Replace with the actual icon component if needed
				href: "#",
			},
			{
				title: "Hassle-Free Direct Payments for Inpatient Care",
				description:
					"We understand that navigating medical payments can be stressful. With Diaspora Health Connect, there’s no need to worry about administrative hurdles or inpatient care costs. We handle payments directly with our partner facilities, so your loved ones can focus solely on their recovery and well-being.",
				icon: Clipboard, // Replace with the actual icon component if needed
				href: "#",
			},
			{
				title: "Comprehensive Wellness and Health Programs",
				description:
					"Our services are designed to support more than just immediate healthcare needs. We offer preventive care, health risk assessments, and wellness programs tailored to the unique needs of your family in Ethiopia. Additionally, our pre-assessment services and ongoing emotional support, including access to counseling and wellness resources, ensure that your loved ones are healthy, both physically and mentally.",
				icon: CheckCircle, // Replace with the actual icon component if needed
				href: "#",
			},
			{
				title: "Preventive Care for Long-Term Well-Being",
				description:
					"Preventive healthcare is essential for long-term health. Diaspora Health Connect offers regular health check-ups, vaccinations, and ongoing wellness assessments to ensure your loved ones remain in optimal health. Our holistic approach aims to address potential health concerns before they become critical, safeguarding the well-being of your family for the long term.",
				icon: Shield, // Replace with the actual icon component if needed
				href: "#",
			},
		],
		healthConnectData: {
			title: "Family and Individual Health Plan",
			subtitle: "Tilla Health",
			coverageDetails: {
				intro:
					"Comprehensive health coverage for families, including children, spouses, and elderly parents. Options include preventive care, maternity services, pediatric and geriatric care, as well as chronic disease management.Flexible healthcare coverage for individuals seeking personal healthcare solutions. Includes options for primary care, specialized treatment, mental health support, and chronic disease management.",
			},
			description: {
				intro: [
					"Our Family and Individual Health Plans provide customized coverage designed to meet a range of healthcare needs, from preventive services to specialized treatments. We offer four key tiers to ensure there is a plan that fits your budget and health pr Our Health Insurance Plan",
				],
				planTiers: [
					{
						name: "Basic Plan",
						description:
							"Offers essential preventive care with a focus on affordability.",
					},
					{
						name: "Standard Plan",
						description:
							"Expands coverage to include specialist visits, diagnostic services, and more.",
					},
					{
						name: "Comprehensive Plan",
						description:
							"Provides full medical, surgical, and emergency coverage, including chronic disease management.",
					},
				],
			},
		},
	},
	"our-health-insurance-plan-pri": {
		title: "Private Sector Health Plan",
		defaultValue: "insurance",
		plantype: "pri",
		desc: "cvc",
		services: [
			{
				title: "Our Services for Families",
				description:
					"At Diaspora Health Connect, we go beyond basic healthcare to ensure the health and well-being of your loved ones in Ethiopia. Our services are designed to provide not only medical care but also comprehensive support that optimizes their well-being, whether they are facing health challenges or maintaining a healthy lifestyle. We believe in proactive care, ensuring your family members remain healthy and supported, no matter the circumstances.",
				icon: Users,
				href: "#",
			},
			{
				title: "Local Support in Remote Regions",
				description:
					"With Diaspora Health Connect, your family members have access to an extensive network of healthcare providers throughout Ethiopia, covering both urban centers and rural, hard-to-reach regions. Our local case managers and healthcare coordinators offer personalized, hands-on assistance in Ethiopia, ensuring that care is delivered swiftly and effectively in the places it's needed most. Whether it's routine check-ups or emergency services, we ensure your loved ones are always supported.",
				icon: Users,
				href: "#",
			},
			{
				title: "Extensive Network of Healthcare Providers",
				description:
					"Our network spans over 1,000 healthcare professionals and medical facilities within Ethiopia. We also maintain strong partnerships across Africa, ensuring that high-quality care is readily available. Whether your family members are in Addis Ababa or more remote areas, they will receive top-notch care through our network. Our agreements with healthcare providers guarantee competitive rates, so your loved ones can access the care they need without financial strain.",
				icon: Users, // Replace with the actual icon component if needed

				href: "#",
			},
			{
				title: "24/7 Compassionate Customer Support",
				description:
					"Health concerns can arise at any time, and your loved ones deserve compassionate support, day or night. Our 24/7 customer service team is available in multiple languages, ready to provide assistance whenever it's needed. Whether they’re seeking medical advice or facing an urgent health issue, our team is dedicated to making sure your family members feel supported and valued at all times.",
				icon: Users, // Replace with the actual icon component if needed
				href: "#",
			},
			{
				title: "Hassle-Free Direct Payments for Inpatient Care",
				description:
					"We understand that navigating medical payments can be stressful. With Diaspora Health Connect, there’s no need to worry about administrative hurdles or inpatient care costs. We handle payments directly with our partner facilities, so your loved ones can focus solely on their recovery and well-being.",
				icon: Users, // Replace with the actual icon component if needed
				href: "#",
			},
			{
				title: "Comprehensive Wellness and Health Programs",
				description:
					"Our services are designed to support more than just immediate healthcare needs. We offer preventive care, health risk assessments, and wellness programs tailored to the unique needs of your family in Ethiopia. Additionally, our pre-assessment services and ongoing emotional support, including access to counseling and wellness resources, ensure that your loved ones are healthy, both physically and mentally.",
				icon: Users, // Replace with the actual icon component if needed
				href: "#",
			},
			{
				title: "Preventive Care for Long-Term Well-Being",
				description:
					"Preventive healthcare is essential for long-term health. Diaspora Health Connect offers regular health check-ups, vaccinations, and ongoing wellness assessments to ensure your loved ones remain in optimal health. Our holistic approach aims to address potential health concerns before they become critical, safeguarding the well-being of your family for the long term.",
				icon: Users, // Replace with the actual icon component if needed
				href: "#",
			},
		],
		healthConnectData: {
			title: "Private Sector Health Plan",
			subtitle: "Tilla Health",
			coverageDetails: {
				intro:
					"Custom health plans designed for employees of private companies. This plan focuses on workplace wellness programs, mental health support, chronic disease management, and access to both remote and urban healthcare.",
			},
			description: {
				intro: [
					"Private Sector Health Plan Tilla Health offers three tiers of coverage, designed to meet the varying needs of private sector organizations:",
				],
				planTiers: [
					{
						name: "Basic Plan",
						description:
							"Provides essential healthcare services, including preventive and primary care, perfect for businesses seeking cost-effective options for their employees.",
					},
					{
						name: "Standard Plan",
						description:
							"Includes broader coverage, such as specialist consultations, diagnostic tests, and urgent care, ideal for medium-sized businesses with diverse employee healthcare needs.",
					},
					{
						name: "Comprehensive Plan",
						description:
							"Offers top-tier coverage with access to advanced services, including chronic disease management, mental health care, and hospitalization, suited for larger organizations or those seeking premium care for their teams.",
					},
				],
			},
		},
	},
	"our-health-insurance-plan-fep": {
		title: "Federal Employee Program (FEP) Health Plan",
		defaultValue: "insurance",
		plantype: "fep",
		desc: "cvc",
		services: [
			{
				title: "Our Services for Families",
				description:
					"At Diaspora Health Connect, we go beyond basic healthcare to ensure the health and well-being of your loved ones in Ethiopia. Our services are designed to provide not only medical care but also comprehensive support that optimizes their well-being, whether they are facing health challenges or maintaining a healthy lifestyle. We believe in proactive care, ensuring your family members remain healthy and supported, no matter the circumstances.",
				icon: Users,
				href: "#",
			},
			{
				title: "Local Support in Remote Regions",
				description:
					"With Diaspora Health Connect, your family members have access to an extensive network of healthcare providers throughout Ethiopia, covering both urban centers and rural, hard-to-reach regions. Our local case managers and healthcare coordinators offer personalized, hands-on assistance in Ethiopia, ensuring that care is delivered swiftly and effectively in the places it's needed most. Whether it's routine check-ups or emergency services, we ensure your loved ones are always supported.",
				icon: Users,
				href: "#",
			},
			{
				title: "Extensive Network of Healthcare Providers",
				description:
					"Our network spans over 1,000 healthcare professionals and medical facilities within Ethiopia. We also maintain strong partnerships across Africa, ensuring that high-quality care is readily available. Whether your family members are in Addis Ababa or more remote areas, they will receive top-notch care through our network. Our agreements with healthcare providers guarantee competitive rates, so your loved ones can access the care they need without financial strain.",
				icon: Users, // Replace with the actual icon component if needed

				href: "#",
			},
			{
				title: "24/7 Compassionate Customer Support",
				description:
					"Health concerns can arise at any time, and your loved ones deserve compassionate support, day or night. Our 24/7 customer service team is available in multiple languages, ready to provide assistance whenever it's needed. Whether they’re seeking medical advice or facing an urgent health issue, our team is dedicated to making sure your family members feel supported and valued at all times.",
				icon: Users, // Replace with the actual icon component if needed
				href: "#",
			},
			{
				title: "Hassle-Free Direct Payments for Inpatient Care",
				description:
					"We understand that navigating medical payments can be stressful. With Diaspora Health Connect, there’s no need to worry about administrative hurdles or inpatient care costs. We handle payments directly with our partner facilities, so your loved ones can focus solely on their recovery and well-being.",
				icon: Users, // Replace with the actual icon component if needed
				href: "#",
			},
			{
				title: "Comprehensive Wellness and Health Programs",
				description:
					"Our services are designed to support more than just immediate healthcare needs. We offer preventive care, health risk assessments, and wellness programs tailored to the unique needs of your family in Ethiopia. Additionally, our pre-assessment services and ongoing emotional support, including access to counseling and wellness resources, ensure that your loved ones are healthy, both physically and mentally.",
				icon: Users, // Replace with the actual icon component if needed
				href: "#",
			},
			{
				title: "Preventive Care for Long-Term Well-Being",
				description:
					"Preventive healthcare is essential for long-term health. Diaspora Health Connect offers regular health check-ups, vaccinations, and ongoing wellness assessments to ensure your loved ones remain in optimal health. Our holistic approach aims to address potential health concerns before they become critical, safeguarding the well-being of your family for the long term.",
				icon: Users, // Replace with the actual icon component if needed
				href: "#",
			},
		],
		healthConnectData: {
			title: "Our FEP Health insurance Plan",
			subtitle: "Tilla Health",
			coverageDetails: {
				intro:
					"Tailored healthcare plans for federal government employees, providing comprehensive preventive care, chronic disease management, mental health services, and workplace wellness programs.",
			},
			description: {
				intro: [
					"The Federal Employee Program (FEP) Health Plan offers multiple tiers of coverage, tailored to suit federal employees at every stage of their careers:",
				],
				planTiers: [
					{
						name: "Basic Plan",
						description:
							"Provides essential healthcare services, including preventive and primary care, perfect for businesses seeking cost-effective options for their employees.",
					},
					{
						name: "Standard Plan",
						description:
							"Includes broader coverage, such as specialist consultations, diagnostic tests, and urgent care, ideal for medium-sized businesses with diverse employee healthcare needs.",
					},
					{
						name: "Comprehensive Plan",
						description:
							"Offers top-tier coverage with access to advanced services, including chronic disease management, mental health care, and hospitalization, suited for larger organizations or those seeking premium care for their teams.",
					},
				],
			},
		},
	},
	"our-health-insurance-plan-int": {
		title:
			"Exclusively Designed for the International Community Living and Working in Ethiopia",
		defaultValue: "insurance",
		plantype: "int",
		desc: "cvc",
		services: [
			{
				title: "Our Services for Families",
				description:
					"At Diaspora Health Connect, we go beyond basic healthcare to ensure the health and well-being of your loved ones in Ethiopia. Our services are designed to provide not only medical care but also comprehensive support that optimizes their well-being, whether they are facing health challenges or maintaining a healthy lifestyle. We believe in proactive care, ensuring your family members remain healthy and supported, no matter the circumstances.",
				icon: Users,
				href: "#",
			},
			{
				title: "Local Support in Remote Regions",
				description:
					"With Diaspora Health Connect, your family members have access to an extensive network of healthcare providers throughout Ethiopia, covering both urban centers and rural, hard-to-reach regions. Our local case managers and healthcare coordinators offer personalized, hands-on assistance in Ethiopia, ensuring that care is delivered swiftly and effectively in the places it's needed most. Whether it's routine check-ups or emergency services, we ensure your loved ones are always supported.",
				icon: Users,
				href: "#",
			},
			{
				title: "Extensive Network of Healthcare Providers",
				description:
					"Our network spans over 1,000 healthcare professionals and medical facilities within Ethiopia. We also maintain strong partnerships across Africa, ensuring that high-quality care is readily available. Whether your family members are in Addis Ababa or more remote areas, they will receive top-notch care through our network. Our agreements with healthcare providers guarantee competitive rates, so your loved ones can access the care they need without financial strain.",
				icon: Users, // Replace with the actual icon component if needed

				href: "#",
			},
			{
				title: "24/7 Compassionate Customer Support",
				description:
					"Health concerns can arise at any time, and your loved ones deserve compassionate support, day or night. Our 24/7 customer service team is available in multiple languages, ready to provide assistance whenever it's needed. Whether they’re seeking medical advice or facing an urgent health issue, our team is dedicated to making sure your family members feel supported and valued at all times.",
				icon: Users, // Replace with the actual icon component if needed
				href: "#",
			},
			{
				title: "Hassle-Free Direct Payments for Inpatient Care",
				description:
					"We understand that navigating medical payments can be stressful. With Diaspora Health Connect, there’s no need to worry about administrative hurdles or inpatient care costs. We handle payments directly with our partner facilities, so your loved ones can focus solely on their recovery and well-being.",
				icon: Users, // Replace with the actual icon component if needed
				href: "#",
			},
			{
				title: "Comprehensive Wellness and Health Programs",
				description:
					"Our services are designed to support more than just immediate healthcare needs. We offer preventive care, health risk assessments, and wellness programs tailored to the unique needs of your family in Ethiopia. Additionally, our pre-assessment services and ongoing emotional support, including access to counseling and wellness resources, ensure that your loved ones are healthy, both physically and mentally.",
				icon: Users, // Replace with the actual icon component if needed
				href: "#",
			},
			{
				title: "Preventive Care for Long-Term Well-Being",
				description:
					"Preventive healthcare is essential for long-term health. Diaspora Health Connect offers regular health check-ups, vaccinations, and ongoing wellness assessments to ensure your loved ones remain in optimal health. Our holistic approach aims to address potential health concerns before they become critical, safeguarding the well-being of your family for the long term.",
				icon: Users, // Replace with the actual icon component if needed
				href: "#",
			},
		],
		healthConnectData: {
			title: "International Health Plan",
			subtitle: "Tilla Health",
			coverageDetails: {
				intro:
					"The International Plan by Tilla Health Insurance is tailored to provide comprehensive healthcare support for members traveling to Ethiopia for both short-term and long-term stays. Whether you are relocating, working, or visiting, this plan ensures seamless access to essential medical services, guidance, and assistance, helping you stay healthy and worry-free during your time in Ethiopia.",
			},
			description: {
				intro: [
					"Join the International Community with Tilla Health Insurance",
					"Tilla Health Insurance’s International Plan is the ideal healthcare solution for expatriates, diplomats, and international professionals living in Ethiopia. With our focus on high-quality care, convenience, and global coverage, we ensure that your health is always our top priority.",
					"For more information or to get started with the International Plan, please contact us today, and our team will guide you through the process to secure the healthcare coverage you deserve.",
				],
				planTiers: [
					{
						name: "Basic Plan",
						description:
							"Offers essential preventive care with a focus on affordability.",
					},
					{
						name: "Standard Plan",
						description:
							"Expands coverage to include specialist visits, diagnostic services, and more.",
					},
					{
						name: "Comprehensive Plan",
						description:
							"Provides full medical, surgical, and emergency coverage, including chronic disease management.",
					},
					{
						name: "Family Plan",
						description:
							"Complete healthcare coverage for family members of all ages, from children to elderly parents.",
					},
				],
			},
		},
	},
};

export default function DetailsPage({
	params,
}: {
	params: { detail: DetailKey };
}) {
	const detail = details[params.detail];

	if (!detail) {
		notFound();
	}

	// Conditional rendering based on detail key
	switch (params.detail) {
		case "diaspora-benefits":
			return (
				<div>
					<BenefitsPage details={detail} />
				</div>
			);
		default:
			return (
				<div>
					<PlanDetailScreen details={detail} />
				</div>
			);
	}
}
