"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";

import { motion } from "framer-motion";

import { Button } from "@/components/ui/button";
import { IMAGES } from "@/constants/files";

export function AboutSection() {
	const router = useRouter();
	return (
		<motion.section
			initial={{ opacity: 0, y: 20 }}
			whileInView={{ opacity: 1, y: 0 }}
			viewport={{ once: true }}
			className="relative py-20 md:py-40 max-h-screen bg-[hsl(351,84%,45%)] text-white overflow-hidden"
		>
			<div className="absolute inset-0">
				<Image
					src={IMAGES.memberCard}
					alt="Hero Background"
					fill
					className="object-cover brightness-50"
					priority
				/>
				{/* <div className="absolute inset-0 bg-gradient-to-t from-red-600 to-transparent" /> */}
			</div>
			<div className="relative mx-auto px-4">
				<div className="max-w-3xl p-6 mb-10 lg:mb-0 lg:mr-10">
					<h3 className="text-sm font-semibold text-primary mb-4">
						{">>"} About Us {"<<"}
					</h3>
					<h3 className="md:text-3xl mb-4 font-semibold">
						Get to know Tilla Health
					</h3>
					<p className="mb-4 md:text-lg leading-relaxed">
						We are committed to making health care insurance easy, affordable,
						and attainable for all.
					</p>
					<p className="md:text-lg leading-relaxed mb-4">
						At Tilla Health, we are driven by purpose and dedicated to making it
						simple and seamless to guide and inspire you in obtaining the health
						insurance and quality care you deserve.
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
		</motion.section>
	);
}
