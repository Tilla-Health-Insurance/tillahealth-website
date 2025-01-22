// "use client";

// import Image from "next/image";
// import Link from "next/link";
// import { useEffect, useRef, useState } from "react";

// import { AnimatePresence, motion } from "framer-motion";
// import { ChevronLeft, ChevronRight, Minus, Plus } from "lucide-react";

// import { Button } from "@/components/ui/button";
// // Assuming IMAGES is imported from your constants
// import { IMAGES } from "@/constants/files";
// import { cn } from "@/lib/utils";

// export default function HeroSlider() {
// 	const [currentIndex, setCurrentIndex] = useState(0);
// 	const [expandedStates, setExpandedStates] = useState<boolean[]>([]);
// 	const contentRefs = useRef<(HTMLDivElement | null)[]>([]);
// 	const autoPlayRef = useRef<NodeJS.Timeout>();
// 	const [isPaused, setIsPaused] = useState(false);

// 	const heroContent = [
// 		{
// 			title: "Tilla Health",
// 			subtitle: "Comprehensive Healthcare Coverage",
// 			description: (
// 				<>
// 					At <b className="text-primary-foreground font-bold">Tilla Health</b>,
// 					we are committed to providing accessible, affordable, and
// 					comprehensive healthcare coverage to individuals and families living
// 					across Ethiopia.
// 				</>
// 			),
// 			expandedContent: (
// 				<p className="mt-4">
// 					Whether you&apos;re part of the local community, an employee, or a
// 					government worker, our health plans are tailored to meet your specific
// 					healthcare needs. For the Ethiopian Diaspora, we also offer health
// 					coverage plans that allow you to protect your loved ones back home in
// 					Ethiopia, ensuring they have access to quality healthcare services.
// 				</p>
// 			),
// 			image: IMAGES.heroBackground,
// 			mobileImage: IMAGES.member3,
// 			href: "/who-we-are",
// 		},
// 		{
// 			title: "Tilla Health",
// 			subtitle: "Comprehensive Healthcare Coverage",
// 			description: (
// 				<>
// 					At <b className="text-primary-foreground font-bold">Tilla Health</b>,
// 					we are committed to providing accessible, affordable, and
// 					comprehensive healthcare coverage to individuals and families living
// 					across Ethiopia.
// 				</>
// 			),
// 			expandedContent: (
// 				<p className="mt-4">
// 					Whether you&apos;re part of the local community, an employee, or a
// 					government worker, our health plans are tailored to meet your specific
// 					healthcare needs. For the Ethiopian Diaspora, we also offer health
// 					coverage plans that allow you to protect your loved ones back home in
// 					Ethiopia, ensuring they have access to quality healthcare services.
// 				</p>
// 			),
// 			image: IMAGES.diasporahero,
// 			mobileImage: IMAGES.member3,
// 			href: "/who-we-are",
// 		},
// 		// ... other content items remain the same
// 	];

// 	useEffect(() => {
// 		// Initialize expanded states array
// 		setExpandedStates(new Array(heroContent.length).fill(false));

// 		// Start autoplay
// 		startAutoPlay();

// 		return () => {
// 			if (autoPlayRef.current) {
// 				clearInterval(autoPlayRef.current);
// 			}
// 		};
// 	}, []);

// 	const startAutoPlay = () => {
// 		if (autoPlayRef.current) {
// 			clearInterval(autoPlayRef.current);
// 		}

// 		if (!isPaused) {
// 			autoPlayRef.current = setInterval(() => {
// 				handleNext();
// 			}, 5000); // Change slide every 5 seconds
// 		}
// 	};

// 	const handleNext = () => {
// 		setCurrentIndex((prev) => (prev + 1) % heroContent.length);
// 		startAutoPlay(); // Reset timer when manually changed
// 	};

// 	const handlePrev = () => {
// 		setCurrentIndex(
// 			(prev) => (prev - 1 + heroContent.length) % heroContent.length
// 		);
// 		startAutoPlay(); // Reset timer when manually changed
// 	};

// 	const toggleContent = (index: number) => {
// 		if (expandedStates[index]) {
// 			// If we're collapsing, scroll first then collapse
// 			scrollToShowLess(index);
// 			// Small delay to allow scroll to complete before collapse
// 			setTimeout(() => {
// 				setExpandedStates((prev) => {
// 					const newStates = [...prev];
// 					newStates[index] = false;
// 					return newStates;
// 				});
// 			}, 100);
// 		} else {
// 			// If we're expanding, just expand
// 			setExpandedStates((prev) => {
// 				const newStates = [...prev];
// 				newStates[index] = true;
// 				return newStates;
// 			});
// 		}
// 	};

// 	const scrollToShowLess = (index: number) => {
// 		if (contentRefs.current[index]) {
// 			contentRefs.current[index]?.scrollIntoView({ behavior: "smooth" });
// 		}
// 	};

// 	return (
// 		<div
// 			className="relative overflow-hidden"
// 			onMouseEnter={() => setIsPaused(true)}
// 			onMouseLeave={() => {
// 				setIsPaused(false);
// 				startAutoPlay();
// 			}}
// 		>
// 			<motion.section
// 				initial={{ opacity: 0 }}
// 				animate={{ opacity: 1 }}
// 				transition={{ duration: 0.5 }}
// 				className="relative min-h-[100vh]"
// 			>
// 				{/* Background Image with Enhanced Gradient Overlay */}
// 				<div className="absolute inset-0">
// 					<AnimatePresence mode="wait">
// 						<motion.div
// 							key={currentIndex}
// 							initial={{ opacity: 0 }}
// 							animate={{ opacity: 1 }}
// 							exit={{ opacity: 0 }}
// 							transition={{ duration: 0.5 }}
// 							className="relative w-full h-full"
// 						>
// 							<Image
// 								src={heroContent[currentIndex].image || "/placeholder.svg"}
// 								alt={`${heroContent[currentIndex].title} Background`}
// 								fill
// 								className="object-cover"
// 								priority
// 								sizes="100vw"
// 							/>
// 							<div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/75 to-transparent" />
// 							<div className="absolute inset-0 bg-gradient-to-b from-black/50 via-transparent to-black/50" />
// 						</motion.div>
// 					</AnimatePresence>
// 				</div>

