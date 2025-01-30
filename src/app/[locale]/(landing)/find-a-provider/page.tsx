"use client";

import { useState } from "react";

import { HospitalCard } from "@/components/module/find-a-provider/hospital-card";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from "@/components/ui/select";
import { IMAGES } from "@/constants/files";

const hospitals = [
	{
		name: "Care Land General Hospital",
		location: "Sheger NOC Abageda Roundabout, Addis Ababa, Ethiopia",
		hours: "Open 24 hours",
		imageUrl: IMAGES.careLandHospital,
		phone: ["+251 97 786 8686"],
		facility_affiliation: "Private",
		facility_type: "Hospital",
		rating: "4.8 (482)",
		accepts: "Tilla Health",
	},
	{
		name: "CURE Ethiopia Children's Hospital",
		hours: {
			Thursday: "8 AM–5 PM",
			Friday: "8 AM–5 PM",
			Saturday: "Closed",
			Sunday: "Closed",
			Monday: "8 AM–5 PM",
			Tuesday: "8 AM–5 PM",
			Wednesday: "8 AM–5 PM",
		},
		location: "Hamle 19 Public Park, Addis Ababa",
		imageUrl: IMAGES.cureHospital,
		phone: ["+251 11 122 7520"],
		facility_affiliation: "Non-Profit",
		facility_type: "Hospital",
		rating: "4.5 (22)",
		accepts: "Tilla Health",
	},
	{
		name: "Abay Medium Clinic",
		location: "Addis Ababa, Ethiopia",
		phone: ["+251 11 419 6184"],
		imageUrl: IMAGES.abayHospital,
		facility_affiliation: "Private",
		facility_type: "Medical Clinic",
		rating: "4.5 (10)",
		accepts: "Tilla Health",
	},
	{
		name: "Semah MCH Center",
		location:
			"Haya Hulet (22) Junction around Birhan Zare School, Addis Ababa, Ethiopia",
		phone: ["+251 93 029 4147", "+251 942747474"],
		imageUrl: IMAGES.semahHospital,
		facility_affiliation: "Private",
		facility_type: "MCH( Maternity and Children's Health) Center",
		rating: "4.5 (11)",
		accepts: "Tilla Health",
	},
];

export default function Home() {
	const [searchTerm, setSearchTerm] = useState("");
	const [filters, setFilters] = useState<{
		affiliation: string[];
		facilityType: string[];
		acceptsTillaHealth: boolean;
	}>({
		affiliation: [],
		facilityType: [],
		acceptsTillaHealth: false,
	});
	const [sortBy, setSortBy] = useState("name");

	const filteredHospitals = hospitals
		.filter((hospital) => {
			return (
				hospital.name.toLowerCase().includes(searchTerm.toLowerCase()) &&
				(filters.affiliation.length === 0 ||
					filters.affiliation.includes(hospital.facility_affiliation)) &&
				(filters.facilityType.length === 0 ||
					filters.facilityType.includes(hospital.facility_type)) &&
				(!filters.acceptsTillaHealth || hospital.accepts === "Tilla Health")
			);
		})
		.sort((a, b) => {
			if (sortBy === "name") return a.name.localeCompare(b.name);
			if (sortBy === "rating")
				return Number.parseFloat(b.rating) - Number.parseFloat(a.rating);
			return 0;
		});

	const handleFilterChange = (
		filterType: "affiliation" | "facilityType",
		value: string
	) => {
		setFilters((prev) => {
			const isAllSelected = value === "All";
			if (isAllSelected) {
				return {
					...prev,
					[filterType]: [],
				};
			}
			return {
				...prev,
				[filterType]: prev[filterType].includes(value)
					? prev[filterType].filter((item) => item !== value)
					: [...prev[filterType], value],
			};
		});
	};

	return (
		<div className="min-h-screen">
			<main>
				<section className="relative h-[40vh] flex items-center justify-center bg-gradient-to-r from-primary/20 to-primary/10">
					<div className="text-center">
						<h1 className="text-4xl font-bold mb-2  animate-fade-up">
							Find Top Providers in Ethiopia.
						</h1>
					</div>
				</section>
				<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-16 relative z-10">
					<div className="bg-background shadow-lg rounded-lg p-8 mb-8">
						<div className="border-l-4 border-primary pl-6 mb-6">
							<p className="text-md text-muted-foreground">
								Whether you want to find a doctor for yourself or a family
								member, we can help you get to the right place. Tilla Health
								companies&apos; contract with doctors and health care
								professionals across the country.
							</p>
						</div>
						<div className="space-y-4">
							<Input
								type="text"
								placeholder="Search hospitals..."
								value={searchTerm}
								onChange={(e) => setSearchTerm(e.target.value)}
								className="w-full"
							/>
							<div className="grid grid-cols-1 md:grid-cols-3 gap-4">
								<div>
									<Label
										className="text-primary text-md mb-2 block"
										htmlFor="affiliation-filter"
									>
										Hospital Affiliation
									</Label>
									<Select
										onValueChange={(value) =>
											handleFilterChange("affiliation", value)
										}
									>
										<SelectTrigger id="affiliation-filter">
											<SelectValue placeholder="Select affiliation" />
										</SelectTrigger>
										<SelectContent>
											<SelectItem value="All">All</SelectItem>
											<SelectItem value="Government">Government</SelectItem>
											<SelectItem value="Private">Private</SelectItem>
											<SelectItem value="Non-Profit">Non-Profit</SelectItem>
										</SelectContent>
									</Select>
								</div>
								<div>
									<Label
										className="text-primary text-md mb-2 block"
										htmlFor="facility-type-filter"
									>
										Facility Type
									</Label>
									<Select
										onValueChange={(value) =>
											handleFilterChange("facilityType", value)
										}
									>
										<SelectTrigger id="facility-type-filter">
											<SelectValue placeholder="Select facility type" />
										</SelectTrigger>
										<SelectContent>
											<SelectItem value="All">All</SelectItem>
											<SelectItem value="Hospital">Hospital</SelectItem>
											<SelectItem value="Medical Center">
												Medical Center
											</SelectItem>
											<SelectItem value="Medical Clinic">
												Medical Clinic
											</SelectItem>
											<SelectItem value="MCH( Maternity and Children's Health) Center">
												MCH( Maternity and Children&apos;s Health) Center
											</SelectItem>
										</SelectContent>
									</Select>
								</div>
								<div>
									<Label
										className="text-primary text-md mb-2 block"
										htmlFor="sort-by"
									>
										Sort By
									</Label>
									<Select onValueChange={setSortBy}>
										<SelectTrigger id="sort-by">
											<SelectValue placeholder="Sort by" />
										</SelectTrigger>
										<SelectContent>
											<SelectItem value="name">Name</SelectItem>
											<SelectItem value="rating">Rating</SelectItem>
										</SelectContent>
									</Select>
								</div>
							</div>
							<div className="flex items-center space-x-2">
								<Checkbox
									id="accepts-tilla-health"
									checked={filters.acceptsTillaHealth}
									onCheckedChange={(checked: boolean) =>
										setFilters((prev) => ({
											...prev,
											acceptsTillaHealth: checked,
										}))
									}
								/>
								<label
									htmlFor="accepts-tilla-health"
									className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
								>
									Accepts Tilla Health
								</label>
							</div>
						</div>
					</div>
					<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
						{filteredHospitals.map((hospital, index) => (
							<HospitalCard key={index} {...hospital} />
						))}
					</div>
				</div>
			</main>
		</div>
	);
}
