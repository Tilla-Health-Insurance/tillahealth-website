"use client";

import { ArrowUpDown } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const categories = [
	{ id: "all", label: "All" },
	{ id: "Health Insurance", label: "Health Insurance" },
	{ id: "Technology", label: "Technology" },
	{ id: "company", label: "Company" },
];

interface NewsFiltersProps {
	selectedCategory: string;
	sortOrder: string;
	onCategoryChange: (category: string) => void;
	onSortChange: (sort: string) => void;
}

export function NewsFilters({
	selectedCategory,
	sortOrder,
	onCategoryChange,
	onSortChange,
}: NewsFiltersProps) {
	return (
		<div className="flex flex-wrap items-center justify-between gap-4 mb-8">
			<div className="flex flex-wrap gap-2">
				{categories.map((category) => (
					<Button
						key={category.id}
						variant={selectedCategory === category.id ? "default" : "outline"}
						onClick={() => onCategoryChange(category.id)}
					>
						{category.label}
					</Button>
				))}
			</div>

			<DropdownMenu>
				<DropdownMenuTrigger asChild>
					<Button variant="outline">
						<ArrowUpDown className="mr-2 h-4 w-4" />
						Sort by: {sortOrder === "desc" ? "Newest" : "Oldest"}
					</Button>
				</DropdownMenuTrigger>
				<DropdownMenuContent align="end">
					<DropdownMenuItem onClick={() => onSortChange("desc")}>
						Newest
					</DropdownMenuItem>
					<DropdownMenuItem onClick={() => onSortChange("asc")}>
						Oldest
					</DropdownMenuItem>
				</DropdownMenuContent>
			</DropdownMenu>
		</div>
	);
}
