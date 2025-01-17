"use client";

import Link from "next/link";

import { motion } from "framer-motion";

import { Card, CardContent } from "@/components/ui/card";

interface Services {
	icon: any;
	title: string;
	description: string;
	href: string;
}

interface ServiceProps {
	title: string;
	description: string;
	services?: Services[];
	haveReadMore: boolean;
}

export function ServicesSection({
	services,
	title,
	description,
	haveReadMore,
}: ServiceProps) {
	return (
		<section className="py-20 ">
			<div className="container mx-auto px-4">
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					className="text-center mb-12"
				>
					<h2 className="text-4xl font-bold mb-6 ">{title}</h2>
					<p className="max-w-3xl mx-auto ">{description}</p>
				</motion.div>
				<div className="grid md:grid-cols-2 gap-8 p-2">
					{services?.map((service, index) => (
						<motion.div
							key={service.title}
							initial={{ opacity: 0, x: index === 0 ? -20 : 20 }}
							whileInView={{ opacity: 1, x: 0 }}
							viewport={{ once: true }}
							transition={{ delay: index * 0.2 }}
						>
							<Card className="overflow-hidden transition-colors hover:bg-red-200 hover:shadow-lg">
								<CardContent className="p-6">
									<service.icon className="w-12 h-12 text-primary mb-4" />
									<h3 className="text-xl font-semibold mb-4">
										{service.title}
									</h3>
									<p className="text-gray-600 mb-4">{service.description}</p>
									{haveReadMore && (
										<Link
											href={service.href as any}
											className="text-primary font-semibold hover:underline inline-flex items-center"
										>
											Read More
										</Link>
									)}
								</CardContent>
							</Card>
						</motion.div>
					))}
				</div>
			</div>
		</section>
	);
}
