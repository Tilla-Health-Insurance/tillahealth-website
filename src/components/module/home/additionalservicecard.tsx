import Image from "next/image";

import { Building2, Heart, Home } from "lucide-react";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Link } from "@/navigation";

interface ServiceCardProps {
	title: string;
	description: string;
	image: any;
	icon: "life" | "business" | "home";
}

export function ServiceCard({
	title,
	description,
	image,
	icon,
}: ServiceCardProps) {
	const icons = {
		life: Heart,
		business: Building2,
		home: Home,
	};

	const Icon = icons[icon];

	return (
		<div
			className={cn(
				"rounded-3xl overflow-hidden bg-card transition-all hover:shadow-xl hover:bg-primary hover:text-white"
			)}
		>
			<div className="aspect-[4/3] relative">
				<Image
					src={image || "/placeholder.svg"}
					alt={title}
					fill
					className="object-cover"
				/>
			</div>
			<div className="p-6 relative">
				<div className="absolute left-6 -top-8 bg-primary rounded-2xl p-4 text-white">
					<Icon className="w-6 h-6" />
				</div>
				<h3 className={cn("text-xl font-semibold mt-4 mb-2")}>{title}</h3>
				<p className={cn("text-sm")}>{description}</p>
			</div>
			<Button
				size="default"
				variant="default"
				className="rounded-full px-8 bg-muted hover:bg-white text-primary z-10 mx-3 mb-3 "
				asChild
			>
				<Link href="/services#target-section">Read More</Link>
			</Button>
		</div>
	);
}
