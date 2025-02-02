"use client";

// <-- Explicit import for React
import type { NextPage } from "next";
import { usePathname, useRouter } from "next/navigation";
import { useTransition } from "react";

import { useLocale, useTranslations } from "next-intl";

import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from "@/components/ui/select";

interface LocaleSwitcherProps {
	inHamburger?: boolean;
}

const LocaleSwitcher: NextPage<LocaleSwitcherProps> = ({
	inHamburger = false,
}: LocaleSwitcherProps) => {
	const t = useTranslations();
	const [isPending, startTransition] = useTransition();
	const router = useRouter();
	const localeValue = useLocale();
	const path = usePathname();

	// Safeguard against `undefined`
	// const pathName = path?.split("/").pop() ?? "";

	type SupportedLocale = "en-US" | "am";

	// const handleChange = (nextLocale: SupportedLocale) => {
	// 	startTransition(() => {
	// 		const pathSegments = path?.split("/") ?? [];
	// 		const currentLocaleIndex = pathSegments.findIndex(
	// 			(segment) => segment === localeValue
	// 		);

	// 		// Remove the current locale from the path segments
	// 		if (currentLocaleIndex !== -1) {
	// 			pathSegments.splice(currentLocaleIndex, 1);
	// 		}

	// 		// Create the new path with the selected locale
	// 		const newPath = `/${nextLocale}${pathSegments.length ? `/${pathSegments.join("/")}` : ""}`;
	// 		router.replace(newPath as `/${string}`);
	// 		router.refresh();
	// 	});
	// };
	const handleChange = (nextLocale: SupportedLocale) => {
		startTransition(() => {
			const pathSegments = path?.split("/") ?? [];
			const currentLocaleIndex = pathSegments.findIndex(
				(segment) => segment === localeValue
			);

			// Remove the current locale from the path segments
			if (currentLocaleIndex !== -1) {
				pathSegments.splice(currentLocaleIndex, 1);
			}

			// Preserve the query parameters
			const query = new URLSearchParams(window.location.search).toString();
			const queryString = query ? `?${query}` : "";

			// Create the new path with the selected locale
			const newPath = `/${nextLocale}${pathSegments.length ? `/${pathSegments.join("/")}` : ""}${queryString}`;
			router.replace(newPath as `/${string}`);
			router.refresh();
		});
	};

	return (
		<>
			{/* Mobile view: circular icon */}
			<div className="flex items-center justify-center md:hidden">
				{inHamburger ? (
					<Select
						defaultValue={localeValue}
						disabled={isPending}
						onValueChange={handleChange}
					>
						<SelectTrigger className="w-[100px]">
							<SelectValue placeholder={t("LocaleSwitcher.changeLanguage")} />
						</SelectTrigger>
						<SelectContent>
							<SelectItem value="en-US">
								{t("LocaleSwitcher.english")}
							</SelectItem>
							<SelectItem value="am">{t("LocaleSwitcher.amharic")}</SelectItem>
						</SelectContent>
					</Select>
				) : (
					<Avatar
						onClick={() =>
							handleChange(localeValue === "en-US" ? "am" : "en-US")
						}
						className="cursor-pointer w-8 h-8 flex items-center justify-center"
					>
						<AvatarFallback className="text-xl font-bold">
							{localeValue === "en-US" ? "አ" : "A"}
						</AvatarFallback>
					</Avatar>
				)}
			</div>

			{/* Desktop view: select component */}
			<div className="hidden md:block">
				<Select
					defaultValue={localeValue}
					disabled={isPending}
					onValueChange={handleChange}
				>
					<SelectTrigger className="md:w-[120px] h-6 bg-background">
						<SelectValue placeholder={t("LocaleSwitcher.changeLanguage")} />
					</SelectTrigger>
					<SelectContent>
						<SelectItem value="en-US">
							<span className={"size-5 mr-2 fi fi-us"}></span>
							{t("LocaleSwitcher.english")}
						</SelectItem>
						<SelectItem value="am">
							<span className={"size-5 mr-2 fi fi-et"}></span>
							{t("LocaleSwitcher.amharic")}
						</SelectItem>
					</SelectContent>
				</Select>
			</div>
		</>
	);
};

export default LocaleSwitcher;
