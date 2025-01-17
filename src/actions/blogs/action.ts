// "use server";

// import { type blogType } from "@/types/blog/blog";

// import axiosInstance from "../axiosInstance";
// import getErrorMessage from "../getErrorMessage";

// export async function createBlog(data: Partial<blogType>) {
// 	try {
// 		const response = await axiosInstance.post("blogs", data);
// 		return {
// 			ok: true,
// 			message: "Blog created successfully!",
// 			data: response.data,
// 		};
// 	} catch (error: any) {
// 		return { ok: false, message: getErrorMessage(error) };
// 	}
// }
// export async function getBlogs() {
// 	try {
// 		const response = await axiosInstance.get("blogs?populate=*");
// 		return {
// 			ok: true,
// 			data: response.data,
// 		};
// 	} catch (error: any) {
// 		return { ok: false, message: getErrorMessage(error) };
// 	}
// }
// export async function updateBlog(id: string, data: Partial<blogType>) {
// 	try {
// 		const response = await axiosInstance.put(`blogs/${id}`, data);
// 		return {
// 			ok: true,
// 			message: "Blog updated successfully!",
// 			data: response.data,
// 		};
// 	} catch (error: any) {
// 		return { ok: false, message: getErrorMessage(error) };
// 	}
// }
// export async function deleteBlog(id: string) {
// 	try {
// 		const response = await axiosInstance.delete(`blogs/${id}`);
// 		return {
// 			ok: true,
// 			message: "Blog deleted successfully!",
// 			data: response.data,
// 		};
// 	} catch (error: any) {
// 		return { ok: false, message: getErrorMessage(error) };
// 	}
// }
