import Link from "next/link";
import type { ReactNode } from "react";

import { Users } from "lucide-react";

import { Footer } from "@/components/shared/Navigations/Footer";
import Navbar from "@/components/shared/Navigations/Nav-Bar";
import TopNav from "@/components/shared/Navigations/TopNav";
import { GeneralShell } from "@/components/shared/Wrappers/GeneralShell";
import { Button } from "@/components/ui/button";

interface AuthLayoutProps {
	children: ReactNode;
}

export default function AuthLayout({ children }: AuthLayoutProps) {
	return (
		<GeneralShell>
			<div className="flex flex-col min-h-screen">
				<Navbar />
				<div className=" top-0 z-50">
					<TopNav />
				</div>
				{children}
				<div className="fixed bottom-6 right-6 z-50">
					<Link href="/contact-us">
						<Button
							className="rounded-full bg-white text-red-600 hover:bg-gray-100"
							size="lg"
						>
							Contact Us
							<Users className="ml-2 h-4 w-4" />
						</Button>
					</Link>
				</div>
				<Footer />
			</div>
		</GeneralShell>
	);
}
