import { useRouter } from "next/navigation";
import { Suspense } from "react";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

import Loading from "@/components/module/loading";
import { ArticleCard } from "@/components/module/news/ArticleCard";
import { Button } from "@/components/ui/button";
import { articles } from "@/constants/data/articles";

export default function NewsPage() {
	const route = useRouter();
	return (
		<div className="min-h-screen flex flex-col container py-20">
			<main>
				<div className="container mx-auto px-4 py-8">
					<motion.div
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true }}
						className="text-center mb-12"
					>
						<h3 className="text-sm font-semibold text-primary mb-4">
							{">>"} Recent News Feed {"<<"}
						</h3>
						<h2 className="text-4xl font-bold mb-6">
							Latest News & Articles from the Blog
						</h2>
					</motion.div>
					<Suspense fallback={<Loading />}>
						<div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 ">
							{articles
								.filter((article) => article.isFeatured) // Filter for featured articles
								.map((article) => (
									<ArticleCard key={article.slug} article={article} />
								))}
						</div>
					</Suspense>
					<div className="text-center max-w-3xl mx-auto mt-6">
						<Button
							size="lg"
							variant="default"
							className="text-center items-center hover:bg-primary rounded-xl"
							onClick={() => route.push("/news")}
						>
							Browse all Latest News and Articles
							<ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
						</Button>
					</div>
				</div>
			</main>
		</div>
	);
}
