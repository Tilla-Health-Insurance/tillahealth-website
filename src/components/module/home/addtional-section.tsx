import { motion } from "framer-motion";

import { IMAGES } from "@/constants/files";

import { ServiceCard } from "./additionalservicecard";

export default function AdditionalServicesSection() {
	return (
		<div className="py-20 relative">
			<motion.div
				initial={{ opacity: 0, y: 20 }}
				whileInView={{ opacity: 1, y: 0 }}
				viewport={{ once: true }}
				className="text-center mb-12 container"
			>
				<h3 className="text-sm font-semibold text-primary mb-4">
					{">>"} Our Comprehensive Services {"<<"}
				</h3>
				<h2 className="text-4xl font-bold mb-6">Additional Services</h2>
				<p className="max-w-3xl mx-auto text-muted-foreground ">
					Our Additional Services section is designed to enhance your experience
					and provide comprehensive support tailored to your needs.
				</p>
			</motion.div>
			<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto container">
				<ServiceCard
					title="Tilla Health's Comprehensive Transportation Assistance Program"
					description="At Tilla Health, we know that transportation is a critical factor in accessing timely and quality healthcare. That's why we've designed a Transportation Assistance Program that goes beyond just getting you to your local appointments..."
					image={IMAGES.transport}
					icon="life"
				/>
				<ServiceCard
					title="Telehealth Services"
					description="Tilla Health offers innovative Telehealth Services that enable virtual consultations for both routine and specialized care. This service enhances healthcare accessibility from the comfort of home, significantly reducing the need for unnecessary travel..."
					image={IMAGES.telehealth}
					icon="business"
				/>
				<ServiceCard
					title="Nursing Home / Senior Living Assistance Service"
					description="Tilla Health is expanding its offerings to include Senior Living Services, creating a safe, comfortable, and vibrant environment for elderly members to thrive. Our senior living facilities will be designed to provide high-quality care and foster a sense of community."
					image={IMAGES.oldpeople}
					icon="home"
				/>
			</div>
		</div>
	);
}
