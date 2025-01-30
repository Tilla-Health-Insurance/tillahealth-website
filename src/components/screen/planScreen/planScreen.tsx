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
				<section className="relative text-foreground min-h-[300px] sm:min-h-[400px] md:min-h-[500px] flex items-center justify-center mt-20 sm:mt-0 py-12">
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
						<div className="max-w-5xl space-y-3 sm:space-y-4 md:space-y-6 mx-auto">
							<h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight leading-tight text-white text-center">
								{plan.title}
							</h1>
							<p className="text-sm sm:text-base md:text-lg lg:text-xl text-white text-left sm:text-center">
								{plan.description}
							</p>
						</div>
					</div>
				</section>

				<section className="py-16 container">
					{plan.whychoose && (
						<div className="grid md:grid-cols-2 gap-12 items-center">
							<div className="relative h-[80vh] w-full">
								<Image
									src={plan.image2}
									alt="Family under umbrella illustration"
									layout="fill" // Use layout="fill" to cover the parent container
									objectFit="contain" // Ensures the image covers the container while maintaining aspect ratio
									className="rounded-lg" // Optional: add any styling you want
								/>
							</div>

							<div className="space-y-6">
								<h3 className="text-primary">Tilla Health</h3>
								<h2 className="text-3xl font-bold">{plan.whychoosetitle}</h2>
								<div className="space-y-4">
									{plan.whychoose?.map((item, index) => (
										<div className="text-muted-foreground  flex" key={index}>
											<CheckCircle className="h-6 w-6 text-primary mr-3 mt-1 flex-shrink-0" />
											<span className="text-card-foreground">{item}</span>
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
