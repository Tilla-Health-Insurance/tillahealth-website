"use client";

import Image from "next/image";
import Link from "next/link";

import {
	ArrowUpRight,
	Facebook,
	Instagram,
	Linkedin,
	Twitter,
} from "lucide-react";

import { IMAGES } from "@/constants/files";

export function Footer() {
	return (
		<footer className="py-10 shadow-lg border-t-2 border-muted z-10 bg-card">
			<div className="container mx-auto px-4">
				<div className="flex flex-col md:flex-row justify-between items-start mb-8  space-y-6 md:space-y-0">
					{/* Logo Section */}
					<div className="flex items-center justify-center md:justify-start w-full md:w-1/4">
						<Image
							src={IMAGES.redLogo}
							alt="Logo"
							className=" h-auto"
							width={200}
						/>
					</div>

					{/* About Us Section */}
					<div className="w-full md:w-1/4 mr-6 animate-fade-in">
						<Link href="/who-we-are">
							<h3 className="text-lg group font-semibold mb-2 flex items-center gap-2 cursor-pointer transition duration-300 hover:underline hover:text-primary">
								About
								<ArrowUpRight
									size={16}
									className="text-primary transition-transform group-hover:translate-x-1 "
								/>
							</h3>
						</Link>
						<p className="text-sm">
							Tilla is dedicated to providing our members with the best
							healthcare solutions and resources. We aim to empower individuals
							through information and support.
						</p>
					</div>

					{/* Contact Section */}
					<div className="w-full md:w-1/4 md:ml-4 animate-fade-in">
						<Link href="/contact-us">
							<h3 className="text-lg group font-semibold mb-2 flex items-center gap-2 cursor-pointer transition duration-300 hover:underline hover:text-primary">
								Contact
								<ArrowUpRight
									size={16}
									className="text-primary transition-transform group-hover:translate-x-1 "
								/>
							</h3>
						</Link>
						<div className="flex gap-2 text-sm mb-2">
							Email:
							<div className="flex-col">
								<div className="text-primary">
									<a
										href="mailto:Support@tillahealth.com"
										className="text-primary hover:underline"
									>
										Support@tillahealth.com
									</a>
								</div>
								<div className="text-primary">
									<a
										href="mailto:Admin@tillahealth.com"
										className="text-primary hover:underline"
									>
										Admin@tillahealth.com
									</a>
								</div>
							</div>
						</div>
						<div className="flex gap-2 text-sm mb-2">
							Phone:
							<div className="flex-col">
								<div className="text-primary">
									<span className={"size-5  fi fi-us"}></span>
									<a
										href="tel:+1(202)-975-5013"
										className="text-primary hover:underline"
									>
										+1 (202)-975-5013
									</a>
								</div>
								<div className="text-primary">
									<span className={"size-5  fi fi-et"}></span>
									<a
										href="tel:+251 96-865-8292"
										className="text-primary hover:underline"
									>
										+251 96-865-8292
									</a>
								</div>
							</div>
						</div>
					</div>

					{/* FAQ and Social Media Section */}
					<div className="w-full md:w-1/4 animate-fade-in">
						<Link href="/faq">
							<h3 className="text-lg group font-semibold mb-2 flex items-center gap-2 cursor-pointer transition duration-300 hover:underline hover:text-primary">
								FAQ
								<ArrowUpRight
									size={16}
									className="text-primary transition-transform group-hover:translate-x-1 "
								/>
							</h3>
						</Link>
						<p className="text-sm mb-4">
							Have questions? Check out our FAQ section for quick answers to
							common inquiries.
						</p>
						<h3 className="text-lg font-semibold mb-2">Follow Us</h3>
						<div className="flex space-x-4">
							<Link href="#" aria-label="Facebook">
								<Facebook className="text-primary" />
							</Link>
							<Link href="#" aria-label="Twitter">
								<Twitter className="text-primary" />
							</Link>
							<Link href="#" aria-label="LinkedIn">
								<Linkedin className="text-primary" />
							</Link>
							<Link href="#" aria-label="Instagram">
								<Instagram className="text-primary" />
							</Link>
						</div>
					</div>
				</div>

				{/* Bottom Section */}
				<div className="border-t border-primary pt-4 text-center text-sm">
					<p className="">
						&copy; {new Date().getFullYear()} Tilla Health Insurance. All rights
						reserved.
					</p>
				</div>
			</div>
		</footer>
	);
}
