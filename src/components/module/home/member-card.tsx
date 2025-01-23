"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

import { motion } from "framer-motion";

import { Button } from "@/components/ui/button";

export function MemberCardSection() {
	const router = useRouter();
	const [showFront, setShowFront] = useState(true);

	return (
		<motion.section
			initial={{ opacity: 0, y: 20 }}
			whileInView={{ opacity: 1, y: 0 }}
			viewport={{ once: true }}
			className="relative py-20  max-h-screen  overflow-hidden bg-gradient-to-b from-blue-50 via-white to-gray-50"
		>
			<div className="grid md:grid-cols-2 gap-12 items-center max-w-7xl mx-auto ">
				<div className="flex flex-col items-center p-4">
					<div
						className="relative w-full max-w-[1200px] aspect-[1.86] cursor-pointer"
						onMouseEnter={() => setShowFront(false)}
						onMouseLeave={() => setShowFront(true)}
					>
						<div
							className="absolute inset-0 transition-opacity duration-500 ease-in-out"
							style={{ opacity: showFront ? 1 : 0 }}
						>
							<img
								src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/ID-new-logo-front-WupczlvISRYan9BUSt5pgGGlSiacDy.png"
								alt="Tilla Health Member Card Front"
								className="w-full h-full object-contain"
								draggable="false"
							/>
						</div>
						<div
							className="absolute inset-0 transition-opacity duration-500 ease-in-out"
							style={{ opacity: showFront ? 0 : 1 }}
						>
							<img
								src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/ID-new-logo-back-AOetYj9r9DXpg5cA2ICguTs4hXl8B2.png"
								alt="Tilla Health Member Card Back"
								className="w-full h-full object-contain"
								draggable="false"
							/>
						</div>
					</div>
				</div>

				<div className="space-y-6">
					<div className="relative mx-auto px-4">
						<div className="max-w-3xl p-6 mb-10 lg:mb-0 lg:mr-10">
							<h3 className="text-sm font-semibold text-primary mb-4">
								{">>"} ID Card {"<<"}
							</h3>
							<h3 className="md:text-3xl mb-4 font-semibold">
								Member Card Tilla Health
							</h3>
							<p className="mb-4 md:text-lg leading-relaxed">
								We are committed to making health care insurance easy,
								affordable, and attainable for all.
							</p>
							<p className="md:text-lg leading-relaxed mb-4">
								At Tilla Health, we are driven by purpose and dedicated to
								making it simple and seamless to guide and inspire you in
								obtaining the health insurance and quality care you deserve.
							</p>
							<Button
								variant="outline"
								size="lg" // Increased button size for better visibility
								className="text-primary border-2 border-white hover:bg-white hover:text-[#CC1D48] transition-all duration-300 mt-3"
								onClick={() => router.push("/who-we-are" as any)}
							>
								Read More
							</Button>
						</div>
					</div>
				</div>
			</div>
		</motion.section>
	);
}
