"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";

import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

import { Button } from "@/components/ui/button";
import { IMAGES } from "@/constants/files";

export default function Hero2() {
	// State to manage visibility of additional content
	const [isOpen, setIsOpen] = useState(false);

	// Function to toggle the visibility
	const toggleContent = () => {
		setIsOpen((prevState) => !prevState);
	};

	const carouselRef = useRef<HTMLDivElement>(null); // Specify the type here
	const [currentIndex, setCurrentIndex] = useState(0);

	// Handle keyboard navigation
	useEffect(() => {
		const handleKeyDown = (e: KeyboardEvent) => {
			if (e.key === "ArrowLeft") handlePrev();
			if (e.key === "ArrowRight") handleNext();
		};

		window.addEventListener("keydown", handleKeyDown);
		return () => window.removeEventListener("keydown", handleKeyDown);
	}, [currentIndex]);

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
							<b>Our Diaspora Health Plans offer two key benefits:</b>
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
	const itemCount = heroContent.length;

	const handleClick = (index: any) => {
		setCurrentIndex(index);
	};

	const handlePrev = () => {
		setCurrentIndex((prevIndex) =>
			prevIndex === 0 ? itemCount - 1 : prevIndex - 1
		);
	};

	const handleNext = () => {
		setCurrentIndex((prevIndex) =>
			prevIndex === itemCount - 1 ? 0 : prevIndex + 1
		);
	};

	useEffect(() => {
		if (carouselRef.current) {
			const itemWidth = carouselRef.current.clientWidth / 2; // Width of the visible area divided by 2 for centering
			const scrollToIndex = currentIndex; // Current index to scroll to

			carouselRef.current.scrollTo({
				left: itemWidth * scrollToIndex, // Calculate the scroll position based on the item width
				behavior: "smooth",
			});
		}
	}, [currentIndex]);

	return (
		<div className="min-h-screen bg-muted/50">
			{/* Text Section */}
			<section className="relative pt-16 pb-5 ">
				<div className="container mx-auto px-4">
					<div className="max-w-4xl mx-auto text-center">
						<h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6">
							{heroContent[currentIndex].title}
						</h1>
						<p className="text-lg sm:text-xl mb-8 text-muted-foreground">
							{heroContent[currentIndex].description}
						</p>
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
					</div>
				</div>
			</section>

			{/* Carousel Section */}
			<section className="relative overflow-hidden py-10">
				<div className="container mx-auto px-4">
					<div className="max-w-full mx-auto">
						<motion.div
							ref={carouselRef}
							className="flex overflow-x-auto hide-scrollbar cursor-grab active:cursor-grabbing"
							transition={{
								duration: 10, // Adjust speed here
								repeat: Infinity,
								ease: "linear",
							}}
						>
							<div className="flex gap-4 px-[20%] py-4">
								{/* Duplicate items for seamless scrolling */}
								{heroContent.map((content, index) => (
									<motion.div
										key={index}
										className={`relative flex-shrink-0 w-[60vw] md:w-[40vw] max-w-xl aspect-[16/9] rounded-2xl overflow-hidden
                      ${currentIndex === index % itemCount ? "ring-2 ring-primary ring-offset-2" : "opacity-50"}
                    `}
										animate={{
											scale: currentIndex === index % itemCount ? 1 : 0.9,
											opacity: currentIndex === index % itemCount ? 1 : 0.5,
										}}
										transition={{ duration: 0.3 }}
										onClick={() => handleClick(index % itemCount)}
									>
										<Image
											src={content.image}
											alt={content.title}
											fill
											className="object-cover"
											sizes="(max-width: 768px) 60vw, 40vw"
											priority
										/>
									</motion.div>
								))}
							</div>
						</motion.div>

						{/* Navigation Buttons */}
						<div className="flex justify-center space-x-4 mt-8">
							<Button
								variant="outline"
								size="icon"
								className="rounded-full hover:bg-primary/10"
								onClick={handlePrev}
							>
								<ChevronLeft className="h-6 w-6" />
							</Button>
							<Button
								variant="outline"
								size="icon"
								className="rounded-full hover:bg-primary/10"
								onClick={handleNext}
							>
								<ChevronRight className="h-6 w-6" />
							</Button>
						</div>
					</div>
				</div>
			</section>
		</div>
	);
}
