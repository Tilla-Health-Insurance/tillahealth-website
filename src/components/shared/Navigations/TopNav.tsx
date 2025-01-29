"use client";

import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

import {
	BriefcaseMedical,
	ChevronDown,
	Hospital,
	LogIn,
	Menu,
	User,
} from "lucide-react";

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
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { menuItems } from "@/constants/data/menu_items";
import { IMAGES } from "@/constants/files";
import { cn } from "@/lib/utils";

import { NavigationMenuDemo } from "./NavigationMenuDemo";

interface NavigationProps {
	className?: string;
}

const TopNav = ({ className }: NavigationProps) => {
	const route = useRouter();
	const [isMenuOpen, setIsMenuOpen] = useState(false);
	const [openSublinks, setOpenSublinks] = useState<number[]>([]);
	const [openSectionIndex, setOpenSectionIndex] = useState<number | null>(null);
	const [logo, setLogo] = useState(IMAGES.redLogo);
	const [logoWidth, setLogoWidth] = useState(120); // Default width for large logo
	const [isScrolled, setIsScrolled] = useState(false);

	useEffect(() => {
		const handleScroll = () => {
			setIsScrolled(window.scrollY > 0);
		};

		window.addEventListener("scroll", handleScroll);
		return () => window.removeEventListener("scroll", handleScroll);
	}, []);

	const handleResize = () => {
		if (window.innerWidth < 768) {
			setLogo(IMAGES.logoredicon);
			setLogoWidth(50);
		} else {
			setLogo(IMAGES.redLogo);
			setLogoWidth(120); // Width for large logo
		}
	};
	useEffect(() => {
		handleResize(); // Set initial logo
		window.addEventListener("resize", handleResize); // Listen for resize events

		return () => {
			window.removeEventListener("resize", handleResize); // Cleanup listener
		};
	}, []);

	const [isOpen, setIsOpen] = useState(false);
	const handleToggleSection = (index: number) => {
		setOpenSectionIndex(openSectionIndex === index ? null : index);
	};

	const handleToggleSublinks = (index: number) => {
		setOpenSublinks((prev) =>
			prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]
		);
	};

	const handleClose = () => {
		setIsOpen?.(false);
	};
	const toggleMenu = () => setIsMenuOpen((prev) => !prev);
	const MobileMenu = () => (
		<nav className={cn("flex flex-col h-full", className)}>
			<div className="flex-1 overflow-y-auto py-4">
				<div className="space-y-4">
					{menuItems.map((item, index) => (
						<div key={index} className="px-4">
							{item.content ? (
								<div className="space-y-4">
									<div className="flex items-center justify-between">
										<item.icon className="w-5 h-5 mr-2" />
										<Link
											onClick={() => setIsOpen(false)}
											href={item.href || ("#" as any)}
										>
											{item.title}
										</Link>
										<Button
											variant="ghost"
											className=" font-medium text-lg"
											onClick={() => handleToggleSection(index)}
										>
											<ChevronDown
												className={cn(
													"ml-auto h-5 w-5 transition-transform",
													openSectionIndex === index && "rotate-180"
												)}
											/>
										</Button>
									</div>
									{openSectionIndex === index && (
										<div className="space-y-6">
											{item.content.sections.map((section, sectionIndex) => (
												<div key={sectionIndex} className="ml-7">
													<h4 className="text-sm font-semibold text-muted-foreground mb-2">
														{section.title}
													</h4>
													<div className="space-y-2">
														{section.links.map((link, linkIndex) => (
															<div key={linkIndex}>
																<div className="flex items-center gap-4">
																	<Link
																		href={link.href as any}
																		className="flex-1 group"
																		onClick={handleClose}
																	>
																		<div className="flex items-center py-2">
																			<link.icon className="w-5 h-5 text-primary mr-2" />
																			<span className="font-medium group-hover:text-primary">
																				{link.label}
																			</span>
																		</div>
																	</Link>
																	{link.sublinks &&
																		link.sublinks.length > 0 && (
																			<Button
																				variant="ghost"
																				size="sm"
																				className="p-2"
																				onClick={() =>
																					handleToggleSublinks(linkIndex)
																				}
																				aria-expanded={openSublinks.includes(
																					linkIndex
																				)}
																			>
																				<ChevronDown
																					className={cn(
																						"h-4 w-4 transition-transform",
																						openSublinks.includes(linkIndex) &&
																							"rotate-180"
																					)}
																				/>
																			</Button>
																		)}
																</div>
																{link.sublinks &&
																	openSublinks.includes(linkIndex) && (
																		<ul className="ml-7 space-y-1 mt-1">
																			{link.sublinks.map(
																				(sublink, sublinkIndex) => (
																					<li key={sublinkIndex}>
																						<Link
																							href={sublink.href as any}
																							className="text-sm text-muted-foreground hover:text-primary block py-1"
																							onClick={handleClose}
																						>
																							{sublink.label}
																						</Link>
																					</li>
																				)
																			)}
																		</ul>
																	)}
															</div>
														))}
													</div>
												</div>
											))}
										</div>
									)}
								</div>
							) : (
								<Link
									href={item.href || ("#" as any)}
									className="flex items-center py-2 text-primary font-medium hover:text-primary/80"
									onClick={handleClose}
								>
									<item.icon className="w-5 h-5 mr-2" />
									{item.title}
								</Link>
							)}
						</div>
					))}
				</div>
			</div>
			<div className="grid gap-4 p-4 border-t bg-card">
				<DropdownMenu>
					<DropdownMenuTrigger asChild>
						<Button
							variant={"default"}
							className="hover:bg-primary h-10 w-60 gap-3 rounded-xl"
						>
							<span className="sm:flex">Register</span>
							<ChevronDown className="h-3 w-3" />
						</Button>
					</DropdownMenuTrigger>
					<DropdownMenuContent className="w-60">
						<DropdownMenuLabel>Register as:</DropdownMenuLabel>
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
			</div>
		</nav>
	);
	return (
		<nav
			className={cn(
				"fixed bg-background z-50 w-full transition-all duration-100 ease-in-out",
				isScrolled && "shadow-md top-0"
			)}
		>
			<Image
				src={logo}
				width={logoWidth}
				height={(logoWidth * 60) / 120} // Maintain aspect ratio if needed
				alt="logo"
				className="absolute left-3 top-1/2 transform -translate-y-1/2 cursor-pointer"
				onClick={() => route.push("/home")}
			/>
			<div className="mx-auto px-4 py-1 sm:px-6 lg:px-8 ">
				<div className="flex items-center h-14">
					<div className="container mx-auto">
						<NavigationMenuDemo />
						{/* Mobile Menu */}
						<div className="absolute right-4 bottom-4 lg:hidden">
							<Sheet open={isOpen} onOpenChange={setIsOpen}>
								<SheetTrigger asChild>
									<Button variant="outline" size="icon" className="lg:hidden">
										<Menu className=" h-5 w-5 rotate-0 scale-100 transition-all dark:text-white text-black" />
										<span className="sr-only">Toggle navigation menu</span>
									</Button>
								</SheetTrigger>

								<SheetContent
									side="right"
									className="w-[350px] sm:w-[400px] flex flex-col h-full"
								>
									<div className="flex-1 overflow-y-auto scroll-smooth">
										<MobileMenu />
									</div>
								</SheetContent>
							</Sheet>
						</div>
					</div>

					<div className="mr-0 flex items-center gap-2 md:mr-2">
						{/* Hamburger Menu Icon */}
						<div className="md:block">
							<DropdownMenu>
								<DropdownMenuTrigger asChild>
									<Button
										variant={"outline"}
										className="mr-10 lg:mr-0 gap-3 bg-primary text-white border-none rounded-xl "
									>
										<LogIn className=" h-5 w-5 rotate-0 scale-100 transition-all dark:text-white text-white" />
										<span className="sm:flex">Register</span>
										<ChevronDown className="h-3 w-3" />
									</Button>
								</DropdownMenuTrigger>
								<DropdownMenuContent className="w-56">
									<DropdownMenuLabel>Register as:</DropdownMenuLabel>
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

							{/* <DropdownMenu>
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
							</DropdownMenu> */}
						</div>
					</div>
				</div>
			</div>
		</nav>
	);
};

export default TopNav;
