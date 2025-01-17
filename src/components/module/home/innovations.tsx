import { Ambulance, Cloud, Stethoscope, Video } from "lucide-react";

import { Card, CardContent } from "@/components/ui/card";

import { SectionHeading } from "./section-heading";

const innovations = [
	{
		title: "Telemedicine Platforms",
		description: "Virtual consultations with local and international providers",
		icon: Video,
	},
	{
		title: "Digital Diagnostics",
		description: "Advanced tools for early detection and accurate diagnoses",
		icon: Stethoscope,
	},
	{
		title: "Cloud Infrastructure",
		description: "Secure records and efficient healthcare workflows",
		icon: Cloud,
	},
	{
		title: "Medical Transport",
		description: "Safe and reliable transportation with follow-up care",
		icon: Ambulance,
	},
];

export function InnovationsSection() {
	return (
		<section className="py-24 bg-muted/50">
			<div className="container px-4 md:px-6">
				<SectionHeading
					title="Digital Health Innovation"
					description="Leveraging technology to transform healthcare delivery across Ethiopia"
					className="text-center mb-12"
				/>
				<div className="grid gap-6 md:grid-cols-2 ">
					{innovations.map((item) => (
						<Card key={item.title} className="relative overflow-hidden">
							<CardContent className="p-6">
								<div className="flex flex-col items-center text-center space-y-4">
									<div className="rounded-full p-3 bg-primary/10">
										<item.icon className="w-6 h-6 text-primary" />
									</div>
									<h3 className="font-semibold">{item.title}</h3>
									<p className="text-sm text-muted-foreground">
										{item.description}
									</p>
								</div>
							</CardContent>
						</Card>
					))}
				</div>
			</div>
		</section>
	);
}
