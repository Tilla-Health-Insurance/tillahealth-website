"use client";

import Image from "next/image";

import { Home, Hospital, Recycle, User, Users } from "lucide-react";

import { ServicesSection } from "@/components/module/Services";
import { IMAGES } from "@/constants/files";

export default function SocialResponsibilityPage() {
	const benefits = [
		"Offer free annual health check-ups for Ethiopian police, firefighters, and other frontline workers",
		"Provide access to preventive care and wellness programs to ensure their community heroes stay healthy and strong",
		"Collaborate with local organizations to extend additional health benefits and resources tailored to their needs",
	];
	const cards = [
		{
			icon: Hospital,
			title: "Access to Healthcare",
			description:
				"We provide free or subsidized healthcare services for low-income families and individuals as part of our commitment to universal health access.",
			href: "#",
		},
		{
			icon: Recycle,
			title: "Sustainability",
			description:
				"Promoting sustainable practices in healthcare delivery, ensuring our efforts have a lasting positive impact on the environment and society.",
			href: "#",
		},
		{
			icon: Users,
			title: "Community Outreach",
			description:
				"Ongoing health education programs, free screenings, and vaccination drives to empower communities with the tools they need for better health.",
			href: "#",
		},
		{
			icon: Home,
			title: "Elderly and Homeless Care",
			description:
				"Dedicated programs aimed at addressing the specific challenges faced by the elderly and the homeless, ensuring no one is left behind.",
			href: "#",
		},
	];
	return (
		<main className="min-h-screen bg-background">
			<div className="relative bg-primary overflow-hidden">
				<div className="container mx-auto px-4 py-16">
					<div className="grid lg:grid-cols-2 gap-12 items-center">
						<div className="text-white space-y-6">
							<h1 className="text-4xl lg:text-5xl font-bold leading-tight">
								Social Responsibility:
								<br />
								Tilla Health&apos;s
								<br />
								Commitment to
								<br />
								Community Support
							</h1>
							<p className="text-lg opacity-90">
								At Tilla Health, we believe in giving back to the community as
								part of our core values. Our mission extends beyond providing
								quality healthcare—we are deeply committed to making a positive
								impact in the lives of those who need it most. As part of our
								Social Responsibility initiative, we are actively working to
								support and assist underserved communities, including the
								elderly and the homeless.
							</p>
						</div>
						<div className="relative">
							<div className="relative aspect-square">
								<Image
									src={IMAGES.oldpeople}
									alt="Healthcare worker helping elderly person"
									width={600}
									height={600}
									className="rounded-lg"
								/>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div className="bg-zinc-900 relative overflow-hidden">
				<div className="container mx-auto px-4 py-16">
					<div className="grid lg:grid-cols-2 gap-12">
						<div className="space-y-6">
							<Image
								src={IMAGES.socialres4}
								alt="Uniformed personnel in formation"
								width={600}
								height={400}
								className="rounded-lg h-[20rem]"
							/>
							<Image
								src={IMAGES.socialres3}
								alt="Firefighters in action"
								width={600}
								height={400}
								className="rounded-lg"
							/>
						</div>
						<div className="text-white space-y-8">
							<div>
								<h2 className="text-3xl font-bold mb-4">
									Supporting and Assisting the Elderly and Homeless
								</h2>
								<p className="text-gray-300">
									Tilla Health is actively working to establish partnerships in
									this effort, including collaborations with organizations like
									Yagna Family Nursing Home Care Service, a respected nonprofit
									dedicated to providing care, shelter, and support for the
									elderly and homeless in Ethiopia.
								</p>
							</div>

							<div className="space-y-6">
								<div className="space-y-2">
									<h3 className="text-xl font-semibold">Elderly Support</h3>
									<p className="text-gray-300">
										We aim to provide essential resources such as healthcare
										services, nutritional assistance, and emotional support to
										elderly individuals without family or financial means.
									</p>
								</div>

								<div className="space-y-2">
									<h3 className="text-xl font-semibold">Homeless Assistance</h3>
									<p className="text-gray-300">
										Tilla Health is working on projects to rehabilitate and
										empower homeless individuals, offering them access to
										healthcare, shelter, and pathways to independence.
									</p>
								</div>

								<div className="space-y-2">
									<h3 className="text-xl font-semibold">
										Volunteering and Advocacy
									</h3>
									<p className="text-gray-300">
										Through planned partnerships, Tilla Health will participate
										in community initiatives, raising awareness and advocating
										for long-term solutions to support these vulnerable
										populations.
									</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>

			<div className="bg-zinc-900 border-t border-zinc-800">
				<div className="container mx-auto px-4 py-16 grid lg:grid-cols-2 gap-2">
					<div className="max-w-2xl">
						<h2 className="text-3xl font-bold text-white mb-6">
							Supporting Our Frontline Heroes
						</h2>
						<p className="text-gray-300 mb-8">
							Tilla Health recognizes the vital role that Ethiopian police,
							firefighters, and other frontline workers play in supporting and
							protecting our communities. As part of our social responsibility,
							Tilla Health Insurance will:
						</p>
						<ul className="space-y-4">
							{benefits.map((benefit, index) => (
								<li
									key={index}
									className="flex items-start gap-3 text-gray-300"
								>
									<span className="flex-shrink-0 size-2 mt-2 rounded-full bg-red-500" />
									{benefit}
								</li>
							))}
						</ul>
					</div>
					<div className="space-y-6">
						<Image
							src={IMAGES.socialres2}
							alt="Firefighters in action"
							width={600}
							height={400}
							className="rounded-lg"
						/>
					</div>
				</div>
			</div>

			<ServicesSection
				services={cards}
				title="Tilla Health's Broader Commitment to Social Responsibility"
				description="How You Can Support: If you share our commitment to uplifting the
							community, there are many ways to get involved:"
				haveReadMore={false}
			/>
			{/* <HeroSection /> */}
			{/* <InitiativesSection />
			<FrontlineSupport />
			<CommitmentSection />
			<Footer /> */}
		</main>
	);
}
