"use client";

import Image from "next/image";

import { motion } from "framer-motion";
import { Apple, Play } from "lucide-react";

import { Button } from "@/components/ui/button";
import { IMAGES } from "@/constants/files";

export default function MobileAppSection() {
	return (
		<section className="overflow-hidden max-h-screen py-5 md:py-0 bg-gradient-to-b from-[#e8f2ff] via-white to-gray-50 container  dark:from-black dark:via-black dark:to-black ">
			<div className="container px-4 md:px-6">
				<div className="grid gap-12 lg:grid-cols-2 lg:gap-24">
					<motion.div
						initial={{ opacity: 0, x: -50 }}
						whileInView={{ opacity: 1, x: 0 }}
						transition={{ duration: 0.5 }}
						viewport={{ once: true }}
						className="flex flex-col justify-center space-y-4"
					>
						<div className="space-y-2">
							<h3 className="text-sm font-semibold text-primary mb-4">
								{">>"} Mobile App {"<<"}
							</h3>
							<h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
								Your Health Insurance in Your Pocket
							</h2>
							<p className="text-lg text-muted-foreground">
								Download our mobile app to access your health insurance
								coverage, find doctors, and manage claims on the go.
							</p>
						</div>
						<div className="flex flex-col gap-2 sm:flex-row">
							<Button className="hover:bg-primary flex items-center gap-2">
								<Apple className="h-5 w-5" />
								Download for iOS
							</Button>
							<Button className="hover:bg-primary flex items-center gap-2">
								<Play className="h-5 w-5" />
								Download for Android
							</Button>
						</div>
					</motion.div>
					<motion.div
						initial={{ opacity: 0, x: 50 }}
						whileInView={{ opacity: 1, x: 0 }}
						transition={{ duration: 0.5 }}
						viewport={{ once: true }}
						className="relative"
					>
						<div className="relative aspect-[4/6] ">
							<Image
								src={IMAGES.mobile}
								alt="Mobile App Screenshot"
								fill
								className="object-contain"
								sizes="80vh"
							/>
						</div>
					</motion.div>
				</div>
			</div>
		</section>
	);
}
