export interface Article {
	slug: string;
	title: string;
	excerpt: string;
	content: string;
	contentImage?: any;
	category: string;
	date: string;
	image: any;
	author: {
		name: string;
		avatar?: string;
	};
	isFeatured: boolean;
}
