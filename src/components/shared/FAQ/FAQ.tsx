"use client";

import { useState } from "react";

import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";

import { TitleUnderLine } from "@/components/shared/Decorations/TitleUnderLine";

interface FAQProps {
	faqs: {
		question: string;
		answer: string;
	}[];
}

export const FAQ = ({ faqs }: FAQProps) => {
	const [openIndex, setOpenIndex] = useState<number | null>(null);

	return (
		<section className="py-24 lg:py-32 relative bg-gradient-to-b from-background to-primary/5">
			<div className="container mx-auto px-4">
				<motion.div
					className="text-center mb-16"
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
				>
					<h2 className="text-4xl md:text-5xl font-bold relative inline-block">
						Frequently Asked Questions
						<TitleUnderLine />
					</h2>
				</motion.div>

				<div className="max-w-3xl mx-auto space-y-4">
					{faqs.map((faq, index) => (
						<motion.div
							key={index}
							initial={{ opacity: 0, y: 20 }}
							whileInView={{ opacity: 1, y: 0 }}
							viewport={{ once: true }}
							transition={{ delay: index * 0.1 }}
						>
							<div
								onClick={() => setOpenIndex(openIndex === index ? null : index)}
								className="bg-card hover:bg-card/80 rounded-lg p-6 cursor-pointer transition-all duration-200"
							>
								<div className="flex justify-between items-center">
									<h3 className="text-xl font-semibold">{faq.question}</h3>
									<motion.div
										animate={{ rotate: openIndex === index ? 180 : 0 }}
										transition={{ duration: 0.2 }}
									>
										<ChevronDown className="w-5 h-5 text-muted-foreground" />
									</motion.div>
								</div>
								<motion.div
									initial={false}
									animate={{
										height: openIndex === index ? "auto" : 0,
										opacity: openIndex === index ? 1 : 0,
									}}
									transition={{ duration: 0.2 }}
									className="overflow-hidden"
								>
									<p className="text-muted-foreground mt-4">{faq.answer}</p>
								</motion.div>
							</div>
						</motion.div>
					))}
				</div>
			</div>
		</section>
	);
};
