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
			className="relative py-20 md:py-40 max-h-screen bg-[#CC1D48] text-white"
		>
			<div className="absolute inset-0">
				<Image
					src={IMAGES.memberCard}
					alt="Hero Background"
					fill
					className="object-cover brightness-50"
					priority
				/>
			</div>
			<div className="relative mx-auto px-4">
				<div className="max-w-3xl p-6 mb-10 lg:mb-0 lg:mr-10">
					<h2 className="text-xl md:text-6xl font-bold mb-6 drop-shadow-lg">
						ABOUT US
					</h2>
					<h3 className="md:text-2xl mb-4 font-semibold">
						Get to know Tilla Health
					</h3>
					<p className="mb-4 md:text-lg leading-relaxed">
						We are committed to making health care insurance easy, affordable,
						and attainable for all.
					</p>
					<p className="md:text-lg leading-relaxed">
						At Tilla Health, we are driven by purpose and dedicated to making it
						simple and seamless to guide and inspire you in obtaining the health
						insurance and quality care you deserve.
					</p>
					<Button
						variant="outline"
						size="sm"
						className="text-primary mt-3"
						onClick={() => router.push("/who-we-are" as any)}
					>
						Read More
					</Button>
				</div>
			</div>
		</motion.section>
	);
}