// 				{/* Content Container with Better Spacing */}
// 				<div className="relative container mx-auto px-4 h-full">
// 					<div className="grid lg:grid-cols-2 gap-8 h-full items-center pb-20 pt-40">
// 						<AnimatePresence mode="wait">
// 							<motion.div
// 								key={currentIndex}
// 								initial={{ opacity: 0, x: -20 }}
// 								animate={{ opacity: 1, x: 0 }}
// 								exit={{ opacity: 0, x: 20 }}
// 								transition={{ duration: 0.5 }}
// 								className="text-white space-y-6"
// 								ref={(el) => (contentRefs.current[currentIndex] = el) as any}
// 							>
// 								<motion.h1
// 									className="text-5xl md:text-6xl lg:text-7xl font-bold text-white drop-shadow-lg"
// 									initial={{ opacity: 0, y: 20 }}
// 									animate={{ opacity: 1, y: 0 }}
// 									transition={{ delay: 0.2 }}
// 								>
// 									{heroContent[currentIndex].title}
// 								</motion.h1>

// 								<motion.div
// 									className={cn(
// 										"prose prose-lg max-w-none",
// 										"prose-headings:text-white prose-p:text-white/90",
// 										"prose-strong:text-white prose-strong:font-bold",
// 										"prose-li:text-white/90"
// 									)}
// 									initial={{ opacity: 0, y: 20 }}
// 									animate={{ opacity: 1, y: 0 }}
// 									transition={{ delay: 0.3 }}
// 								>
// 									{heroContent[currentIndex].description}
// 									<AnimatePresence>
// 										{expandedStates[currentIndex] && (
// 											<motion.div
// 												initial={{ opacity: 0, height: 0 }}
// 												animate={{ opacity: 1, height: "auto" }}
// 												exit={{ opacity: 0, height: 0 }}
// 												transition={{
// 													duration: 0.3,
// 													height: {
// 														duration: 0.4,
// 													},
// 													opacity: {
// 														duration: 0.25,
// 													},
// 												}}
// 											>
// 												{heroContent[currentIndex].expandedContent}
// 											</motion.div>
// 										)}
// 									</AnimatePresence>
// 								</motion.div>

// 								<motion.div
// 									className="flex items-center gap-4 pt-4"
// 									initial={{ opacity: 0, y: 20 }}
// 									animate={{ opacity: 1, y: 0 }}
// 									transition={{ delay: 0.4 }}
// 								>
// 									{currentIndex !== 0 && (
// 										<Button
// 											size="lg"
// 											variant="default"
// 											className="rounded-full px-8 bg-primary hover:bg-primary/90 z-10"
// 											asChild
// 										>
// 											<Link href={heroContent[currentIndex].href as any}>
// 												Get Started
// 											</Link>
// 										</Button>
// 									)}
// 									<Button
// 										variant="outline"
// 										size="lg"
// 										onClick={() => toggleContent(currentIndex)}
// 										className="rounded-full border-white/30 text-white bg-white/10 backdrop-blur-sm z-10"
// 										aria-expanded={expandedStates[currentIndex]}
// 										aria-controls={`content-${currentIndex}`}
// 									>
// 										{expandedStates[currentIndex] ? (
// 											<Minus className="mr-2 h-4 w-4" />
// 										) : (
// 											<Plus className="mr-2 h-4 w-4" />
// 										)}
// 										{expandedStates[currentIndex] ? "Show Less" : "Learn More"}
// 									</Button>
// 								</motion.div>
// 							</motion.div>
// 						</AnimatePresence>

// 						{/* Navigation Controls with Progress Indicator */}
// 						<div className="flex flex-col items-end justify-end h-full pb-12 gap-6">
// 							<div className="flex items-center gap-4">
// 								<Button
// 									variant="outline"
// 									size="icon"
// 									className="rounded-full w-12 h-12 border-white/30 text-white bg-white/10 backdrop-blur-sm"
// 									onClick={handlePrev}
// 									aria-label="Previous slide"
// 								>
// 									<ChevronLeft className="h-6 w-6" />
// 								</Button>
// 								<Button
// 									variant="outline"
// 									size="icon"
// 									className="rounded-full w-12 h-12 border-white/30 text-white bg-white/10 backdrop-blur-sm"
// 									onClick={handleNext}
// 									aria-label="Next slide"
// 								>
// 									<ChevronRight className="h-6 w-6" />
// 								</Button>
// 							</div>
// 							<div
// 								className="flex gap-2"
// 								role="tablist"
// 								aria-label="Slide indicators"
// 							>
// 								{heroContent.map((_, index) => (
// 									<button
// 										key={index}
// 										onClick={() => {
// 											setCurrentIndex(index);
// 											startAutoPlay();
// 										}}
// 										className={cn(
// 											"w-8 h-1 rounded-full transition-all duration-300",
// 											index === currentIndex ? "bg-primary" : "bg-white/30"
// 										)}
// 										role="tab"
// 										aria-selected={index === currentIndex}
// 										aria-label={`Go to slide ${index + 1}`}
// 									/>
// 								))}
// 							</div>
// 						</div>
// 					</div>
// 				</div>

// 				{/* Enhanced Gradient Overlays */}
// 				<div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
// 			</motion.section>
// 		</div>
// 	);
// }
