"use server";

import { Article } from "@/types/article/article";

import axiosInstance from "../axiosInstance";
import getErrorMessage from "../getErrorMessage";

// Create a new news
export async function createNews(data: Partial<Article>) {
	try {
		const response = await axiosInstance.post("News", data);
		return {
			ok: true,
			message: "News created successfully!",
			data: response.data,
		};
	} catch (error: any) {
		return { ok: false, message: getErrorMessage(error) };
	}
}

// Get all news
export async function getNews() {
	try {
		const response = await axiosInstance.get(
			"/api/articles?populate=image&populate=contentImage"
		);
		return {
			ok: true,
			data: response.data,
		};
	} catch (error: any) {
		return { ok: false, message: getErrorMessage(error) };
	}
}

// Update a news by ID
export async function updateNews(id: string, data: Partial<Article>) {
	try {
		const response = await axiosInstance.put(`Newss/${id}`, data);
		return {
			ok: true,
			message: "news updated successfully!",
			data: response.data,
		};
	} catch (error: any) {
		return { ok: false, message: getErrorMessage(error) };
	}
}

// Delete a news by ID
export async function deleteNews(id: string) {
	try {
		const response = await axiosInstance.delete(`Newss/${id}`);
		return {
			ok: true,
			message: "news deleted successfully!",
			data: response.data,
		};
	} catch (error: any) {
		return { ok: false, message: getErrorMessage(error) };
	}
}
