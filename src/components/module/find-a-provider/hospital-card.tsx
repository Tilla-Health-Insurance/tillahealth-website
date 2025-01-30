import Image from "next/image";

import { motion } from "framer-motion";
import { Building2, Clock, MapPin, Phone, Star } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
	Tooltip,
	TooltipContent,
	TooltipProvider,
	TooltipTrigger,
} from "@/components/ui/tooltip";

interface HospitalCardProps {
	name: string;
	location?: string;
	phone: string[];
	imageUrl?: any;
	facility_affiliation: string;
	facility_type: string;
	rating: string;
	hours?: Record<any, any> | string;
}

export function HospitalCard({
	name,
	location,
	phone,
	imageUrl,
	facility_affiliation,
	facility_type,
	rating,
	hours,
}: HospitalCardProps) {
	return (
		<TooltipProvider>
			<motion.div
				initial={{ opacity: 0, y: 20 }}
				animate={{ opacity: 1, y: 0 }}
				transition={{ duration: 0.3 }}
				className="h-full"
			>
				<Card className="overflow-hidden group h-full w-full flex flex-col bg-background hover:shadow-xl transition-all duration-300 border-0 shadow-md">
					<div className="relative h-52 overflow-hidden">
						<Image
							src={imageUrl || "/placeholder.svg"}
							alt={name}
							layout="fill"
							objectFit="cover"
							className="group-hover:scale-110 transition-transform duration-500 ease-out"
						/>
						<div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
						<div className="absolute bottom-3 left-3 right-3 flex justify-between items-center">
							<Badge
								variant="default"
								className="text-xs font-medium px-3 py-1 bg-primary text-primary-foreground"
							>
								{facility_affiliation}
							</Badge>
							<div className="flex items-center bg-background/90 rounded-full px-2 py-1">
								<Star className="w-4 h-4 text-yellow-400" />
								<span className="text-sm font-semibold ml-1 text-foreground">
									{rating}
								</span>
							</div>
						</div>
					</div>
					<CardHeader className="pt-4 px-4">
						<CardTitle className="text-xl font-bold text-card-foreground line-clamp-2">
							{name}
						</CardTitle>
					</CardHeader>
					<CardContent className="flex-grow px-4 pb-4">
						<div className="space-y-3">
							{location && (
								<div className="flex items-start text-sm text-muted-foreground">
									<MapPin className="w-4 h-4 mr-2 mt-0.5 text-primary flex-shrink-0" />
									<span className="line-clamp-2">{location}</span>
								</div>
							)}
							<div className="flex items-start text-sm text-muted-foreground">
								<Phone className="w-4 h-4 mr-2 mt-0.5 text-primary flex-shrink-0" />
								<div className="space-y-1">
									{phone.map((number, index) => (
										<a
											key={index}
											href={`tel:${number}`}
											className="block text-primary hover:text-primary/90 transition-colors"
										>
											{number}
										</a>
									))}
								</div>
							</div>
							<div className="flex items-center text-sm text-muted-foreground">
								<Building2 className="w-4 h-4 mr-2 text-primary flex-shrink-0" />
								<span className="font-medium">{facility_type}</span>
							</div>
							{hours && (
								<Tooltip>
									<TooltipTrigger asChild>
										<div className="flex items-center text-sm text-muted-foreground cursor-help">
											<Clock className="w-4 h-4 mr-2 text-primary flex-shrink-0" />
											<span className="hover:text-primary transition-colors">
												{typeof hours === "string"
													? hours
													: "View operating hours"}
											</span>
										</div>
									</TooltipTrigger>
									<TooltipContent
										side="bottom"
										align="start"
										className="max-w-xs bg-popover p-3 shadow-lg rounded-lg border"
									>
										{typeof hours === "string" ? (
											<p className="text-popover-foreground">{hours}</p>
										) : (
											<ul className="space-y-1.5">
												{Object.entries(hours).map(([day, time], index) => (
													<li key={index} className="text-sm">
														<span className="font-semibold text-popover-foreground">
															{day}:
														</span>{" "}
														<span className="text-muted-foreground">
															{time}
														</span>
													</li>
												))}
											</ul>
										)}
									</TooltipContent>
								</Tooltip>
							)}
						</div>
					</CardContent>
				</Card>
			</motion.div>
		</TooltipProvider>
	);
}
