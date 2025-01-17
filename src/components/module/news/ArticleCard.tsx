import Image from "next/image";
import Link from "next/link";

import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { IMAGES } from "@/constants/files";
import { Article } from "@/types/article/article";

interface ArticleCardProps {
	article: Article;
}

export function ArticleCard({ article }: ArticleCardProps) {
	return (
		<Link href={`/news/${article.slug}` as any}>
			<Card className="overflow-hidden transition-colors hover:bg-muted/50">
				<div className="relative aspect-video">
					<Image
						src={article?.image}
						alt={article.title}
						fill
						className="object-cover"
					/>
				</div>
				<CardHeader className="space-y-2">
					<div className="flex items-center gap-2">
						<Badge variant="default">{article.category}</Badge>
						<span className="text-sm text-muted-foreground">
							{new Date(article.date).toLocaleDateString()}
						</span>
					</div>
					<h2 className="font-bold text-xl line-clamp-2">{article.title}</h2>
				</CardHeader>
				<CardContent>
					<p className="text-muted-foreground line-clamp-2">
						{article.excerpt}
					</p>
					<div className="flex items-center gap-2 mt-4">
						{/* <Image
							src={article.author.avatar}
							alt={article.author.name}
							width={24}
							height={24}
							className="rounded-full"
						/> */}
						<span className="text-sm font-medium text-primary">
							{article.author.name}
						</span>
					</div>
				</CardContent>
			</Card>
		</Link>
	);
}
