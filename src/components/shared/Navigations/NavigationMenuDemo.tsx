"use client";

import Link from "next/link";
import { useState } from "react";

import {
	ArrowRight,
	BriefcaseMedical,
	ChevronDown,
	Hospital,
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
import {
	NavigationMenu,
	NavigationMenuContent,
	NavigationMenuItem,
	NavigationMenuList,
	NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { menuItems } from "@/constants/data/menu_items";
import { cn } from "@/lib/utils";

interface NavigationProps {
	className?: string;
}

export function NavigationMenuDemo({ className }: NavigationProps) {
	const [isOpen, setIsOpen] = useState(false);
	const [openIndex, setOpenIndex] = useState(null);

	const [openSectionIndex, setOpenSectionIndex] = useState<number | null>(null);
	const [openSublinks, setOpenSublinks] = useState<number[]>([]);

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
	const handleToggle = (index: any) => {
		setOpenIndex(openIndex === index ? null : index); // Toggle the dropdown
	};
	// Fetch menu items
	// const { data: menuItems, isLoading, isError } = useGetMenuItems();

	// // Log the fetched data
	// console.log("Fetched Menu Items:", menuItems);

	// // Handle loading state
	// if (isLoading) {
	// 	return <div>Loading...</div>;
	// }

	// // Handle error state
	// if (isError) {
	// 	return <div>Error loading menu items.</div>;
	// }

	// // Fallback for undefined menuItems
	// if (!menuItems) {
	// 	return <div>No menu items available.</div>;
	// }

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
						<Button variant={"default"} className="h-10 w-60 gap-3 rounded-xl">
							<span className="sm:flex">Sign In/Register</span>
							<ChevronDown className="h-3 w-3" />
						</Button>
					</DropdownMenuTrigger>
					<DropdownMenuContent className="w-60">
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
						<Button variant={"default"} className="h-10 w-60 gap-3 rounded-xl">
							<span className="sm:flex">Self Service</span>
							<ChevronDown className="h-3 w-3" />
						</Button>
					</DropdownMenuTrigger>
					<DropdownMenuContent className="w-60">
						<DropdownMenuLabel>Self Service Portal</DropdownMenuLabel>
						<DropdownMenuSeparator />
						<DropdownMenuGroup>
							<DropdownMenuItem>
								<Button
									variant="ghost"
									onClick={() => window.open("https://member.tillahealth.com/")}
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
										window.open("https://provider.tillahealth.com/")
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
									onClick={() => window.open("https://broker.tillahealth.com/")}
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
		<div className="relative">
			{/* Mobile Menu */}
			<div className="absolute -left-8 -bottom-4 md:hidden">
				<Sheet open={isOpen} onOpenChange={setIsOpen}>
					<SheetTrigger asChild>
						<Button variant="outline" size="icon" className="md:hidden">
							<Menu className=" h-5 w-5 rotate-0 scale-100 transition-all dark:text-white text-black" />
							<span className="sr-only">Toggle navigation menu</span>
						</Button>
					</SheetTrigger>

					<SheetContent
						side="left"
						className="w-[350px] sm:w-[400px] flex flex-col h-full"
					>
						<div className="flex-1 overflow-y-auto scroll-smooth">
							<MobileMenu />
						</div>
					</SheetContent>
				</Sheet>
			</div>

			{/* Desktop Menu */}
			<div className="hidden md:block">
				<NavigationMenu className="max-w-full">
					<NavigationMenuList className="flex-wrap gap-2">
						{menuItems.map((item, index) => (
							<NavigationMenuItem key={index} className="flex-shrink-0">
								{item.content ? (
									<>
										<NavigationMenuTrigger className="bg-primary hover:bg-primary focus:bg-primary text-white">
											{/* <item.icon className="w-4 h-4 mr-2" /> */}
											<Link href={item.href || ("#" as any)}>
												{" "}
												{item.title}
											</Link>
										</NavigationMenuTrigger>
										<NavigationMenuContent>
											<div className="w-full sm:w-[640px] md:w-[768px] lg:w-[1024px] xl:w-[1280px] bg-gradient-to-b from-card to-background">
												<div className="max-w-7xl mx-auto p-4 sm:p-6">
													<div className="grid grid-cols-1 md:grid-cols-4 gap-6 md:gap-8">
														{/* Header Section */}
														<div className="col-span-1">
															<h3 className="text-lg sm:text-xl font-semibold mb-2 text-primary">
																{item.content.header}
															</h3>
															<p className="text-sm text-muted-foreground mb-4">
																{item.content.description}
															</p>
														</div>

														{/* Main Content Section */}
														<div className="col-span-1 md:col-span-3">
															{item.content.sections?.map(
																(section, sectionIndex) => (
																	<div
																		key={sectionIndex}
																		className="mb-6 sm:mb-8"
																	>
																		<h4 className="text-sm font-semibold text-muted-foreground mb-3 sm:mb-4">
																			{section.title}
																		</h4>
																		<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-4 sm:gap-6">
																			{section.links.map((link, linkIndex) => (
																				<div key={linkIndex} className="group">
																					<div className="flex items-center">
																						<Link
																							href={link.href as any}
																							className="flex flex-1 items-start p-2 sm:p-3 rounded-lg hover:bg-accent transition-colors"
																						>
																							<link.icon className="w-5 h-5 text-primary mr-2 sm:mr-3 mt-1 flex-shrink-0" />
																							<div className="min-w-0 flex-1">
																								<div className="font-medium mb-1 group-hover:text-primary transition-colors truncate">
																									{link.label}
																								</div>
																								<p className="text-sm text-muted-foreground mb-2 line-clamp-2">
																									{link.description}
																								</p>
																							</div>
																						</Link>
																						{link.sublinks &&
																							link.sublinks.length > 0 && (
																								<button
																									onClick={() =>
																										handleToggle(linkIndex)
																									}
																									className="p-2 hover:bg-accent rounded-lg z-10 "
																									aria-expanded={
																										openIndex === linkIndex
																									}
																								>
																									<ChevronDown className="h-5 w-5 text-primary" />
																								</button>
																							)}
																					</div>

																					{/* Dropdown for sublinks */}
																					{link.sublinks &&
																						openIndex === linkIndex && (
																							<ul className="space-y-1 ml-7 mt-2">
																								{link.sublinks.map(
																									(sublink, sublinkIndex) => (
																										<li key={sublinkIndex}>
																											<Link
																												href={
																													sublink.href as any
																												}
																												className="text-sm text-muted-foreground hover:text-primary block py-1 px-2 rounded hover:bg-accent"
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
																)
															)}
														</div>
													</div>

													{/* Footer Section */}
													<div className="mt-4 sm:mt-6 pt-4 sm:pt-6 border-t">
														<div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
															<div>
																<h4 className="font-semibold text-primary">
																	{item.content.footer?.title}
																</h4>
																<p className="text-sm text-muted-foreground">
																	{item.content.footer?.description}
																</p>
															</div>
															<Link
																href="#"
																className="inline-flex items-center text-primary hover:text-primary/90 font-medium"
															>
																{item.content.footer?.learnMoreLabel}
																<ArrowRight className="ml-1 h-4 w-4" />
															</Link>
														</div>
													</div>
												</div>
											</div>
										</NavigationMenuContent>
									</>
								) : (
									<Link
										href={item.href || ("#" as any)}
										className="flex items-center px-3 sm:px-4 py-2 text-sm font-medium text-primary-foreground bg-primary hover:bg-primary/90 rounded-md"
									>
										<item.icon className="w-4 h-4 mr-2" />
										<span>{item.title}</span>
									</Link>
								)}
							</NavigationMenuItem>
						))}
					</NavigationMenuList>
				</NavigationMenu>
			</div>
		</div>
	);
}
