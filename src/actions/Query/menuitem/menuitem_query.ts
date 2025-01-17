import { useMutation, useQuery } from "@tanstack/react-query";
import { toast } from "sonner";

import {
	createMenuItem,
	deleteMenuItem,
	getMenuItems,
	updateMenuItem,
} from "@/actions/menu-items/action";
import { MenuItem } from "@/types/menu-item/menuItem";

// Hook to fetch all menu items
export const useGetMenuItems = () => {
	return useQuery<MenuItem[]>({
		queryKey: ["getMenuItems"],
		queryFn: async () => {
			try {
				const response = await getMenuItems();
				console.log("====================================");
				console.log(response.data.data);
				console.log("====================================");
				return response.data.data; // Assuming response.data contains the array of menu items
			} catch (error: any) {
				toast.error(`Error fetching menu items: ${error.message}`);
				throw error;
			}
		},
		retry: false,
	});
};

// Hook to create a new menu item
export const useCreateMenuItem = () => {
	return useMutation({
		mutationFn: async (data: Partial<MenuItem>) => {
			try {
				const response = await createMenuItem(data);
				return response;
			} catch (error: any) {
				toast.error(`Error creating menu item: ${error.message}`);
				throw error;
			}
		},
		onSuccess: () => {
			toast.success("Menu item created successfully!");
			// Invalidate the menu items query to refresh the list
			// queryClient.invalidateQueries(["getMenuItems"]);
		},
	});
};

// Hook to update an existing menu item
export const useUpdateMenuItem = () => {
	return useMutation({
		mutationFn: async ({
			id,
			data,
		}: {
			id: string;
			data: Partial<MenuItem>;
		}) => {
			try {
				const response = await updateMenuItem(id, data);
				return response;
			} catch (error: any) {
				toast.error(`Error updating menu item: ${error.message}`);
				throw error;
			}
		},
		onSuccess: () => {
			toast.success("Menu item updated successfully!");
			// Invalidate the menu items query to refresh the list
			// queryClient.invalidateQueries(["getMenuItems"]);
		},
	});
};

// Hook to delete a menu item
export const useDeleteMenuItem = () => {
	return useMutation({
		mutationFn: async (id: string) => {
			try {
				const response = await deleteMenuItem(id);
				return response;
			} catch (error: any) {
				toast.error(`Error deleting menu item: ${error.message}`);
				throw error;
			}
		},
		onSuccess: () => {
			toast.success("Menu item deleted successfully!");
			// Invalidate the menu items query to refresh the list
			// queryClient.invalidateQueries(["getMenuItems"]);
		},
	});
};
