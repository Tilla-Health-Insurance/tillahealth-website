import { Ambulance, Cloud, Stethoscope, Video } from "lucide-react";

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
		<section className="py-24 ">
			<div className="container px-4 md:px-6">
				<h3 className="text-sm font-semibold text-primary mb-4 text-center">
					{">>"}Technologies {"<<"}
				</h3>
				<SectionHeading
					title="Digital Health Innovation"
					description="Leveraging technology to transform healthcare delivery across Ethiopia"
					className="text-center mb-12"
				/>
				<div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4 max-w-6xl mx-auto">
					{innovations.map((item) => (
						<div
							key={item.title}
							className="group relative flex flex-col items-center text-center p-8 rounded-full shadow-lg 
               bg-gradient-to-b from-blue-50 via-white to-gray-50 
               dark:bg-gradient-to-b dark:from-muted dark:via-gray-700 dark:to-gray-900 
               transition duration-300"
						>
							<div className="rounded-full p-5 bg-primary/10 group-hover:bg-primary/20 transition duration-300">
								<item.icon className="w-10 h-10 text-primary group-hover:scale-110 transition-transform duration-300" />
							</div>
							<h3 className="mt-4 font-semibold text-lg group-hover:text-primary transition duration-300">
								{item.title}
							</h3>
							<p className="mt-2 text-sm text-muted-foreground  transition duration-300">
								{item.description}
							</p>
							<div className="absolute inset-0 opacity-0 group-hover:opacity-5 rounded-full bg-primary transition duration-300" />
						</div>
					))}
				</div>
			</div>
		</section>
	);
}
