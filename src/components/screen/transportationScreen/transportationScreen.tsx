"use client";

import Image from "next/image";

import { motion } from "framer-motion";
import {
	Activity,
	Clock,
	Heart,
	MapPin,
	Rocket,
	Shield,
	Users,
} from "lucide-react";

import { TitleUnderLine } from "@/components/shared/Decorations/TitleUnderLine";
import { ContactUs } from "@/components/shared/contactUs/contactUs";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { IMAGES } from "@/constants/files";

interface ServiceFeature {
	title: string;
	description: string;
	icon: React.ElementType;
}

const serviceFeatures: ServiceFeature[] = [
	{
		title: "24/7 Support",
		description:
			"Round-the-clock dedicated transportation services for elderly and pregnant members",
		icon: Clock,
	},
	{
		title: "Specialized Care",
		description:
			"Professional drivers trained in assisting elderly and pregnant members",
		icon: Users,
	},
	{
		title: "Safety Assured",
		description:
			"Vehicles equipped with modern safety features and medical support equipment",
		icon: Shield,
	},
	{
		title: "Local Coverage",
		description:
			"Comprehensive service coverage in Addis Ababa and surrounding areas",
		icon: MapPin,
	},
];

export default function TransportationScreen() {
	const fadeInUp = {
		initial: { opacity: 0, y: 20 },
		animate: { opacity: 1, y: 0 },
		transition: { duration: 0.6 },
	};

	return (
		<main className="min-h-screen relative isolate overflow-hidden">
			{/* Hero Section */}
			<section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden">
				{/* Background Effects */}
				<div className="absolute inset-0">
					<Image
						src={IMAGES.transport2}
						alt="Medical Transportation"
						fill
						className="object-cover object-center scale-105 transform hover:scale-110 transition-transform duration-1000"
						priority
					/>
					{/* Refined gradient overlays */}
					<div className="absolute inset-0 bg-gradient-to-r from-black/50 to-transparent" />
					<div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/10 to-black/40" />

					{/* Animated decorative element */}
					<motion.div
						className="absolute top-0 left-0 w-[800px] h-[800px] bg-gradient-to-br from-primary/20 to-transparent rounded-full blur-3xl"
						animate={{
							scale: [1, 1.2, 1],
							x: [-200, 0, -200],
							y: [-50, 50, -50],
							opacity: [0.2, 0.3, 0.2],
						}}
						transition={{
							duration: 20,
							repeat: Infinity,
							repeatType: "mirror",
							ease: "easeInOut",
						}}
					/>
				</div>

				{/* Content */}
				<div className="relative z-10 container mx-auto px-4">
					<motion.div
						className="text-center max-w-3xl mx-auto"
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.8 }}
					>
						<motion.h1
							className="text-2xl md:text-3xl lg:text-4xl font-bold text-white leading-tight mb-6 drop-shadow-lg"
							initial={{ opacity: 0 }}
							animate={{ opacity: 1 }}
							transition={{ duration: 0.8, delay: 0.4 }}
						>
							Transportation Support for Elderly and Pregnant Members
							<TitleUnderLine className="bg-white/80" />
						</motion.h1>

						<motion.p
							className="text-xl md:text-2xl text-white/90 leading-relaxed mb-12 drop-shadow-md"
							initial={{ opacity: 0, y: 20 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ delay: 0.6 }}
						>
							Safe and reliable transportation services tailored for elderly
							family members and pregnant women in Addis Ababa
						</motion.p>

						<motion.div
							className="flex flex-col sm:flex-row gap-4 justify-center"
							initial={{ opacity: 0, y: 20 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ delay: 0.8 }}
						>
							<Button
								size="lg"
								className="bg-primary text-primary-foreground hover:bg-white hover:text-black text-lg px-8 py-6"
							>
								Book Now
							</Button>
							<Button
								size="lg"
								variant="outline"
								className="border-white  hover:bg-white hover:text-primary text-lg px-8 py-6"
							>
								Learn More
							</Button>
						</motion.div>
					</motion.div>
				</div>
			</section>

			{/* Features Section */}
			<section className="py-24 lg:py-32 relative">
				<div className="absolute inset-0">
					<div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary/5 via-transparent to-transparent" />
					<div className="absolute w-full h-full bg-[linear-gradient(to_right,rgba(var(--primary-rgb),0.05)_1px,transparent_1px),linear-gradient(to_bottom,rgba(var(--primary-rgb),0.05)_1px,transparent_1px)] bg-[size:4rem_4rem]" />
				</div>

				<div className="container relative z-10 mx-auto px-6 sm:px-8 md:px-12 lg:px-16">
					<motion.div
						className="text-center mb-16"
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true }}
					>
						<h2 className="text-4xl md:text-5xl font-bold relative inline-block">
							Our Services
							<TitleUnderLine />
						</h2>
						<p className="mt-6 text-xl text-muted-foreground max-w-3xl mx-auto">
							Comprehensive transportation solutions designed for your comfort
							and safety
						</p>
					</motion.div>

					<div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 max-w-[1400px] mx-auto">
						{serviceFeatures.map((feature, index) => (
							<motion.div
								key={feature.title}
								className="group relative"
								initial={{ opacity: 0, y: 20 }}
								whileInView={{ opacity: 1, y: 0 }}
								viewport={{ once: true }}
								transition={{ delay: index * 0.2 }}
							>
								<div className="relative h-full p-8 rounded-3xl bg-gradient-to-b from-background/80 to-background border border-primary/10 backdrop-blur-sm hover:border-primary/20 transition-all duration-300 overflow-hidden group">
									{/* Decorative gradient blob */}
									<div className="absolute -right-10 -top-10 w-40 h-40 bg-primary/5 rounded-full blur-3xl group-hover:bg-primary/10 transition-all duration-500" />

									<div className="relative">
										{/* Icon container with hover effect */}
										<div className="mb-6 relative">
											<div className="absolute inset-0 bg-primary/10 rounded-2xl blur transform group-hover:scale-125 transition-transform duration-500" />
											<div className="relative inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-primary/10 text-primary transform group-hover:scale-110 transition-all duration-300">
												<feature.icon className="w-7 h-7" />
											</div>
										</div>

										{/* Title with hover effect */}
										<h3 className="text-2xl font-semibold text-foreground mb-4 group-hover:text-primary transition-colors duration-300">
											{feature.title}
										</h3>

										{/* Description with hover effect */}
										<p className="text-muted-foreground leading-relaxed group-hover:text-foreground/80 transition-colors duration-300">
											{feature.description}
										</p>

										{/* Hover indicator */}
										<div className="absolute bottom-0 left-0 right-0 h-1 bg-primary/0 transform origin-left scale-x-0 group-hover:scale-x-100 group-hover:bg-primary/20 transition-all duration-500" />
									</div>
								</div>
							</motion.div>
						))}
					</div>
				</div>
			</section>

			{/* Add this new section before the Booking Section */}
			<section className="py-24 lg:py-32 relative">
				<div className="container mx-auto px-4">
					<motion.div
						className="max-w-6xl mx-auto"
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true }}
					>
						<div className="text-center mb-16">
							<h2 className="text-4xl md:text-5xl font-bold relative inline-block">
								Specialized Care Transport
								<TitleUnderLine />
							</h2>
							<p className="mt-6 text-xl text-muted-foreground max-w-3xl mx-auto">
								Dedicated transportation solutions for elderly members and
								pregnant women in Addis Ababa and surrounding areas.
							</p>
						</div>

						<div className="grid md:grid-cols-2 gap-8">
							{/* Elderly Care Card */}
							<motion.div
								className="relative p-8 rounded-3xl bg-gradient-to-b from-background/80 to-background border border-primary/10 backdrop-blur-sm"
								whileHover={{ scale: 1.02 }}
								transition={{ duration: 0.2 }}
							>
								<h3 className="text-2xl font-bold mb-4">
									Elderly Member Support
								</h3>
								<ul className="space-y-3">
									<li className="flex items-start gap-3">
										<div className="mt-1 w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center">
											<div className="w-2 h-2 rounded-full bg-primary" />
										</div>
										<span>
											Safe and comfortable transportation to medical
											appointments, including routine check-ups and specialist
											visits
										</span>
									</li>
									<li className="flex items-start gap-3">
										<div className="mt-1 w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center">
											<div className="w-2 h-2 rounded-full bg-primary" />
										</div>
										<span>
											Personalized door-to-door service with dedicated
											assistance throughout the journey
										</span>
									</li>
									<li className="flex items-start gap-3">
										<div className="mt-1 w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center">
											<div className="w-2 h-2 rounded-full bg-primary" />
										</div>
										<span>
											Vehicles specially equipped for mobility assistance and
											medical support
										</span>
									</li>
									<li className="flex items-start gap-3">
										<div className="mt-1 w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center">
											<div className="w-2 h-2 rounded-full bg-primary" />
										</div>
										<span>
											Round-trip service ensuring safe return home after
											appointments
										</span>
									</li>
								</ul>
							</motion.div>

							{/* Maternity Care Card */}
							<motion.div
								className="relative p-8 rounded-3xl bg-gradient-to-b from-background/80 to-background border border-primary/10 backdrop-blur-sm"
								whileHover={{ scale: 1.02 }}
								transition={{ duration: 0.2 }}
							>
								<h3 className="text-2xl font-bold mb-4">Maternity Transport</h3>
								<ul className="space-y-3">
									<li className="flex items-start gap-3">
										<div className="mt-1 w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center">
											<div className="w-2 h-2 rounded-full bg-primary" />
										</div>
										<span>
											Stress-free transportation to prenatal visits and medical
											appointments
										</span>
									</li>
									<li className="flex items-start gap-3">
										<div className="mt-1 w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center">
											<div className="w-2 h-2 rounded-full bg-primary" />
										</div>
										<span>
											Priority scheduling and immediate response for urgent
											medical needs
										</span>
									</li>
									<li className="flex items-start gap-3">
										<div className="mt-1 w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center">
											<div className="w-2 h-2 rounded-full bg-primary" />
										</div>
										<span>
											Experienced drivers specially trained in maternity care
											transport
										</span>
									</li>
									<li className="flex items-start gap-3">
										<div className="mt-1 w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center">
											<div className="w-2 h-2 rounded-full bg-primary" />
										</div>
										<span>
											Complete round-trip service with careful attention to
											comfort and safety
										</span>
									</li>
								</ul>
							</motion.div>
						</div>

						<div className="mt-12">
							<div className="text-center mb-12">
								<h3 className="text-3xl font-bold mb-4">
									Why Choose Our Transportation Service?
								</h3>
								<p className="text-muted-foreground max-w-2xl mx-auto">
									Experience peace of mind with our comprehensive transportation
									solution designed for your unique needs
								</p>
							</div>

							<div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
								{/* Benefit Card 1 */}
								<motion.div
									className="p-6 rounded-2xl bg-gradient-to-br from-primary/5 via-primary/10 to-transparent border border-primary/10 hover:border-primary/20 transition-all duration-300"
									whileHover={{ scale: 1.02, y: -5 }}
									initial={{ opacity: 0, y: 20 }}
									whileInView={{ opacity: 1, y: 0 }}
									viewport={{ once: true }}
								>
									<div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
										<Heart className="w-6 h-6 text-primary" />
									</div>
									<h4 className="text-lg font-semibold mb-2">
										Stress-Free Experience
									</h4>
									<p className="text-muted-foreground text-sm">
										Eliminate transportation worries with our reliable and
										comfortable service
									</p>
								</motion.div>

								{/* Benefit Card 2 */}
								<motion.div
									className="p-6 rounded-2xl bg-gradient-to-br from-primary/5 via-primary/10 to-transparent border border-primary/10 hover:border-primary/20 transition-all duration-300"
									whileHover={{ scale: 1.02, y: -5 }}
									initial={{ opacity: 0, y: 20 }}
									whileInView={{ opacity: 1, y: 0 }}
									viewport={{ once: true }}
									transition={{ delay: 0.1 }}
								>
									<div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
										<Clock className="w-6 h-6 text-primary" />
									</div>
									<h4 className="text-lg font-semibold mb-2">Timely Access</h4>
									<p className="text-muted-foreground text-sm">
										Never miss an appointment with our punctual and efficient
										service
									</p>
								</motion.div>

								{/* Benefit Card 3 */}
								<motion.div
									className="p-6 rounded-2xl bg-gradient-to-br from-primary/5 via-primary/10 to-transparent border border-primary/10 hover:border-primary/20 transition-all duration-300"
									whileHover={{ scale: 1.02, y: -5 }}
									initial={{ opacity: 0, y: 20 }}
									whileInView={{ opacity: 1, y: 0 }}
									viewport={{ once: true }}
									transition={{ delay: 0.2 }}
								>
									<div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
										<Shield className="w-6 h-6 text-primary" />
									</div>
									<h4 className="text-lg font-semibold mb-2">
										Enhanced Safety
									</h4>
									<p className="text-muted-foreground text-sm">
										Travel with confidence in our specially equipped vehicles
										with trained staff
									</p>
								</motion.div>

								{/* Benefit Card 4 */}
								<motion.div
									className="p-6 rounded-2xl bg-gradient-to-br from-primary/5 via-primary/10 to-transparent border border-primary/10 hover:border-primary/20 transition-all duration-300"
									whileHover={{ scale: 1.02, y: -5 }}
									initial={{ opacity: 0, y: 20 }}
									whileInView={{ opacity: 1, y: 0 }}
									viewport={{ once: true }}
									transition={{ delay: 0.3 }}
								>
									<div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
										<Activity className="w-6 h-6 text-primary" />
									</div>
									<h4 className="text-lg font-semibold mb-2">
										Better Outcomes
									</h4>
									<p className="text-muted-foreground text-sm">
										Support your health journey with consistent access to
										medical care
									</p>
								</motion.div>
							</div>

							<motion.div
								className="mt-12 p-8 rounded-2xl bg-gradient-to-br from-primary/5 via-background to-primary/5 border border-primary/10 text-center"
								initial={{ opacity: 0, y: 20 }}
								whileInView={{ opacity: 1, y: 0 }}
								viewport={{ once: true }}
							>
								<p className="text-lg text-muted-foreground max-w-3xl mx-auto">
									Available throughout Addis Ababa and surrounding areas,
									providing comprehensive round-trip support to ensure our
									members receive the care they need.
								</p>
							</motion.div>
						</div>
					</motion.div>
				</div>
			</section>

			{/* Booking Section */}
			<section className="py-24 lg:py-32 relative bg-primary">
				{/* Background Effects */}
				<div className="absolute inset-0">
					<div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-white/10 via-transparent to-transparent" />
					<div className="absolute w-full h-full bg-[linear-gradient(to_right,rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:4rem_4rem]" />
				</div>

				<div className="container mx-auto px-4">
					<motion.div
						className="max-w-4xl mx-auto"
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true }}
					>
						<div className="text-center mb-16">
							<h2 className="text-4xl md:text-5xl font-bold relative inline-block text-white">
								Book Your Ride
								<TitleUnderLine className="bg-white/80" />
							</h2>
							<p className="mt-6 text-xl text-white/80 max-w-2xl mx-auto">
								Our booking system is coming soon! We're working hard to bring
								you a seamless transportation booking experience.
							</p>
						</div>

						<div className="relative backdrop-blur-sm rounded-3xl border border-white/20 bg-white/10 p-8 md:p-12 shadow-lg">
							<div className="absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-white/10 rounded-3xl" />

							<form className="relative space-y-8">
								<div className="grid md:grid-cols-2 gap-6">
									<div className="space-y-2">
										<label
											htmlFor="pickup"
											className="text-sm font-medium ml-1 text-white"
										>
											Pickup Location
										</label>
										<div className="relative">
											<MapPin className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-primary/50" />
											<Input
												id="pickup"
												type="text"
												placeholder="Enter pickup address"
												className="h-12 pl-10 bg-white text-primary placeholder:text-black/70 border-white focus:border-white focus-visible:ring-0"
											/>
										</div>
									</div>

									<div className="space-y-2">
										<label
											htmlFor="destination"
											className="text-sm font-medium ml-1 text-white"
										>
											Destination
										</label>
										<div className="relative">
											<MapPin className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-primary/50" />
											<Input
												id="destination"
												type="text"
												placeholder="Enter destination address"
												className="h-12 pl-10 bg-white text-primary placeholder:text-black/70 border-white focus:border-white focus-visible:ring-0"
											/>
										</div>
									</div>

									<div className="space-y-2">
										<label
											htmlFor="date"
											className="text-sm font-medium ml-1 text-white"
										>
											Date
										</label>
										<div className="relative">
											<Clock className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-primary/50" />
											<Input
												id="date"
												type="date"
												className="h-12 pl-10 bg-white text-black border-white focus:border-white focus-visible:ring-0"
											/>
										</div>
									</div>

									<div className="space-y-2">
										<label
											htmlFor="time"
											className="text-sm font-medium ml-1 text-white"
										>
											Time
										</label>
										<div className="relative">
											<Clock className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-primary/50" />
											<Input
												id="time"
												type="time"
												className="h-12 pl-10 bg-white text-black border-white focus:border-white focus-visible:ring-0"
											/>
										</div>
									</div>
								</div>

								<div className="text-center">
									<Button
										type="button"
										className="w-full h-12 bg-white hover:bg-white/90 text-black hover:text-primary/90 text-lg font-medium"
									>
										<span className="flex items-center justify-center gap-2">
											<Rocket className="w-5 h-5" /> Coming Soon
										</span>
									</Button>
									<p className="mt-2 text-white/80">
										Stay tuned for our upcoming booking system launch.
									</p>
								</div>

								<p className="text-center text-sm text-white/70 hover:text-white/90 transition-colors">
									By booking, you agree to our terms of service and privacy
									policy
								</p>
							</form>
						</div>
					</motion.div>
				</div>
			</section>

			{/* Contact Section */}
			<ContactUs />
		</main>
	);
}
