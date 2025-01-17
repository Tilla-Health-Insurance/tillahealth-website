"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

import { AnimatePresence, motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

import { Button } from "@/components/ui/button";
import { IMAGES } from "@/constants/files";

export default function Hero() {
	const [currentIndex, setCurrentIndex] = useState(0);
	// State to manage visibility of additional content
	const [isOpen, setIsOpen] = useState(false);

	const handleNext = () => {
		setCurrentIndex((prev) => (prev + 1) % heroContent.length);
	};

	const handlePrev = () => {
		setCurrentIndex(
			(prev) => (prev - 1 + heroContent.length) % heroContent.length
		);
	};

	// Function to toggle the visibility
	const toggleContent = () => {
		setIsOpen((prevState) => !prevState);
	};
	const heroContent = [
		{
			title: "Tilla Health",
			description: (
				<>
					At <b className="text-primary font-bold">Tilla Health </b>, we are
					committed to providing accessible, affordable, and comprehensive
					healthcare coverage to individuals and families living across
					Ethiopia. Whether you&apos;re part of the local community, an
					employee, or a government worker, our health plans are tailored to
					meet your specific healthcare needs.
					{/* Button to toggle additional content */}
					<button onClick={toggleContent} className="text-primary ml-1">
						{isOpen ? "Hide Details" : "Show Details"}
					</button>
					<br />
					<br />
					{/* Conditional rendering of additional content */}
					{isOpen && (
						<p>
							For the Ethiopian Diaspora, we also offer health coverage plans
							that allow you to protect your loved ones back home in Ethiopia,
							ensuring they have access to quality healthcare services.
							Additionally, our Global Health Plans are designed for
							international visitors to Ethiopia, ensuring seamless access to
							care during their stay.
							<br />
							<br /> Explore our range of plans, carefully crafted to offer you
							and your loved ones the care you need, wherever you are.
						</p>
					)}
				</>
			),
			image: IMAGES.heroBackground,
			mobileImage: IMAGES.member3, // Add mobile version of the image
			href: "/who-we-are",
		},
		{
			title: "Diaspora Health Connect",
			description: (
				<>
					At <b className="text-primary font-bold">Diaspora Health Connect</b>,
					we understand the importance of securing health coverage for both
					yourself and your loved ones, no matter where you are.
					{/* Button to toggle additional content */}
					<button onClick={toggleContent} className="text-primary ml-1">
						{isOpen ? "Hide Details" : "Show Details"}
					</button>
					<br />
					<br />
					{/* Conditional rendering of additional content */}
					{isOpen && (
						<p>
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
									Health coverage for you, whether you&apos;re visiting Ethiopia
									for a short-term or long-term stay, giving you peace of mind
									during your time at home.
								</li>
								<li>
									Health coverage for your loved ones in Ethiopia, ensuring they
									have access to the medical care they need while you are away.
								</li>
							</ul>
							<br />
							With Diaspora Health Connect, we make healthcare coverage easy,
							accessible, and reliable for you and your family in Ethiopia.
						</p>
					)}
				</>
			),
			image: IMAGES.diasporahero,
			mobileImage: IMAGES.diasporahero, // Add mobile version of the image
			href: "/plan/diaspora-health-connect",
		},
		{
			title: "Individuals and Families",
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
					<br />
				</>
			),
			image: IMAGES.familyhero,
			mobileImage: IMAGES.familyhero, // Add mobile version of the image
			href: "/plan/family-individual-health-plan",
		},
		{
			title: "Interational Plan",
			description: (
				<>
					At <b className="text-primary font-bold">Tilla Health </b>, we are
					dedicated to providing comprehensive healthcare coverage for the
					international community traveling to Ethiopia, whether for work,
					leisure, or any other purpose.
					{/* Button to toggle additional content */}
					<button onClick={toggleContent} className="text-primary ml-1">
						{isOpen ? "Hide Details" : "Show Details"}
					</button>
					<br />
					<br />
					{/* Conditional rendering of additional content */}
					{isOpen && (
						<p>
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
							With <b className="text-primary font-bold">Tilla Health</b>&apos;s
							International Health Plans, you can enjoy your time in Ethiopia,
							knowing that your health is protected.
						</p>
					)}
				</>
			),
			image: IMAGES.interHero,
			mobileImage: IMAGES.interHero, // Add mobile version of the image
			href: "/plan/international-plan",
		},
		{
			title: "NGO Health Plan",
			description: (
				<>
					At <b className="text-primary font-bold"> Tilla Health </b>, we
					recognize the unique healthcare needs of individuals, couples, and
					families working with NGOs in Ethiopia. Our
					<b className="text-primary font-bold"> NGO Health Plans </b> are
					specifically designed to offer flexible and comprehensive coverage
					that caters to the distinct needs of NGO employees.
					<br />
				</>
			),
			image: IMAGES.ngohero,
			mobileImage: IMAGES.ngohero, // Add mobile version of the image
			href: "/plan/ngo-health-plan",
		},
		{
			title: "Private Sector Health Plan",
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
				</>
			),
			image: IMAGES.privateHero,
			mobileImage: IMAGES.privateHero, // Add mobile version of the image
			href: "/plan/private-sector-health-plan",
		},
		{
			title: "Federal Employee Program",
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
				</>
			),
			image: IMAGES.feredalHero,
			mobileImage: IMAGES.feredalHero, // Add mobile version of the image
			href: "/plan/federal-employee-program",
		},
	];

	return (
		<div>
			<motion.section
				initial={{ opacity: 0 }}
				animate={{ opacity: 1 }}
				transition={{ duration: 0.5 }}
				className="relative h-[50vh]" // Fixed heights for different screen sizes
			>
				{/* Background Image Container */}
				<div className="absolute inset-0">
					{/* Desktop Image */}
					{/* <div className="hidden md:block w-full h-full"> */}
					<div className="relative w-full h-[60vh] overflow-hidden">
						<Image
							src={heroContent[currentIndex].image}
							alt="Hero Background"
							fill
							className="object-cover brightness-50"
							priority
							sizes="100vw"
						/>
					</div>
					{/* </div> */}
					{/* Mobile Image */}
					<div className="block md:hidden w-full h-full">
						<Image
							src={
								heroContent[currentIndex].mobileImage ||
								heroContent[currentIndex].image
							}
							alt="Hero Background"
							fill
							className="object-cover brightness-50"
							priority
							sizes="100vw"
						/>
					</div>
				</div>

				{/* Content Container */}
				<div className="relative h-full flex items-center">
					<div className="container mx-auto px-4 sm:px-6 lg:px-8">
						<AnimatePresence mode="wait">
							<motion.div
								key={currentIndex}
								initial={{ opacity: 0, y: 20 }}
								animate={{ opacity: 1, y: 0 }}
								exit={{ opacity: 0, y: -20 }}
								transition={{ duration: 0.5 }}
								className="max-w-4xl mx-auto text-center "
							>
								<motion.h1 className="text-4xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-4 sm:mb-6">
									{heroContent[currentIndex].title}
								</motion.h1>
							</motion.div>
						</AnimatePresence>
					</div>
				</div>

				{/* Navigation Buttons */}
				<div
					className={`absolute  sm:bottom-12 left-0 right-0 ${isOpen ? "bottom-4" : "bottom-8"}`}
				>
					<div className="container mx-auto px-4 sm:px-6 lg:px-8">
						<div className="flex justify-center space-x-4">
							<Button
								variant="outline"
								size="icon"
								className="bg-white/10 hover:bg-muted text-white rounded-full w-10 h-10 sm:w-12 sm:h-12"
								onClick={handlePrev}
							>
								<ChevronLeft className="h-5 w-5 sm:h-6 sm:w-6" />
							</Button>
							<Button
								variant="outline"
								size="icon"
								className="bg-white/10 hover:bg-muted text-white rounded-full w-10 h-10 sm:w-12 sm:h-12"
								onClick={handleNext}
							>
								<ChevronRight className="h-5 w-5 sm:h-6 sm:w-6" />
							</Button>
						</div>
					</div>
				</div>
			</motion.section>
			<motion.section
				initial={{ opacity: 0 }}
				animate={{ opacity: 1 }}
				transition={{ duration: 0.5 }}
				className={`relative ${isOpen ? "md:h-[80vh]" : "md:h-[40vh]"} md:h-[50vh] border-b-2 p-2 mb-4 bg-muted`} // Fixed heights for different screen sizes
			>
				{/* Content Container */}
				<div className="relative h-full flex items-center text-center">
					<div className="container mx-auto px-4 sm:px-6 lg:px-6">
						<AnimatePresence mode="wait">
							<motion.div
								key={currentIndex}
								initial={{ opacity: 0, y: 20 }}
								animate={{ opacity: 1, y: 0 }}
								exit={{ opacity: 0, y: -20 }}
								transition={{ duration: 0.5 }}
								className="max-w-4xl mx-auto"
							>
								{/* <motion.h1 className="text-3xl sm:text-2xl md:text-3xl lg:text-4xl font-bold  mb-4 sm:mb-6">
									{heroContent[currentIndex].title}
								</motion.h1> */}
								<motion.p className="text-base sm:text-base md:text-lg mb-6">
									{heroContent[currentIndex].description}
								</motion.p>
								{currentIndex !== 0 && (
									<Button
										size="lg"
										variant="default"
										className="rounded-md hover:bg-primary shadow-md w-full sm:w-auto"
									>
										<Link href={heroContent[currentIndex].href as any}>
											Get Started
										</Link>
									</Button>
								)}
							</motion.div>
						</AnimatePresence>
					</div>
				</div>

				{/* Navigation Buttons */}
				{/* <div
					className={`absolute  sm:bottom-12 left-0 right-0 ${isOpen ? "bottom-4" : "bottom-8"}`}
				>
					<div className="container mx-auto px-4 sm:px-6 lg:px-8">
						<div className="flex justify-center space-x-4">
							<Button
								variant="outline"
								size="icon"
								className="bg-white/10 hover:bg-muted text-white rounded-full w-10 h-10 sm:w-12 sm:h-12"
								onClick={handlePrev}
							>
								<ChevronLeft className="h-5 w-5 sm:h-6 sm:w-6" />
							</Button>
							<Button
								variant="outline"
								size="icon"
								className="bg-white/10 hover:bg-muted text-white rounded-full w-10 h-10 sm:w-12 sm:h-12"
								onClick={handleNext}
							>
								<ChevronRight className="h-5 w-5 sm:h-6 sm:w-6" />
							</Button>
						</div>
					</div>
				</div> */}
			</motion.section>
		</div>
	);
}
