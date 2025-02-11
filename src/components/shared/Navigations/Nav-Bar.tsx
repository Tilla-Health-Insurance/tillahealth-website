"use client";

import { PhoneOutgoing, Stethoscope } from "lucide-react";
import { useTypewriter } from "react-simple-typewriter";

import { Button } from "@/components/ui/button";
import { ModeToggle } from "@/components/ui/custom/modeToggle";
import { Link } from "@/navigation";

import LocaleSwitcher from "../DropDown/LocaleSwitcher";

const Navbar = () => {
	const [typewriter] = useTypewriter({
		words: [
			"Welcome to Tilla Health Insurance",
			"Protecting Your Health, Securing Your Future.",
		],
		loop: true,
		deleteSpeed: 40,
		typeSpeed: 100,
	});

	return (
		<div className="bg-primary z-10 dark:bg-muted py-1 px-4 sm:px-8 text-center">
			<div className="flex justify-between items-center mx-auto">
				<p className="text-white dark:text-white text-sm flex gap-1">
					&#128400; <span className="hidden md:flex"> {typewriter}</span>
				</p>
				<div className="flex space-x-3 justify-center items-center">
					<Button className="h-6 text-white" variant="ghost">
						<Link href="/contact-us" className="flex items-center">
							<PhoneOutgoing className="mr-2 h-3 w-3" />
							<span className="sm:flex hidden text-xs">Contact Us</span>
						</Link>
					</Button>
					<Button className="h-6 text-white" variant="ghost">
						<Link href="/find-a-provider" className="flex items-center">
							<Stethoscope className="mr-2 h-3 w-3" />
							<span className="sm:flex hidden text-xs">Find A Provider</span>
						</Link>
					</Button>
					<ModeToggle classStyle="h-6 w-6 border-none dark:bg-black" />
					<LocaleSwitcher />
				</div>
			</div>
		</div>
	);
};

export default Navbar;
