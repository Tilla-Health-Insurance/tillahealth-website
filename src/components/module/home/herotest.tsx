"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

import { AnimatePresence, motion } from "framer-motion";
import { ChevronLeft, ChevronRight, Minus, Plus } from "lucide-react";

import { Button } from "@/components/ui/button";
import { IMAGES } from "@/constants/files";

export default function HeroTest() {
	const [currentIndex, setCurrentIndex] = useState(0);
	const [isOpen, setIsOpen] = useState(false);

	const handleNext = () => {
		setCurrentIndex((prev) => (prev + 1) % heroContent.length);
	};

	const handlePrev = () => {
		setCurrentIndex(
			(prev) => (prev - 1 + heroContent.length) % heroContent.length
		);
	};

	const toggleContent = () => {
		setIsOpen((prevState) => !prevState);
	};

	const heroContent = [
		{
			title: "Tilla Health",
			subtitle: "Comprehensive Healthcare Coverage",
			description: (
				<>
					At <b className="text-primary font-bold">Tilla Health</b>, we are
					committed to providing accessible, affordable, and comprehensive
					healthcare coverage to individuals and families living across
					Ethiopia.
					{isOpen && (
						<motion.div
							initial={{ opacity: 0, height: 0 }}
							animate={{ opacity: 1, height: "auto" }}
							exit={{ opacity: 0, height: 0 }}
							className="mt-4"
						>
							<p className="text-muted-foreground">
								Whether you're part of the local community, an employee, or a
								government worker, our health plans are tailored to meet your
								specific healthcare needs. For the Ethiopian Diaspora, we also
								offer health coverage plans that allow you to protect your loved
								ones back home in Ethiopia, ensuring they have access to quality
								healthcare services.
							</p>
						</motion.div>
					)}
				</>
			),
			image: IMAGES.heroBackground,
			mobileImage: IMAGES.member3,
			href: "/who-we-are",
		},
		{
			title: "Diaspora Health Connect",
			subtitle: "Seamless Healthcare Solutions",
			description: (
				<>
					At <b className="text-primary font-bold">Diaspora Health Connect</b>,
					we understand the importance of securing health coverage for both
					yourself and your loved ones, no matter where you are.
					{isOpen && (
						<motion.div
							initial={{ opacity: 0, height: 0 }}
							animate={{ opacity: 1, height: "auto" }}
							exit={{ opacity: 0, height: 0 }}
							className="mt-4"
						>
							<p className="text-muted-foreground">
								<b className="text-primary font-bold">
									Our Diaspora Health Plans
								</b>
								are designed to provide seamless healthcare solutions for
								Ethiopians living abroad, ensuring you have access to quality
								healthcare when you return to Ethiopia and that your family back
								home is protected.
								<br />
								<br />
								Our Diaspora Health Plans offer two key benefits:
								<ul className="list-disc list-inside ml-5">
									<li>
										Health coverage for you, whether you&apos;re visiting
										Ethiopia for a short-term or long-term stay, giving you
										peace of mind during your time at home.
									</li>
									<li>
										Health coverage for your loved ones in Ethiopia, ensuring
										they have access to the medical care they need while you are
										away.
									</li>
								</ul>
								<br />
								With Diaspora Health Connect, we make healthcare coverage easy,
								accessible, and reliable for you and your family in Ethiopia.
							</p>
						</motion.div>
					)}
				</>
			),
			image: IMAGES.diasporahero,
			mobileImage: IMAGES.diasporahero,
			href: "/plan/diaspora-health-connect",
		},
		{
			title: "Individuals and Families",
			subtitle: "Customized Health Coverage",
			description: (
				<>
					At <b className="text-primary font-bold">Tilla Health</b>, we
					understand that each individual and family has unique healthcare
					needs.{" "}
					<b className="text-primary font-bold">
						Our Family and Individual Health Plans
					</b>{" "}
					are designed to provide customized, flexible, and comprehensive health
					coverage options for those living across all regions of Ethiopia.
					{isOpen && (
						<motion.div
							initial={{ opacity: 0, height: 0 }}
							animate={{ opacity: 1, height: "auto" }}
							exit={{ opacity: 0, height: 0 }}
							className="mt-4"
						>
							<p className="text-muted-foreground">
								Our plans offer a range of benefits to meet your specific needs,
								including coverage for doctor visits, hospital stays,
								prescription drugs, and more. We also offer flexible payment
								options to make our plans accessible to everyone.
							</p>
						</motion.div>
					)}
					<br />
				</>
			),
			image: IMAGES.familyhero,
			mobileImage: IMAGES.familyhero,
			href: "/plan/family-individual-health-plan",
		},
		{
			title: "Interational Plan",
			subtitle: "Seamless Healthcare for International Travelers",
			description: (
				<>
					At <b className="text-primary font-bold">Tilla Health </b>, we are
					dedicated to providing comprehensive healthcare coverage for the
					international community traveling to Ethiopia, whether for work,
					leisure, or any other purpose.
					{isOpen && (
						<motion.div
							initial={{ opacity: 0, height: 0 }}
							animate={{ opacity: 1, height: "auto" }}
							exit={{ opacity: 0, height: 0 }}
							className="mt-4"
						>
							<p className="text-muted-foreground">
								<b className="text-primary font-bold">
									{" "}
									Our International Health Plans{" "}
								</b>
								are designed to offer seamless access to healthcare services
								during your stay in Ethiopia, ensuring you receive the care you
								need, wherever you are.
								<br />
								<br />
								Our International Health Plans provide:
								<ul className="list-disc list-inside ml-5">
									<li>
										Comprehensive global coverage during your time in Ethiopia,
										offering peace of mind for both short-term and long-term
										stays.
									</li>
									<li>
										Seamless access to healthcare services, ensuring you are
										covered and supported throughout your visit.
									</li>
								</ul>
								<br />
								With <b className="text-primary font-bold">Tilla Health</b>
								&apos;s International Health Plans, you can enjoy your time in
								Ethiopia, knowing that your health is protected.
							</p>
						</motion.div>
					)}
				</>
			),
			image: IMAGES.interHero,
			mobileImage: IMAGES.interHero,
			href: "/plan/international-plan",
		},
		{
			title: "NGO Health Plan",
			subtitle: "Flexible Coverage for NGO Employees",
			description: (
				<>
					At <b className="text-primary font-bold"> Tilla Health </b>, we
					recognize the unique healthcare needs of individuals, couples, and
					families working with NGOs in Ethiopia. Our
					<b className="text-primary font-bold"> NGO Health Plans </b> are
					specifically designed to offer flexible and comprehensive coverage
					that caters to the distinct needs of NGO employees.
					{isOpen && (
						<motion.div
							initial={{ opacity: 0, height: 0 }}
							animate={{ opacity: 1, height: "auto" }}
							exit={{ opacity: 0, height: 0 }}
							className="mt-4"
						>
							<p className="text-muted-foreground">
								Our NGO Health Plans offer a range of benefits to meet the
								specific needs of NGO employees, including coverage for doctor
								visits, hospital stays, prescription drugs, and more. We also
								offer flexible payment options to make our plans accessible to
								everyone.
							</p>
						</motion.div>
					)}
					<br />
				</>
			),
			image: IMAGES.ngohero,
			mobileImage: IMAGES.ngohero,
			href: "/plan/ngo-health-plan",
		},
		{
			title: "Private Sector Health Plan",
			subtitle: "Comprehensive Coverage for Private Sector Employees",
			description: (
				<>
					At <b className="text-primary font-bold">Tilla Health </b>, we are
					dedicated to supporting local private employers and their employees in
					Ethiopia with our
					<b className="text-primary font-bold"> Private Sector Plans </b>.
					These comprehensive and customizable health coverage options are
					designed to promote well-being, improve productivity, and ensure
					access to quality healthcare services. With
					<b className="text-primary font-bold">Tilla Health</b>, you can invest
					in the health of your employees, fostering a thriving and productive
					workforce for your business.
					{isOpen && (
						<motion.div
							initial={{ opacity: 0, height: 0 }}
							animate={{ opacity: 1, height: "auto" }}
							exit={{ opacity: 0, height: 0 }}
							className="mt-4"
						>
							<p className="text-muted-foreground">
								Our Private Sector Plans offer a range of benefits to meet the
								specific needs of private sector employees, including coverage
								for doctor visits, hospital stays, prescription drugs, and more.
								We also offer flexible payment options to make our plans
								accessible to everyone.
							</p>
						</motion.div>
					)}
				</>
			),
			image: IMAGES.privateHero,
			mobileImage: IMAGES.privateHero,
			href: "/plan/private-sector-health-plan",
		},
		{
			title: "Federal Employee Program",
			subtitle: "Healthcare for Federal Employees in Ethiopia",
			description: (
				<>
					At <b className="text-primary font-bold">Tilla Health</b>, we are
					proud to offer our
					<b className="text-primary font-bold">
						Federal Employee Program (FEP) Plans
					</b>
					, specifically designed to meet the unique healthcare needs of federal
					employees in Ethiopia. These plans provide comprehensive benefits and
					ensure access to high-quality care for all those serving in the public
					sector.
					{isOpen && (
						<motion.div
							initial={{ opacity: 0, height: 0 }}
							animate={{ opacity: 1, height: "auto" }}
							exit={{ opacity: 0, height: 0 }}
							className="mt-4"
						>
							<p className="text-muted-foreground">
								Our FEP Plans offer a range of benefits to meet the specific
								needs of federal employees, including coverage for doctor
								visits, hospital stays, prescription drugs, and more. We also
								offer flexible payment options to make our plans accessible to
								everyone.
							</p>
						</motion.div>
					)}
				</>
			),
			image: IMAGES.feredalHero,
			mobileImage: IMAGES.feredalHero,
			href: "/plan/federal-employee-program",
		},
	];

	return (
		<div className="relative overflow-hidden">
			<motion.section
				initial={{ opacity: 0 }}
				animate={{ opacity: 1 }}
				transition={{ duration: 0.5 }}
				className="relative min-h-[100vh]"
			>
				{/* Background Image with Gradient Overlay */}
				<div className="absolute inset-0">
					<div className="relative w-full h-full">
						<Image
							src={heroContent[currentIndex].image || "/placeholder.svg"}
							alt="Hero Background"
							fill
							className="object-cover"
							priority
							sizes="100vw"
						/>
						<div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-transparent" />
					</div>
				</div>

				{/* Content Container */}
				<div className="relative container mx-auto px-4 h-full">
					<div className="grid lg:grid-cols-2 gap-8 h-full items-center py-20">
						<AnimatePresence mode="wait">
							<motion.div
								key={currentIndex}
								initial={{ opacity: 0, x: -20 }}
								animate={{ opacity: 1, x: 0 }}
								exit={{ opacity: 0, x: 20 }}
								transition={{ duration: 0.5 }}
								className="text-white space-y-6"
							>
								{/* Slide Counter */}
								<div className="flex items-center space-x-4 text-white/60">
									<span className="text-xl font-medium">
										{String(currentIndex + 1).padStart(2, "0")}
									</span>
									<div className="h-[1px] w-12 bg-white/60" />
									<span className="text-xl">
										{String(heroContent.length).padStart(2, "0")}
									</span>
								</div>

								<motion.h1
									className="text-5xl md:text-6xl lg:text-7xl font-bold"
									initial={{ opacity: 0, y: 20 }}
									animate={{ opacity: 1, y: 0 }}
									transition={{ delay: 0.2 }}
								>
									{heroContent[currentIndex].title}
								</motion.h1>

								<motion.div
									className="prose prose-lg prose-invert max-w-none"
									initial={{ opacity: 0, y: 20 }}
									animate={{ opacity: 1, y: 0 }}
									transition={{ delay: 0.3 }}
								>
									{heroContent[currentIndex].description}
								</motion.div>

								<motion.div
									className="flex items-center gap-4"
									initial={{ opacity: 0, y: 20 }}
									animate={{ opacity: 1, y: 0 }}
									transition={{ delay: 0.4 }}
								>
									{currentIndex !== 0 && (
										<Button
											size="lg"
											variant="default"
											className="rounded-full px-8"
										>
											<Link href={heroContent[currentIndex].href as any}>
												Get Started
											</Link>
										</Button>
									)}
									<Button
										variant="outline"
										size="lg"
										onClick={toggleContent}
										className="bg-white/50 rounded-full border-primary/20 hover:bg-white/10"
									>
										{isOpen ? (
											<Minus className="mr-2 h-4 w-4" />
										) : (
											<Plus className="mr-2 h-4 w-4" />
										)}
										{isOpen ? "Show Less" : "Learn More"}
									</Button>
								</motion.div>
							</motion.div>
						</AnimatePresence>

						{/* Navigation Controls */}
						<div className="flex justify-end items-end h-full pb-12">
							<div className="flex items-center gap-4">
								<Button
									variant="outline"
									size="icon"
									className="rounded-full w-12 h-12 border-white/20 hover:bg-white/10"
									onClick={handlePrev}
								>
									<ChevronLeft className="h-6 w-6" />
								</Button>
								<Button
									variant="outline"
									size="icon"
									className="rounded-full w-12 h-12 border-white/20 hover:bg-white/10"
									onClick={handleNext}
								>
									<ChevronRight className="h-6 w-6" />
								</Button>
							</div>
						</div>
					</div>
				</div>

				{/* Decorative Elements */}
				<div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
				{/* <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-background to-transparent" /> */}
			</motion.section>
		</div>
	);
}
