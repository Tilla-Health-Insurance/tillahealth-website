import { DM_Sans, Poppins } from "next/font/google";
import localFont from "next/font/local";

import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
import { Toaster } from "sonner";

import StoreProvider from "@/providers/Store-provider";
import QueryProviders from "@/providers/query-provider";
import { ThemeProvider } from "@/providers/theme-provider";

// Define the type for the metadata function's parameter
const myFont = localFont({
	src: "../../../public/fonts/NotoSerifEthiopic-VariableFont_wdth,wght.ttf",
});
const poppins = Poppins({
	weight: ["400", "500", "600", "700", "800", "900"],
	subsets: ["latin"],
});
const dmSans = DM_Sans({
	weight: ["400", "500", "600", "700", "800", "900"],
	subsets: ["latin"],
});
export default async function LocaleLayout({
	children,
	params: { locale },
}: {
	children: React.ReactNode;
	params: { locale: string };
}) {
	// Providing all messages to the client
	// side is the easiest way to get started
	const messages = await getMessages();

	return (
		<html lang={locale}>
			<head>
				<link rel="icon" href="/favicon.ico" type="image/x-icon" />
				<title>Tillahealth</title>
			</head>
			<body className={`${myFont.className}  ${dmSans.className}`}>
				<QueryProviders>
					<StoreProvider>
						<ThemeProvider
							attribute="class"
							defaultTheme="system"
							enableSystem
							disableTransitionOnChange
						>
							<NextIntlClientProvider messages={messages}>
								{children}
								<Toaster position="bottom-right" />
							</NextIntlClientProvider>
						</ThemeProvider>
					</StoreProvider>
				</QueryProviders>
			</body>
		</html>
	);
}
