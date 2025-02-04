"use client";

import { useEffect, useState } from "react";

export const MorphingShape = () => {
	const [isScrollingUp, setIsScrollingUp] = useState(false);
	const [lastScrollY, setLastScrollY] = useState(0);

	useEffect(() => {
		const handleScroll = () => {
			const currentScrollY = window.scrollY;
			setIsScrollingUp(currentScrollY < lastScrollY);
			setLastScrollY(currentScrollY);
		};

		window.addEventListener("scroll", handleScroll, { passive: true });
		return () => window.removeEventListener("scroll", handleScroll);
	}, [lastScrollY]);

	return (
		<div className="w-full h-[100vh] absolute bottom-0 left-0 overflow-hidden -z-20">
			<div
				className={`absolute inset-0 bg-gradient-to-r from-red-500 via-red-600 to-red-500 transition-all duration-1000 
          ${isScrollingUp ? "animate-morph-to-concave" : "animate-morph-to-convex"}
        `}
			/>
		</div>
	);
};
