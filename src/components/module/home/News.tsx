import { useRouter } from "next/navigation";
import { Suspense } from "react";

import { ArrowRight } from "lucide-react";

import Loading from "@/components/module/loading";
import { ArticleCard } from "@/components/module/news/ArticleCard";
import { Button } from "@/components/ui/button";
import { articles } from "@/constants/data/articles";

export default function NewsPage() {
	const route = useRouter();
	return (
		<div className="min-h-screen flex flex-col ">
			<main>
				<div className="container mx-auto px-4 py-8">
					<h1 className="text-3xl font-bold tracking-tight mb-8 text-center">
						Latest News
					</h1>
					<Suspense fallback={<Loading />}>
						<div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 md:p-16">
							{articles
								.filter((article) => article.isFeatured) // Filter for featured articles
								.map((article) => (
									<ArticleCard key={article.slug} article={article} />
								))}
						</div>
					</Suspense>
					<div className="text-center max-w-3xl mx-auto">
						<Button
							size="lg"
							variant="default"
							className="text-center items-center"
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
