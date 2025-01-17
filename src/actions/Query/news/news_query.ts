import { useMutation, useQuery } from "@tanstack/react-query";
import { toast } from "sonner";

import {
	createNews,
	deleteNews,
	getNews,
	updateNews,
} from "@/actions/news/action";
import { Article } from "@/types/article/article";

// Hook to fetch all news articles
export const useGetNews = () => {
	return useQuery<Article[]>({
		queryKey: ["getNews"],
		queryFn: async () => {
			try {
				const response = await getNews();
				return response.data; // Retrieve array of news articles
			} catch (error: any) {
				toast.error(`Error fetching news articles: ${error.message}`);
				throw error;
			}
		},
		retry: false,
	});
};

// Hook to add a new menu item
export const useAddNews = () => {
	return useMutation({
		mutationFn: async (data: Partial<Article>) => {
			try {
				const response = await createNews(data);
				return response;
			} catch (error: any) {
				toast.error(`Error adding menu item: ${error.message}`);
				throw error;
			}
		},
		onSuccess: () => {
			toast.success("Menu item added successfully!");
			// Optionally refresh news articles
			// queryClient.invalidateQueries(["fetchNews"]);
		},
	});
};

// Hook to modify an existing menu item
export const useModifyNews = () => {
	return useMutation({
		mutationFn: async ({
			id,
			data,
		}: {
			id: string;
			data: Partial<Article>;
		}) => {
			try {
				const response = await updateNews(id, data);
				return response;
			} catch (error: any) {
				toast.error(`Error modifying menu item: ${error.message}`);
				throw error;
			}
		},
		onSuccess: () => {
			toast.success("Menu item modified successfully!");
			// Optionally refresh news articles
			// queryClient.invalidateQueries(["fetchNews"]);
		},
	});
};

// Hook to remove a menu item
export const useRemoveNews = () => {
	return useMutation({
		mutationFn: async (id: string) => {
			try {
				const response = await deleteNews(id);
				return response;
			} catch (error: any) {
				toast.error(`Error removing menu item: ${error.message}`);
				throw error;
			}
		},
		onSuccess: () => {
			toast.success("Menu item removed successfully!");
			// Optionally refresh news articles
			// queryClient.invalidateQueries(["fetchNews"]);
		},
	});
};
