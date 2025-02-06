import {
	Ambulance,
	BookOpen,
	BriefcaseMedical,
	Building,
	Building2,
	Globe,
	Heart,
	Home,
	Luggage,
	Newspaper,
	Phone,
	PhoneCall,
	Stethoscope,
	User2,
	Users,
} from "lucide-react";

import { IMAGES } from "@/constants/files";

export const menuItems = [
	{
		title: "Home",
		icon: Home,
		href: "/", // Add direct href for Home
	},
	{
		title: "Explore Services",
		icon: BriefcaseMedical,
		href: "/services",
		image: IMAGES.diasporaconnect2,
		content: {
			header: "Healthcare Solutions",
			description: "Comprehensive healthcare services for every need.",
			sections: [
				{
					title: "Our Services",
					links: [
						{
							label: "Diaspora Health Connect",
							href: "/plan/diaspora-health-connect",
							description:
								"Specialized health insurance solutions for individuals living abroad.",
							icon: Luggage,
							sublinks: [
								{
									label: "Our Health Insurance Plan Diaspora",
									href: "/plan/details/our-health-insurance-plan-diaspora",
								},
								{
									label: "What makes us different",
									href: "/plan/details/what-makes-us-different-diaspora",
								},
								{
									label: "Become a Member",
									href: "/plan/details/become-a-member",
								},
								{
									label: "Diaspora Benefits",
									href: "/plan/details/diaspora-benefits",
								},
							],
						},
						{
							label: "Family and Individual Health plan",
							href: "/plan/family-individual-health-plan",
							description: "Personalized care for families and individuals.",
							icon: User2,
							sublinks: [
								{
									label: "Our Health Insurance Plans",
									href: "/plan/details/our-health-insurance-plan-fam",
								},
								{
									label: "What makes us different",
									href: "/plan/details/our-health-insurance-plan-fam",
								},
								{
									label: "Become a Member",
									href: "/plan/details/our-health-insurance-plan-fam",
								},
								{
									label: "Family Benefits",
									href: "/plan/details/diaspora-benefits",
								},
							],
						},
						{
							label: "International Health Plan",
							href: "/plan/international-plan",
							description:
								"Global health insurance tailored for those traveling abroad.",
							icon: Globe,
							sublinks: [
								{
									label: "Our Health Insurance Plan International",
									href: "/plan/details/our-health-insurance-plan-int",
								},
								{
									label: "What makes us different",
									href: "/plan/details/our-health-insurance-plan-int",
								},
								{
									label: "Become a Member",
									href: "/plan/details/our-health-insurance-plan-int",
								},
								{
									label: "International Benefits",
									href: "/plan/details/diaspora-benefits",
								},
							],
						},
						{
							label: "NGO Health plan",
							href: "/plan/ngo-health-plan",
							description: "Comprehensive health solutions for communities.",
							icon: Users,
							sublinks: [
								{
									label: "Our Health Insurance Plan NGO",
									href: "/plan/details/our-health-insurance-plan-ngo",
								},
								{
									label: "What makes us different",
									href: "/plan/details/our-health-insurance-plan-ngo",
								},
								{
									label: "Become a Member",
									href: "/plan/details/our-health-insurance-plan-ngo",
								},
								{
									label: "NGO Benefits",
									href: "/plan/details/diaspora-benefits",
								},
							],
						},

						{
							label: "Private Sector Health plan",
							href: "/plan/private-sector-health-plan",
							description:
								"Tailored health solutions for private sector employees.",
							icon: Building,
							sublinks: [
								{
									label: "Our Health Insurance Plan",
									href: "/plan/details/our-health-insurance-plan-pri",
								},
								{
									label: "What makes us different",
									href: "/plan/details/our-health-insurance-plan-pri",
								},
								{
									label: "Become a Member",
									href: "/plan/details/our-health-insurance-plan-pri",
								},
								{
									label: "Private Sector Benefits",
									href: "/plan/details/diaspora-benefits",
								},
							],
						},
						{
							label: "Federal Employee Health Plan(FEP)",
							href: "/plan/federal-employee-program",
							description:
								"Exclusive health coverage designed for federal employees.",
							icon: Building2,
							sublinks: [
								{
									label: "Our Health Insurance Plan FEP",
									href: "/plan/details/our-health-insurance-plan-fep",
								},
								{
									label: "What makes us different",
									href: "/plan/details/our-health-insurance-plan-fep",
								},
								{
									label: "Become a Member",
									href: "/plan/details/our-health-insurance-plan-fep",
								},
								{
									label: "FEP Benefits",
									href: "/plan/details/diaspora-benefits",
								},
							],
						},
					],
				},
			],
			footer: {
				title: "Explore affordable healthcare plans",
				description: "Find the right plan for you and your family.",
				learnMoreLabel: "Learn More",
			},
		},
	},
	{
		title: "Telehealth",
		icon: Stethoscope,
		href: "/telehealth",
		image: IMAGES.telehealth,
		content: {
			header: "Healthcare Solutions",
			description: "Comprehensive healthcare services for every need.",
			sections: [
				{
					title: "Telehealth Services",
					links: [
						{
							label: "Telehealth",
							href: "/telehealth",
							description:
								"Access healthcare services from the comfort of your home.",
							icon: Phone,
						},
						{
							label: "Bridgecare",
							href: "/bridgecare",
							description:
								"Premium telehealth services for individuals and families.",
							icon: PhoneCall,
							sublinks: [],
						},
					],
				},
			],
			footer: {
				title: "Explore affordable healthcare plans",
				description: "Find the right plan for you and your family.",
				learnMoreLabel: "Learn More",
			},
		},
	},
	{
		title: "Transportation",
		icon: Ambulance,
		href: "/transportation",
		image: IMAGES.transport2,
	},
	{
		title: "About Us",
		icon: Users,
		href: "/who-we-are",
		image: IMAGES.memberportal,
		content: {
			header: "Empowering Health",
			description: "Your partner in achieving optimal health and well-being.",
			sections: [
				{
					title: "Our Services",
					links: [
						{
							label: "Who We Are",
							href: "/who-we-are",
							description: "Learn about our team and values.",
							icon: Heart,
							sublinks: [
								// { label: "Our Team", href: "/who-we-are" },
								// { label: "Patient Testimonials", href: "/who-we-are" },
								// { label: "Community Involvement", href: "/who-we-are" },
							],
						},
						{
							label: "What We Do",
							href: "/what-we-do",
							description: "Explore our range of services.",
							icon: BookOpen,
							sublinks: [
								// { label: "Primary Care", href: "/what-we-do" },
								// { label: "Specialty Services", href: "/what-we-do" },
								// { label: "Emergency Care", href: "/what-we-do" },
							],
						},
						{
							label: "Our Vision",
							href: "/who-we-are",
							description: "Our goals for the future of healthcare.",
							icon: BookOpen,
							sublinks: [
								// { label: "Innovative Practices", href: "/who-we-are" },
								// { label: "Patient-Centered Care", href: "/who-we-are" },
								// { label: "Sustainable Health Solutions", href: "/who-we-are" },
							],
						},
						{
							label: "Our Mission",
							href: "/who-we-are",
							description: "Our commitment to quality care.",
							icon: BookOpen,
							sublinks: [
								// { label: "Quality Improvement", href: "/who-we-are" },
								// { label: "Accessibility Initiatives", href: "/who-we-are" },
								// { label: "Community Outreach", href: "/who-we-are" },
							],
						},
						{
							label: "Our History",
							href: "/who-we-are",
							description: "A timeline of our achievements.",
							icon: BookOpen,
							sublinks: [
								// { label: "Founding Story", href: "#" },
								// { label: "Milestones", href: "#" },
								// { label: "Future Plans", href: "#" },
							],
						},
						{
							label: "Latest News",
							href: "/news",
							description: "Stay healthy with regular checkups.",
							icon: Newspaper,
							sublinks: [
								// { label: "Annual Physicals Update", href: "/news" },
								// { label: "Vaccination Campaign", href: "/news" },
								// { label: "Health Screening Events", href: "/news" },
							],
						},
					],
				},
			],
			footer: {
				title: "Join Us in Your Health Journey",
				description:
					"Discover personalized healthcare options tailored for you.",
				learnMoreLabel: "Get Started",
			},
		},
	},
	// {
	// 	title: "News and Updates",
	// 	icon: Newspaper,
	// 	href: "/news",
	// 	image: IMAGES.brokerportal,
	// 	content: {
	// 		header: "Latest Healthcare News",
	// 		description: "Stay informed with the latest updates in healthcare.",
	// 		sections: [
	// 			{
	// 				title: "Recent Announcements",
	// 				links: [
	// 					{
	// 						label: "Latest News",
	// 						href: "/news",
	// 						description: "Stay healthy with regular checkups.",
	// 						icon: Bot,
	// 						sublinks: [
	// 							// { label: "Annual Physicals Update", href: "/news" },
	// 							// { label: "Vaccination Campaign", href: "/news" },
	// 							// { label: "Health Screening Events", href: "/news" },
	// 						],
	// 					},
	// 					{
	// 						label: "Affordability News",
	// 						href: "/news",
	// 						description: "Expert care for specific conditions.",
	// 						icon: Coins,
	// 						sublinks: [
	// 							// { label: "Cardiology Innovations", href: "/news" },
	// 							// { label: "Orthopedic Advances", href: "/news" },
	// 							// { label: "Pediatric Care Updates", href: "/news" },
	// 						],
	// 					},
	// 					{
	// 						label: "Social Responsiblity",
	// 						href: "/social-responsiblity",
	// 						description: "Expert care for specific conditions.",
	// 						icon: Heart,
	// 						sublinks: [
	// 							// { label: "Cardiology Innovations", href: "/news" },
	// 							// { label: "Orthopedic Advances", href: "/news" },
	// 							// { label: "Pediatric Care Updates", href: "/news" },
	// 						],
	// 					},
	// 				],
	// 			},
	// 		],
	// 		footer: {
	// 			title: "Stay Updated with Our News",
	// 			description: "Sign up for newsletters to receive the latest updates.",
	// 			learnMoreLabel: "Subscribe Now",
	// 		},
	// 	},
	// },
	// {
	// 	title: "Find A Provider",
	// 	icon: Stethoscope,
	// 	href: "/find-a-provider", // Add direct href for Home
	// },
];
