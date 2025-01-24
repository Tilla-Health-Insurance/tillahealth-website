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
		address: "Sheger NOC Abageda Roundabout, Addis Ababa, Ethiopia",
		hours: "Open 24 hours",
		imageUrl: IMAGES.careLandHospital,
		phone: "+251 97 786 8686",
		facility_affiliation: "Private",
		facility_type: "Hospital",
		rating: "4.8 (482)",
		accepts: "Tilla Health",
	},
	{
		name: "Nordic Medical Centre",
		address: "Bole sub city, Kebele 01",
		hours: "Open 24 hours",
		imageUrl: IMAGES.nordicHospital,
		phone: "+251 92 910 5653",
		facility_affiliation: "Private",
		facility_type: "Medical Center",
		rating: "4.3 (100)",
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
		imageUrl: IMAGES.cureHospital,
		phone: "+251 11 122 7520",
		facility_affiliation: "Non-Profit",
		facility_type: "Hospital",
		rating: "4.5 (22)",
		accepts: "Tilla Health",
	},
	{
		name: "Abay Medium Clinic",
		address: "Addis Ababa, Ethiopia",
		phone: "+251 11 419 6184",
		imageUrl: IMAGES.abayHospital,
		facility_affiliation: "Private",
		facility_type: "Medical Clinic",
		rating: "4.5 (10)",
		accepts: "Tilla Health",
	},
	{
		name: "Semah MCH Center",
		address:
			"Haya Hulet (22) Junction around Birhan Zare School, Addis Ababa, Ethiopia",
		phone: "+251 93 029 4147",
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

			// If "All" is selected, clear the filter for that type
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
		<div className="min-h-screen ">
			<main>
				<div className="App">
					<section className="relative h-[60vh] flex items-center bg-primary overflow-hidden">
						{/* Add decorative waves */}
						<div className="absolute bottom-0 left-0 w-full">
							<svg
								viewBox="0 0 1440 100"
								fill="none"
								xmlns="http://www.w3.org/2000/svg"
							>
								<path
									d="M0 50L48 45.7C96 41.3 192 32.7 288 29.2C384 25.7 480 27.3 576 35.2C672 43 768 57 864 62.5C960 68 1056 65 1152 57.5C1248 50 1344 38 1392 32L1440 26V100H1392C1344 100 1248 100 1152 100C1056 100 960 100 864 100C768 100 672 100 576 100C480 100 384 100 288 100C192 100 96 100 48 100H0V50Z"
									fill="white"
									fillOpacity="0.1"
								/>
								<path
									d="M0 75L48 70.7C96 66.3 192 57.7 288 54.2C384 50.7 480 52.3 576 60.2C672 68 768 82 864 87.5C960 93 1056 90 1152 82.5C1248 75 1344 63 1392 57L1440 51V100H1392C1344 100 1248 100 1152 100C1056 100 960 100 864 100C768 100 672 100 576 100C480 100 384 100 288 100C192 100 96 100 48 100H0V75Z"
									fill="white"
									fillOpacity="0.05"
								/>
							</svg>
						</div>

						<div className="relative z-10 container mx-auto px-4 text-center text-white">
							<h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 animate-fade-up">
								Find Top Providers in Ethiopia.
							</h1>
						</div>
					</section>
					{/* rest of the app */}
				</div>
				<div className="space-y-6 px-4 py-6  max-w-7xl mx-auto sm:px-6 lg:px-8">
					<div className="border-l-4 border-primary pl-6">
						<p className="text-lg text-muted-foreground">
							Whether you want to find a doctor for yourself or a family member,
							we can help you get to the right place. Tilla Health
							companies&apos; contract with doctors and health care
							professionals across the country.
						</p>
					</div>
				</div>
				<div className="px-4 py-6 max-w-7xl mx-auto sm:px-6 lg:px-8">
					<div className="mb-6 space-y-4">
						<Input
							type="text"
							placeholder="Search hospitals..."
							value={searchTerm}
							onChange={(e) => setSearchTerm(e.target.value)}
							className="w-full"
						/>
						<div className="flex flex-wrap gap-4">
							<div className="flex-1 min-w-[200px]">
								<Label
									className="text-primary text-md"
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
							<div className="flex-1 min-w-[200px]">
								<Label
									className="text-primary text-md"
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
							<div className="flex-1 min-w-[200px]">
								<Label className="text-primary text-md" htmlFor="sort-by">
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
					<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
						{filteredHospitals.map((hospital, index) => (
							<HospitalCard key={index} {...hospital} />
						))}
					</div>
				</div>
			</main>
		</div>
	);
}
