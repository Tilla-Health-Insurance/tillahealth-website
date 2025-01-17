"use client";

import Image from "next/image";
import { useCallback, useEffect, useState } from "react";

import { motion } from "framer-motion";

import { Card, CardContent } from "@/components/ui/card";
import {
	Carousel,
	type CarouselApi,
	CarouselContent,
	CarouselItem,
	CarouselNext,
	CarouselPrevious,
} from "@/components/ui/carousel";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { BLOG_POSTS } from "@/constants/data/additional_services";

export function BlogsSection() {
	const [currentSlide, setCurrentSlide] = useState(0);
	const [currentSubSlide, setCurrentSubSlide] = useState(0);
	const [api, setApi] = useState<CarouselApi>();

	useEffect(() => {
		if (!api) {
			return;
		}

		api.on("select", () => {
			setCurrentSlide(api.selectedScrollSnap());
		});
	}, [api]);

	const scrollPrev = useCallback(() => {
		setCurrentSubSlide((prev) => (prev === 0 ? 1 : 0));
	}, []);

	const scrollNext = useCallback(() => {
		setCurrentSubSlide((prev) => (prev === 1 ? 0 : 1));
	}, []);

	const scrollToSlide = useCallback(
		(index: number) => {
			api?.scrollTo(index);
			setCurrentSubSlide(0);
		},
		[api]
	);

	return (
		<section className="py-16 relative z-10">
			<div className="container mx-auto px-4">
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					className="text-center mb-12"
				>
					<h2 className="text-4xl font-bold mb-6 text-primary bg-clip-text  bg-gradient-to-r from-primary to-primary">
						Additional Services
					</h2>
					<p className="max-w-3xl mx-auto text-lg">
						Our Additional Services section is designed to enhance your
						experience and provide comprehensive support tailored to your needs.
					</p>
				</motion.div>
				<div className="items-center text-center">
					<Tabs
						value={BLOG_POSTS[currentSlide].value}
						onValueChange={(value) => {
							const index = BLOG_POSTS.findIndex(
								(post) => post.value === value
							);
							scrollToSlide(index);
						}}
						className="md:w-full mb-2"
					>
						<TabsList className="md:inline-flex grid h-auto px-3 md:gap-32 ">
							{BLOG_POSTS.map((post) => (
								<TabsTrigger
									key={post.value}
									value={post.value}
									className="data-[state=active]:bg-card data-[state=active]:border-b-2 data-[state=active]:border-primary data-[state=active]:text-primary flex-1 px-6 py-3 sm:px-6 sm:py-3 mx-2 sm:mx-0 text-center  whitespace-nowrap text-ellipsis"
								>
									{post.title}
								</TabsTrigger>
							))}
						</TabsList>
					</Tabs>
				</div>
				<Card className="border-none bg-card shadow-xl">
					<CardContent className="p-1">
						<Carousel className="w-full" setApi={setApi}>
							<CarouselContent>
								{BLOG_POSTS.map((post, index) => (
									<CarouselItem
										key={index}
										className="h-[65rem] overflow-y-auto p-6 md:p-8"
									>
										<div className="grid lg:grid-cols-2 gap-12 items-start">
											<motion.div
												initial={{ opacity: 0, x: -20 }}
												whileInView={{ opacity: 1, x: 0 }}
												viewport={{ once: true }}
												className="md:sticky top-8"
											>
												<div className="relative rounded-xl overflow-hidden ">
													{currentSubSlide === 0 && post.features && (
														<Image
															src={post.image}
															alt={post.title}
															width={600}
															// height={400}
															className="object-cover aspect-video h-[30rem]"
														/>
													)}
													{currentSubSlide === 1 &&
														post.whychooseContent &&
														post.whychooseContent.length > 0 && (
															<Image
																src={post.image2}
																alt={post.title}
																width={600}
																// height={400}
																className="object-cover aspect-video h-[30rem]"
															/>
														)}
												</div>

												{post.whychooseContent &&
													post.whychooseContent.length > 0 && (
														<div className="flex justify-center gap-4 mt-8">
															<CarouselPrevious
																variant="outline"
																onClick={scrollPrev}
																className="static"
															/>
															<CarouselNext
																variant="outline"
																onClick={scrollNext}
																className="static"
															/>
														</div>
													)}
											</motion.div>

											<motion.div
												initial={{ opacity: 0, x: 20 }}
												whileInView={{ opacity: 1, x: 0 }}
												viewport={{ once: true }}
												className="space-y-8"
											>
												{currentSubSlide === 0 && post.features && (
													<div className="space-y-8">
														<h2 className="text-3xl font-bold text-primary">
															{post.title}
														</h2>
														<p className="text-muted-foreground text-lg leading-relaxed">
															{post.description}
														</p>
														{post.features.map((feature, featureIndex) => (
															<div
																key={featureIndex}
																className="bg-card/50 p-6 rounded-lg shadow-sm"
															>
																<h3 className="text-xl font-semibold mb-4 text-primary/90">
																	{feature.title}
																</h3>
																<ul className="space-y-3">
																	{feature.items.map((item, itemIndex) => (
																		<li
																			key={itemIndex}
																			className="flex items-start gap-2 text-muted-foreground"
																		>
																			<span className="text-primary mt-1">
																				•
																			</span>
																			{item}
																		</li>
																	))}
																</ul>
															</div>
														))}
													</div>
												)}
												{currentSubSlide === 1 &&
													post.whychoosetitle &&
													post.whychooseContent && (
														<div className="space-y-8">
															<h2 className="text-2xl font-bold text-primary">
																{post.whychoosetitle}
															</h2>
															{post.whychooseContent.map(
																(whychoose, featureIndex) => (
																	<div
																		key={featureIndex}
																		className="bg-card/50 p-6 rounded-lg shadow-sm"
																	>
																		<h3 className="text-xl font-semibold mb-4 text-primary/90">
																			{whychoose.title}
																		</h3>
																		<ul className="space-y-3">
																			{whychoose.items.map(
																				(item, itemIndex) => (
																					<li
																						key={itemIndex}
																						className="flex items-start gap-2 text-muted-foreground"
																					>
																						<span className="text-primary mt-1">
																							•
																						</span>
																						{item}
																					</li>
																				)
																			)}
																		</ul>
																	</div>
																)
															)}
														</div>
													)}
											</motion.div>
										</div>
									</CarouselItem>
								))}
							</CarouselContent>
						</Carousel>
					</CardContent>
				</Card>
			</div>
		</section>
	);
}
