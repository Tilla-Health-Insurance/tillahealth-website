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
			title: "Get a Quote",
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
				<section className="relative bg-primary text-white">
					<div className="container grid md:grid-cols-2 gap-8 py-16 items-center">
						<div className="space-y-6">
							<h1 className="text-5xl font-bold tracking-tight">
								{plan.title}
							</h1>
							<p className="text-lg">{plan.description}</p>
						</div>
						<div className="relative h-[400px]">
							<Image
								src={plan.image}
								alt="World Flags"
								fill
								className="object-cover rounded-lg"
							/>
						</div>
					</div>
				</section>

				<section className="py-16 container">
					{plan.whychoose && (
						<div className="grid md:grid-cols-2 gap-12 items-center">
							<div className="relative h-[400px]">
								<Image
									src={plan.image2}
									alt="Family under umbrella illustration"
									width={300}
									height={300}
									className="w-full h-full"
								/>
							</div>

							<div className="space-y-6">
								<h3 className="text-primary">Tilla Health</h3>
								<h2 className="text-3xl font-bold">{plan.whychoosetitle}</h2>
								<div className="space-y-4">
									{plan.whychoose?.map((item, index) => (
										<div className="text-gray-600 flex" key={index}>
											<CheckCircle className="h-6 w-6 text-primary mr-3 mt-1 flex-shrink-0" />
											<span className="text-card-foreground text-lg">
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
							<p className="max-w-3xl mx-auto text-gray-600">
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
