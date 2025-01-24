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
			>
				<Card className="overflow-hidden hover:shadow-lg transition-shadow duration-300">
					<div className="relative h-48">
						<Image
							src={imageUrl || "/placeholder.svg"}
							alt={name}
							layout="fill"
							objectFit="cover"
							className="transition-transform duration-300 ease-in-out hover:scale-105"
						/>
						<div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
						<div className="absolute bottom-2 left-2">
							<Badge variant="default" className="text-xs font-semibold">
								{facility_affiliation}
							</Badge>
						</div>
					</div>
					<CardHeader>
						<CardTitle className="text-xl line-clamp-2">{name}</CardTitle>
					</CardHeader>
					<CardContent>
						<div className="space-y-2">
							{location && (
								<div className="flex items-center text-sm text-gray-500">
									<MapPin className="w-4 h-4 mr-2 flex-shrink-0" />
									<span className="line-clamp-2">{location}</span>
								</div>
							)}
							<div className="flex items-center text-sm text-gray-500">
								<Phone className="w-4 h-4 mr-2 flex-shrink-0" />
								<div className="gap-2">
									{phone.map((number, index) => (
										<p key={index} className="flex">
											<a
												href={`tel:${number}`}
												className="text-red-500 hover:underline"
											>
												{number}
											</a>
										</p>
									))}
								</div>
							</div>
							{/* <div className="flex items-center text-sm text-gray-500">
								<Building2 className="w-4 h-4 mr-2 flex-shrink-0" />
								<span>{address}</span>
							</div> */}
							<div className="flex items-center text-sm text-gray-500">
								<Building2 className="w-4 h-4 mr-2 flex-shrink-0" />
								<span>{facility_type}</span>
							</div>
							<div className="flex items-center">
								<Star className="w-4 h-4 mr-1 text-yellow-400" />
								<span className="text-sm font-medium">{rating}</span>
							</div>
							{hours && (
								<Tooltip>
									<TooltipTrigger asChild>
										<div className="flex items-center text-sm text-gray-500 cursor-help">
											<Clock className="w-4 h-4 mr-2 flex-shrink-0" />
											<span>
												{typeof hours === "string"
													? hours
													: "View operating hours"}
											</span>
										</div>
									</TooltipTrigger>
									<TooltipContent
										side="bottom"
										align="start"
										className="max-w-xs"
									>
										{typeof hours === "string" ? (
											<p>{hours}</p>
										) : (
											<ul className="space-y-1">
												{Object.entries(hours).map(([day, time], index) => (
													<li key={index}>
														<span className="font-semibold">{day}:</span> {time}
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
