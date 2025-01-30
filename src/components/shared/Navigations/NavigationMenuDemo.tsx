"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import * as React from "react";
import { useState } from "react";

import { ChevronDown } from "lucide-react";

import {
	NavigationMenu,
	NavigationMenuContent,
	NavigationMenuItem,
	NavigationMenuLink,
	NavigationMenuList,
	NavigationMenuTrigger,
	navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { menuItems } from "@/constants/data/menu_items";
import { cn } from "@/lib/utils";

interface NavigationProps {
	className?: string;
}

export function NavigationMenuDemo({ className }: NavigationProps) {
	const pathname = usePathname();
	const [isOpen, setIsOpen] = useState(false);
	const [openIndex, setOpenIndex] = useState(null);

	const [openSectionIndex, setOpenSectionIndex] = useState<number | null>(null);
	const [openSublinks, setOpenSublinks] = useState<number[]>([]);
	const [openSublink, setOpenSublink] = useState<string | null>(null);

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

	const handleSublink = (title: string) => {
		setOpenSublink(openSublink === title ? null : title);
	};

	const isActive = (href: string) => {
		if (href === "/") {
			return pathname.endsWith("/home");
		}
		return pathname.endsWith(href);
	};
	// console.log(pathname);
	// // console.log(href);
	// console.log(pathname.endsWith("/services"));
	return (
		<div className="relative">
			{/* Desktop Menu */}

			<div className="hidden md:hidden lg:block">
				<NavigationMenu className="max-w-full">
					<NavigationMenuList>
						{menuItems.map((item, index) => (
							<NavigationMenuItem key={index}>
								{item.content ? (
									<>
										<NavigationMenuTrigger
											className={cn(
												navigationMenuTriggerStyle(),
												"hover:text-primary hover:bg-transparent active:bg-transparent focus:bg-transparent",
												"relative after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-0 after:bg-primary",
												isActive(item.href) &&
													"text-primary after:w-full bg-transparent"
											)}
										>
											<item.icon className="w-4 h-4 mr-2" />
											{item.title}
										</NavigationMenuTrigger>
										<NavigationMenuContent>
											<div className="w-[calc(100vw-4rem)] max-w-6xl mx-auto p-4 ">
												<div className="grid grid-cols-1 md:grid-cols-4 gap-6">
													{/* Header Section */}
													<div className="row-span-3">
														<NavigationMenuLink asChild>
															<Link
																href={item.href || ("#" as any)}
																className="flex h-full w-full select-none flex-col justify-end rounded-md p-6 no-underline outline-none focus:shadow-md relative overflow-hidden min-h-[320px]"
															>
																<Image
																	src={item.image}
																	alt={item.content.header || "Background"}
																	fill
																	className="object-cover object-center"
																	priority
																	sizes="(max-width: 768px) 100vw, 25vw"
																/>

																<div className="absolute inset-0 bg-gradient-to-t from-black/60 to-black/20" />

																<div className="relative z-10">
																	<h3 className="mb-2 text-lg font-medium text-white">
																		{item.content.header}
																	</h3>
																	<p className="text-sm text-white/80">
																		{item.content.description}
																	</p>
																</div>
															</Link>
														</NavigationMenuLink>
													</div>

													{/* Main Content Section */}
													<div className="col-span-3">
														<ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
															{item.content.sections?.map(
																(section, sectionIndex) => (
																	<div
																		key={sectionIndex}
																		className={cn(
																			"space-y-3",
																			section.links.length > 4
																				? "md:col-span-2"
																				: ""
																		)}
																	>
																		<h4 className="text-sm font-medium text-muted-foreground">
																			{section.title}
																		</h4>
																		<div
																			className={cn(
																				"grid gap-2",
																				section.links.length > 4
																					? "grid-cols-2"
																					: "grid-cols-1"
																			)}
																		>
																			{section.links.map((link, linkIndex) => (
																				<ListItem
																					key={linkIndex}
																					href={link.href}
																					title={link.label}
																					sublinks={link.sublinks}
																					icon={link.icon}
																					openSublink={openSublink}
																					onSublink={handleSublink}
																				>
																					{link.description}
																				</ListItem>
																			))}
																		</div>
																	</div>
																)
															)}
														</ul>
													</div>
												</div>
											</div>
										</NavigationMenuContent>
									</>
								) : (
									<Link
										href={item.href || ("#" as any)}
										legacyBehavior
										passHref
									>
										<NavigationMenuLink
											className={cn(
												navigationMenuTriggerStyle(),
												"hover:text-primary hover:bg-transparent active:bg-transparent focus:bg-transparent",
												"relative after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-0 after:bg-primary",
												isActive(item.href) &&
													"text-primary after:w-full bg-transparent"
											)}
										>
											<item.icon className="w-4 h-4 mr-2" />
											{item.title}
										</NavigationMenuLink>
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

const ListItem = React.forwardRef<
	React.ElementRef<"a">,
	React.ComponentPropsWithoutRef<"a"> & {
		href: string | URL | { pathname: string };
		title: string;
		icon?: any;
		sublinks?: Array<{ href: string; label: string }>;
		openSublink?: string | null;
		onSublink?: (title: string) => void;
	}
>(
	(
		{
			className,
			title,
			children,
			sublinks,
			icon: Icon,
			openSublink,
			onSublink,
			...props
		},
		ref
	) => {
		const isOpen = openSublink === title;

		return (
			<li>
				<div className="group">
					<div className="flex items-center">
						<NavigationMenuLink asChild>
							<a
								ref={ref}
								className={cn(
									"flex-1 block select-none rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent focus:bg-accent group",
									className
								)}
								{...props}
							>
								<div className="grid grid-cols-[auto,1fr] gap-3">
									{Icon && (
										<Icon className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
									)}
									<div>
										<div className="text-sm font-medium leading-none group-hover:text-primary transition-colors">
											{title}
										</div>
										<p className="line-clamp-2 text-sm leading-snug text-muted-foreground mt-1">
											{children}
										</p>
									</div>
								</div>
							</a>
						</NavigationMenuLink>
						{sublinks && sublinks.length > 0 && (
							<button
								onClick={() => onSublink?.(title)}
								className="p-2 hover:bg-accent rounded-lg z-10"
								aria-expanded={isOpen}
							>
								<ChevronDown
									className={cn(
										"h-5 w-5 text-primary transition-transform duration-200",
										isOpen && "transform rotate-180"
									)}
								/>
							</button>
						)}
					</div>

					{/* Sublinks dropdown */}
					{sublinks && isOpen && (
						<ul className="space-y-1 ml-7 mt-2">
							{sublinks.map((sublink, index) => (
								<li key={index}>
									<Link
										href={sublink.href as any}
										className="text-sm text-muted-foreground hover:text-primary block py-1 px-2 rounded hover:bg-accent"
									>
										{sublink.label}
									</Link>
								</li>
							))}
						</ul>
					)}
				</div>
			</li>
		);
	}
);
ListItem.displayName = "ListItem";
