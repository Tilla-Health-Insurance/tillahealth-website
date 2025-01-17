"use client";

import Image from "next/image";
import { Suspense, useState } from "react";

import Loading from "@/components/module/loading";
import { ArticleCard } from "@/components/module/news/ArticleCard";
import { NewsFilters } from "@/components/module/news/NewsFilter";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { articles } from "@/constants/data/articles";
import { IMAGES } from "@/constants/files";

export default function NewsPage() {
	const [selectedCategory, setSelectedCategory] = useState("all");
	const [sortOrder, setSortOrder] = useState("desc");

	const filteredArticles = articles.filter((article) => {
		if (selectedCategory === "all") return true;
		return article.category === selectedCategory;
	});

	const sortedArticles = [...filteredArticles].sort((a, b) => {
		if (sortOrder === "desc") {
			return new Date(b.date).getTime() - new Date(a.date).getTime();
		}
		return new Date(a.date).getTime() - new Date(b.date).getTime();
	});

	return (
		<div className="min-h-screen flex flex-col">
			<main>
				<section className="relative h-[40vh] flex items-center justify-center">
					<div className="absolute inset-0" />
					<Image
						src={IMAGES.newsbg}
						alt="About Tilla Health"
						width={1920}
						height={500}
						className="absolute inset-0 object-cover w-full h-full"
						priority
					/>
					<div className="relative z-10 container mx-auto px-4 text-center text-white">
						<h1 className="text-2xl md:text-3xl font-bold mb-4 animate-fade-up">
							Latest News and Articles
						</h1>
						<p className="text-md max-w-2xl mx-auto animate-fade-up animation-delay-200">
							Learn more about recent tilla-health news and insights.
						</p>
					</div>
				</section>
				<div className="container mx-auto px-4 pt-8 pb-24 mt-10">
					<NewsFilters
						selectedCategory={selectedCategory}
						sortOrder={sortOrder}
						onCategoryChange={setSelectedCategory}
						onSortChange={setSortOrder}
					/>
					<Suspense fallback={<Loading />}>
						<div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
							{sortedArticles.map((article) => (
								<ArticleCard key={article.slug} article={article} />
							))}
						</div>
					</Suspense>
				</div>
				<section className="py-20 bg-primary text-white">
					<div className="container mx-auto px-4">
						<div className="max-w-xl mx-auto text-center">
							<h2 className="text-3xl font-bold mb-6">Stay Updated</h2>
							<p className="mb-8 text-white/90">
								Subscribe to our newsletter for the latest updates on healthcare
								services and company news.
							</p>
							<form className="flex gap-4 max-w-md mx-auto">
								<Input
									type="email"
									placeholder="Enter your email"
									className="bg-white border-white/20"
								/>
								<Button
									type="submit"
									variant="secondary"
									className="whitespace-nowrap hover:bg-white hover:text-primary"
								>
									Subscribe
								</Button>
							</form>
						</div>
					</div>
				</section>
			</main>
		</div>
	);
}
