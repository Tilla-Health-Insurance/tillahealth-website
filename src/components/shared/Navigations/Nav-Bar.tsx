"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";

import { BriefcaseMedical, ChevronDown, Hospital, User } from "lucide-react";
import { useTypewriter } from "react-simple-typewriter";

import { Button } from "@/components/ui/button";
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuGroup,
	DropdownMenuItem,
	DropdownMenuLabel,
	DropdownMenuSeparator,
	DropdownMenuShortcut,
	DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { IMAGES } from "@/constants/files";

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
	const route = useRouter();

	return (
		<>
			<div className="py-3 px-4 sm:px-8 text-center z-10 bg-card">
				<div className="flex justify-between items-center mx-auto">
					<Image
						src={IMAGES.redLogo}
						width={120}
						height={60}
						alt={"logo"}
						onClick={() => route.push("/home")}
					/>
					{/* <p className="text-white text-sm flex gap-1">
						&#128400; <span className="hidden sm:flex"> {typewriter}</span>
					</p> */}
					<div className="flex space-x-3 justify-center items-center">
						<div className="hidden md:block">
							<LocaleSwitcher />
						</div>
						<div className="hidden md:block">
							<DropdownMenu>
								<DropdownMenuTrigger asChild>
									<Button variant={"outline"} className="h-6 gap-3">
										<span className="sm:flex">Sign In/Register</span>
										<ChevronDown className="h-3 w-3" />
									</Button>
								</DropdownMenuTrigger>
								<DropdownMenuContent className="w-56">
									<DropdownMenuLabel>Sign In/Register as:</DropdownMenuLabel>
									<DropdownMenuSeparator />
									<DropdownMenuGroup>
										<DropdownMenuItem>
											<Button
												variant="ghost"
												onClick={() => {
													window.location.href =
														"https://register.tillahealth.com/home";
												}}
											>
												<User size={16} />
												<span className="text-xs px-2">Member</span>
												<DropdownMenuShortcut>⇧⌘P</DropdownMenuShortcut>
											</Button>
										</DropdownMenuItem>
										<DropdownMenuItem>
											<Button
												variant="ghost"
												onClick={() => {
													window.location.href =
														"https://register.tillahealth.com/provider";
												}}
											>
												<Hospital size={16} />
												<span className="text-xs px-2">Provider</span>
												<DropdownMenuShortcut>⌘B</DropdownMenuShortcut>
											</Button>
										</DropdownMenuItem>
										<DropdownMenuItem>
											<Button
												variant="ghost"
												onClick={() => {
													window.location.href =
														"https://register.tillahealth.com/broker";
												}}
											>
												<BriefcaseMedical size={16} />
												<span className="text-xs px-2">Broker</span>
												<DropdownMenuShortcut>⌘S</DropdownMenuShortcut>
											</Button>
										</DropdownMenuItem>
									</DropdownMenuGroup>
								</DropdownMenuContent>
							</DropdownMenu>

							<DropdownMenu>
								<DropdownMenuTrigger asChild>
									<Button variant={"outline"} className="h-6 gap-3">
										<span className="sm:flex">Self Service</span>
										<ChevronDown className="h-3 w-3" />
									</Button>
								</DropdownMenuTrigger>
								<DropdownMenuContent className="w-56">
									<DropdownMenuLabel>Self Service Portal</DropdownMenuLabel>
									<DropdownMenuSeparator />
									<DropdownMenuGroup>
										<DropdownMenuItem>
											<Button
												variant="ghost"
												onClick={() => route.push("/auth/sign-in" as any)}
											>
												<User size={16} />
												<span className="text-xs px-2">Member</span>
												<DropdownMenuShortcut>⇧⌘P</DropdownMenuShortcut>
											</Button>
										</DropdownMenuItem>
										<DropdownMenuItem>
											<Button
												variant="ghost"
												onClick={() =>
													// window.open("https://provider.tillahealth.com/")
													route.push("/auth/sign-in" as any)
												}
											>
												<Hospital size={16} />
												<span className="text-xs px-2">Provider</span>
												<DropdownMenuShortcut>⌘B</DropdownMenuShortcut>
											</Button>
										</DropdownMenuItem>
										<DropdownMenuItem>
											<Button
												variant="ghost"
												onClick={() =>
													// window.open("https://broker.tillahealth.com/")
													route.push("/auth/sign-in" as any)
												}
											>
												<BriefcaseMedical size={16} />
												<span className="text-xs px-2">Broker</span>
												<DropdownMenuShortcut>⌘S</DropdownMenuShortcut>
											</Button>
										</DropdownMenuItem>
									</DropdownMenuGroup>
								</DropdownMenuContent>
							</DropdownMenu>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default Navbar;
