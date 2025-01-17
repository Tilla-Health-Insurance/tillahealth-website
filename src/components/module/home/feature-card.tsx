import { motion } from "framer-motion";
import { LucideIcon, TypeIcon as type } from "lucide-react";

import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";

interface FeatureCardProps {
	title: string;
	description: string;
	icon: LucideIcon;
}

export function FeatureCard({
	title,
	description,
	icon: Icon,
}: FeatureCardProps) {
	return (
		<Card className="border-primary shadow-none">
			<CardHeader>
				<div className="rounded-lg w-12 h-12 flex items-center justify-center bg-primary/10 mb-4">
					<motion.div initial={{ scale: 1 }} whileHover={{ scale: 1.1 }}>
						<Icon className="w-6 h-6 text-primary" />
					</motion.div>
				</div>
				<CardTitle className="text-xl">{title}</CardTitle>
			</CardHeader>
			<CardContent>
				<CardDescription className="text-base">{description}</CardDescription>
			</CardContent>
		</Card>
	);
}
