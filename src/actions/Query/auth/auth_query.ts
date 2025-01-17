"use client";

// import { useRouter } from "next/navigation";
// import { useMutation } from "@tanstack/react-query";
// import { toast } from "sonner";
// import {
// 	type ICredentials,
// 	signIn,
// 	signOut,
// 	signUp,
// } from "@/actions/auth/action";
import { sendContactUs } from "@/actions/auth/action";
// import { useAppDispatch } from "@/hooks/storehooks";
import useToastMutation from "@/hooks/useToastMutation";
// import {
// 	ClearCurrentUser,
// 	SetCurrentUser,
// } from "@/lib/store/redux/currentUser";
// import { clearFamily } from "@/lib/store/redux/familySlice";
// import { SetUserSlice } from "@/lib/store/redux/userSlice";
// import { type AuthResponse, type UserType } from "@/types/user";
import { contactUsType } from "@/types/user";

// export const useLogout = () => {
// 	const router = useRouter(); // Initialize the router
// 	const dispatch = useAppDispatch();
// 	return useMutation({
// 		mutationKey: ["signOut"],
// 		mutationFn: signOut,
// 		onMutate: () => {
// 			toast.dismiss();
// 			toast.loading("በመውጣት ላይ፣ እባክዎን ትንሽ ይጠብቁ...");
// 		},
// 		onSuccess: () => {
// 			toast.dismiss();
// 			toast.success("Logout... BYE!");
// 			dispatch(ClearCurrentUser());
// 			dispatch(clearFamily());
// 			router.push("/auth" as `/${string}`);
// 		},
// 		onError: (errorMessage: string) => {
// 			toast.dismiss();
// 			toast.error(errorMessage);
// 		},
// 	});
// };

// export const useSignIn = () => {
// 	const dispatch = useAppDispatch();
// 	const router = useRouter();

// 	return useToastMutation<ICredentials>(
// 		"signIn",
// 		signIn,
// 		"ኢሜልዎን እና የይለፍ ቃልዎን በማረጋገጥ ላይ፣ እባክዎ ይጠብቁ...",
// 		{
// 			onSuccess: async (variables, data) => {
// 				try {
// 					const dataSend = variables.data as AuthResponse;
// 					dispatch(SetCurrentUser(dataSend));

// 					// Check for the callbackUrl query parameter
// 					const urlParams = new URLSearchParams(window.location.search);
// 					const callbackUrl = urlParams.get("callbackUrl");

// 					console.log("the data in the onSuccess", variables);

// 					// Redirect to the callbackUrl or a default route
// 					if (callbackUrl) {
// 						await router.push(callbackUrl as `/${string}`);
// 					} else {
// 						if (dataSend.user) {
// 							if (dataSend.user?.role === "PROVIDER") {
// 								await router.push("/provider");
// 							} else if (dataSend.user?.role === "MEMBER") {
// 								await router.push("/home");
// 							} else if (dataSend.user?.role === "BROKER") {
// 								await router.push("/broker");
// 							} else {
// 								await router.push("/landing"); // Default route
// 							}
// 						}
// 					}
// 				} catch (error) {
// 					// Handle error
// 					console.error("Error handling post-sign-in redirect:", error);
// 					toast.error("An error occurred while signing in.");
// 				}
// 			},
// 		}
// 	);
// };

// export const useSignUp = () => {
// 	const router = useRouter();
// 	return useToastMutation<Partial<UserType>>(
// 		"signUp",
// 		signUp,
// 		"ኢሜልዎን እና የይለፍ ቃልዎን በማረጋገጥ ላይ፣ እባክዎ ይጠብቁ...",
// 		{
// 			onSuccess: (variables) => {
// 				// router.push("/auth/sign-in" as `/${string}`);
// 				console.log("Signed up successfully:", variables);
// 			},
// 		}
// 	);
// };

// export const useSendOTP = () => {
// 	return useToastMutation<string>("sendOTP", sendOTP, "Sending OTP...", {
// 		onSuccess: async (data, variables) => {
// 			// 'data' contains the response from the server
// 			// 'variables' contains the memeber data you passed in
// 			console.log("Otp sent successfully:", data.message);
// 			console.log("Recieved data:", data);

// 			// queryClient.invalidateQueries({ queryKey: ["memebers"] });
// 			// Example: Display a message with the memeber name
// 		},
// 		onError: (error) => {
// 			console.error("Error creating memeber:", error);
// 		},
// 	});
// 	// new update
// };
// export const useVerifyOTP = () => {
// 	const dispatch = useAppDispatch();
// 	return useToastMutation<otpVerifyType>(
// 		"verifyOTP",
// 		verifyOTP,
// 		"Verifying OTP...",
// 		{
// 			onSuccess: async (data, variables) => {
// 				// 'data' contains the response from the server
// 				// 'variables' contains the memeber data you passed in
// 				console.log("Otp Verified successfully:", data.message);
// 				console.log("Recieved data:", data);
// 				console.log("information sent", variables);
// 				dispatch(SetUserSlice({ email: variables.email, verify: true }));
// 				// queryClient.invalidateQueries({ queryKey: ["memebers"] });
// 				// Example: Display a message with the memeber name
// 			},
// 			onError: (error) => {
// 				console.error("Error verifying a userr:", error);
// 			},
// 		}
// 	);
// };

export const useSendContactUs = () => {
	return useToastMutation<contactUsType>(
		"sendContactUs",
		sendContactUs,
		"Sending Contact Us...",
		{
			onSuccess: async (data, variables) => {},
			onError: (error) => {
				console.error("Error creating memeber:", error);
			},
		}
	);
};
