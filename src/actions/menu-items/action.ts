"use server";

import { MenuItem } from "@/types/menu-item/menuItem";

import axiosInstance from "../axiosInstance";
import getErrorMessage from "../getErrorMessage";

// // Function to fetch MenuItems
// const fetchMenuItems = async () => {
// 	const reqOptions = {
// 		headers: {
// 			Authorization: `Bearer ${process.env.API_TOKEN}`,
// 		},
// 	};

// 	const request = await fetch(
// 		`${config.api}/api/MenuItems?populate=*`,
// 		reqOptions
// 	);
// 	const response = await request.json();

// 	if (!request.ok) {
// 		throw new Error(response.message || "Failed to fetch MenuItems");
// 	}

// 	return response; // Return the JSON response
// };
// Create a new menu item
export async function createMenuItem(data: Partial<MenuItem>) {
	try {
		const response = await axiosInstance.post("menuItems", data);
		return {
			ok: true,
			message: "Menu item created successfully!",
			data: response.data,
		};
	} catch (error: any) {
		return { ok: false, message: getErrorMessage(error) };
	}
}

// Get all menu items
export async function getMenuItems() {
	try {
		const response = await axiosInstance.get(
			"/api/menu-items?populate=content.sections.links.sublinks&populate=content.footer"
		);
		return {
			ok: true,
			data: response.data,
		};
	} catch (error: any) {
		return { ok: false, message: getErrorMessage(error) };
	}
}

// Update a menu item by ID
export async function updateMenuItem(id: string, data: Partial<MenuItem>) {
	try {
		const response = await axiosInstance.put(`menuItems/${id}`, data);
		return {
			ok: true,
			message: "Menu item updated successfully!",
			data: response.data,
		};
	} catch (error: any) {
		return { ok: false, message: getErrorMessage(error) };
	}
}

// Delete a menu item by ID
export async function deleteMenuItem(id: string) {
	try {
		const response = await axiosInstance.delete(`menuItems/${id}`);
		return {
			ok: true,
			message: "Menu item deleted successfully!",
			data: response.data,
		};
	} catch (error: any) {
		return { ok: false, message: getErrorMessage(error) };
	}
}
