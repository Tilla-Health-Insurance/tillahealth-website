"use client";

import Image from "next/image";
import { useState } from "react";

import { Award, ChevronLeft, ChevronRight } from "lucide-react";

import { Button } from "@/components/ui/button";
import { IMAGES } from "@/constants/files";

const slides = [
	{
		image: IMAGES.diasporahero,
		badge: "Tilla Health",
		title: "Diaspora Health Connect",
		description:
			"Only our company help individuals and businesses manage risks and protect their financial well-being without any extra cost.",
		cta: "Read More",
	},
	{
		image: IMAGES.feredalHero,
		badge: "Tilla Health",
		title: "Federal Employee Plan",
		description:
			"Join millions of satisfied customers who trust us with their insurance needs. Get comprehensive coverage today.",
		cta: "Read More",
	},
	{
		image: IMAGES.familyhero,
		badge: "Tilla Health",
		title: "Individual & Family Plan",
		description:
			"Experience peace of mind with our round-the-clock support team and instant claim processing.",
		cta: "Read More",
	},
];

export default function HeroCarousel() {
	const [currentSlide, setCurrentSlide] = useState(0);

	const nextSlide = () => {
		setCurrentSlide((prev) => (prev + 1) % slides.length);
	};

	const prevSlide = () => {
		setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
	};

	// Auto-advance slides
	useState(() => {
		const timer = setInterval(nextSlide, 5000);
		return () => clearInterval(timer);
	});

	return (
		<section className="relative h-screen min-h-[600px] w-full overflow-hidden">
			{/* Background Image */}
			<div className="absolute inset-0 transition-transform duration-700 ease-in-out">
				<Image
					src={slides[currentSlide].image || ("/placeholder.svg" as any)}
					alt="Insurance Hero"
					fill
					className="object-cover"
					priority
				/>
				{/* Gradient Overlay */}
				<div className="absolute inset-0 bg-gradient-to-r from-red-950/90 via-red-900/75 to-transparent" />
			</div>

			{/* Content */}
			<div className="relative h-full">
				<div className="container mx-auto flex h-full items-center px-4">
					<div className="max-w-2xl animate-fade-in space-y-6">
						{/* Badge */}
						<div className="inline-flex items-center rounded-full bg-white/90 px-4 py-2 text-sm font-medium text-red-700">
							<Award className="mr-2 h-4 w-4" />
							{slides[currentSlide].badge}
						</div>

						{/* Title */}
						<h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl md:text-6xl">
							{slides[currentSlide].title}
						</h1>

						{/* Description */}
						<p className="text-xl text-gray-100">
							{slides[currentSlide].description}
						</p>

						{/* CTA Button */}
						<Button
							size="lg"
							className="bg-red-600 text-white hover:bg-red-700"
						>
							{slides[currentSlide].cta}
						</Button>
					</div>
				</div>

				{/* Navigation Buttons */}
				<div className="absolute bottom-8 right-8 flex space-x-2">
					<Button
						variant="outline"
						size="icon"
						onClick={prevSlide}
						className="rounded-full border-white bg-white/10 text-white backdrop-blur-sm hover:bg-white/20"
					>
						<ChevronLeft className="h-5 w-5" />
					</Button>
					<Button
						variant="outline"
						size="icon"
						onClick={nextSlide}
						className="rounded-full border-white bg-white/10 text-white backdrop-blur-sm hover:bg-white/20"
					>
						<ChevronRight className="h-5 w-5" />
					</Button>
				</div>

				{/* Slide Indicators */}
				<div className="absolute bottom-8 left-1/2 flex -translate-x-1/2 space-x-2">
					{slides.map((_, index) => (
						<button
							key={index}
							onClick={() => setCurrentSlide(index)}
							className={`h-2 w-2 rounded-full transition-all ${
								index === currentSlide
									? "w-8 bg-white"
									: "bg-white/50 hover:bg-white/75"
							}`}
						>
							<span className="sr-only">Go to slide {index + 1}</span>
						</button>
					))}
				</div>
			</div>
		</section>
	);
}
