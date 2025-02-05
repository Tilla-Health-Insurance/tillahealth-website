import Image from "next/image";

import { Ambulance, Cloud, Stethoscope, Video } from "lucide-react";

import { IMAGES } from "@/constants/files";

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
		<section className="pt-24 pb-32 relative overflow-hidden">
			<div className="container px-4 md:px-6">
				{/* <h3 className="text-sm font-semibold text-primary lg:text-white mb-4 text-center hover:tracking-wider transition-all duration-300">
					{">>"}Technologies{"<<"}
				</h3> */}
				<SectionHeading
					title="Digital Health Innovation"
					description="Leveraging technology to transform healthcare delivery across Ethiopia"
					className="text-center mb-12 mt-10"
				/>
				<div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4 max-w-6xl mx-auto">
					{innovations.map((item) => (
						<div
							key={item.title}
							className="group relative flex flex-col items-center text-center p-6 rounded-xl hover:-translate-y-1 transition-all duration-300 shadow-lg sm:shadow-none"
						>
							<div className="relative w-full min-h-[250px] hidden sm:block">
								<Image
									src={IMAGES.waterDrop}
									alt="background"
									fill
									sizes="(max-width: 1024px) 50vw, 30vw"
									className="absolute inset-0 object-cover drop-shadow-md -z-10 scale-150 transition-transform duration-500 p-4 brightness-[100] contrast-100 invert dark:invert-0"
								/>
								<div className="flex flex-col items-center justify-center mt-2 h-full relative z-10">
									<item.icon className="w-8 h-8 text-primary mb-10 group-hover:rotate-6 transition-transform duration-300" />
									<h3 className="font-semibold text-sm mb-3 group-hover:tracking-wide transition-all duration-300">
										{item.title}
									</h3>
									<p className="text-xs text-muted-foreground opacity-90 group-hover:opacity-100 transition-opacity duration-300">
										{item.description}
									</p>
								</div>
							</div>

							{/* Mobile View  */}
							<div className="sm:hidden relative w-full">
								<div className="relative w-full h-[120px] mb-4">
									<Image
										src={IMAGES.waterDrop}
										alt="background"
										fill
										sizes="80vw"
										className="absolute inset-0 object-contain drop-shadow-lg -z-10 scale-90 group-hover:scale-130 transition-transform duration-500 brightness-[100] contrast-100 invert dark:invert-0"
									/>
									<div className="flex items-center justify-center h-full">
										<item.icon className="w-10 h-10 mt-5 text-primary group-hover:rotate-6 transition-transform duration-300" />
									</div>
								</div>
								<h3 className="font-semibold text-sm mb-2 group-hover:tracking-wide transition-all duration-300">
									{item.title}
								</h3>
								<p className="text-xs text-muted-foreground opacity-90 group-hover:opacity-100 transition-opacity duration-300">
									{item.description}
								</p>
							</div>
						</div>
					))}
				</div>
			</div>

			{/* Decorative Umbrella SVG - Desktop Only
			<div className="absolute bottom-0 left-1/2 -translate-x-1/2 -z-10 hidden lg:block w-[90%] mt-10">
				<svg
					width="100%"
					height="80"
					viewBox="0 0 1500 80"
					fill="none"
					xmlns="http://www.w3.org/2000/svg"
					preserveAspectRatio="none"
				>
					<path
						d="M0 80 C375 -20, 1125 -20, 1500 80 C1125 20, 375 20, 0 80"
						fill="red"
					/>
				</svg>
			</div> */}

			{/* <div className="hidden lg:block">
				<MorphingShape />
			</div> */}
		</section>
	);
}
