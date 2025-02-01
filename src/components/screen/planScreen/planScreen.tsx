"use client";

import Image from "next/image";
import Link from "next/link";

import { motion } from "framer-motion";
import { CheckCircle, FileEdit, MessageCircle, Phone } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
	Card,
	CardDescription,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";

interface Plan {
	title: string;
	description: string;
	subtitle?: string;
	whychoosetitle?: string;
	whychoose?: string[];
	whychoosedesc?: any;
	image: any;
	image2: any;
	quoteLnk: string;
}
interface PlanProps {
	plan: Plan;
}

export default function PlanScreen({ plan }: PlanProps) {
	const features = [
		{
			icon: FileEdit,
			title: "What We Offer",
			description:
				"Health plans designed to meet the needs of families, individuals, employees, and organizations.",
			href: `${plan.quoteLnk}`,
		},
		{
			icon: MessageCircle,
			title: "Become a member",
			description:
				"For any queries please don't hesitate to send us a message or give us a call.",
			href: "https://register.tillahealth.com/",
		},
		{
			icon: Phone,
			title: "Want Us to Call You Back?",
			description:
				"Send us your phone number and one of our staff will call you back as soon as possible.",
			href: "/contact-us",
		},
	];
	return (
		<div className="min-h-screen flex flex-col">
			<main>
				<section className="relative text-foreground min-h-[180px] sm:min-h-[260px] md:min-h-[340px] flex items-center justify-center mt-16 sm:mt-0 py-6">
					<Image
						src={plan.image}
						alt="Plan Background"
						fill
						className="object-cover blur-sm"
						sizes="100vw"
						priority
					/>
					<div className="absolute inset-0 bg-black/50"></div>
					<div className="container mx-auto relative z-10 px-4 sm:px-6 md:px-8">
						<div className="max-w-4xl space-y-2 sm:space-y-3 md:space-y-4 mx-auto">
							<h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold tracking-tight leading-tight text-white text-center">
								{plan.title}
							</h1>
							<p className="text-card-foreground leading-relaxed text-white text-center flex-grow">
								{plan.subtitle}
							</p>
						</div>
					</div>
				</section>

				<section className="py-12 container">
					{plan.whychoose && (
						<div className="grid md:grid-cols-2 gap-8 items-stretch">
							<motion.div
								initial={{ opacity: 0, y: 20 }}
								whileInView={{ opacity: 1, y: 0 }}
								viewport={{ once: true }}
								className="relative group h-full"
							>
								<div className="absolute -inset-0.5 bg-gradient-to-r from-primary/10 to-primary/20 rounded-lg blur opacity-75 group-hover:opacity-100 transition duration-300"></div>
								<div className="relative bg-background/95 backdrop-blur-sm p-6 rounded-lg shadow-md group-hover:shadow-lg transition-all duration-300 h-full flex flex-col">
									<div className="relative h-48 w-48 mx-auto mb-6 rounded-full overflow-hidden flex-shrink-0">
										<Image
											src={plan.image2}
											alt="Plan illustration"
											fill
											sizes="(max-width: 768px) 50vw, 192px"
											className="object-cover object-center  duration-500"
										/>
									</div>
									<p className="text-card-foreground leading-relaxed text-justify flex-grow">
										{plan.description}
									</p>
								</div>
							</motion.div>

							<div className="relative bg-background/95 backdrop-blur-sm p-6 rounded-lg shadow-md group-hover:shadow-lg transition-all duration-300 flex flex-col h-full">
								<h3 className="text-primary text-sm">Tilla Health</h3>
								<h2 className="text-2xl font-bold mb-4">
									{plan.whychoosetitle}
								</h2>
								<div className="space-y-3 flex-grow">
									{plan.whychoose?.map((item, index) => (
										<div className="text-muted-foreground flex" key={index}>
											<CheckCircle className="h-5 w-5 text-primary mr-2 mt-0.5 flex-shrink-0" />
											<span className="text-card-foreground text-sm">
												{item}
											</span>
										</div>
									))}
								</div>
							</div>
						</div>
					)}
					{plan.whychoosedesc && <div>{plan.whychoosedesc}</div>}
				</section>
				<section id="features" className="relative py-12 md:py-20 bg-muted">
					<div className="container mx-auto px-4  flex flex-col items-center justify-center  mb-10">
						<motion.div
							initial={{ opacity: 0, y: 20 }}
							whileInView={{ opacity: 1, y: 0 }}
							viewport={{ once: true }}
							className="text-center mb-12"
						>
							<h2 className="text-4xl font-bold mb-6">
								Get Started with Your Health Plan
							</h2>
							<p className="max-w-3xl mx-auto text-muted-foreground ">
								Explore your options, ask questions, or request a personalized
								quote. We &apos;re here to assist you every step of the way!
							</p>
						</motion.div>
						<div className="grid grid-cols-1  md:grid-cols-3 gap-8">
							{features.map((feature, index) => (
								<Card
									key={index}
									className="animate-fade-in border-2 border-primary"
								>
									<CardHeader>
										<feature.icon className="w-12 h-12 text-primary mb-4" />
										<CardTitle>{feature.title}</CardTitle>
										<CardDescription>{feature.description}</CardDescription>
										<Link
											href={feature.href as any}
											// className="text-primary font-semibold hover:underline inline-flex items-center"
										>
											<Button className="w-full bg-primary hover:bg-red-700 text-white">
												CLICK HERE
											</Button>
										</Link>
									</CardHeader>
								</Card>
							))}
						</div>
					</div>
				</section>
			</main>
		</div>
	);
}
