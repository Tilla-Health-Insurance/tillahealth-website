"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

import { Button } from "@/components/ui/button";
import { ModeToggle } from "@/components/ui/custom/modeToggle";

import { NavigationMenuDemo } from "./NavigationMenuDemo";

const TopNav = () => {
	const route = useRouter();
	const [isMenuOpen, setIsMenuOpen] = useState(false);

	const toggleMenu = () => setIsMenuOpen((prev) => !prev);

	return (
		<nav className="bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 z-50 w-full">
			<div className="mx-auto px-4 py-1 sm:px-6 lg:px-8 bg-primary">
				<div className="flex items-center h-14">
					<div className="container mx-auto">
						<NavigationMenuDemo />
					</div>

					<div className="mr-0 flex items-center gap-2 md:mr-2">
						<ModeToggle />
						{/* Hamburger Menu Icon */}
					</div>
				</div>
			</div>
		</nav>
	);
};

export default TopNav;
