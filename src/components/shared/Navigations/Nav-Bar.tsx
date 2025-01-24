"use client";

import { MailOpen, PhoneOutgoing } from "lucide-react";
import { useTypewriter } from "react-simple-typewriter";

import { Button } from "@/components/ui/button";
import { ModeToggle } from "@/components/ui/custom/modeToggle";

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
						<PhoneOutgoing className="mr-2 h-3 w-3" />
						<span className="sm:flex hidden text-xs">+1 (202)-975-5013</span>
					</Button>
					<Button className="h-6 text-white" variant="ghost">
						<MailOpen className="mr-2 h-3 w-3" />
						<span className="sm:flex hidden text-xs">
							Support@tillahealth.com
						</span>
					</Button>
					<ModeToggle classStyle="h-6 w-6 border-none dark:bg-black" />
					<LocaleSwitcher />
				</div>
			</div>
		</div>
	);
};

export default Navbar;
