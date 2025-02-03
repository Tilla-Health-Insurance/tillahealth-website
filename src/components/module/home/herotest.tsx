"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";

import { AnimatePresence, motion } from "framer-motion";
import { ChevronLeft, ChevronRight, Minus, Plus } from "lucide-react";

import { Button } from "@/components/ui/button";
// Assuming IMAGES is imported from your constants
import { IMAGES } from "@/constants/files";
import { cn } from "@/lib/utils";

export default function HeroSlider() {
	const [currentIndex, setCurrentIndex] = useState(0);
	const [expandedStates, setExpandedStates] = useState<boolean[]>([]);
	const contentRefs = useRef<(HTMLDivElement | null)[]>([]);
	const autoPlayRef = useRef<number | null>(null);
	const [isPaused, setIsPaused] = useState(false);

	const heroContent = [
		{
			title: "Health Coverage Made Simple",
			description: (
				<>
					<b className=" font-bold">Tilla Health </b> connects you to
					personalized plans, virtual care, and the tools you need to stay
					healthy and informed. Experienced care that fits your life.
				</>
			),
			expandedContent: (
				<p>
					For the Ethiopian Diaspora, we also offer health coverage plans that
					allow you to protect your loved ones back home in Ethiopia, ensuring
					they have access to quality healthcare services. Additionally, our
					Global Health Plans are designed for international visitors to
					Ethiopia, ensuring seamless access to care during their stay.
					<br />
					<br /> Explore our range of plans, carefully crafted to offer you and
					your loved ones the care you need, wherever you are.
				</p>
			),
			image: IMAGES.heroBackground,
			mobileImage: IMAGES.member3,
			href: "/who-we-are",
		},
		{
			title: "Diaspora Health Connect",
			description: (
				<>
					At <b className=" font-bold">Diaspora Health Connect</b>, we
					understand the importance of securing health coverage for both
					yourself and your loved ones, no matter where you are.
				</>
			),
			expandedContent: (
				<p>
					<b className="font-bold">Our Diaspora Health Plans</b>
					are designed to provide seamless healthcare solutions for Ethiopians
					living abroad, ensuring you have access to quality healthcare when you
					return to Ethiopia and that your family back home is protected.
					<br />
					<br />
					<b>Our Diaspora Health Plans offer two key benefits:</b>
					<ul className="list-disc list-inside ml-5">
						<li>
							Health coverage for you, whether you&apos;re visiting Ethiopia for
							a short-term or long-term stay, giving you peace of mind during
							your time at home.
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
			),
			image: IMAGES.diasporahero,
			mobileImage: IMAGES.diasporahero, // Add mobile version of the image
			href: "/plan/diaspora-health-connect",
		},
		{
			title: "Individuals and Families",
			description: (
				<>
					At <b className=" font-bold">Tilla Health</b>, we understand that each
					individual and family has unique healthcare needs.{" "}
					<b className=" font-bold">Our Family and Individual Health Plans</b>{" "}
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
					At <b className=" font-bold">Tilla Health </b>, we are dedicated to
					providing comprehensive healthcare coverage for the international
					community traveling to Ethiopia, whether for work, leisure, or any
					other purpose.
				</>
			),
			expandedContent: (
				<p>
					<b className=" font-bold"> Our International Health Plans </b>
					are designed to offer seamless access to healthcare services during
					your stay in Ethiopia, ensuring you receive the care you need,
					wherever you are.
					<br />
					<br />
					Our International Health Plans provide:
					<ul className="list-disc list-inside ml-5">
						<li>
							Comprehensive global coverage during your time in Ethiopia,
							offering peace of mind for both short-term and long-term stays.
						</li>
						<li>
							Seamless access to healthcare services, ensuring you are covered
							and supported throughout your visit.
						</li>
					</ul>
					<br />
					With <b className=" font-bold">Tilla Health</b>&apos;s International
					Health Plans, you can enjoy your time in Ethiopia, knowing that your
					health is protected.
				</p>
			),
			image: IMAGES.interHero,
			mobileImage: IMAGES.interHero, // Add mobile version of the image
			href: "/plan/international-plan",
		},
		{
			title: "NGO Health Plan",
			description: (
				<>
					At <b className=" font-bold"> Tilla Health </b>, we recognize the
					unique healthcare needs of individuals, couples, and families working
					with NGOs in Ethiopia. Our
					<b className=" font-bold"> NGO Health Plans </b> are specifically
					designed to offer flexible and comprehensive coverage that caters to
					the distinct needs of NGO employees.
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
					At <b className=" font-bold">Tilla Health </b>, we are dedicated to
					supporting local private employers and their employees in Ethiopia
					with our
					<b className=" font-bold"> Private Sector Plans </b>. These
					comprehensive and customizable health coverage options are designed to
					promote well-being, improve productivity, and ensure access to quality
					healthcare services.
				</>
			),
			expandedContent: (
				<>
					With <b className=" font-bold">Tilla Health</b>, you can invest in the
					health of your employees, fostering a thriving and productive
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
					At <b className=" font-bold">Tilla Health</b>, we are proud to offer
					our
					<b className=" font-bold">Federal Employee Program (FEP) Plans</b>,
					specifically designed to meet the unique healthcare needs of federal
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

	useEffect(() => {
		// Initialize expanded states array
		setExpandedStates(new Array(heroContent.length).fill(false));

		// Start autoplay
		// startAutoPlay();

		return () => {
			if (autoPlayRef.current) {
				clearInterval(autoPlayRef.current);
			}
		};
	}, []);

	// const startAutoPlay = () => {
	// 	if (autoPlayRef.current) {
	// 		clearInterval(autoPlayRef.current);
	// 	}

	// 	if (!isPaused) {
	// 		autoPlayRef.current = window.setInterval(() => {
	// 			handleNext();
	// 		}, 5000); // Change slide every 5 seconds
	// 	}
	// };

	const handleNext = () => {
		setCurrentIndex((prev) => (prev + 1) % heroContent.length);
		// startAutoPlay(); // Reset timer when manually changed
	};

	const handlePrev = () => {
		setCurrentIndex(
			(prev) => (prev - 1 + heroContent.length) % heroContent.length
		);
		// startAutoPlay(); // Reset timer when manually changed
	};

	const toggleContent = (index: number) => {
		if (expandedStates[index]) {
			// If we're collapsing, scroll first then collapse
			scrollToShowLess(index);
			// Small delay to allow scroll to complete before collapse
			setTimeout(() => {
				setExpandedStates((prev) => {
					const newStates = [...prev];
					newStates[index] = false;
					return newStates;
				});
			}, 100);
		} else {
			// If we're expanding, just expand
			setExpandedStates((prev) => {
				const newStates = [...prev];
				newStates[index] = true;
				return newStates;
			});
		}
	};

	const scrollToShowLess = (index: number) => {
		if (contentRefs.current[index]) {
			contentRefs.current[index]?.scrollIntoView({ behavior: "smooth" });
		}
	};
	const [isMobile, setIsMobile] = useState(false);

	// useEffect(() => {
	// 	const handleResize = () => {
	// 		setIsMobile(window.innerWidth < 801); // Adjust this breakpoint as necessary
	// 	};

	// 	handleResize(); // Check on mount
	// 	window.addEventListener("resize", handleResize);
	// 	return () => window.removeEventListener("resize", handleResize);
	// }, []);

	return (
		<div
			className="relative overflow-hidden min-h-screen bg-gradient-to-b from-background to-background/50"
			onMouseEnter={() => setIsPaused(true)}
			onMouseLeave={() => {
				setIsPaused(false);
			}}
		>
			<motion.section
				initial={{ opacity: 0 }}
				animate={{ opacity: 1 }}
				transition={{ duration: 0.5 }}
				className="relative min-h-[100vh] flex items-center"
			>
				{/* Navigation Buttons - Combined container */}
				<div className="absolute md:hidden bottom-8 left-0 right-0 z-50 flex justify-center items-center space-x-4">
					<Button
						variant="outline"
						size="icon"
						className="rounded-full w-12 h-12 border-white/20 text-white bg-white/5 backdrop-blur-sm hover:bg-white/10 transition-all duration-300 hover:scale-105"
						onClick={handlePrev}
						aria-label="Previous slide"
					>
						<ChevronLeft className="h-6 w-6" />
					</Button>
					<Button
						variant="outline"
						size="icon"
						className="rounded-full w-12 h-12 border-white/20 text-white bg-white/5 backdrop-blur-sm hover:bg-white/10 transition-all duration-300 hover:scale-105"
						onClick={handleNext}
						aria-label="Next slide"
					>
						<ChevronRight className="h-6 w-6" />
					</Button>
				</div>

				{/* Desktop navigation buttons */}
				<div className="absolute hidden md:block top-1/2 left-4 -translate-y-1/2 z-50">
					<Button
						variant="outline"
						size="icon"
						className="rounded-full w-14 h-14 border-white/20 text-white bg-white/5 backdrop-blur-sm hover:bg-white/10 transition-all duration-300 hover:scale-105"
						onClick={handlePrev}
						aria-label="Previous slide"
					>
						<ChevronLeft className="h-6 w-6" />
					</Button>
				</div>
				<div className="absolute hidden md:block top-1/2 right-4 -translate-y-1/2 z-50">
					<Button
						variant="outline"
						size="icon"
						className="rounded-full w-14 h-14 border-white/20 text-white bg-white/5 backdrop-blur-sm hover:bg-white/10 transition-all duration-300 hover:scale-105"
						onClick={handleNext}
						aria-label="Next slide"
					>
						<ChevronRight className="h-6 w-6" />
					</Button>
				</div>

				{/* Background Image with Modern Gradient Overlay */}
				<div className="absolute inset-0">
					<AnimatePresence mode="wait">
						<motion.div
							key={currentIndex}
							initial={{ opacity: 0, scale: 1.1 }}
							animate={{ opacity: 1, scale: 1 }}
							exit={{ opacity: 0, scale: 0.95 }}
							transition={{ duration: 0.7 }}
							className="relative w-full h-full"
						>
							<Image
								src={
									isMobile && heroContent[currentIndex].mobileImage
										? heroContent[currentIndex].mobileImage
										: heroContent[currentIndex].image || "/placeholder.svg"
								}
								alt={`${heroContent[currentIndex].title} Background`}
								fill
								className="object-cover"
								priority
								sizes="100vw"
							/>
							{/* Modern gradient overlay */}
							<div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-transparent" />
							<div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-black/70" />
							{/* Subtle pattern overlay for texture */}
							<div className="absolute inset-0 bg-[url('/noise.png')] opacity-[0.03] mix-blend-overlay" />
						</motion.div>
					</AnimatePresence>
				</div>

				{/* Content Container with Modern Layout */}
				<div className="relative container mx-auto px-4 py-12 md:py-20">
					<div className="flex flex-col gap-12">
						<div className="w-full lg:w-[60%] mt-8 lg:mt-16 lg:ml-16">
							<AnimatePresence mode="wait">
								<motion.div
									key={currentIndex}
									initial={{ opacity: 0, x: -20 }}
									animate={{ opacity: 1, x: 0 }}
									exit={{ opacity: 0, x: 20 }}
									transition={{ duration: 0.5 }}
									className="backdrop-blur-xs bg-red-600/40 rounded-3xl p-8 md:p-10 border border-white/10 shadow-2xl relative overflow-hidden"
									ref={(el) => {
										if (el) {
											contentRefs.current[currentIndex] = el;
										}
									}}
								>
									{/* Decorative elements */}
									<div className="absolute top-0 right-0 w-32 h-32 bg-red-400/30 rounded-full blur-3xl -mr-16 -mt-16" />
									<div className="absolute bottom-0 left-0 w-24 h-24 bg-red-400/30 rounded-full blur-2xl -ml-12 -mb-12" />

									<motion.h1
										className="text-4xl md:text-4xl lg:text-5xl font-bold text-white mb-8 leading-tight"
										initial={{ opacity: 0, y: 20 }}
										animate={{ opacity: 1, y: 0 }}
										transition={{ delay: 0.2 }}
									>
										{heroContent[currentIndex].title}
									</motion.h1>

									<motion.div
										className={cn(
											"prose prose-lg max-w-none text-white/90",
											"[&_p]:text-white/90 [&_b]:text-white",
											"[&_ul]:text-white/90 [&_li]:text-white/90",
											"prose-strong:text-white prose-strong:font-bold"
										)}
										initial={{ opacity: 0, y: 20 }}
										animate={{ opacity: 1, y: 0 }}
										transition={{ delay: 0.3 }}
									>
										{heroContent[currentIndex].description}
										<AnimatePresence>
											{expandedStates[currentIndex] && (
												<motion.div
													initial={{ opacity: 0, height: 0 }}
													animate={{ opacity: 1, height: "auto" }}
													exit={{ opacity: 0, height: 0 }}
													transition={{
														duration: 0.3,
														height: { duration: 0.4 },
														opacity: { duration: 0.25 },
													}}
												>
													{heroContent[currentIndex].expandedContent}
												</motion.div>
											)}
										</AnimatePresence>
									</motion.div>

									<motion.div
										className="flex flex-row items-center space-x-4 pt-8"
										initial={{ opacity: 0, y: 20 }}
										animate={{ opacity: 1, y: 0 }}
										transition={{ delay: 0.4 }}
									>
										<div className="flex flex-row items-center space-x-4">
											{currentIndex !== 0 && (
												<Button
													size="lg"
													variant="default"
													className="rounded-full px-8 bg-primary hover:bg-primary/90 transition-all duration-300 hover:scale-105"
													asChild
												>
													<Link href={heroContent[currentIndex].href as any}>
														Get Started
													</Link>
												</Button>
											)}
											<Button
												variant="outline"
												size="lg"
												onClick={() => toggleContent(currentIndex)}
												className="rounded-full border-white/20 text-white bg-white/5 backdrop-blur-sm hover:bg-white/10 transition-all duration-300 hover:scale-105"
												aria-expanded={expandedStates[currentIndex]}
												aria-controls={`content-${currentIndex}`}
											>
												{expandedStates[currentIndex] ? (
													<Minus className="mr-2 h-4 w-4" />
												) : (
													<Plus className="mr-2 h-4 w-4" />
												)}
												{expandedStates[currentIndex]
													? "Show Less"
													: "Learn More"}
											</Button>
										</div>
									</motion.div>
								</motion.div>
							</AnimatePresence>

							{/* Navigation Controls below content */}
							<div className="flex flex-col gap-4 mt-8 lg:mt-16">
								{/* Progress Indicator */}
								<div
									className="flex justify-center gap-3"
									role="tablist"
									aria-label="Slide indicators"
								>
									{heroContent.map((_, index) => (
										<button
											key={index}
											onClick={() => setCurrentIndex(index)}
											className={cn(
												"w-6 h-1 rounded-full transition-all duration-500",
												index === currentIndex
													? "bg-primary w-10"
													: "bg-white/20 hover:bg-white/30"
											)}
											role="tab"
											aria-selected={index === currentIndex}
											aria-label={`Go to slide ${index + 1}`}
										/>
									))}
								</div>
							</div>
						</div>
					</div>
				</div>
			</motion.section>
		</div>
	);
}
