import { motion } from "framer-motion";

interface TitleUnderLineProps {
	color?: string;
	width?: string;
	className?: string;
}

export const TitleUnderLine = ({
	color = "bg-primary",
	width = "40%",
	className = "",
}: TitleUnderLineProps) => {
	return (
		<div className={`relative h-1 mt-4 ${className}`}>
			<motion.div
				className={`absolute left-1/2 h-full ${color} rounded-full`}
				initial={{ width: 0, x: "-50%" }}
				animate={{ width: width, x: "-50%" }}
				transition={{
					duration: 1,
					delay: 0.5,
					ease: "easeOut",
				}}
			/>
			<motion.div
				className={`absolute left-1/2 h-full ${color}/30 rounded-full`}
				initial={{ width: 0, x: "-50%" }}
				animate={{ width: "60%", x: "-50%" }}
				transition={{
					duration: 1.2,
					delay: 0.3,
					ease: "easeOut",
				}}
			/>
		</div>
	);
};
