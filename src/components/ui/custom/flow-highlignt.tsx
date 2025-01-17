"use client";

import React from "react";

import { motion, useMotionTemplate, useMotionValue } from "framer-motion";

import { cn } from "@/lib/utils";

export const FlowHighlight = ({
	children,
	className,
	containerClassName,
}: {
	children: React.ReactNode;
	className?: string;
	containerClassName?: string;
}) => {
	const mouseX = useMotionValue(0);
	const mouseY = useMotionValue(0);

	function handleMouseMove({
		currentTarget,
		clientX,
		clientY,
	}: React.MouseEvent<HTMLDivElement>) {
		if (!currentTarget) return;
		const { left, top } = currentTarget.getBoundingClientRect();
		mouseX.set(clientX - left);
		mouseY.set(clientY - top);
	}

	return (
		<div
			className={cn(
				"relative flex items-center justify-center  group overflow-hidden",
				containerClassName
			)}
			onMouseMove={handleMouseMove}
		>
			{/* Noise texture */}
			<div className="absolute inset-0 opacity-10 dark:opacity-5 mix-blend-soft-light" />
			{/* Base gradient */}
			<div className="absolute inset-0 bg-primary opacity-80 dark:from-red-600 dark:via-red-700 dark:to-red-800" />

			{/* Interactive gradient overlay */}
			<motion.div
				className="absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
				style={{
					background: "linear-gradient(to right, #ff7f7f, #ffffff)",
					WebkitMaskImage: useMotionTemplate`
            radial-gradient(
              300px circle at ${mouseX}px ${mouseY}px,
              black 0%,
              transparent 100%
            )
          `,
					maskImage: useMotionTemplate`
            radial-gradient(
              300px circle at ${mouseX}px ${mouseY}px,
              black 0%,
              transparent 100%
            )
          `,
				}}
			>
				<motion.div
					className="w-full h-full"
					animate={{
						scale: [1, 1.05, 1],
						opacity: [0.7, 0.9, 0.7],
					}}
					transition={{
						duration: 4,
						repeat: Infinity,
						ease: "easeInOut",
					}}
				/>
			</motion.div>

			{/* Floating particles effect */}
			<div className="absolute inset-0 overflow-hidden">
				{[...Array(30)].map((_, i) => (
					<motion.div
						key={i}
						className="absolute w-2 h-2 bg-white rounded-full shadow-lg"
						style={{
							left: `${Math.random() * 100}%`,
							top: `${Math.random() * 100}%`,
						}}
						animate={{
							y: [0, -30, 0],
							opacity: [0, 1, 0],
							scale: [0, 1, 0],
						}}
						transition={{
							duration: Math.random() * 3 + 2,
							repeat: Infinity,
							delay: Math.random() * 2,
						}}
					/>
				))}
			</div>

			{/* Content */}
			<div className={cn("relative z-20 ", className)}>{children}</div>
		</div>
	);
};

export const FlowSpan = ({
	children,
	className,
}: {
	children: React.ReactNode;
	className?: string;
}) => {
	return (
		<motion.span
			initial={{ opacity: 0, y: 10 }}
			animate={{ opacity: 1, y: 0 }}
			transition={{
				duration: 0.8,
				ease: "easeOut",
			}}
			className={cn(
				"relative inline-block pb-1 px-2 rounded-lg bg-gradient-to-r from-red-200 to-white dark:from-red-400 dark:to-white shadow-lg",
				className
			)}
		>
			{children}
		</motion.span>
	);
};
