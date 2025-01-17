import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

import { ChevronLeft, UserCircle } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { articles } from "@/constants/data/articles";

interface ArticlePageProps {
	params: {
		slug: string;
	};
}

export default async function ArticlePage({ params }: ArticlePageProps) {
	const article = articles.find((a) => a.slug === params.slug);

	if (!article) {
		notFound();
	}

	return (
		<div className="min-h-screen bg-background py-10">
			<main>
				<div className="container mx-auto px-4 py-8">
					<div className="max-w-3xl mx-auto">
						{/* <div className="mb-8">
							<Link href="/news">
								<Button
									variant="ghost"
									className="pl-0 hover:pl-2 transition-all"
								>
									<ChevronLeft className="mr-2 h-4 w-4" />
									Back to News
								</Button>
							</Link>
						</div> */}

						<article className="space-y-6">
							<div className="space-y-4">
								<Badge variant="default">{article.category}</Badge>
								<h1 className="text-4xl font-bold tracking-tight">
									{article.title}
								</h1>
								<div className="flex items-center gap-4">
									<UserCircle className="h-10 w-10 text-primary" />
									<div>
										<div className="font-medium">{article.author.name}</div>
										<div className="text-sm text-muted-foreground">
											{new Date(article.date).toLocaleDateString()}
										</div>
									</div>
								</div>
							</div>

							<div className="relative aspect-video">
								<Image
									src={article.image}
									alt={article.title}
									fill
									className="object-cover rounded-lg"
									priority
								/>
							</div>

							<div className="prose prose-gray dark:prose-invert max-w-none">
								{/* <p className="lead">{article.excerpt}</p> */}
								<div className="md:text-lg">
									<div dangerouslySetInnerHTML={{ __html: article.content }} />
								</div>
								{/* <p className="">
								{article.content.map((item, index) => (
									<li key={index} className="flex items-start gap-2 mb-3">
										<span className="">{item}</span>
									</li>
								))}
							</p> */}
							</div>
						</article>
					</div>
				</div>
			</main>
		</div>
	);
}

export const dynamic = "force-dynamic";
export const revalidate = 3600;
